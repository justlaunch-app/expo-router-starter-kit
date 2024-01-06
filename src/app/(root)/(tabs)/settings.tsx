import { SafeAreaView } from 'react-native-safe-area-context';

//COMPONENTS
import { Text, View } from 'react-native';
import DeviceInfo from '_components/Device/DeviceInfo';
import AppVersion from '_components/Device/AppVersion';
import Divider from '_components/Divider/Divider';

import { useColorScheme } from 'nativewind';
import LanguagePicker from '_components/Picker/LanguagePicker';

export default function Settings() {
  const { colorScheme, setColorScheme } = useColorScheme();

  return (
    <SafeAreaView className="flex-1 items-center justify-between">
      <View className="flex-1">
        <Text
          onPress={() =>
            setColorScheme(colorScheme === 'light' ? 'dark' : 'light')
          }
          className="text-green-500"
        >{`The color scheme is ${colorScheme}`}</Text>
      </View>
      <View className="flex-1 relative bg-transparent">
        <LanguagePicker />
      </View>

      <View className="flex-1 justify-end relative bg-transparent mt-12">
        <Text className="text-lg font-bold">Device Info</Text>
        <DeviceInfo />
        <Divider />
        <AppVersion />
      </View>
    </SafeAreaView>
  );
}
