import { FlashList } from '@shopify/flash-list';
import { View } from 'react-native';
import { Article } from '_types/Article';
import { FeedLink } from '_components/Feed/FeedLink';

import feedData from '_assets/data/feed.json';


interface RenderItemProps {
  item: Article;
}
export default function Feed() {
  return (
    <View className="flex-1">
      <FlashList
        data={feedData}
        estimatedItemSize={150}
        renderItem={({ item }: RenderItemProps) => (
          <FeedLink item={item} />
        )}
      />
    </View>
  );
}
