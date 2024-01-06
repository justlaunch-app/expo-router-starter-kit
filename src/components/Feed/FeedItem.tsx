import { View, Text } from 'react-native';

interface Article {
  id: number;
  title: string;
  author: string;
  datePublished: string;
  content: string;
  imgSrc?: string;
}

interface RenderItemProps {
  item: Article;
}

export default function FeedItem({ item }: RenderItemProps) {
  return (
    <View className="bg-blue-200 dark:bg-stone-300 divide-y divide-solid mb-4 px-2 py-3">
      <Text className="text-blue-800">{item.id}.</Text>
      <Text>{item.title}</Text>
      <Text>{item.author}</Text>
      <Text>{item.datePublished}</Text>
      <Text>{item.content}</Text>
    </View>
  );
}
