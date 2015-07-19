'use strict';

var Balance = require('mongoose').model('Balance'),
    mongooseError = require('../utils/mongooseError');

exports.create = function (userPrimary, userSecondary) {

    var balance = new Balance({
        'userPrimary': userPrimary,
        'userSecondary': userSecondary
    });

    balance.save(function (err) {
        if (err) {
            return mongooseError.getErrorMessage(err);
        }

        return true;
    });
};