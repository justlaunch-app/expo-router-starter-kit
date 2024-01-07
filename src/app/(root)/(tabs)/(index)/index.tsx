import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
//i18n
import { useTranslation } from 'react-i18next';

//Data
import { classNames } from '@utils/classNames';
import { useColorScheme } from 'nativewind';

export default function Index() {
  const { t } = useTranslation();
  const { colorScheme } = useColorScheme();

  return (
    <SafeAreaView
      className={classNames({
        'flex flex-1 items-center justify-start': true,
        'bg-white': colorScheme === 'light',
        'bg-black': colorScheme === 'dark',
      })}
    >
      <Text className="text-blue-500 pt-2 text-2xl text-bold text-center">
        {t('greeting')}
      </Text>
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
