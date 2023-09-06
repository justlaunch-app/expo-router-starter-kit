import { View, Text } from 'react-native';
import React from 'react';
import { useLocalSearchParams, Stack } from 'expo-router';
import analytics from '_utils/analytics/segment';

const BannerDetail = () => {
  const props = useLocalSearchParams();

  analytics.trackScreen('BannerDetail', {
    bannerId: props.id,
  });

  return (
    <View className="flex-1 items-center pt-20">
      <Stack.Screen
        options={{
          headerTitle: `Banner - ${props.title}`,
        }}
      />
      <Text className="text-2xl uppercase dark:text-white">BannerDetail</Text>
      <Text className="text-lg uppercase dark:text-white">{title}</Text>
      <Text className="text-lg uppercase dark:text-white">{id}</Text>
      <Text className="text-lg uppercase dark:text-white">{description}</Text>
    </View>
  );
};

export default BannerDetail;
