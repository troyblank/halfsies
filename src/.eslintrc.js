module.exports = {
	extends: [
		'@troyblank/eslint-config-troyblank/configs/jest.js',
		'@troyblank/eslint-config-troyblank/configs/react.js',
		'@troyblank/eslint-config-troyblank/configs/typescript.js',
	],
	rules: {
		'import/no-extraneous-dependencies': 'off',
	},
	globals: {
		'it': true,
	},
}
