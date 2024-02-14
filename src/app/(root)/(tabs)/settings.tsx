import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View } from 'react-native';
import { useColorScheme } from 'nativewind';

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
      </View>
    </SafeAreaView>
  );
}
