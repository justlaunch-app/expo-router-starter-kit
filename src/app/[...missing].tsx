import React from 'react';
import { Link, Stack } from 'expo-router';
import { Text, View } from 'react-native';
import analytics from '_utils/analytics/segment';

export default function NotFoundScreen() {
  analytics.trackScreen('NotFoundScreen');
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View className="flex-1 items-center justify-center p-5">
        <Text className="text-2xl font-bold">This screen doesn't exist.</Text>

        <Link href="/" className="mt-4 py-4">
          <Text className="text-base text-blue-600">Go to home screen!</Text>
        </Link>
      </View>
    </>
  );
}
