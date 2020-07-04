module.exports = {
	setupFiles: ['<rootDir>/src/test/jest/setupTests.js'],
	moduleNameMapper: {
		'^.+\\.(css|less)$': '<rootDir>/src/test/__mocks__/styleMock.js',
	},
};
