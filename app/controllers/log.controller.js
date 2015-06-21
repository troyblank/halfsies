var Log = require('mongoose').model('Log');

exports.create = function (req, res, next) {
    'use strict';

    if (!req.body) {
        return res.sendStatus(400);
    }

    var log = new Log(req.body);
    log.save(function (err) {
        if (err) {
            return next(err);
        }

        res.json(log);
    });
};