/**
 *
 * This is a simple parallax scroll view component - inspired by Expo.
 * @see https://docs.expo.dev/
 */

import type { PropsWithChildren, ReactElement } from 'react';
import { View } from 'react-native';
import { useColorScheme } from 'nativewind';
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from 'react-native-reanimated';
import { cn } from '@/lib/cn';

const HEADER_HEIGHT = 250;

type Props = PropsWithChildren<{
  headerImage: ReactElement;
  headerBackgroundColor: { dark: string; light: string };
}>;

export const ParallaxScrollView = ({ children, headerImage, headerBackgroundColor }: Props) => {
  const { colorScheme } = useColorScheme();
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);

  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
            [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75]
          ),
        },
        {
          scale: interpolate(scrollOffset.value, [-HEADER_HEIGHT, 0, HEADER_HEIGHT], [2, 1, 1]),
        },
      ],
    };
  });

  return (
    <View className="flex-1">
      <Animated.ScrollView ref={scrollRef} scrollEventThrottle={16}>
        <Animated.View
          className={cn('h-[250px] overflow-hidden', {
            [`bg-${
              colorScheme === 'dark' ? headerBackgroundColor.dark : headerBackgroundColor.light
            }`]: true,
          })}
          style={headerAnimatedStyle}
        >
          {headerImage}
        </Animated.View>
        {children}
      </Animated.ScrollView>
    </View>
  );
};
