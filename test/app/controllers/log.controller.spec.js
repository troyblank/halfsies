require('../../../app/models/log.model');

var assert = require('assert'),
    config = require('../../helpers/mongoose.helper'),
    logs = require('../../../app/controllers/log.controller'),
    mongoose = require('mongoose');

describe('log controller', function () {
    'use strict';

    before(function (done) {
        if (mongoose.connection.db) {
            return done();
        }

        mongoose.connect(config.db, done);
    });

    after(function () {
        mongoose.connection.db.dropDatabase();
    });

    it('should be able to save a log', function () {
        var req = {},
            res = {
                json: function () {
                    return true;
                }
            };

        req.body = {amount: 100, user: 'troy', description: 'just a test log.'};

        logs.create(req, res, null);
        assert.notEqual(logs, undefined);
    });

    it('should be able to get a logs list', function (done) {
        var req = {},
            res = {
                send: function () { return this; },
                json: function (data) {
                    assert.notEqual(data, undefined);
                    done();
                }
            };

        logs.list(req, res);
    });
});