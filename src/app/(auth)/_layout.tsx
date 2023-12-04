import { LanguagePickerModal } from '_components/Picker/LanguagePickerModal';
import { MaterialTopTabs } from '_layouts/material-top-tabs';
import { Link, Navigator, useNavigation, usePathname } from 'expo-router';
import { useLayoutEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLangModal } from 'src/store/langStore/lang-picker-modal.store';
import { LanguagePickerModalTrigger } from '_components/Picker/LanguagePickerModalTrigger';
import { useColorScheme } from 'nativewind';
import { Platform, View } from 'react-native';
import Slot = Navigator.Slot;
import { StyledText as Text } from '_components/Text/StyledText';
import { buttonClasses } from '_utils/buttonClasses';
import { useTranslation } from 'react-i18next';

export default function IndexTopTabsLayout() {
  const { setOptions } = useNavigation();
  const { visible, close } = useLangModal();
  const { colorScheme } = useColorScheme();

  useLayoutEffect(() => {
    setOptions({
      headerShown: false,
    });
  }, [setOptions]);

  const Layout = Platform.OS === 'web' ? WebLayout : MaterialTopTabs;

  return (
    <SafeAreaView
      className="flex-1 h-screen"
      style={{
        backgroundColor: colorScheme === 'dark' ? 'black' : 'white',
      }}
    >
      <Layout />
      <LanguagePickerModal visible={visible} close={close} />
      <LanguagePickerModalTrigger />
    </SafeAreaView>
  );
}

function WebLayout() {
  const pathname = usePathname();
  const { t } = useTranslation();

  return (
    <View>
      <View className={'p-4 z-50 bg-white shadow-sm text-white'}>
        <View
          className={'container mx-auto flex-row items-center justify-between'}
        >
          <Text className="text-3xl dark:text-white text-black font-semibold">
            EXPO STARTER KIT
          </Text>
          <Link
            className={buttonClasses}
            href={`/(auth)/${
              pathname.toLowerCase().includes('sign-up') ? 'sign-in' : 'sign-up'
            }`}
          >
            {pathname.toLowerCase().includes('sign-up')
              ? t('auth.sign-in')
              : t('auth.sign-up')}
          </Link>
        </View>
      </View>
      <View className={'container mx-auto py-4'}>
        <Slot />
      </View>
    </View>
  );
}
