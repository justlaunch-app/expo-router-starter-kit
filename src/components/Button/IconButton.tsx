import { classNames } from '@utils/classNames';
import { useColorScheme } from 'nativewind';
import { View, Platform, Pressable, PressableProps } from 'react-native';

type IconButtonProps = Omit<PressableProps, 'className'> & {
  classNames?: Record<string, boolean>;
};

export function IconButton({
  classNames: _classNames,
  children,
  ...props
}: IconButtonProps) {
  const { colorScheme } = useColorScheme();

  return (
    <View
      className={classNames({
        'rounded-md overflow-hidden': true,
        'active:text-slate-100': Platform.OS === 'ios',
        'bg-white': colorScheme === 'light',
        'bg-slate-900': colorScheme === 'dark',
        ..._classNames,
      })}
    >
      <Pressable className="w-full h-full p-4" {...props}>
        {children}
      </Pressable>
    </View>
  );
}
