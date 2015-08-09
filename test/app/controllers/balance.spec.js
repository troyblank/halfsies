require('../../../app/models/balance.model');

var assert = require('assert'),
    config = require('../../helpers/mongoose.helper'),
    balance = require('../../../app/controllers/balance.controller'),
    mongoose = require('mongoose'),
    Balance = mongoose.model('Balance');

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

    it('should be able to get a balance', function (done) {
        var req = {},
            res = {
                send: function () { return this; },
                json: function (data) {
                    assert.notEqual(data, undefined);
                    done();
                }
            };

        balance.get(req, res);
    });

    it('should be able to get a new primary balance', function () {
        var newBlance = balance.getNewPrimaryBalance('troy', 50, {'balancePrimary': 0, 'userPrimary': 'troy'});

        assert.equal(newBlance, 50);

        newBlance = balance.getNewPrimaryBalance('chelsey', 100, {'balancePrimary': 50, 'userPrimary': 'troy'});

        assert.equal(newBlance, -50);
    });

    it('should be able to update a balance with a primary user charge', function (done) {
        balance.update('troy', 50, function () {
            Balance.find({}).exec(function (err, balance) {
                if (err) {
                    assert.equal(err, false);
                    done();
                }

                assert.equal(balance[0].balancePrimary, 50);
                done();
            });
        });
    });

    it('should be able to update a balance with a secondary user charge', function (done) {
        balance.update('chelsey', 150, function () {
            Balance.find({}).exec(function (err, balance) {
                if (err) {
                    assert.equal(err, false);
                    done();
                }

                assert.equal(balance[0].balancePrimary, -100);
                done();
            });
        });
    });
});