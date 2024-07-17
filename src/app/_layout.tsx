import { useEffect } from 'react';
import { useFonts } from 'expo-font';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ThemeToggle } from '@/components/core/toggle';

// Providers
import { ThemeProvider } from '@react-navigation/native';

/**
 * https://www.npmjs.com/package/react-native-keyboard-controller
 * import { KeyboardProvider } from 'react-native-keyboard-controller';
 *
 *  On Development build you can wrap the Stack into a KeyboardProvider to handle the keyboard avoiding the  screen to be pushed up by the keyboard.
 *
 *  NOTE: On Expo Go the KeyboardProvider is not working since you need to link it to native.
 *
 *  Install: pnpm add react-native-keyboard-controller
 *
 *  Wrap the Stack with the KeyboardProvider -
 * <KeyboardProvider statusBarTranslucent navigationBarTranslucent></KeyboardProvider>
 */

// Theme
import { NAV_THEME } from '@/theme';
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

  /** Adjust or remove hide Splash Screen TimeOut based on preference */
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hideAsync();
    }, 1000);
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
      <StatusBar
        style={colorScheme === 'dark' ? 'light' : 'dark'}
        key={`root-status-bar-${colorScheme === 'dark' ? 'light' : 'dark'}`}
      />

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
                headerRight: () => <ThemeToggle />,
                headerLeft: () => null,
              }}
            />
          </Stack>
        </GestureHandlerRootView>
      </ThemeProvider>
    </>
  );
}
