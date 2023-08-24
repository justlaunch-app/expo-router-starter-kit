import React from 'react';
import { Text } from 'react-native';
import { useColorScheme as nativewindUseColorScheme, styled } from 'nativewind';

interface StyledTextProps {
  children: React.ReactNode;
  className?: string;
  selectable?: boolean;
  fontFamily?: string;
}

const StyledComponent = styled(Text);

export function StyledText({
  children,
  className,
  selectable = false,
  fontFamily,
}: StyledTextProps) {
  const { colorScheme } = nativewindUseColorScheme();
  const textColor = colorScheme === 'dark' ? 'white' : 'black';
  return (
    <StyledComponent
      className={className}
      selectable={selectable}
      style={{ color: textColor, fontFamily: fontFamily }}
    >
      {children}
    </StyledComponent>
  );
}
