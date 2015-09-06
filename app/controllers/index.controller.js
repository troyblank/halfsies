'use strict';

exports.render = function (req, res) {
    if (req.user) {
        res.set('content-language', 'en').render('index', {
            layout: 'main',
            title: 'Halfsies',
            userName: req.user.username
        });
    } else {
        return res.redirect('/signin');
    }
};