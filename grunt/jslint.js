module.exports = {
    server: {
        src: ['app/**/*.js', 'server.js', 'createUser.js', 'config/**/*.js'],
        exclude: ['app/assets/**/*.js'],
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

    client_test : {
        src: ['app/assets/test/**/*.js'],
        directives: {
            browser: true,
            predef: ['describe', 'beforeEach', 'afterEach', 'it', 'assert', 'expect', 'sinon']
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