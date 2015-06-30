'use strict';

var compress = require('compression'),
    config = require('./config'),
    bodyParser = require('body-parser'),
    express = require('express'),
    flash = require('connect-flash'),
    handlebars = require('express-handlebars'),
    morgan = require('morgan'),
    passport = require('passport'),
    session = require('express-session');

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

    app.use(session({
        saveUninitialized: true,
        resave: true,
        secret: config.sessionSecret
    }));

    app.use(flash());
    app.use(passport.initialize());
    app.use(passport.session());

    app.use(express.static(__dirname + '/../app/static'));

    require('../app/routes/index.routes')(app);
    require('../app/routes/logs.routes')(app);
    require('../app/routes/user.routes')(app);
    return app;
};