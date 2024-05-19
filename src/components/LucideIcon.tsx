import React from 'react';
// Assuming you're using TypeScript, you would need to import the specific icon library types
import { icons, LucideProps } from 'lucide-react-native';
import { ColorValue } from 'react-native';

interface IconProps {
  name: keyof typeof icons;
  color?: ColorValue;
  size?: LucideProps['size'];
}

const Icon: React.FC<IconProps> = ({ name, color, size }) => {
  const LucideIcon: React.FC<LucideProps & { color?: ColorValue }> =
    icons[name];

  return <LucideIcon color={color} size={size} />;
};

export default Icon;
