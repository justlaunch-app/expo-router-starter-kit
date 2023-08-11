import React from 'react';
import {
  SourceCodePro_400Regular,
  useFonts,
} from '@expo-google-fonts/source-code-pro';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import {
  SplashScreen,
  Stack,
  useRootNavigationState,
  useRouter,
} from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';

//OneSignal
// import OneSignal from 'react-native-onesignal';

//i18next
import { I18nextProvider, useTranslation } from 'react-i18next';
import i18n from 'src/locales/index';
import { useAuth } from 'src/store/auth.store';

//ENV
// import ENV from 'src/utils/env-loader';

export { ErrorBoundary } from 'expo-router';

export const unstable_settings = {
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    ...FontAwesome.font,
    SpaceMono: SourceCodePro_400Regular,
  });
  const rootNavigationState = useRootNavigationState();
  const user = useAuth((state) => state.user);
  const router = useRouter();

  const navigationKey = React.useMemo(() => {
    return rootNavigationState?.key;
  }, [rootNavigationState]);

  //EXAMPLE Loading ENV Variables
  //const env_weather_api_key = ENV.WEATHER_API_KEY;

  //TODO: set OneSignal HERE
  //One Signal Notifications
  // useEffect(() => {

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
  // }, []);

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) {
      throw error;
    }
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  useEffect(() => {
    if (!user && navigationKey) {
      router.replace('/sign-in');
    }
  }, [user, navigationKey]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const { t } = useTranslation();

  return (
    <>
      <I18nextProvider i18n={i18n}>
        <Stack>
          <Stack.Screen name="(root)" options={{ headerShown: false }} />
          <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
          <Stack.Screen
            name="sign-in"
            options={{
              title: t('sign-in.sign-in'),
              headerBackButtonMenuEnabled: false,
              presentation: 'fullScreenModal',
              headerBackVisible: false,
            }}
          />
        </Stack>
        <StatusBar />
      </I18nextProvider>
    </>
  );
}
