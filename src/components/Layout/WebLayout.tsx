import Slot = Navigator.Slot;
import { Navigator, usePathname, Link } from 'expo-router';
import { Platform, View } from 'react-native';
import { StyledText as Text } from '_components/Text/StyledText';
import { classNames } from '_utils/classNames';
import { pathToName } from '_utils/layout';
import { Button } from '_components/Button/Button';
import { WebLayoutLink } from '_types/WebLayoutLink';

interface WebLayoutProps {
  links?: WebLayoutLink[];
  title?: string;
  logoutTitle?: string;
}

export function WebLayout({
  links = [],
  title = 'EXPO STARTER KIT',
  logoutTitle = 'Logout',
}: Readonly<WebLayoutProps>) {
  const pathname = usePathname();

  if (Platform.OS === 'web') {
    return (
      <View>
        <View className={'p-4 z-50 bg-white shadow-sm text-white'}>
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
        <View className={''}>
          <Slot />
        </View>
      </View>
    );
  }
}
