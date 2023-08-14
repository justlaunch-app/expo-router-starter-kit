import { LanguagePickerModal } from '_components/LanguagePickerModal';
import { MaterialTopTabs } from '_layouts/material-top-tabs';
import { useNavigation } from 'expo-router';
import { useEffect, useLayoutEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLangModal } from 'src/store/lang-picker-modal.store';
import { useSharedValue, withDelay, withTiming } from 'react-native-reanimated';
import { Keyboard } from 'react-native';
import { LanguagePickerModalTrigger } from 'src/components/LanguagePickerModalTrigger';

export default function IndexTopTabsLayout() {
  const { setOptions } = useNavigation();
  const { visible, close } = useLangModal();

  const opacity = useSharedValue(1);

  const translateY = useSharedValue(0);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        opacity.value = withDelay(25, withTiming(0.25));
        translateY.value = withDelay(100, withTiming(300));
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        opacity.value = withDelay(25, withTiming(1));
        translateY.value = withDelay(100, withTiming(0));
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  useLayoutEffect(() => {
    setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-white h-screen">
      <MaterialTopTabs />
      <LanguagePickerModal visible={visible} close={close} />
      <LanguagePickerModalTrigger />
    </SafeAreaView>
  );
}
