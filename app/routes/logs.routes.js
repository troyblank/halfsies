var logs = require('../../app/controllers/log.controller');

module.exports = function (app) {
    'use strict';

    app.route('/logs').post(logs.create);
};