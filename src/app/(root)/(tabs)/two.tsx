import React from 'react';

import EditScreenInfo from '../../../components/EditScreenInfo';
import { Text, View } from '../../../context/Themed';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TabTwoScreen() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <Text className="text-lg font-bold">Tab Two</Text>
      <View
        className="my-8 h-1 w-4/5"
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="app/(tabs)/two.tsx" />
    </SafeAreaView>
  );
}
