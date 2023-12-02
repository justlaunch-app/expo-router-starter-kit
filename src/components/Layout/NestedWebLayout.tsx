export import Slot = Navigator.Slot;
import { Link, Navigator, usePathname } from 'expo-router';
import { Platform, View } from 'react-native';
import { classNames } from '_utils/classNames';
import { pathToName } from '_utils/layout';

interface NestedLayoutProps {
  links?: any[];
}

export function NestedWebLayout({ links = [] }: NestedLayoutProps) {
  const pathname = usePathname();

  if (Platform.OS === 'web') {
    return (
      <View className={'w-full bg-white'}>
        <View className={'flex-row gap-2 py-4 w-full container mx-auto'}>
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
              {name || (isActive(pathname) ? pathToName(pathname) : '')}
            </Link>
          ))}
        </View>
        <Slot />
      </View>
    );
  }
}
