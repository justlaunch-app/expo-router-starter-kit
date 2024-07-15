/**
 * This Theme Toggle is inspired by NativeWindUI
 * @see https://nativewindui.com/
 */

import { Pressable, View } from 'react-native';
import Animated, { LayoutAnimationConfig, ZoomInRotate } from 'react-native-reanimated';
import { useColorScheme } from 'nativewind';

import { cn } from '@/lib/cn';
import { Icon } from '@/components/core/icon';
import { COLORS } from '@/theme/colors';

export const ThemeToggle = ({ size = 28 }: { size?: number }) => {
  const { colorScheme, setColorScheme } = useColorScheme();

  return (
    <LayoutAnimationConfig skipEntering>
      <Animated.View
        className="items-center justify-center"
        key={`toggle-${colorScheme}`}
        entering={ZoomInRotate}
      >
        <Pressable
          onPress={() => setColorScheme(colorScheme === 'light' ? 'dark' : 'light')}
          className="opacity-80"
        >
          {colorScheme === 'dark'
            ? ({ pressed }) => (
                <View className={cn('px-0.5', pressed && 'opacity-50')}>
                  <Icon size={size} name="moon-o" color={COLORS.white} />
                </View>
              )
            : ({ pressed }) => (
                <View className={cn('px-0.5', pressed && 'opacity-50')}>
                  <Icon size={size} name="sun-o" color={COLORS.black} />
                </View>
              )}
        </Pressable>
      </Animated.View>
    </LayoutAnimationConfig>
  );
};
