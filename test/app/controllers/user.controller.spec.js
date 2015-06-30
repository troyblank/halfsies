require('../../../app/models/user.model');

var assert = require('assert'),
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

    // set aside to by-pass behavior with mongoose-auto-increment
    // it('should be able to create a user', function (done) {
    //     users.create('john', 'somepassword', function (state) {
    //         assert.notEqual(users, undefined);
    //         assert.equal(state.status, 'success');
    //         done();
    //     });

    // });

    it('should be able to get an error message', function () {
        assert.equal(users.getErrorMessage({code: 11000}), 'Username already exists');
        assert.equal(users.getErrorMessage({code: 11001}), 'Username already exists');
        assert.equal(users.getErrorMessage({code: 1}), 'Something went wrong');
        assert.equal(users.getErrorMessage({errors: {foo: {message: 'bar'}}}), 'bar');
    });
});