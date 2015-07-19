module.exports = {
    js: {
        files: ['app/assets/js/**/*.js'],
        tasks: ['uglify', 'notify:uglify']
    },
    ngtemplates : {
        files: ['app/views/partials/**/*.html'],
        tasks: ['ngtemplates']
    }
};