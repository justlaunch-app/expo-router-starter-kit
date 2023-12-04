import React, {
  useLayoutEffect,
  useEffect,
  FunctionComponent,
  useMemo,
  useState,
} from 'react';
import Head from 'expo-router/head';
import {
  SourceCodePro_400Regular,
  useFonts,
} from '@expo-google-fonts/source-code-pro';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useColorScheme as nativewindUseColorScheme } from 'nativewind';

import {
  Stack,
  useRootNavigationState,
  useSegments,
  router,
  SplashScreen as ExpoSplashScreen,
} from 'expo-router';
import { RootSiblingParent } from 'react-native-root-siblings';

import {
  ThemeProvider,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import { NativeWindStyleSheet } from 'nativewind';

//OneSignal
// import OneSignal from 'react-native-onesignal';

//SEGMENT - ANALYTICS
// import { AnalyticsProvider } from '@segment/analytics-react-native';
// import { segmentClient } from '_config/segment';

import { I18nextProvider } from 'react-i18next';
import { StatusBar } from 'expo-status-bar';
import { useAuth } from 'src/store/authStore/auth.store';
import { Platform } from 'react-native';
import { LottieSplashScreenNative } from '_components/LottieSplashScreen';
import i18n from '_locales/i18n';

export { ErrorBoundary } from 'expo-router';

let CurrentPlatformSplashScreen: LottieSplashScreenNative | FunctionComponent;
if (Platform.OS === 'web') {
  CurrentPlatformSplashScreen =
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('_components/LottieSplashScreenWeb').default;
} else {
  CurrentPlatformSplashScreen =
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('_components/LottieSplashScreen').default;
}

export const unstable_settings = {
  initialRouteName: '(tabs)',
};

const FONT_LOAD_DELAY = 2000;
const SCREEN_TRANSITION_DELAY = 150;

function useProtectedRoute() {
  const segments = useSegments();
  const rootNavigationState = useRootNavigationState();

  const user = useAuth(({ user }) => user);

  const navigationKey = useMemo(() => {
    return rootNavigationState?.key;
  }, [rootNavigationState]);

  useLayoutEffect(() => {
    const inAuthGroup = segments[0] === '(auth)';

    if (!navigationKey) {
      return;
    }

    if (!user && !inAuthGroup) {
      router.replace('/sign-in');
    } else if (user && inAuthGroup) {
      router.replace('/');
    }
  }, [user, segments, navigationKey]);
}

export default function RootLayout() {
  const [loaded, error] = useFonts({
    ...FontAwesome.font,
    SpaceMono: SourceCodePro_400Regular,
  });

  const [appState, setAppState] = useState({
    fontsLoaded: false,
    isDelayOver: false,
    screenReady: false,
  });

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

  useEffect(() => {
    if (loaded) {
      ExpoSplashScreen.hideAsync();
      setAppState((prev) => ({ ...prev, fontsLoaded: true }));
    }
    if (error) {
      throw error;
    }
  }, [loaded, error]);

  useEffect(() => {
    if (appState.fontsLoaded) {
      const timer = setTimeout(() => {
        setAppState((prev) => ({ ...prev, isDelayOver: true }));
      }, FONT_LOAD_DELAY);

      return () => clearTimeout(timer);
    }
  }, [appState.fontsLoaded]);

  useEffect(() => {
    if (appState.isDelayOver) {
      setTimeout(() => {
        setAppState((prev) => ({ ...prev, screenReady: true }));
      }, SCREEN_TRANSITION_DELAY);
    }
  }, [appState.isDelayOver]);

  useProtectedRoute();

  if (!loaded || !appState.isDelayOver) {
    return (
      <CurrentPlatformSplashScreen animationFadeOut={appState.isDelayOver} />
    );
  }

  if (appState.screenReady) {
    return <RootLayoutNav />;
  }
}

function RootLayoutNav() {
  const { colorScheme } = nativewindUseColorScheme();

  return (
    <>
      <Head>
        <meta property="og:title" content="Pillar Valley" />
        <meta property="expo:handoff" content="true" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#F09458" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <RootSiblingParent>
          <I18nextProvider i18n={i18n}>
            <Stack>
              <Stack.Screen name="(root)" options={{ headerShown: false }} />
              <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
            </Stack>
            <StatusBar style={'auto'} />
          </I18nextProvider>
        </RootSiblingParent>
      </ThemeProvider>
    </>
  );
}

NativeWindStyleSheet.setOutput({
  default: 'native',
});
