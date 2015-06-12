process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('./config/express');

var app = express();
var server = app.listen(8000);
module.exports = app;

console.log('Server running at http://localhost:8000/');