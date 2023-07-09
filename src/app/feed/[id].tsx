import { View, Text } from 'react-native';
import React from 'react';
import { useLocalSearchParams, Stack } from 'expo-router';

const DetailFeed = () => {
  const props = useLocalSearchParams();

  return (
    <View className="flex-1 items-center pt-20">
      <Stack.Screen
        options={{
          headerTitle: `FEED ${props.id}`,
        }}
      />
      <Text className="text-2xl uppercase">DetailFeed</Text>
      <Text className="py-4 text-xl font-bold">ID: {props.id}</Text>
      <Text className="italic text-lg py-4">{props.title}</Text>
      <Text className="text-lg">{props.author}</Text>
      <Text className="italic py-4">Created: {props.datePublished}</Text>
      <Text className="px-4 pt-4">{props.content}</Text>
    </View>
  );
};

export default DetailFeed;
