import { useColorScheme } from 'nativewind';

/** Components */
import { Text } from '@/components/core/text';
import { SafeAreaView } from '@/components/core/safe-area-view';

export default function Index() {
  const { colorScheme } = useColorScheme();

  return (
    <SafeAreaView>
      <Text variant="largeTitle" color="primary">
        Hello World
      </Text>
      <Text variant="title2" color="quarternary">
        This is a Sandbox test environment with Expo Go.
      </Text>
      <Text variant="title2" color="quarternary">
        Current theme is{' '}
        <Text variant="title2" color="secondary">
          {colorScheme}
        </Text>
        .
      </Text>
    </SafeAreaView>
  );
}
