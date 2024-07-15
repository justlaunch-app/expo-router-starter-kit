import { MaterialTopTabs } from '@/layouts/material-top-tabs';
import { useColorScheme } from 'nativewind';

export default function IndexTopTabsLayout() {
  const { colorScheme } = useColorScheme();
  return (
    <MaterialTopTabs
      className={colorScheme === 'light' ? 'bg-red-500' : 'bg-green-500'}
      screenOptions={{}}
    />
  );
}
