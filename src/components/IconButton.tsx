import { classNames } from '_utils/classNames';
import { Platform, Pressable, PressableProps } from 'react-native';

type IconButtonProps = Omit<PressableProps, 'className'> & {
  classNames?: Record<string, boolean>;
};

export function IconButton({
  classNames: _classNames,
  children,
  ...props
}: IconButtonProps) {
  return (
    <Pressable
      className={classNames({
        'absolute right-8 bottom-8 p-4 shadow-md bg-white rounded-md': true,
        'active:text-slate-100': Platform.OS === 'ios',
        ..._classNames,
      })}
      android_ripple={{
        color: 'rgb(241,245,249)',
      }}
      {...props}
    >
      {children}
    </Pressable>
  );
}
