'use strict';

module.exports = function (grunt, options) {
    return {
        'deploy': [
            'bower'
        ],

        'test': [
            'jslint',
            'mochaTest:test',
            'karma:test'
        ]
    };
};