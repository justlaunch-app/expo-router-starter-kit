/**
 * Simple button component that works on both web and mobile
 * You can customize this button style by modifying buttonClasses in src/utils/buttonClasses.ts
 */

import { Button as RnButton, ButtonProps, Platform, Pressable, PressableProps } from 'react-native';
import { Text } from '@/components/core/text';
import { buttonClasses } from '@/lib/buttonClasses';

type Props = PressableProps & ButtonProps;
export function Button(props: Props) {
  if (Platform.OS === 'web') {
    return (
      <Pressable className={buttonClasses} {...props} accessibilityRole={'button'}>
        <Text className={'text-white'}>{props.title}</Text>
      </Pressable>
    );
  }
  return <RnButton {...props} />;
}
