/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */
import React, { ComponentProps } from 'react';
import {
  Text as DefaultText,
  useColorScheme,
  View as DefaultView,
  Platform,
} from 'react-native';

import Colors from '_constants/Colors';

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme() ?? 'light';
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText['props'];

export type ViewProps = ThemeProps & DefaultView['props'];

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    'background'
  );

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}

type LabelProps = TextProps & { htmlFor: string };

export function Label({ htmlFor, ...props }: LabelProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  const ref = React.useCallback((node: DefaultText | null) => {
    if (Platform.OS === 'web' && node != null) {
      // safe cast because above we already checked platform
      (node as unknown as HTMLElement).setAttribute('for', htmlFor);
    }
  }, []);

  return (
    <DefaultText
      accessibilityRole={
        Platform.OS === 'web'
          ? ('label' as ComponentProps<typeof DefaultText>['accessibilityRole'])
          : undefined
      }
      ref={ref}
      style={[{ color }, style]}
      {...otherProps}
    />
  );
}
