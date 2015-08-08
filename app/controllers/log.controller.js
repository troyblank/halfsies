'use strict';

var Log = require('mongoose').model('Log'),
    mongooseError = require('../utils/mongooseError');

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

        res.json(log);
    });
};

exports.list = function (req, res, next) {

    Log.find({}).sort({created: 'desc'}).limit(10).exec(function (err, logs) {
        if (err) {
            return res.status(400).send({
                'message': mongooseError.getErrorMessage(err)
            });
        }

        res.json(logs);
    });
};
