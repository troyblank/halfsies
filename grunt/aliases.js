module.exports = function (grunt, options) {
    'use strict';
    return {
        'test': [
            'jslint',
            'mochaTest:test',
            'karma:test'
        ]
    };
};