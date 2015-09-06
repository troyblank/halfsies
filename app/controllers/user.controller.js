'use strict';

var User = require('mongoose').model('User');

exports.getErrorMessage = function (err) {
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
    } else if (err.errors) {
        for (errName in err.errors) {
            if (err.errors.hasOwnProperty(errName)) {
                if (err.errors[errName].message) {
                    message = err.errors[errName].message;
                }
            }
        }
    } else {
        message = err.message;
    }

    return message;
};

exports.create = function (username, password, callback) {

    var user = new User({
        username: username,
        password: password,
        provider: 'local'
    });

    user.save(function (err) {
        if (err) {
            var message = exports.getErrorMessage(err);
            callback({status: 'error', message: message});
        } else {
            callback({status: 'success', message: 'user saved'});
        }
    });
};

exports.renderSignin = function (req, res) {
    if (!req.user) {
        res.set('content-language', 'en').render('signin', {
            layout: 'main',
            title: 'Signin - Halfsies',
            messages: req.flash('error') || req.flash('info')
        });
    } else {
        return res.redirect('/');
    }
};

exports.requiresLogin = function (req, res, next) {
    if (!req.isAuthenticated()) {
        return res.status(401).send({
            message: 'User is not logged in'
        });
    }

    next();
};