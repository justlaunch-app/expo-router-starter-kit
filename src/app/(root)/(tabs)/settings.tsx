import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View } from 'react-native';
import DeviceInfo from '@components/Device/DeviceInfo';
import AppVersion from '@components/Device/AppVersion';
import Divider from '@components/Divider/Divider';
import { useColorScheme } from 'nativewind';
import LanguagePicker from '@components/Picker/LanguagePicker';

export default function Settings() {
  const { colorScheme, setColorScheme } = useColorScheme();

  return (
    <SafeAreaView>
      <View className="flex justify-between h-full max-w-sm mx-auto">
        <View className="my-5 mx-auto">
          <Text
            onPress={() =>
              setColorScheme(colorScheme === 'light' ? 'dark' : 'light')
            }
            className="text-black dark:text-white text-2xl font-semibold"
          >
            {`The color scheme is ${colorScheme}`}
          </Text>
        </View>
        <View className="pb-40">
          <LanguagePicker className="mx-auto" />
        </View>

        {/* Device Info Section */}
        <View>
          <Text className="text-lg font-bold">Device Info</Text>
          <DeviceInfo />
          <Divider />
          <AppVersion />
        </View>
      </View>
    </SafeAreaView>
  );
}
