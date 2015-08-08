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

exports.get = function (req, res, next) {

    Balance.find({}).exec(function (err, balance) {
        if (err) {
            return res.status(400).send({
                'message': mongooseError.getErrorMessage(err)
            });
        }

        res.json(balance);
    });
};