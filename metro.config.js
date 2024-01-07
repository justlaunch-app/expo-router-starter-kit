/* eslint-disable no-undef */
// Learn more https://docs.expo.io/guides/customizing-metro
/* eslint-disable-next-line @typescript-eslint/no-var-requires */
const { getDefaultConfig } = require('expo/metro-config');
/* eslint-disable-next-line @typescript-eslint/no-var-requires */
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

  return withNativeWind(modifiedConfig, { input: './global.css' });
})();
