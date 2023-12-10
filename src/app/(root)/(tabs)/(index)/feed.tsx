import { FlashList } from '@shopify/flash-list';
import { View } from 'react-native';
import { Link } from 'expo-router';

//DATA
import feedData from '_assets/data/feed.json';

//COMPONENTS
import FeedItem from '_components/Feed/FeedItem';
import { spacing } from '_utils/viewport';

interface Article {
  id: number;
  title: string;
  author: string;
  datePublished: string;
  content: string;
  imgSrc: string;
}

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
          <View className="w-full">
            <View className="h-[150px] w-full">
              <Link
                className="w-full"
                href={{
                  pathname: '/feed/[id]',
                  params: {
                    id: item.id,
                    title: item.title,
                    author: item.author,
                    datePublished: item.datePublished,
                    content: item.content,
                    imgSrc: item.imgSrc,
                  },
                }}
              >
                <FeedItem item={item} />
              </Link>
            </View>
            <View className="bg-white" style={{ height: spacing }} />
          </View>
        )}
      />
    </View>
  );
}
