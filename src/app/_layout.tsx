import { useEffect } from 'react';
import { useFonts } from 'expo-font';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

// Providers
import { ThemeProvider } from '@react-navigation/native';
import { KeyboardProvider } from 'react-native-keyboard-controller'; //https://www.npmjs.com/package/react-native-keyboard-controller

// Theme
import { NAV_THEME } from 'src/theme';
import { useColorScheme } from 'nativewind';
import '../../global.css';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  initialRouteName: 'index',
};

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const { colorScheme } = useColorScheme();

  return (
    <>
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
      <KeyboardProvider statusBarTranslucent navigationBarTranslucent>
        <ThemeProvider value={NAV_THEME[colorScheme]}>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <Stack screenOptions={{ animation: 'ios' }}>
              <Stack.Screen name="(root)" options={{ headerShown: false }} />
              <Stack.Screen
                name="modal"
                options={{
                  title: 'Modal',
                  presentation: 'modal',
                  animation: 'fade_from_bottom',

                  /** You have the ability to add left and right header JSX/TSX component here fx.: a Pressable Icon component or a Close Icon module*/
                  headerRight: () => null,
                  headerLeft: () => null,
                }}
              />
            </Stack>
          </GestureHandlerRootView>
        </ThemeProvider>
      </KeyboardProvider>
    </>
  );
}
