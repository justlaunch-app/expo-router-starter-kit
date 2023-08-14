import React from 'react';
import { View } from '_context/Themed';
import { MonoText as Text } from '_components/StyledText';
import appVersion from '_config/version';

export function AppVersion() {
  return (
    <View className="bg-red-500 px-4 py-2 rounded-lg">
      <Text className="text-white">Your app version is: {`${appVersion}`}</Text>
    </View>
  );
}
