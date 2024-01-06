import { Link, Tabs } from 'expo-router';
import { Platform, Pressable } from 'react-native';
import { useColorScheme } from 'nativewind';
import { Icon } from '_components/Icon/Icon';
import { WebLayout } from '_components/Layout/WebLayout';
import { useTranslation } from 'react-i18next';
import { icons } from 'lucide-react-native';


type TabBarIconWrapperProps = {
  name: keyof typeof icons;
  color: string;
};

const HeaderRight = () => {
  const { colorScheme } = useColorScheme();
  return (
    <Link href="/modal" asChild>
      <Pressable>
        {() => (
          <Icon
            name="AlertOctagon"
            size={25}
            color={colorScheme === 'dark' ? 'white' : 'black'}
            className='mb-1 mr-5'
          />
        )}
      </Pressable>
    </Link>
  );
};

const TabBarIconWrapper = ({ name, color }: TabBarIconWrapperProps) => (
  <Icon name={name} size={25} color={color} />
);

export default function TabLayout() {
  const { colorScheme } = useColorScheme();
  const iconColor = colorScheme === 'dark' ? 'white' : 'black';
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
        tabBarActiveTintColor: iconColor,
      }}
    >
      <Tabs.Screen
        name="(index)"
        options={{
          title: t('tabs.one'),
          tabBarIcon: () => <TabBarIconWrapper name="SmartphoneCharging" color={iconColor} />,
          headerRight: HeaderRight,
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: t('tabs.two'),
          tabBarIcon: () => <TabBarIconWrapper name="Braces" color={iconColor} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: t('tabs.settings'),
          tabBarIcon: () => <TabBarIconWrapper name="Cog" color={iconColor} />,
        }}
      />
    </Tabs>
  );
}
