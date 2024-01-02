import { ReactNode, FC } from 'react';
import {
  Pressable,
  ViewStyle,
  StyleProp,
  PressableStateCallbackType,
  GestureResponderEvent,
} from 'react-native';

type PressableComponentProps = {
  onPress: (e?: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>;
  children?: ReactNode | ((state: PressableStateCallbackType) => ReactNode);
  disabled?: boolean;
};

const PressableComponent: FC<PressableComponentProps> = ({
  onPress,
  style,
  children,
  disabled = false,
}) => {
  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }, style]}
    >
      {children}
    </Pressable>
  );
};

export default PressableComponent;
