module.exports = {
  setupFiles: [
    '<rootDir>/src/test/setupTests.js',
  ],
  moduleNameMapper: {
    '^.+\\.(css|less)$': '<rootDir>/src/test/__mocks__/styleMock.js',
  }
};
