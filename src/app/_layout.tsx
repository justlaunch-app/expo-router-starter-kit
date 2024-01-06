import { useEffect, useState } from 'react';
import {
  useFonts,
  SourceCodePro_400Regular,
} from '@expo-google-fonts/source-code-pro';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { SplashScreen as ExpoSplashScreen, Stack } from 'expo-router';
import {
  ThemeProvider,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import { I18nextProvider } from 'react-i18next';
import { StatusBar } from 'expo-status-bar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Head from 'expo-router/head';
import i18n from '_locales/i18n';
import {
  useColorScheme as nativewindUseColorScheme,
  NativeWindStyleSheet,
} from 'nativewind';

const queryClient = new QueryClient();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    ...FontAwesome.font,
    SpaceMono: SourceCodePro_400Regular,
  });

  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Wait for fonts to load and for at least 2000 milliseconds
        await Promise.all([
          fontsLoaded,
          new Promise((resolve) => setTimeout(resolve, 2000)),
        ]);
      } catch (e) {
        console.warn(e);
      } finally {
        // Now fonts are loaded and 2 seconds have passed
        setAppIsReady(true);
      }
    }

    prepare();
  }, [fontsLoaded]);

  useEffect(() => {
    if (appIsReady) {
      // Hide the splash screen only when app is ready
      ExpoSplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return <RootLayoutNav />;
}

ExpoSplashScreen.preventAutoHideAsync();

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
        <I18nextProvider i18n={i18n}>
          <QueryClientProvider client={queryClient}>
            <Stack>
              <Stack.Screen name="(root)" options={{ headerShown: false }} />
              <Stack.Screen
                name="modal"
                options={{
                  presentation: 'modal',
                }}
              />
            </Stack>
            <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
          </QueryClientProvider>
        </I18nextProvider>
      </ThemeProvider>
    </>
  );
}

NativeWindStyleSheet.setOutput({
  default: 'native',
});
