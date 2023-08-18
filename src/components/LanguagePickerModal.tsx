import React from 'react';
import { View } from '_context/Themed';
import { MonoText as Text } from '_components/StyledText';
import { Modal, Pressable, useColorScheme } from 'react-native';
import LanguagePicker from 'src/components/LanguagePicker';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import IonIcons from '@expo/vector-icons/Ionicons';
import { useTranslation } from 'react-i18next';
import AppVersion from './AppVersion';

export function LanguagePickerModal({
  visible,
  close,
}: {
  visible: boolean;
  close: () => void;
}) {
  const { top } = useSafeAreaInsets();
  const { t } = useTranslation();
  const colorScheme = useColorScheme();

  return (
    <Modal visible={visible} animationType="slide">
      <View className="flex-1 h-screen" style={{ paddingTop: top }}>
        <View className="flex items-center flex-row justify-between w-full px-4 border-b border-slate-100">
          <Text className="font-bold text-lg">{t('update-language')}</Text>
          <Pressable className="p-4" onPress={close}>
            <IonIcons
              name="close"
              size={24}
              color={colorScheme === 'dark' ? 'white' : 'black'}
            />
          </Pressable>
        </View>
        <View className="mt-4 p-4 w-full h-[85%] items-center justify-between">
          <View className="relative">
            <LanguagePicker />
          </View>
          <View className="">
            <AppVersion />
          </View>
        </View>
      </View>
    </Modal>
  );
}
