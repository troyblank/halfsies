exports.render = function (req, res) {
    'use strict';

    res.render('index', {
        layout: 'main',
        title: 'Halfsies'
    });
};