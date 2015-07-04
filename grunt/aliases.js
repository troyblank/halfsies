'use strict';

module.exports = function (grunt, options) {
    return {
        'deploy': [
            'bower',
            'uglify'
        ],

        'test': [
            'jslint',
            'mochaTest:test',
            'karma:test'
        ]
    };
};