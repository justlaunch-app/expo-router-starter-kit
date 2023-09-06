import * as React from 'react';
import {
  Pressable,
  ViewStyle,
  StyleProp,
  PressableStateCallbackType,
} from 'react-native';

type PressableComponentProps = {
  onPress: (e?: any) => void;
  style?: StyleProp<ViewStyle>;
  children?:
    | React.ReactNode
    | ((state: PressableStateCallbackType) => React.ReactNode);
  disabled?: boolean;
};

const PressableComponent: React.FC<PressableComponentProps> = ({
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
