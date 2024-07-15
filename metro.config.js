/* eslint-disable @typescript-eslint/no-var-requires */
const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname, {
  isCSSEnabled: true,
});

module.exports = (async () => {
  const {
    resolver: { sourceExts },
  } = config;

  const modifiedConfig = {
    ...config,
    resolver: {
      ...config.resolver,
      sourceExts: [...sourceExts, 'mjs'],
    },
  };

  return withNativeWind(modifiedConfig, { input: './global.css', inlineRem: 16 });
})();
