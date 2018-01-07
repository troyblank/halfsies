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

exports.getNewPrimaryBalance = function (username, charge, balance) {
    if (username === balance.userPrimary) {
        return balance.balancePrimary + Number(charge);
    }

    return balance.balancePrimary - Number(charge);
};

exports.update = function (username, charge, callback) {
    var newBlance;

    Balance.find({}).exec(function (err, balance) {
        if (err) {
            callback({
                'message': mongooseError.getErrorMessage(err)
            });
        }

        if (balance && 1 <= balance.length) {
            newBlance = exports.getNewPrimaryBalance(username, charge, balance[0]);

            Balance.findByIdAndUpdate(balance[0].id, {'balancePrimary': newBlance}, function () {
                if (err) {
                    callback({
                        'message': mongooseError.getErrorMessage(err)
                    });
                }

                callback(null);
            });
        } else {
            callback({'message': 'balance does not exist'});
        }
    });
};