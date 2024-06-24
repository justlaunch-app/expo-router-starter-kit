import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { classNames } from '@utils/classNames';
import { useColorScheme } from 'nativewind';
import Icon from '@components/LucideIcon';

export default function Index() {
  const { colorScheme } = useColorScheme();

  return (
    <SafeAreaView
      className={classNames({
        'flex flex-1 items-center justify-start': true,
        'bg-white': colorScheme === 'light',
        'bg-black': colorScheme === 'dark',
      })}
    >
      <Text className="text-light-text pt-2 text-2xl text-bold text-center">
        Hello World
      </Text>
      <Icon name="AirVent" />
      <Text className="text-blue-500 text-xl px-8 pt-5 pb-10">
        This is an example of using Material Top Tabs with Bottom navigation in
        expo-router
      </Text>

      <View className="py-12 px-8">
        <Text className="text-blue-500">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam,
          eveniet ut unde, nemo minus nisi, ullam iure exercitationem amet quia
          praesentium! Minima non debitis labore, rem odit enim itaque qui?
        </Text>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
