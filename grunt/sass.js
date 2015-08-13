module.exports = {
    options: {
        outputStyle: 'compressed',
        sourceMap: true
    },

    deploy: {
        expand: true,
        cwd: 'app/assets/sass',
        src: '**/*.scss',
        dest: 'app/public/css',
        ext: '.css',
        extDot: 'last'
    }
};