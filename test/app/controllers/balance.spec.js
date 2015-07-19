require('../../../app/models/balance.model');

var assert = require('assert'),
    config = require('../../helpers/mongoose.helper'),
    balance = require('../../../app/controllers/balance.controller'),
    mongoose = require('mongoose');

describe('balance controller', function () {
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

    it('should be able to save a balance', function () {
        var status = balance.create('troy', 'chelsey');
        assert.notEqual(status, true);
    });
});