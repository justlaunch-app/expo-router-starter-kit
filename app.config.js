module.exports = {
  expo: {
    name: 'lucide-expo-try-out',
    owner: "zoltanfodor_dev",
    experiments: {
      typedRoutes: true,
      tsconfigPaths: true,
    },
    slug: 'expo-router-starter-kit',
    version: '3.2.0',
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
      url: "https://u.expo.dev/564f22dd-cb02-43e7-b4a9-d0f7c49ea2ef"
    },
    mode: 'production',
    assetBundlePatterns: ['**/*'],
    build: {
      development: {
        distribution: "internal"
      },
      preview: {
        distribution: "internal"
      },
      production: {
        distribution: "store"
      }
    },
    ios: {
      supportsTablet: true,
      bundleIdentifier: 'com.lucide-expo-router-starter-kit.justlaunch.app'
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
    runtimeVersion: {
      policy: "appVersion"
    },
    extra: {
      eas: {
        projectId: "564f22dd-cb02-43e7-b4a9-d0f7c49ea2ef"
      }
    },
  },
};
