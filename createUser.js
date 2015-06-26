'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var mongoose = require('./config/mongoose'),
    db = mongoose(),
    User = require('mongoose').model('User'),
    colors = require('colors'),
    user = new User({
        username: process.argv[2],
        password: process.argv[3],
        provider: 'local'
    });

var getErrorMessage = function (err) {
    var message = '',
        errName;

    if (err.code) {
        switch (err.code) {
        case 11000:
        case 11001:
            message = 'Username already exists';
            break;
        default:
            message = 'Something went wrong';
        }
    } else {
        for (errName in err.errors) {
            if (err.errors.hasOwnProperty(errName)) {
                if (err.errors[errName].message) {
                    message = err.errors[errName].message;
                }
            }
        }
    }

    return message;
};

user.save(function (err) {
    if (err) {
        var message = getErrorMessage(err);
        console.log(colors.red('error: ' + message));
        setTimeout(function () {
            process.exit(1);
        }, 500);
    } else {
        console.log(colors.green('user saved'));
        setTimeout(function () {
            process.exit();
        }, 500);
    }
});