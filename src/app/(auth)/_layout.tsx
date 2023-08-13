import { IconButton } from '_components/IconButton';
import { LanguagePickerModal } from '_components/LanguagePickerModal';
import { MaterialTopTabs } from '_layouts/material-top-tabs';
import { useNavigation } from 'expo-router';
import { useLayoutEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLangModal } from 'src/store/lang-picker-modal.store';
import IonIcons from '@expo/vector-icons/Ionicons';

export default function IndexTopTabsLayout() {
  const { setOptions } = useNavigation();
  const { visible, close, open } = useLangModal();

  useLayoutEffect(() => {
    setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-white h-screen">
      <MaterialTopTabs />
      <LanguagePickerModal visible={visible} close={close} />
      <IconButton onPress={open}>
        <IonIcons name="settings" size={24} />
      </IconButton>
    </SafeAreaView>
  );
}
