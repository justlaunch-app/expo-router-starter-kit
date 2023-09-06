import { View } from 'react-native';
import { StyledText as Text } from '_components/Text/StyledText';
import { Modal, Pressable } from 'react-native';
import LanguagePicker from '_components/Picker/LanguagePicker';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import IonIcons from '@expo/vector-icons/Ionicons';
import { useTranslation } from 'react-i18next';
import AppVersion from '_components/Device/AppVersion';
import { useColorScheme } from 'nativewind';

export function LanguagePickerModal({
  visible,
  close,
}: {
  visible: boolean;
  close: () => void;
}) {
  const { top } = useSafeAreaInsets();
  const { t } = useTranslation();
  const { colorScheme } = useColorScheme();

  return (
    <Modal visible={visible} animationType="slide">
      <View
        className="flex-1 h-screen dark:bg-black"
        style={{ paddingTop: top }}
      >
        <View className="flex items-center flex-row justify-between w-full px-4 border-b border-slate-100 bg-transparent">
          <Text className="font-bold text-lg">{t('update-language')}</Text>
          <Pressable className="p-4" onPress={close}>
            <IonIcons
              name="close"
              size={24}
              color={colorScheme === 'dark' ? 'white' : 'black'}
            />
          </Pressable>
        </View>
        <View className="mt-4 p-4 w-full h-[85%] items-center justify-between bg-transparent">
          <View className="relativ bg-transparente">
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
