import { IconButton } from '_components/Button/IconButton';
import { useEffect } from 'react';
import { useLangModal } from 'src/store/langStore/lang-picker-modal.store';
import IonIcons from '@expo/vector-icons/Ionicons';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import { Keyboard } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useColorScheme } from 'nativewind';

export function LanguagePickerModalTrigger() {
  const opacity = useSharedValue(1);
  const translateY = useSharedValue(0);

  const { bottom } = useSafeAreaInsets();

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
      opacity: opacity.value,
    };
  });

  const { open } = useLangModal();
  const { colorScheme } = useColorScheme();

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

  return (
    <Animated.View
      className="absolute right-8 shadow-sm"
      style={[animatedStyles, { bottom: bottom + 32 }]}
    >
      <IconButton onPress={open}>
        <IonIcons
          name="settings"
          size={24}
          color={colorScheme === 'dark' ? 'color: rgb(226 232 240)' : 'black'}
        />
      </IconButton>
    </Animated.View>
  );
}
