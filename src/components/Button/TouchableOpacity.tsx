import React from 'react';
import { Pressable, ViewStyle, StyleProp } from 'react-native';

type PressableComponentProps = {
  onPress: (e?: any) => void;
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
  disabled?: boolean;
};

const PressableComponent: React.FC<PressableComponentProps> = ({
  onPress,
  style,
  children,
  disabled,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }, style]}
    >
      {children}
    </Pressable>
  );
};

export default PressableComponent;
