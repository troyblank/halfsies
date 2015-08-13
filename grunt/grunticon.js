module.exports = {
    icon: {
        files: [{
            expand: true,
            cwd: 'app/assets/svg',
            src: ['*.svg'],
            dest: "app/public/css"
        }]
    }
};