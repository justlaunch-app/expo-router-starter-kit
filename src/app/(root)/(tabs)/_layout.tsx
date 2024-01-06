import { Link, Tabs } from 'expo-router';
import { Pressable, Text } from 'react-native';
import { useColorScheme } from 'nativewind';
// import { Icon } from '_components/Icon/Icon';
import { useTranslation } from 'react-i18next';
// import { icons } from 'lucide-react-native';

// type TabBarIconWrapperProps = {
//   name: keyof typeof icons;
//   color: string;
// };

const HeaderRight = () => {
  // const { colorScheme } = useColorScheme();
  return (
    <Link href="/modal" asChild>
      <Pressable>
        {() => (
          // <Icon
          //   name="AlertOctagon"
          //   size={25}
          //   color={colorScheme === 'dark' ? 'white' : 'black'}
          //   className='mb-1 mr-5'
          // />
          <Text>a</Text>
        )}
      </Pressable>
    </Link>
  );
};

const TabBarIconWrapper = () => (
  // <Icon name={name} size={25} color={color} />
  <Text>a</Text>
);

export default function TabLayout() {
  const { colorScheme } = useColorScheme();
  const iconColor = colorScheme === 'dark' ? 'white' : 'black';
  const { t } = useTranslation();

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
          tabBarIcon: () => <TabBarIconWrapper />,
          headerRight: HeaderRight,
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: t('tabs.two'),
          tabBarIcon: () => <TabBarIconWrapper />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: t('tabs.settings'),
          tabBarIcon: () => <TabBarIconWrapper />,
        }}
      />
    </Tabs>
  );
}
