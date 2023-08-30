import { LanguagePickerModal } from '_components/LanguagePickerModal';
import { MaterialTopTabs } from '_layouts/material-top-tabs';
import { useNavigation } from 'expo-router';
import { useLayoutEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLangModal } from 'src/store/langStore/lang-picker-modal.store';
import { LanguagePickerModalTrigger } from 'src/components/LanguagePickerModalTrigger';
import { useColorScheme } from 'react-native';

export default function IndexTopTabsLayout() {
  const { setOptions } = useNavigation();
  const { visible, close } = useLangModal();
  const colorScheme = useColorScheme();

  useLayoutEffect(() => {
    setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView
      className="flex-1 h-screen"
      style={{
        backgroundColor: colorScheme === 'dark' ? 'black' : 'white',
      }}
    >
      <MaterialTopTabs />
      <LanguagePickerModal visible={visible} close={close} />
      <LanguagePickerModalTrigger />
    </SafeAreaView>
  );
}
