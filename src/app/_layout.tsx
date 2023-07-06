import React from 'react';
import {
  SourceCodePro_400Regular,
  useFonts,
} from '@expo-google-fonts/source-code-pro';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import { SplashScreen, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useContext } from 'react';
import { useColorScheme } from 'react-native';

import { ThemeProvider } from './../context/ThemeProvider';

//i18next
import { I18nextProvider } from 'react-i18next';
import i18n from '../../src/locales/index';

export { ErrorBoundary } from 'expo-router';
import { ThemeContext } from '../context/ThemeProvider';

export const unstable_settings = {
  initialRouteName: '(tabs)',
};

export default function RootLayout() {
  const [loaded, error] = useFonts({
    ...FontAwesome.font,
    SpaceMono: SourceCodePro_400Regular,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  return (
    <>
      {!loaded && <SplashScreen />}
      {loaded && (
        <ThemeProvider>
          <RootLayoutNav />
        </ThemeProvider>
      )}
    </>
  );
}

function RootLayoutNav() {
  //dark mode
  const colorScheme = useColorScheme();

  const { theme } = useContext(ThemeContext);

  console.log('THEME: ', theme);
  // const theme = colorScheme === 'dark' ? DarkTheme : DefaultTheme;

  return (
    <I18nextProvider i18n={i18n}>
      <Stack>
        <Stack.Screen name="(root)/(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
      </Stack>
      <StatusBar />
    </I18nextProvider>
  );
}
