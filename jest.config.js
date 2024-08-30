const path = require('path');

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy',
    '\\.svg$': '<rootDir>/__mocks__/svgMock.js',
    '\\.json$': path.resolve(__dirname, '__mocks__/jsonMock.js'),
    '\\.lottie$': '<rootDir>/__mocks__/lottieMock.js',
  },
  testEnvironment: "jsdom",
  testEnvironmentOptions: {
    resources: "usable",
  },
};
