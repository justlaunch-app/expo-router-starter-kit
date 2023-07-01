import React from 'react';
import { Text, View } from 'react-native';
import { FlashList } from '@shopify/flash-list';

//Data
import feedData from '_assets/data/feed.json';

interface Article {
  id: number;
  title: string;
  author: string;
  datePublished: string;
  content: string;
}

interface RenderItemProps {
  item: Article;
}

export default function Feed() {
  return (
    <FlashList
      data={feedData}
      renderItem={({ item }: RenderItemProps) => (
        <View className="bg-blue-200 divide-y divide-solid mb-4 px-2 py-3">
          <Text className="text-blue-800">{item.id}.</Text>
          <Text>{item.title}</Text>
          <Text>{item.author}</Text>
          <Text>{item.datePublished}</Text>
          <Text>{item.content}</Text>
        </View>
      )}
      estimatedItemSize={200}
    />
  );
}
