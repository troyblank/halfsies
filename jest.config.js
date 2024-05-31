/** @type {import('jest').Config} */
const config = {
	moduleNameMapper: { '^uuid$': 'uuid' },
	setupFilesAfterEnv: [ './jest.setup.js' ],
	testEnvironment: 'jest-environment-jsdom',
	transform: {
		'^.+\\.(t|j)sx?$': '@swc/jest',
	},
	verbose: true,
	collectCoverage: true,
	collectCoverageFrom: [ 'src/**/*.{ts,tsx}' ],
	coverageDirectory: './coverage/',
	coveragePathIgnorePatterns: [
		'.constants.ts',
		'index.ts',
		'node_modules',
		'src/testing',
		'src/pages',
		'utils/ds2',
	],
	coverageReporters: [ 'lcov', 'text-summary' ],
	coverageThreshold: {
		global: {
			statements: 100,
			branches: 100,
			functions: 100,
			lines: 100,
		},
	},
	clearMocks: true,
}

module.exports = config
