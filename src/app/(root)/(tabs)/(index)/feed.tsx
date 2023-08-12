import React from 'react';
import { FlashList } from '@shopify/flash-list';
import { View } from 'react-native';
import { Link } from 'expo-router';

//DATA
import feedData from '_assets/data/feed.json';

//COMPONENTS
import FeedItem from '_components/FeedItem';

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
    <FlashList
      data={feedData}
      renderItem={({ item }: RenderItemProps) => (
        <Link
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
          <View className="my-4">
            <FeedItem item={item} />
          </View>
        </Link>
      )}
      estimatedItemSize={200}
    />
  );
}
