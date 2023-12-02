import { Link, Navigator, Stack, useNavigation } from 'expo-router';
import { Platform, View } from 'react-native';
import Slot = Navigator.Slot;

export default function TabsLayout() {
  const navigation = useNavigation();
  console.log('navigation', navigation);

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
