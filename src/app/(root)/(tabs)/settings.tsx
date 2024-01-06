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
    <SafeAreaView>
      <View className="flex-1">
        <View className="my-5 mx-auto">
          <Text
            onPress={() =>
              setColorScheme(colorScheme === 'light' ? 'dark' : 'light')
            }
            className="text-black dark:text-white text-2xl font-semibold"
          >{`The color scheme is ${colorScheme}`}</Text>
        </View>

        <LanguagePicker className="mx-auto" />
      </View>

      <View className="">
        <Text className="text-lg font-bold">Device Info</Text>
        <DeviceInfo />
        <Divider />
        <AppVersion />
      </View>
    </SafeAreaView>
  );
}
