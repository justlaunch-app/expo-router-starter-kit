import { FlashList } from '@shopify/flash-list';
import { View } from 'react-native';
import { Link } from 'expo-router';
import analytics from '_utils/analytics/segment';

//DATA
import feedData from '_assets/data/feed.json';

//COMPONENTS
import FeedItem from '_components/Feed/FeedItem';
import { spacing } from '_utils/viewport';
import { Article } from '_types/Article';
import { FeedLink } from '_components/Feed/FeedLink';



interface RenderItemProps {
  item: Article;
}


export default function Feed() {
  analytics.trackScreen('Feed');
  return (
    <View className="flex-1">
      <FlashList
        data={feedData}
        estimatedItemSize={150}
        renderItem={({ item }: RenderItemProps) => (
          <FeedLink item={item} analytics={analytics} />
        )}
      />
    </View>
  );
}
