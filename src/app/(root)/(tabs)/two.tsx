import React from 'react';
import { Text, View } from '_context/Themed';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ExternalLink } from '_components/ExternalLink';

export default function TabTwoScreen() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <Text className="text-lg font-bold">Tab Two</Text>
      <View
        className="my-8 h-1 w-4/5"
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />

      <ExternalLink
        className="px-8 text-center"
        href="https://github.com/ritmillio/expo-starter-kit"
      >
        <Text className="text-blue-500">
          Check out the GitHub repo for this project! If you like it please make
          sure to give me a
          <Text className="text-2xl text-orange-300 font-bold"> STAR</Text>
        </Text>
      </ExternalLink>
    </SafeAreaView>
  );
}
