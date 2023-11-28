const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname , {
  // [Web-only]: Enables CSS support in Metro.
  isCSSEnabled: true,
});

// hook-form web fix: Read more about it https://github.com/expo/expo/issues/23322
config.resolver.sourceExts = [...config.resolver.sourceExts, 'mjs', 'cjs'];

module.exports = config;