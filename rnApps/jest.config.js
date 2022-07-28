module.exports = {
  preset: 'react-native',
  globals: {
    __DEV__: true,
  },
  testEnvironment: 'node',
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|react-(native|universal|navigation)-(.*)|@react-native-community/(.*)|@react-navigation/(.*)|bs-platform|(@[a-zA-Z]+/)?(bs|reason|rescript)-(.*)+)',
  ],
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
};
