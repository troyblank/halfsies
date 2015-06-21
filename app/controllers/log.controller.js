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

exports.list = function (req, res, next) {
    'use strict';

    Log.find({}).sort({created: 'desc'}).limit(10).exec(function (err, logs) {
        if (err) {
            return next(err);
        }

        res.json(logs);
    });
};