import React from 'react';
import {
  SourceCodePro_400Regular,
  useFonts,
} from '@expo-google-fonts/source-code-pro';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme } from '@react-navigation/native';
import { SplashScreen, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { useColorScheme } from 'react-native';
// import OneSignal from 'react-native-onesignal';

//i18next
import { I18nextProvider } from 'react-i18next';
import i18n from 'src/locales/index';

export { ErrorBoundary } from 'expo-router';

export const unstable_settings = {
  initialRouteName: '(tabs)',
};

export default function RootLayout() {
  const [loaded, error] = useFonts({
    ...FontAwesome.font,
    SpaceMono: SourceCodePro_400Regular,
  });

  //TODO: set OneSignal HERE
  //One Signal Notifications
  // useEffect(() => {
  //   if (error) throw error;
  //   // Initialize OneSignal
  //   OneSignal.setAppId(''); //TODO: set app id
  //   OneSignal.setNotificationOpenedHandler((notification) => {
  //     console.log('OneSignal: notification opened:', notification);
  //     //Logic to handle notifications goes here
  //   });
  //   OneSignal.promptForPushNotificationsWithUserResponse((response) => {
  //     console.log('OneSignal: User accepted notifications:', response);
  //     //Logic to handle notifications goes here
  //   });
  // }, [error]);

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  return (
    <>
      {!loaded && <SplashScreen />}
      {loaded && <RootLayoutNav />}
    </>
  );
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <>
      <I18nextProvider i18n={i18n}>
        <Stack>
          <Stack.Screen name="(root)/(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
        </Stack>
        <StatusBar />
      </I18nextProvider>
    </>
  );
}
