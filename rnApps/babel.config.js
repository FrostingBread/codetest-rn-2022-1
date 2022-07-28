module.exports = api => {
  api.cache(true);
  const plugins = [
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: ['.js', '.ios.js', '.android.js', '.ts', '.tsx', '.json'],
        alias: {
          '~': './src',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ];
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins,
  };
};
