'use strict';

var sinon = require('sinon'),
    assert = require('assert'),
    config = require('../../helpers/mongoose.helper'),
    mongoose = require('mongoose');

describe('user model', function () {

    before(function (done) {
        if (mongoose.connection.db) {
            return done();
        }

        mongoose.connect(config.db, done);
    });

    after(function () {
        mongoose.connection.db.dropDatabase();
    });

    it('should be able to save a user', function (done) {
        //order given to by-pass strange behavior with mongoose-auto-increment
        var data = {username: 'troy', password: 'password', provider: 'local', order: 0},
            User = mongoose.model('User'),
            user = new User(data);

        user.save(function (err) {
            assert.equal(err, null);
            assert.equal(user.amount, data.amount);
            assert.equal(user.name, data.name);
            done();
        });
    });

    it('should reject an invalid user password', function (done) {
        var data = {username: 'troy', password: 'short', provider: 'local'},
            User = mongoose.model('User'),
            user = new User(data);

        user.save(function (err) {
            assert.notEqual(err, null);
            assert.equal(err.name, 'ValidationError');
            assert.equal(err.errors.password.message, 'Password should be longer');
            done();
        });
    });
});