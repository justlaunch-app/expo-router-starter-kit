/**
 * Icon component with FontAwesome
 * @param className - optional class name
 * @param size - optional size
 * @param name - icon name
 * @param color - optional color
 * @param onPress - optional onPress function
 * @returns React.ReactNode
 *
 * @example
 * <Icon name="home" size={24} color="black" />
 * <Icon name="home" size={24} color="black" className="text-white" />
 *
 * @see https://icons.expo.fyi/
 * @see https://icons.expo.fyi/FontAwesome
 *
 */

import { FontAwesome } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { ColorValue, StyleProp, TextStyle } from 'react-native';
import { usePathname } from 'expo-router';
import { useColorScheme } from 'nativewind';
import { TAB_THEME } from '@/theme';

/** 
 * 
 * @see https://lucide.dev/guide/packages/lucide-react-native
 * WARNING
    The example below imports all ES Modules, so exercise caution when using it. Importing all icons will significantly increase the build size of the application, negatively affecting its performance. This is especially important to keep in mind when using bundlers like Webpack, Rollup, or Vite.

    If you don't want to include Lucide icons in your bundle, please comment out or remove the import statement  and LucideIcon component below.
 */
import { icons, LucideProps } from 'lucide-react-native';

export const Icon = ({
  name,
  color,
  className,
  size,
  onPress,
  style,
}: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color?: ColorValue;
  className?: string;
  size?: number;
  onPress?: () => void;
  style?: StyleProp<TextStyle>;
}) => {
  return (
    <FontAwesome
      style={style}
      onPress={onPress}
      name={name}
      color={color}
      className={className}
      size={size}
    />
  );
};

export const LucideIcon = ({
  name,
  color,
  size,
  className,
  strokeWidth = 1,
  onPress,
}: {
  name: keyof typeof icons;
  color?: ColorValue;
  size?: LucideProps['size'];
  className?: string;
  strokeWidth?: LucideProps['strokeWidth'];
  onPress?: () => void;
}) => {
  const LucideIcon: React.FC<LucideProps & { color?: ColorValue }> = icons[name];

  return (
    <LucideIcon
      onPress={onPress}
      strokeWidth={strokeWidth}
      className={className}
      color={color}
      size={size}
    />
  );
};

export const Ionicon = ({
  name,
  color,
  size,
  className,
  style,
  onPress,
}: {
  name: React.ComponentProps<typeof Ionicons>['name'];
  color?: ColorValue;
  size?: number;
  className?: string;
  style?: StyleProp<TextStyle>;
  onPress?: () => void;
}) => {
  return (
    <Ionicons
      style={style}
      onPress={onPress}
      name={name}
      color={color}
      className={className}
      size={size}
    />
  );
};

export const TabBarIcon = ({
  name,
  pathnames = [],
  className,
}: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  pathnames?: string[];
  className?: string;
}) => {
  const currentPath = usePathname();
  const { colorScheme } = useColorScheme();

  const isActive = pathnames.includes(currentPath);
  const color = TAB_THEME[colorScheme || 'light'];

  return (
    <Icon
      className={className}
      name={name}
      size={isActive ? 32 : 28}
      color={isActive ? color.activeTintColor : color.inactiveTintColor}
      style={{ marginBottom: -3 }}
    />
  );
};
