'use strict';

module.exports = function (grunt, options) {
    return {
        'deploy': [
            'bower',
            'ngtemplates',
            'uglify'
        ],

        'test': [
            'jslint',
            'mochaTest:test',
            'karma:test'
        ]
    };
};