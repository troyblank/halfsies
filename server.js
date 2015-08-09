'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var mongoose = require('./config/mongoose'),
    express = require('./config/express'),
    passport = require('./config/passport'),
    config = require('./config/config');

var db = mongoose();
var app = express();
var passport = passport();

var server = app.listen(config.port);

module.exports = app;

console.log('Server running at http://localhost:' + config.port + '/');