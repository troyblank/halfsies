module.exports = function(config) {
    config.set({
        frameworks: [
            'mocha',
            'chai',
            'referee'
        ],

        files: [
            'test/js/**/*.spec.js',
        ],

        browsers: ['PhantomJS'],

        client: {
            captureConsole: true
        }
    });
};