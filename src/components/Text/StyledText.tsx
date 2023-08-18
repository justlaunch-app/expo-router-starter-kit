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

const StyledText: React.FC<StyledTextProps> = ({
  children,
  className,
  selectable = false,
  fontFamily,
}) => {
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
};

export default StyledText;
