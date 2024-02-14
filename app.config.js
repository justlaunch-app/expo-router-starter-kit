module.exports = {
  expo: {
    name: 'justlaunch.app - expo-router-starter-kit',
    experiments: {
      typedRoutes: true,
      tsconfigPaths: true,
    },
    slug: 'expo-router-starter-kit',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './public/favicon-32x32.png',
    scheme: 'acme',
    userInterfaceStyle: 'automatic',
    splash: {
      image: './public/justlaunch.png',
      resizeMode: 'contain',
      backgroundColor: '#000000',
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    mode: 'production',
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
      bundleIdentifier: 'com.your.bundle.identifier'
    },
    infoPlist: {
      ITSAppUsesNonExemptEncryption: false,
    },
    android: {
      package: 'com.your.bundle.identifier',
      adaptiveIcon: {
        foregroundImage: './public/android-chrome-192x192.png',
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
      favicon: './public/favicon-32x32.png',
    },
    plugins: [
      [
        'expo-router',
      ]
    ],
    extra: {
      eas: {
        projectId: 'c5cddb1a-4054-45f3-8212-36a4c9482807',
      },
    },
  },
};
