process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('./config/express'),
    mongoose = require('./config/mongoose');

var app = express();
var db = mongoose();
var server = app.listen(8000);

module.exports = app;

console.log('Server running at http://localhost:8000/');