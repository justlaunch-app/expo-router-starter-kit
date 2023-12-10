module.exports = {
  expo: {
    name: 'expo-starter-kit',
    experiments: {
      typedRoutes: true,
      tsconfigPaths: true,
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
      associatedDomains: ['applinks:expo.dev'], // Add your custom associated domain here for Deep Linking
    },
    infoPlist: {
      ITSAppUsesNonExemptEncryption: false,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './src/assets/images/adaptive-icon.png',
        backgroundColor: '#ffffff',
      },
      // Add your custom intent filters here for Deep Linking
      intentFilters: [
        {
          action: 'VIEW',
          autoVerify: true,
          data: [
            {
              scheme: 'https',
              host: '*.myapp.io',
              pathPrefix: '/records',
            },
          ],
          category: ['BROWSABLE', 'DEFAULT'],
        },
      ],
    },
    web: {
      bundler: 'metro',
      favicon: './src/assets/images/favicon.png',
    },
  },
};
