'use strict';

var mongoose = require('mongoose'),
    crypto = require('crypto'),
    Schema = mongoose.Schema;

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
    if (this.password) {
        this.salt = new Buffer(crypto.randomBytes(16).toString('base64'), 'base64');
        this.password = this.hashPassword(this.password);
    }

    next();
});

UserSchema.methods.hashPassword = function (password, callback) {
    crypto.pbkdf2(password, this.salt, 10000, 64, function (err, key) {
        if (err) {
            throw err;
        }

        return key.toString('base64');
    });
};

mongoose.model('User', UserSchema);