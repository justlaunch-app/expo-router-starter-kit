import { MaterialTopTabs } from '_layouts/material-top-tabs';
import { Platform, View } from 'react-native';
import { Link, usePathname } from 'expo-router';
import { classNames } from '_utils/classNames';
import { NestedWebLayout, Slot } from '_components/Layout/NestedWebLayout';

export default function IndexTopTabsLayout() {
  if (Platform.OS === 'web')
    return (
      <NestedWebLayout
        links={[
          {
            href: '/(root)/(tabs)/(index)/',
            name: 'Home',
            isActive: (path) => path === '/',
          },
          {
            href: '/(root)/(tabs)/(index)/feed',
            name: 'Feed',
            isActive: (path) => path.includes('feed'),
          },
        ]}
      />
    );

  return <MaterialTopTabs screenOptions={{}} />;
}
