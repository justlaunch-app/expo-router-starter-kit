import { Link, Tabs } from 'expo-router';
import { Platform, Pressable } from 'react-native';
import { useColorScheme } from 'nativewind';
import { TabBarIcon } from '_components/Icon/TabBarIcon';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { WebLayout } from '_components/Layout/WebLayout';
import { useTranslation } from 'react-i18next';
import React from 'react';

type TabBarIconProps = { color: string };

const TabBar = ({ color }: TabBarIconProps) => (
  <TabBarIcon name="code" color={color} />
);

const HeaderRight = () => {
  const { colorScheme } = useColorScheme();
  return (
    <Link href="/modal" asChild>
      <Pressable>
        {({ pressed }) => (
          <FontAwesome
            name="info-circle"
            size={25}
            color={colorScheme === 'dark' ? 'white' : 'black'}
            style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
          />
        )}
      </Pressable>
    </Link>
  );
};

const TwoTabBarIcon = ({ color }: TabBarIconProps) => (
  <TabBarIcon name="code" color={color} />
);
const SettingsTabBarIcon = ({ color }: TabBarIconProps) => (
  <TabBarIcon name="cog" color={color} />
);

export default function TabLayout() {
  const { colorScheme } = useColorScheme();
  const { t } = useTranslation();
  if (Platform.OS === 'web') {
    return (
      <WebLayout
        links={[
          {
            href: '/(root)/(tabs)/(index)',
            name: t('tabs.one'),
            isActive: (path) =>
              path.toLowerCase() === '/' || path.toLowerCase().includes('feed'),
          },
          {
            href: '/(root)/(tabs)/two',
            name: t('tabs.two'),
            isActive: (path) => path.toLowerCase().includes('two'),
          },
          {
            href: '/(root)/(tabs)/settings',
            name: t('tabs.settings'),
            isActive: (path) => path.toLowerCase().includes('settings'),
          },
        ]}
      />
    );
  }

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colorScheme === 'dark' ? 'white' : 'black',
      }}
    >
      <Tabs.Screen
        name="(index)"
        options={{
          title: t('tabs.one'),
          tabBarIcon: TabBar,
          headerRight: HeaderRight,
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: t('tabs.two'),
          tabBarIcon: TwoTabBarIcon,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: t('tabs.settings'),
          tabBarIcon: SettingsTabBarIcon,
        }}
      />
    </Tabs>
  );
}
