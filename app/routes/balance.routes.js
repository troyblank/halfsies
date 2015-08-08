'use strict';

var balance = require('../../app/controllers/balance.controller'),
    users = require('../../app/controllers/user.controller');

module.exports = function (app) {

    app.route('/balance')
        .get(users.requiresLogin, balance.get);
};