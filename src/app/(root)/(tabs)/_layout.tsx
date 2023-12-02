import { Link, Tabs } from 'expo-router';
import { Platform, Pressable } from 'react-native';
import { useColorScheme } from 'nativewind';
import { TabBarIcon } from '_components/Icon/TabBarIcon';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { WebLayout } from '_components/Layout/WebLayout';

export default function TabLayout() {
  const { colorScheme } = useColorScheme();
  if (Platform.OS === 'web') {
    return (
      <WebLayout
        links={[
          {
            href: '/(root)/(tabs)/(index)',
            name: 'One',
            isActive: (path) =>
              path.toLowerCase() === '/' || path.toLowerCase().includes('feed'),
          },
          {
            href: '/(root)/(tabs)/two',
            name: 'Two',
            isActive: (path) => path.toLowerCase().includes('two'),
          },
          {
            href: '/(root)/(tabs)/settings',
            name: 'Settings',
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
          title: 'Tab One',
          tabBarIcon: ({ color }: any) => (
            <TabBarIcon name="code" color={color} />
          ),
          headerRight: () => (
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
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <TabBarIcon name="cog" color={color} />,
        }}
      />
    </Tabs>
  );
}
