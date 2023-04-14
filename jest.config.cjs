/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  verbose: true,
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|svg|webp)$": "<rootDir>/__mocks__/fileMock.js"
  },
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
    "^.+\\.css$": ["jest-transform-css", { 
      modules: true,
      generateScopedName: "[path]_[name]_[local]"
    }]
  },
  testEnvironmentOptions: {
    url: 'http://localhost/'}
};