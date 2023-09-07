import * as React from 'react';
import { styled, useColorScheme } from 'nativewind';
import { Text as DefaultText, Platform, TextProps } from 'react-native';

const Text = styled(DefaultText);

type LabelProps = TextProps & { htmlFor: string };

export function Label({ htmlFor, ...props }: LabelProps) {
  const { style, ...otherProps } = props;
  const { colorScheme } = useColorScheme();
  const color = colorScheme === 'dark' ? 'white' : 'black';

  const ref = React.useCallback((node: DefaultText | null) => {
    if (Platform.OS === 'web' && node != null) {
      // safe cast because above we already checked platform
      (node as unknown as HTMLElement).setAttribute('for', htmlFor);
    }
  }, []);

  return (
    <Text
      accessibilityRole={
        Platform.OS === 'web'
          ? ('label' as DefaultText['props']['accessibilityRole'])
          : undefined
      }
      ref={ref}
      style={[{ color }, style]}
      {...otherProps}
    />
  );
}
