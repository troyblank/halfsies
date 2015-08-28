module.exports = {
    server: {
        src: ['app/**/*.js', 'server.js', 'createUser.js', 'config/**/*.js'],
        exclude: ['app/assets/**/*.js', 'app/public/**/*.js'],
        directives: {
            node: true,
            unparam: true,
            nomen: true,
            regexp: true
        }
    },

    server_test: {
        src: ['test/**/*.js'],
        directives: {
            node: true,
            predef: ['describe', 'before', 'after', 'beforeEach', 'afterEach', 'it']
        }
    },

    client : {
        src: ['app/assets/js/**/*.js'],
        exclude: ['app/assets/js/bower/**/*.js', 'app/assets/js/views.js'],
        directives: {
            browser: true,
            predef: ['Halfsies', 'halfsies', 'angular']
        }
    },

    client_test : {
        src: ['app/assets/test/**/*.js'],
        exclude: ['app/assets/test/helpers/**/*.js'],
        directives: {
            browser: true,
            predef: ['describe',
                     'before',
                     'after',
                     'beforeEach',
                     'afterEach',
                     'it',
                     'assert',
                     'expect',
                     'sinon',
                     'module',
                     'inject',
                     'halfsies',
                     'angular',
                     'helpers']
        }
    },

    dev_config : {
        src: ['karma.conf.js', 'Gruntfile.js', 'grunt/**/*.js'],
        directives: {
            node: true,
            unparam: true
        }
    }
};