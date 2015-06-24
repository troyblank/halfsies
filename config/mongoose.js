'use strict';

var config = require('./config'),
    mongoose = require('mongoose');

module.exports = function () {
    var db = mongoose.connect(config.db);

    require('../app/models/log.model');
    require('../app/models/user.model');

    return db;
};