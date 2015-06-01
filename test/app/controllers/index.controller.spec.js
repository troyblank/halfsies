var assert = require('assert');
var sinon = require('sinon');
require('../../helpers/assert.helper.js')(assert);
var pathingHelper = require('../../helpers/pathing.helper.js');

var express = require('../../../config/express');
var http = require('http');

var app;
var server;
var port = 8001;


describe('index routes', function() {
    'use strict';

    before(function() {
        app = express();
        server = app.listen(port);
    });

    after(function() {
        server.close();
    });

    it('should get render data on route /', function(done) {
        //there is no great way to spay on the route middleware, thus we test the contents.
        var header = pathingHelper.getGetOptions('/', port);
        http.get(header, function(res) {
            res.on('data', function(chunk) {
                assert.contains(chunk, 'App');
                done();
            });
        });
    });
});