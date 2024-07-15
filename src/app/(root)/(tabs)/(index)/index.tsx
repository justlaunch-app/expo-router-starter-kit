import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { Text } from '@/components/core/text';
import { useColorScheme } from 'nativewind';
import { SafeAreaView } from '@/components/core/safe-area-view';
import Icon from '@/components/LucideIcon';

export default function Index() {
  const { colorScheme } = useColorScheme();

  return (
    <SafeAreaView>
      <Text variant="largeTitle" color="primary">
        Hello World {colorScheme}
      </Text>
      <Icon name="AirVent" />
      <Text variant="title2" color="quarternary">
        This is an example of using Material Top Tabs with Bottom navigation in expo-router
      </Text>

      <View className="py-12 px-8">
        <Text color="secondary">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, eveniet ut unde, nemo
          minus nisi, ullam iure exercitationem amet quia praesentium! Minima non debitis labore,
          rem odit enim itaque qui?
        </Text>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
