module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: [
    'jest-dom/extend-expect',
    'react-testing-library/cleanup-after-each',
  ],
  snapshotSerializers: ['jest-emotion'],
  collectCoverageFrom: ['**/src/**/*.js'],
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
};
