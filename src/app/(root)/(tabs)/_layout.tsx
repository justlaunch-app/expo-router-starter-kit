import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';
import { useColorScheme } from 'nativewind';
import { TabBarIcon } from '@/components/core/icon';

const HeaderRight = () => {
  return (
    <Link href="/modal" asChild>
      <Pressable>{() => <TabBarIcon pathname="/modal" name="exclamation-circle" />}</Pressable>
    </Link>
  );
};

export default function TabLayout() {
  const { colorScheme } = useColorScheme();
  const iconColor = colorScheme === 'dark' ? 'white' : 'black';

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: iconColor,
      }}
    >
      <Tabs.Screen
        name="(index)"
        options={{
          title: 'Home',
          tabBarIcon: () => <TabBarIcon name="code" pathname="/" />,
          headerRight: HeaderRight,
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Tab Two',
          tabBarIcon: () => <TabBarIcon name="code" pathname="/two" />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: () => <TabBarIcon name="cog" pathname="/settings" />,
        }}
      />
    </Tabs>
  );
}
