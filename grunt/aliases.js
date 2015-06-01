module.exports = function(grunt, options) {
    return {
        'test': [
            'mochaTest:test',
            'karma:test'
        ]
    };
};