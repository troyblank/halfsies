'use strict';

var logs = require('../../app/controllers/log.controller');

module.exports = function (app) {

    app.route('/logs')
        .post(logs.create)
        .get(logs.list);
};