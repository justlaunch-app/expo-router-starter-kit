import { Text, TextProps } from 'react-native';
import { useColorScheme as nativewindUseColorScheme, styled } from 'nativewind';

interface StyledTextProps {
  children: React.ReactNode;
  className?: string;
  selectable?: boolean;
  fontFamily?: string;
  style?: TextProps['style'];
}

const StyledComponent = styled(Text);

export function StyledText({
  children,
  className,
  selectable = false,
  fontFamily,
  style,
}: StyledTextProps) {
  const { colorScheme } = nativewindUseColorScheme();
  const color = colorScheme === 'dark' ? 'white' : 'black';

  return (
    <StyledComponent
      baseTw={className}
      selectable={selectable}
      style={[{ color, fontFamily }, style]}
    >
      {children}
    </StyledComponent>
  );
}
