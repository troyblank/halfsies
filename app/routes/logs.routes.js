'use strict';

var logs = require('../../app/controllers/log.controller'),
    users = require('../../app/controllers/user.controller');

module.exports = function (app) {

    app.route('/logs')
        .post(users.requiresLogin, logs.create)
        .get(users.requiresLogin, logs.list);
};