require('../../../app/models/user.model');

var assert = require('assert'),
    sinon = require('sinon'),
    config = require('../../helpers/mongoose.helper'),
    users = require('../../../app/controllers/user.controller'),
    mongoose = require('mongoose'),
    User = null;

describe('user controller', function () {
    'use strict';

    before(function (done) {
        if (mongoose.connection.db) {
            User = mongoose.model('User');
            return done();
        }

        mongoose.connect(config.db, function () {
            User = mongoose.model('User');
            done();
        });
    });

    after(function (done) {
        mongoose.connection.db.dropDatabase(function () {
            done();
        });
    });

    it('should be able to create a user', function (done) {
        users.create('john', 'somepassword', function (state) {
            assert.notEqual(users, undefined);
            assert.equal(state.status, 'success');
            done();
        });
    });

    it('should be able to get an error message', function () {
        assert.equal(users.getErrorMessage({code: 11000}), 'Username already exists');
        assert.equal(users.getErrorMessage({code: 11001}), 'Username already exists');
        assert.equal(users.getErrorMessage({code: 1}), 'Something went wrong');
        assert.equal(users.getErrorMessage({errors: {foo: {message: 'bar'}}}), 'bar');
    });

    it('should be able to use require login middleware', function () {
        var req = {},
            res = {
                status: function () {
                    return {
                        send: function (message) {
                            return message;
                        }
                    };
                }
            },
            next = {
                next: function () {
                    return true;
                }
            },
            callback = sinon.spy(next, 'next');

        req.isAuthenticated = function () {
            return false;
        };

        assert.equal(users.requiresLogin(req, res, next.next).message, 'User is not logged in');

        req.isAuthenticated = function () {
            return true;
        };

        users.requiresLogin(req, res, next.next);
        assert.equal(callback.called, true);
    });
});