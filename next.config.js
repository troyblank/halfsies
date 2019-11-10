const withSass = require('@zeit/next-sass')

module.exports = withSass({
    exportPathMap: () => ({
        '/': { page: '/' },
        '/create': { page: '/create' },
        '/signin': { page: '/signIn' }
    })
});
