const ngrokUrl = 'ritmillio-router-sandbox.ngrok.io';

/** @type {import('expo/config').ExpoConfig} */
module.exports = {
  expo: {
    name: 'tooolongtotest',
    experiments: {
      typedRoutes: true,
      tsconfigPaths: true,
    },
    slug: 'expo-starter-kit',
    version: '1.3.5',
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
      bundleIdentifier: 'com.zoltanfodor.test-expo-router-now',
      associatedDomains: [
        `applinks:${ngrokUrl}`,
        `activitycontinuation:${ngrokUrl}`,
        `webcredentials:${ngrokUrl}`,
      ],
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
    plugins: [
      [
        'expo-router',
        {
          headOrigin: `https://${ngrokUrl}`,
        },
      ],
      [
        'expo-build-properties',
        {
          ios: {
            newArchEnabled: true,
          },
          android: {
            newArchEnabled: true,
          },
        },
      ],
    ],
    extra: {
      eas: {
        projectId: 'c5cddb1a-4054-45f3-8212-36a4c9482807',
      },
    },
  },
};
