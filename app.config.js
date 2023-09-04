require('dotenv').config();

module.exports = {
  "expo": {
    "name": "expo-starter-kit",
    "slug": "expo-starter-kit",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./src/assets/images/icon.png",
    "scheme": "acme",
    "userInterfaceStyle": "automatic",
    "splash": {
      "image": "./src/assets/images/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "updates": {
      "fallbackToCacheTimeout": 0
    },
    "assetBundlePatterns": ["**/*"],
    "ios": {
      "supportsTablet": true,
      "bundleIdentifier": "com.zoltanfodor.expo-starter-kit"
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./src/assets/images/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      }
    },
    "web": {
      "bundler": "metro",
      "favicon": "./src/assets/images/favicon.png"
    },
    "extra": {
      "eas": {
        "projectId": "771e0de4-bc78-43ea-82b5-18ea2cd74820",
        "oneSignalAppId": "<CHANGE TO YOUR ONESIGNAL KEY>"
      },
      ...process.env
    },
    "owner": "zoltanfodor_dev",
    "plugins": [
      [
        "onesignal-expo-plugin",
        {
          "mode": "development"
        }
      ]
    ]
  }
}
