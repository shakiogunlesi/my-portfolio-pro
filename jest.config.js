module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.jsx?$': 'babel-jest', // If you are using Babel
  },
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy', // Optional, for mocking styles
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/src/__mocks__/fileMock.js', // Mock static files
    '^react-awesome-reveal$': '<rootDir>/src/__mocks__/react-awesome-reveal.tsx',
  },
  transformIgnorePatterns: ['/node_modules/'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts', '@testing-library/jest-dom'],
  moduleDirectories: ['node_modules', 'src'],
};

