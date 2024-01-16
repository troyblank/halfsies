// next/jest will be needed in a future version of next.js.
// const nextJest = require('next/jest');

// const createJestConfig = nextJest({
//     dir: './'
// });
const customJestConfig = {
	moduleDirectories: ['node_modules', '<rootDir>/'],
	testEnvironment: 'jest-environment-jsdom',
	moduleNameMapper: { '^uuid$': 'uuid' },
	setupFilesAfterEnv: [
		'<rootDir>/testSetup/url.js',
		'<rootDir>/config/jest.js',
	],
	collectCoverage: true,
	coverageReporters: ['lcov', 'text-summary'],
	coverageThreshold: {
		global: {
			statements: 100,
			branches: 100,
			functions: 100,
			lines: 100,
		},
	},
	coveragePathIgnorePatterns: [
		'index.ts',
		'<rootDir>/src/mocks',
		'<rootDir>/src/graphics',
	],
	// testMatch: [ '<rootDir>/src/someFile.test.tsx' ], //Left here intentionally to test single files easy
}

// module.exports = createJestConfig(customJestConfig);
module.exports = customJestConfig
