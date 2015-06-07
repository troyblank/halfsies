module.exports = function (config) {
    'use strict';
    config.set({
        frameworks: [
            'mocha',
            'chai',
            'referee'
        ],

        files: [
            'app/assets/test/self.spec.js'
        ],

        browsers: ['PhantomJS'],

        client: {
            captureConsole: true
        }
    });
};