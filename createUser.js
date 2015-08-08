'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var mongoose = require('./config/mongoose'),
    db = mongoose(),
    User = require('mongoose').model('User'),
    users = require('./app/controllers/user.controller'),
    balance = require('./app/controllers/balance.controller'),
    colors = require('colors');

users.create(process.argv[2], process.argv[3], function (state) {
    if (state.status === 'error') {
        console.log(colors.red(state.status + ': ' + state.message));
        setTimeout(function () {
            process.exit(1);
        }, 500);
    } else {
        console.log(colors.green(state.status + ': ' + state.message));

        //when both users are stored created a balance.
        User.find({}).exec(function (err, users) {
            if (users.length === 2) {
                balance.create(users[0].username, users[1].username);
                console.log(colors.green('created a balance!'));
            }
        });

        setTimeout(function () {
            process.exit();
        }, 1000);
    }
});