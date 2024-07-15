import { View } from 'react-native';
import { Text } from '@/components/core/text';
import { Image } from 'expo-image';
import { ParallaxScrollView } from '@/components/core/parallax-scroll-view';
import { useLocalSearchParams } from 'expo-router';
import { blurhash } from '@/lib/blurhash';

export default function DetailFeed() {
  const { title, description, imageUrl, date, author } = useLocalSearchParams();

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <Image
          style={{ flex: 1, width: '100%', backgroundColor: '#0553' }}
          source={imageUrl}
          placeholder={{ blurhash }}
          contentFit="cover"
          transition={1000}
        />
      }
    >
      <View className="px-1 pt-2">
        <Text variant="largeTitle">{title}</Text>
        <Text variant="callout" className="pt-2">
          {description}
        </Text>
        <View className="flex flex-row items-center justify-between">
          <Text variant="caption1" className="pt-2 font-semibold italic">
            {date}
          </Text>
          <Text variant="caption1" className="pt-2 font-extrabold uppercase">
            {author}
          </Text>
        </View>
      </View>
    </ParallaxScrollView>
  );
}
