'use strict';

var Log = require('mongoose').model('Log'),
    mongooseError = require('../utils/mongooseError'),
    balance = require('../controllers/balance.controller');

exports.create = function (req, res, next) {

    if (!req.body) {
        return res.sendStatus(400);
    }

    req.body.user = req.user.username;

    var log = new Log(req.body);
    log.save(function (err) {
        if (err) {
            return res.status(400).send({
                'message': mongooseError.getErrorMessage(err)
            });
        }

        balance.update(req.body.user, req.body.amount, function (err) {
            if (err) {
                return res.status(400).send({
                    'message': err.message
                });
            }

            res.json(log);
        });
    });
};

exports.injectLogDirection = function (logs, currentUser) {
    // determines if log in logs is a negative value for the user.
    var i = logs.length - 1,
        log,
        logIsUsers;


    while (i >= 0) {
        log = logs[i];
        logIsUsers = currentUser === log.user;
        log.isNegative = false;

        if ((!logIsUsers && log.amount >= 0) || (logIsUsers && log.amount <= 0)) {
            log.isNegative = true;
        }

        i -= 1;
    }
};

exports.list = function (req, res, next) {
    // lean to append isNegative
    Log.find({}).lean().sort({created: 'desc'}).limit(10).exec(function (err, logs) {
        if (err) {
            return res.status(400).send({
                'message': mongooseError.getErrorMessage(err)
            });
        }

        exports.injectLogDirection(logs, req.user.username);

        res.json({
            'logs': logs
        });
    });
};
