import React from 'react';
import { registerRootComponent } from 'expo';
import { ExpoRoot } from 'expo-router';

declare var require: {
  context: (path: string, deep?: boolean, filter?: RegExp) => any;
};

// Must be exported or Fast Refresh won't update the context
export function App() {
  const ctx = require.context('./src/app');
  return <ExpoRoot context={ctx} />;
}

registerRootComponent(App);
