'use strict';

var compress = require('compression');
var bodyParser = require('body-parser');
var express = require('express');
var handlebars = require('express-handlebars');
var morgan = require('morgan');
var passport = require('passport');

module.exports = function () {
    var app = express();

    if (process.env.NODE_ENV === 'production') {
        app.use(compress());
    } else {
        app.use(morgan('dev'));
    }

    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());

    app.engine('hbs', handlebars({layoutsDir: 'app/views/layouts/', extname: ".hbs"}));
    app.set('views', __dirname + '/../app/views');
    app.set('view engine', 'hbs');

    app.use(passport.initialize());
    app.use(passport.session());

    app.use(express.static(__dirname + '/../app/static'));

    require('../app/routes/index.routes')(app);
    require('../app/routes/logs.routes')(app);
    return app;
};