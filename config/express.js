var compress = require('compression');
var express = require('express');
var morgan = require('morgan');

module.exports = function() {
    var app = express();

    if(process.env.NODE_ENV === 'production'){
        app.use(compress());
    } else {
        app.use(morgan('dev'));
    }

    require('../app/routes/index.routes.js')(app);
    return app;
};