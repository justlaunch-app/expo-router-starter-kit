import { Link, Tabs } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Pressable } from 'react-native';
import { useColorScheme } from 'nativewind';
import { useTranslation } from 'react-i18next';

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
  className?: string;
}) {
  return <FontAwesome className={props.className} size={28} style={{ marginBottom: -3 }} {...props} />;
}

const HeaderRight = () => {
  const { colorScheme } = useColorScheme();

  return (
    <Link href="/modal" asChild>
      <Pressable>
        {() => (
          <TabBarIcon
            name="exclamation-circle"
            color={colorScheme === 'dark' ? 'white' : 'black'}
            className="mr-3"
          />
        )}
      </Pressable>
    </Link>
  );
};

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
          tabBarIcon: () => <TabBarIcon name='code' color={colorScheme === 'dark' ? 'white' : 'black'}/>,
          headerRight: HeaderRight,
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: t('tabs.two'),
          tabBarIcon: () => <TabBarIcon name='code' color={colorScheme === 'dark' ? 'white' : 'black'}/>,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: t('tabs.settings'),
          tabBarIcon: () => <TabBarIcon name='cog' color={colorScheme === 'dark' ? 'white' : 'black'} />,
        }}
      />
    </Tabs>
  );
}
