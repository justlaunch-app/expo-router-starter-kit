import { Text, View, ScrollView } from 'react-native';
import { Image } from 'expo-image';
import { useLocalSearchParams, Stack } from 'expo-router';
import { blurhash } from '_utils/blurhash';
import * as Sharing from 'expo-sharing';
import TouchableOpacity from '_components/Button/TouchableOpacity';
import Ionicons from '@expo/vector-icons/Ionicons';
import analytics from '_utils/analytics/segment';

const DetailFeed = () => {
  const { id, author, imgSrc, title, datePublished, content } =
    useLocalSearchParams();

  analytics.trackScreen('DetailFeed', {
    feedId: id,
  });

  return (
    <ScrollView>
      <Stack.Screen
        options={{
          headerTitle: `FEED ${id}`,
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                Sharing.shareAsync('https://linktr.zoltanfodor.dev/');
                analytics.trackEvent('Share Creator', {
                  feedId: id,
                  url: 'https://linktr.zoltanfodor.dev/',
                });
              }}
            >
              <Ionicons name="share" size={24} color="black" />
            </TouchableOpacity>
          ),
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
        <Text className="text-2xl uppercase dark:text-white">DetailFeed</Text>
        <Text className="py-4 text-xl font-bold dark:text-white">ID: {id}</Text>
        <Text className="italic text-lg py-4 dark:text-white">{title}</Text>
        <Text className="text-lg dark:text-white">{author}</Text>
        <Text className="italic py-4 dark:text-white">
          Created: {datePublished}
        </Text>
        <Text className="px-4 pt-4 dark:text-white">{content}</Text>
      </View>
    </ScrollView>
  );
};

export default DetailFeed;
