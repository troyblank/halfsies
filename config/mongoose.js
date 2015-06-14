var config = require('./config'),
    mongoose = require('mongoose');

module.exports = function () {
    'use strict';

    var db = mongoose.connect(config.db);

    require('../app/models/log.model');

    return db;
};