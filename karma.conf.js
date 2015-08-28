'use strict';

module.exports = function (config) {
    config.set({
        frameworks: [
            'mocha',
            'chai',
            'referee'
        ],

        files: [
            'app/assets/js/bower/angular/angular.js',
            'app/assets/js/bower/**/*.js',

            'app/assets/test/helpers/helpers.js',
            'app/assets/test/helpers/**/*.js',

            'app/assets/js/halfsies.js',
            'app/assets/js/app.js',
            'app/assets/js/utils/**/*.js',
            'app/assets/js/controllers/**/*.js',
            'app/assets/test/**/*.js'
        ],

        browsers: ['PhantomJS'],

        client: {
            captureConsole: true
        }
    });
};