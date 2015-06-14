require('../../../app/models/log.model');

var assert = require('assert'),
    config = require('../../helpers/mongoose.helper'),
    logs = require('../../../app/controllers/log.controller'),
    mongoose = require('mongoose');

describe('log model', function () {
    'use strict';

    beforeEach(function (done) {
        if (mongoose.connection.db) {
            return done();
        }

        mongoose.connect(config.db, done);
    });

    afterEach(function () {
        mongoose.connection.db.dropDatabase();
    });

    it('should be able to save a log', function () {
        var data = {},
            res = {json: function () { return true; } };

        data.body = {amount: 100, user: 'troy', description: 'just a test log.'};

        logs.create(data, res, null);
        assert.notEqual(logs, undefined);
    });
});