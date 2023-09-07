
require('dotenv').config();

module.exports = {
  expo: {
    name: 'expo-starter-kit',
    experiments: {
      typedRoutes: true,
    },
    slug: 'expo-starter-kit',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './src/assets/images/icon.png',
    scheme: 'acme',
    userInterfaceStyle: 'automatic',
    splash: {
      image: './src/assets/images/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    mode: 'development',
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
      bundleIdentifier: 'com.zoltanfodor.expo-starter-kit',
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './src/assets/images/adaptive-icon.png',
        backgroundColor: '#ffffff',
      },
    },
    web: {
      bundler: 'metro',
      favicon: './src/assets/images/favicon.png',
    },
    owner: 'ritmillio',
    plugins: [
      [
        'onesignal-expo-plugin',
        {
          mode: 'development',
        },
      ],
    ],
  },
};
