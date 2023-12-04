import { Stack, useNavigation } from 'expo-router';

export default function TabsLayout() {
  const navigation = useNavigation();
  console.log('navigation', navigation);

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
