'use strict';

module.exports = function (grunt, options) {
    return {
        'build': [
            'bower',
            'ngtemplates',
            'uglify',
            'sass',
            'icon'
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