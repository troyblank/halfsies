'use strict';

module.exports = function (grunt, options) {
    return {
        'deploy': [
            'bower',
            'ngtemplates',
            'uglify',
            'sass'
        ],

        'test': [
            'jslint',
            'mochaTest:test',
            'karma:test'
        ],

        'icon': [
            'grunticon',
            'clean:icon'
        ]
    };
};