import { ReactNode } from 'react';
import {
  Pressable,
  ViewStyle,
  StyleProp,
  PressableStateCallbackType,
  GestureResponderEvent,
} from 'react-native';

export const TouchableOpacity = ({
  onPress,
  style,
  children,
  disabled = false,
  className,
}: {
  onPress?: (e?: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>;
  children?: ReactNode | ((state: PressableStateCallbackType) => ReactNode);
  disabled?: boolean;
  className?: string;
}) => {
  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      style={({ pressed }) => [style, { opacity: pressed ? 0.5 : 1, transition: 'opacity 0.1s' }]}
      className={className}
    >
      {children}
    </Pressable>
  );
};
