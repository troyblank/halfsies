var assert = require('assert');
var sinon = require('sinon');
require('../../helpers/assert.helper')(assert);
var pathingHelper = require('../../helpers/pathing.helper');

var express = require('../../../config/express');
var http = require('http');

var app;
var server;
var port = 8001;


describe('index routes', function () {
    'use strict';

    beforeEach(function () {
        app = express();
        server = app.listen(port);
    });

    afterEach(function () {
        server.close();
    });

    it('should get render data on route /', function (done) {
        //there is no great way to spay on the route middleware, thus we test the contents.
        var header = pathingHelper.getGetOptions('/', port);
        http.get(header, function (res) {
            assert.equal(res.statusCode, 200);
            done();
        });
    });
});