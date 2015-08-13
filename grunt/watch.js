module.exports = {
    js: {
        files: ['app/assets/js/**/*.js'],
        tasks: ['uglify', 'notify:uglify']
    },
    sass: {
        files: ['app/assets/sass/**/*.scss'],
        tasks: ['sass', 'notify:sass']
    },
    ngtemplates : {
        files: ['app/views/partials/**/*.html'],
        tasks: ['ngtemplates']
    }
};