import { View, Text } from 'react-native';
import React from 'react';
import { useLocalSearchParams, Stack } from 'expo-router';

const DetailFeed = () => {
  const { id, title, author, datePublished, content } = useLocalSearchParams();

  return (
    <View className="flex-1 items-center pt-20">
      <Stack.Screen
        options={{
          headerTitle: `FEED ${id}`,
        }}
      />
      <Text className="text-2xl uppercase">DetailFeed</Text>
      <Text className="py-4 text-xl font-bold">ID: {id}</Text>
      <Text className="italic text-lg py-4">{title}</Text>
      <Text className="text-lg">{author}</Text>
      <Text className="italic py-4">Created: {datePublished}</Text>
      <Text className="px-4 pt-4">{content}</Text>
    </View>
  );
};

export default DetailFeed;
