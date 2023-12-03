import { MaterialTopTabs } from '_layouts/material-top-tabs';
import { Platform } from 'react-native';
import { NestedWebLayout } from '_components/Layout/NestedWebLayout';
import { useTranslation } from 'react-i18next';

export default function IndexTopTabsLayout() {
  const { t } = useTranslation();
  if (Platform.OS === 'web')
    return (
      <NestedWebLayout
        links={[
          {
            href: '/(root)/(tabs)/(index)/',
            name: t('tabs.home'),
            isActive: (path) => path === '/',
          },
          {
            href: '/(root)/(tabs)/(index)/feed',
            name: t('tabs.feed'),
            isActive: (path) => path.includes('feed'),
          },
        ]}
      />
    );

  return <MaterialTopTabs screenOptions={{}} />;
}
