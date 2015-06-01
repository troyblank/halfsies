var assert = require('assert');
var pathingHelper = require('../helpers/pathing.helper.js');

var express = require('../../config/express');
var http = require('http');

var app;
var server;
var port = 8001;

describe('app', function() {
    'use strict';

    before(function() {
        app = express();
        server = app.listen(port);
        module.exports = app;
    });

    after(function() {
        server.close();
    });

    it('should exist', function() {
        assert.notStrictEqual(app, undefined);
    });

    it('should be listening at localhost:8001', function(done) {
        var header = pathingHelper.getGetOptions('/', port);
        http.get(header, function(res) {
            assert.equal(res.statusCode, 200);
            done();
        });
    });

});