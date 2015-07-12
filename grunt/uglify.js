module.exports = {
    options: {
        compress: true,
        mangle: true,
        sourceMap: true
    },
    deploy: {
        files: {
            'app/public/js/main.js': [
                'app/assets/js/bower/angular/angular.js',
                'app/assets/js/bower/angular-route/angular-route.js',
                'app/assets/js/halfsies.js',
                'app/assets/js/app.js',
                'app/assets/js/views.js',
                'app/assets/js/controllers/overview.js'
            ]
        }
    }
};