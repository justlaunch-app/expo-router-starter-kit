import { IconButton } from '_components/IconButton';
import { useEffect } from 'react';
import { useLangModal } from 'src/store/lang-picker-modal.store';
import IonIcons from '@expo/vector-icons/Ionicons';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import { Keyboard } from 'react-native';

export function LanguagePickerModalTrigger() {
  const opacity = useSharedValue(1);
  const translateY = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
      opacity: opacity.value,
    };
  });

  const { open } = useLangModal();

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
    <Animated.View className="absolute right-8 bottom-8" style={animatedStyles}>
      <IconButton onPress={open}>
        <IonIcons name="settings" size={24} />
      </IconButton>
    </Animated.View>
  );
}
