import { Switch } from 'react-native';
import { useColorScheme } from 'nativewind';
import { COLORS } from '@/theme/colors';
import { ThemeToggle } from './theme-toggle';

export const Toggle = (props: React.ComponentPropsWithoutRef<typeof Switch>) => {
  const { colorScheme } = useColorScheme();
  const colors = COLORS[colorScheme];

  return (
    <Switch
      trackColor={{
        true: colors.primary,
        false: colors.grey,
      }}
      thumbColor={COLORS.white}
      {...props}
    />
  );
};

export { ThemeToggle };
