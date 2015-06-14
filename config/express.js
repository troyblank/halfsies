var compress = require('compression');
var express = require('express');
var handlebars = require('express-handlebars');
var morgan = require('morgan');

module.exports = function () {
    'use strict';
    var app = express();

    if (process.env.NODE_ENV === 'production') {
        app.use(compress());
    } else {
        app.use(morgan('dev'));
    }

    app.engine('hbs', handlebars({layoutsDir: 'app/views/layouts/', extname: ".hbs"}));
    app.set('views', __dirname + '/../app/views');
    app.set('view engine', 'hbs');

    app.use(express.static(__dirname + '/../app/static'));


    require('../app/routes/index.routes')(app);
    require('../app/routes/logs.routes')(app);
    return app;
};