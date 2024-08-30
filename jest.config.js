
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
    '\\.json$': '<rootDir>/__mocks__/jsonMock.js', // Make sure this path is correct
    '\\.lottie$': '<rootDir>/__mocks__/lottieMock.js',
  },
};
