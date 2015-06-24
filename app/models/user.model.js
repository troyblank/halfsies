'use strict';

var mongoose = require('mongoose'),
    crypto = require('crypto'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: String,
    password: {
        type: String,
        validate: [
            function (password) {
                return password && password.length > 6;
            }, 'Password should be longer'
        ]
    }
});

mongoose.model('User', UserSchema);