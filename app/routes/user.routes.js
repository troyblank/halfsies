'use strict';

var users = require('../controllers/user.controller'),
    handlebars = require('express-handlebars'),
    passport = require('passport');

module.exports = function (app) {
    app.route('/signin')
        .get(users.renderSignin)
        .post(passport.authenticate('local', {
            successRedirect: '/',
            failureRedirect: '/signin',
            failureFlash: true
        }));
};