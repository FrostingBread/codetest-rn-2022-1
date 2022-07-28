module.exports = {
  preset: 'react-native',
  globals: {
    __DEV__: true,
  },
  testEnvironment: 'node',
  transformIgnorePatterns: ['node_modules/(?!@react-native|react-native)'],
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
};
