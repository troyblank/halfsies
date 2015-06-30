'use strict';

var mongoose = require('mongoose'),
    crypto = require('crypto'),
    Schema = mongoose.Schema,
    autoIncrement = require('mongoose-auto-increment');

var UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: 'Username is required',
        trim: true
    },
    password: {
        type: String,
        validate: [
            function (password) {
                return password && password.length > 6;
            }, 'Password should be longer'
        ]
    },
    order: {
        type: Number,
        unique: true
    },
    salt: {
        type: String
    },
    provider: {
        type: String,
        required: 'Provider is required'
    },
    providerId: String,
    providerData: {},
    created: {
        type: Date,
        default: Date.now
    }
});

UserSchema.pre('save', function (next) {

    var User = mongoose.model('User'),
        user = this;

    User.count({}, function (err, count) {
        if (count >= 2) {
            next(new Error('You can only have two users in Halfsies'));
        }

        //salt password
        user.salt = new Buffer(crypto.randomBytes(16).toString('base64'), 'base64');
        user.hashPassword(user.password, function (password) {
            user.password = password;
            next();
        });
    });
});

UserSchema.methods.authenticate = function (password, callback) {
    var user = this;

    user.hashPassword(password, function (password) {
        callback(user.password === password);
    });
};

UserSchema.methods.hashPassword = function (password, callback) {
    crypto.pbkdf2(password, this.salt, 10000, 64, function (err, key) {
        if (err) {
            throw err;
        }

        callback(key.toString('base64'));
    });
};

autoIncrement.initialize(mongoose.connection);
UserSchema.plugin(autoIncrement.plugin, {model: 'User', field: 'order'});

mongoose.model('User', UserSchema);