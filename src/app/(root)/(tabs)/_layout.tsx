import { Link, Navigator, Tabs, usePathname } from 'expo-router';
import { Platform, Pressable, View } from 'react-native';
import { useColorScheme } from 'nativewind';
import { TabBarIcon } from '_components/Icon/TabBarIcon';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Slot = Navigator.Slot;
import { StyledText as Text } from '_components/Text/StyledText';
import { Button } from '_components/Button/Button';
import { classNames } from '_utils/classNames';

export default function TabLayout() {
  const { colorScheme } = useColorScheme();
  if (Platform.OS === 'web') {
    return (
      <WebLayout
        links={[
          {
            href: '/(root)/(tabs)/(index)',
            name: 'One',
            isActive: (path) => path.toLowerCase() === '/',
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

interface Link {
  href: string;
  name?: string;
  isActive: (path: string) => boolean;
}

interface WebLayoutProps {
  links?: Link[];
  title?: string;
  logoutTitle?: string;
}

function WebLayout({
  links = [],
  title = 'EXPO STARTER KIT',
  logoutTitle = 'Logout',
}: Readonly<WebLayoutProps>) {
  const pathname = usePathname();

  if (Platform.OS === 'web') {
    return (
      <View>
        <View className={'p-4 z-50 bg-white shadow-sm text-white'}>
          <Text className={'text-red-500 z-50'}>{pathname}</Text>
          <View
            className={'container mx-auto flex-row items-center justify-center'}
          >
            <Text className="text-3xl dark:text-white text-black font-semibold flex-1">
              {title}
            </Text>
            <View
              className={
                'flex items-center justify-center gap-2 flex-row flex-1'
              }
            >
              {links.map(({ href, name, isActive }) => (
                <Link
                  key={href}
                  href={href}
                  className={classNames({
                    'font-medium text-xl hover:underline': true,
                    'text-blue-600 dark:text-blue-500 underline':
                      isActive(pathname),
                  })}
                >
                  {name ?? (isActive(pathname) ? pathToName(pathname) : '')}
                </Link>
              ))}
            </View>
            <Button title={logoutTitle} />
          </View>
        </View>
        <View className={'container mx-auto py-4'}>
          <Slot />
        </View>
      </View>
    );
  }
}

// Utility function to extract the name from the path
function pathToName(path: string): string {
  const parts = path.split('/');
  return parts[parts.length - 1];
}
