require('../../../app/models/log.model');

var assert = require('assert'),
    config = require('../../helpers/mongoose.helper'),
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

    it('should be able to save a log', function (done) {
        var data = {amount: 100, user: 'troy', description: 'just a test log.'},
            Log = mongoose.model('Log'),
            log = new Log(data);

        log.save(function () {
            assert.equal(log.amount, data.amount);
            assert.equal(log.user, data.user);
            assert.equal(log.description, data.description);
            done();
        });
    });
});