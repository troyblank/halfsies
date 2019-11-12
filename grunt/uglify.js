module.exports = {
    options: {
        compress: true,
        mangle: true,
        sourceMap: true
    },
    deploy: {
        files: {
            'app/public/js/main.js': [
                'app/assets/js/bower/jquery/jquery.js',
                'app/assets/js/bower/angular/angular.js',
                'app/assets/js/bower/angular-route/angular-route.js',
                'app/assets/js/halfsies.js',
                'app/assets/js/app.js',
                'app/assets/js/views.js',
                'app/assets/js/utils/eventDispatcher.js',
                'app/assets/js/utils/url.js',
                'app/assets/js/controllers/overview.js',
                'app/assets/js/controllers/balance.js',
                'app/assets/js/controllers/logList.js',
                'app/assets/js/controllers/logCreate.js',
                'app/assets/js/controllers/submitButtons.js'
            ]
        }
    }
};