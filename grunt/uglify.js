module.exports = {
    options: {
        compress: true,
        mangle: true,
        sourceMap: true
    },
    deploy: {
        files: {
            'app/public/js/main.js': ['app/assets/js/bower/angular/angular.js']
        }
    }
}