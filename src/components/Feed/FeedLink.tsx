import { Article } from '@srcTypes/Article';
import { Link } from 'expo-router';
import { View } from 'react-native';
import FeedItem from './FeedItem';

export function FeedLink({ item }: { item: Article }) {
  return (
    <View className="w-full">
      <View className="">
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
          <View className="w-screen">
            <FeedItem item={item} />
          </View>
        </Link>
      </View>
    </View>
  );
}
