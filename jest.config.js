export default {
    testEnvironment: 'jsdom',
    moduleNameMapper: {
      '\\.(css|less)$': 'identity-obj-proxy',
    },
    setupFilesAfterEnv: ['./tests/setupTests.js'],
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
  };
  