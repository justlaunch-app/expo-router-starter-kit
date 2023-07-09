import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';
import { Text, View } from '_context/Themed';
import { ExternalLink } from '_components/ExternalLink';

export default function ModalScreen() {
  return (
    <>
      <View className="flex-1 items-center justify-center">
        <Text className="text-2xl font-bold">Modal</Text>
        <View
          className="my-8 h-px w-4/5"
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />

        <ExternalLink
          className="px-8 text-center"
          href="https://github.com/ritmillio/expo-starter-kit"
        >
          <Text className="text-blue-500">
            Check out the GitHub repo for this project! If you like it please
            make sure to give me a
            <Text className="text-2xl text-orange-300 font-bold"> STAR</Text>
          </Text>
        </ExternalLink>
        {/* Use a light status bar on iOS to account for the black space above the modal */}
        <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      </View>
    </>
  );
}
