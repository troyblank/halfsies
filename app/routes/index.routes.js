module.exports = function (app) {
    'use strict';

    app.index = require('../controllers/index.controller');
    app.get('/', app.index.render);
};