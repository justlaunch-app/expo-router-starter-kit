import React from 'react';
import { ExpoRoot } from 'expo-router';
import { NativeWindStyleSheet } from 'nativewind';

declare var require: {
  context: (path: string, deep?: boolean, filter?: RegExp) => any;
};

export function App() {
  return <ExpoRoot context={require.context('./src/app')} />;
}

NativeWindStyleSheet.setOutput({
  default: 'native',
});
