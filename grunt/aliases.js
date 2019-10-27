'use strict';

module.exports = function (grunt, options) {
    return {
        'build': [
            'bower',
            'ngtemplates',
            'uglify',
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