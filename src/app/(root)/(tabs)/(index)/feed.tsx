import { View, FlatList } from 'react-native';
import { Article } from '@srcTypes/Article';
import { FeedLink } from '@components/Feed/FeedLink';

import feedData from '@assets/data/feed.json';

interface RenderItemProps {
  item: Article;
}
export default function Feed() {
  return (
    <View className="flex-1">
      <FlatList
        data={feedData}
        renderItem={({ item }: RenderItemProps) => <FeedLink item={item} />}
      />
    </View>
  );
}
