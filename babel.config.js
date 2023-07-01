process.env.EXPO_ROUTER_APP_ROOT = "../../src/app";

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "@babel/plugin-proposal-export-namespace-from",
      "nativewind/babel",
      "react-native-reanimated/plugin",
      require.resolve("expo-router/babel"),
      [
        'module-resolver',
        {
          root: ['./'],
          extensions: ['.js', '.ts', '.tsx', '.json'],
          alias: {
            _app: './src/app',
            _assets: './src/assets',
            _components: './src/components',
            _constants: './src/constants',
            _context: './src/context',
            _locales: './src/locales',
            _utils: './src/utils',
            _layouts: './src/layouts',
          },
        },
      ],
    ],
  };
};
