import { View, ScrollView } from 'react-native';
import { Text } from '@/components/core/text';
import { Image } from 'expo-image';
import { useLocalSearchParams, Stack } from 'expo-router';
import { blurhash } from '@/lib/blurhash';

const DetailFeed = () => {
  const { id, author, imgSrc, title, datePublished, content } = useLocalSearchParams();

  return (
    <ScrollView>
      <Stack.Screen
        options={{
          headerTitle: `FEED ${id}`,
        }}
      />
      <Image
        className="h-[25vh] w-screen mx-auto"
        source={imgSrc}
        placeholder={blurhash}
        contentFit="cover"
        transition={1000}
      />
      <View className="px-4 pt-5 mx-auto w-screen">
        <Text className="text-2xl uppercase text-orange-500 dark:text-purple-600">DetailFeed</Text>
        <Text className="py-4 text-xl font-bold dark:text-white">ID: {id}</Text>
        <Text className="italic text-lg py-4 dark:text-white">{title}</Text>
        <Text className="text-lg dark:text-white">{author}</Text>
        <Text className="italic py-4 text-green-500 dark:text-white">Created: {datePublished}</Text>
        <Text className="px-4 pt-4 dark:text-white">{content}</Text>
      </View>
    </ScrollView>
  );
};

export default DetailFeed;
