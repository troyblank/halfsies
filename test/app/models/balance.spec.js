'use strict';

require('../../../app/models/balance.model');

var assert = require('assert'),
    config = require('../../helpers/mongoose.helper'),
    mongoose = require('mongoose');

describe('balance model', function () {

    beforeEach(function (done) {
        if (mongoose.connection.db) {
            return done();
        }

        mongoose.connect(config.db, done);
    });

    afterEach(function () {
        mongoose.connection.db.dropDatabase();
    });

    it('should be able to save a balance', function (done) {
        var data = {'userPrimary': 'troy', 'userSecondary': 'chelsey'},
            Balance = mongoose.model('Balance'),
            balance = new Balance(data);

        balance.save(function (err) {
            assert.equal(err, null);
            assert.equal(balance.userPrimary, data.userPrimary);
            assert.equal(balance.userSecondary, data.userSecondary);
            done();
        });
    });

    it('should reject an invalid balance', function (done) {
        var data = {userPrimary: 'troy'},
            Balance = mongoose.model('Balance'),
            balance = new Balance(data);

        balance.save(function (err) {
            assert.notEqual(err, null);
            assert.equal(err.name, 'ValidationError');
            done();
        });
    });

    it('should be able to save only one balance', function (done) {
        var data = {'userPrimary': 'troy', 'userSecondary': 'chelsey'},
            Balance = mongoose.model('Balance'),
            balance = new Balance(data),
            balanceTwo = new Balance(data);

        balance.save(function () {
            balanceTwo.save(function (err) {
                assert.equal(err.message, 'You can only have one balance in Halfsies.');
                done();
            });
        });
    });
});