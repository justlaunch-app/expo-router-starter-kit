import { Link } from 'expo-router';
import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { Platform } from 'react-native';

export function ExternalLink(
  props: Omit<React.ComponentProps<typeof Link>, 'href'> & { href: string }
) {
  return (
    <Link
      {...props}
      href={props.href}
      onPress={(e) => {
        if (Platform.OS !== 'web') {
          e.preventDefault();
          WebBrowser.openBrowserAsync(props.href as string);
        }
      }}
    />
  );
}
