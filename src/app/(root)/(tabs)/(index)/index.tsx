import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { useColorScheme } from 'nativewind';
import Icon from '@components/LucideIcon';

export default function Index() {
  const { colorScheme } = useColorScheme();

  return (
    <View className={colorScheme === 'light' ? 'bg-red-500' : 'bg-green-500'}>
      <Text className="text-light-text dark:text-dark-text pt-2 text-2xl text-bold text-center">
        Hello World {colorScheme}
      </Text>
      <Icon name="AirVent" />
      <Text className="text-blue-500 text-xl px-8 pt-5 pb-10">
        This is an example of using Material Top Tabs with Bottom navigation in expo-router
      </Text>

      <View className="py-12 px-8">
        <Text className="text-blue-500">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, eveniet ut unde, nemo
          minus nisi, ullam iure exercitationem amet quia praesentium! Minima non debitis labore,
          rem odit enim itaque qui?
        </Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
