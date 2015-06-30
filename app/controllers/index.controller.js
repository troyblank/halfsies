'use strict';

exports.render = function (req, res) {
    if (req.user) {
        res.render('index', {
            layout: 'main',
            title: 'Halfsies'
        });
    } else {
        return res.redirect('/signin');
    }
};