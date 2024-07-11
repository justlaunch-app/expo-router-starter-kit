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
  className?: string;
};

const PressableComponent: FC<PressableComponentProps> = ({
  onPress,
  style,
  children,
  disabled = false,
  className,
}) => {
  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      style={({ pressed }) => [
        style,
        { opacity: pressed ? 0.5 : 1, backgroundColor: 'red' },
      ]}
      className={className}
    >
      {children}
    </Pressable>
  );
};

export default PressableComponent;
