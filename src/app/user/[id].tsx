import { Text, View } from 'react-native';
import { useRoute } from '@react-navigation/core';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image } from 'expo-image';
import { useNavigation } from 'expo-router';
import { useLayoutEffect } from 'react';
import { ExternalLink } from '_components/Link/ExternalLink';
import { useUser } from '_hooks/useUsers';

export default function User() {
  const { params } = useRoute();
  const { id } = params as { id: string };
  const { data, isLoading } = useUser({ variables: { id } });
  const { setOptions } = useNavigation();

  useLayoutEffect(() => {
    setOptions({
      headerTitle: data?.data?.first_name,
    });
  }, [data, setOptions]);

  return (
    <SafeAreaView className={'p-4 justify-center items-center h-full'}>
      {!data && !isLoading && (
        <View>We cannot find that user. Please try again later.</View>
      )}
      <View>
        {data?.data && (
          <>
            <Image
              source={{ uri: data.data.avatar }}
              className={'w-24 h-24 rounded-full mx-auto'}
            />
            <Text className={'text-2xl font-bold'}>
              {data.data.first_name} {data.data.last_name}
            </Text>
            <Text> {data.data.email}</Text>
          </>
        )}
      </View>
      {data?.support && (
        <View className={'px-4 mt-auto'}>
          <Text className={'text-xl font-bold'}>Support</Text>
          <Text>{data.support.text}</Text>
          <Text>
            <ExternalLink href={data.support.url}>
              <Text>{data.support.url}</Text>
            </ExternalLink>
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
}
