'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var mongoose = require('./config/mongoose'),
    db = mongoose(),
    users = require('./app/controllers/user.controller'),
    colors = require('colors');

users.create(process.argv[2], process.argv[3], function (state) {
    if (state.status === 'error') {
        console.log(colors.red(state.status + ': ' + state.message));
        setTimeout(function () {
            process.exit(1);
        }, 500);
    } else {
        console.log(colors.green(state.status + ': ' + state.message));
        setTimeout(function () {
            process.exit();
        }, 500);
    }
});