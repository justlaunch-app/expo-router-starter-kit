module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "@babel/plugin-proposal-export-namespace-from",
      "nativewind/babel",
      "react-native-reanimated/plugin",
      'expo-router/babel',
      [
        'module-resolver',
        {
          root: ['./'],
          extensions: ['.ts', '.tsx', '.json'],
          alias: {
            _app: './src/app',
            _assets: './src/assets',
            _components: './src/components',
            _constants: './src/constants',
            _context: './src/context',
            _locales: './src/locales',
            _utils: './src/utils',
            _layouts: './src/layouts',
            _config: './src/config',
            _hooks: './src/hooks',
            _containers: 'src/containers',
          },
        },
      ],
    ],
  };
};
