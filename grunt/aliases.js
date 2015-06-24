'use strict';

module.exports = function (grunt, options) {
    return {
        'test': [
            'jslint',
            'mochaTest:test',
            'karma:test'
        ]
    };
};