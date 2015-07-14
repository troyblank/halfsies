'use strict';

var Log = require('mongoose').model('Log');

exports.create = function (req, res, next) {

    if (!req.body) {
        return res.sendStatus(400);
    }

    var log = new Log(req.body);
    log.save(function (err) {
        if (err) {
            return res.status(400).send({
                'message': exports.getErrorMessage(err)
            });
        }

        res.json(log);
    });
};

exports.list = function (req, res, next) {

    Log.find({}).sort({created: 'desc'}).limit(10).exec(function (err, logs) {
        if (err) {
            return res.status(400).send({
                'message': exports.getErrorMessage(err)
            });
        }

        res.json(logs);
    });
};

exports.getErrorMessage = function (err) {
    var errName;

    if (err.errors) {
        for (errName in err.errors) {
            if (err.errors.hasOwnProperty(errName) && err.errors[errName].message) {
                return err.errors[errName].message;
            }
        }
    } else {
        return 'Unknown server error';
    }
};