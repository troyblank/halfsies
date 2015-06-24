'use strict';

exports.render = function (req, res) {

    res.render('index', {
        layout: 'main',
        title: 'Halfsies'
    });
};