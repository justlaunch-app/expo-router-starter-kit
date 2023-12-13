import { ActivityIndicator, Image, View } from 'react-native';
import { StyledText as Text } from '_components/Text/StyledText';
import { FlashList } from '@shopify/flash-list';
import { useMemo } from 'react';
import { Link } from 'expo-router';
import { useUsers } from '_hooks/useUsers';
import { UserData } from '_types/Users';
import { Button } from '_components/Button/Button';

export default function TabTwoScreen() {
  const { data: users, fetchNextPage, isLoading } = useUsers();

  const displayUsers = useMemo(() => {
    return users?.pages
      .map((page) => page?.data)
      .filter(Boolean)
      .flat() as Array<UserData>;
  }, [users]);

  return (
    <View className={'px-4 flex-1'}>
      <View className={'flex-row justify-between items-center'}>
        <Text className={'text-2xl py-4'}>Users</Text>
        <Link href={'/user/add'} asChild>
          <Button title={'Add User'} />
        </Link>
      </View>
      <View className="flex-1">
        {Boolean(displayUsers?.length) && (
          <FlashList
            onEndReached={() => {
              void fetchNextPage();
            }}
            renderItem={({ item }) => (
              <Link
                href={`/user/${item.id}`}
                key={item.id}
                className={
                  'shadow-sm bg-white my-2 p-2 items-center justify-center'
                }
              >
                <View className={'items-center gap-2 flex-row'}>
                  <Image
                    source={{ uri: item.avatar }}
                    className={'w-12 h-12 rounded-full'}
                  />
                  <Text className="text-lg font-bold w-full">
                    {item.first_name} {item.last_name}
                  </Text>
                </View>
              </Link>
            )}
            data={displayUsers ?? []}
            estimatedItemSize={200}
          />
        )}
      </View>
      {isLoading && (
        <View className="flex justify-center items-center py-4">
          <ActivityIndicator />
        </View>
      )}
    </View>
  );
}
