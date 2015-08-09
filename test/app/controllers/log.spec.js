require('../../../app/models/log.model');

var assert = require('assert'),
    config = require('../../helpers/mongoose.helper'),
    logs = require('../../../app/controllers/log.controller'),
    balance = require('../../../app/controllers/balance.controller'),
    mongoose = require('mongoose');

describe('log controller', function () {
    'use strict';

    before(function (done) {
        balance.create('troy', 'ashley');

        if (mongoose.connection.db) {
            return done();
        }

        mongoose.connect(config.db, done);
    });

    after(function () {
        mongoose.connection.db.dropDatabase();
    });

    it('should be able to save a log', function (done) {
        var req = {
                'user': {
                    'username': 'troy'
                }
            },
            res = {
                json: function () {
                    assert.notEqual(logs, undefined);
                    done();
                }
            };

        req.body = {amount: 100, user: 'troy', description: 'just a test log.'};

        logs.create(req, res, null);
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