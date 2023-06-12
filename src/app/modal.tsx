import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';

import EditScreenInfo from '_components/EditScreenInfo';
import { Text, View } from '_context/Themed';

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
        <EditScreenInfo path="app/modal.tsx" />

        {/* Use a light status bar on iOS to account for the black space above the modal */}
        <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      </View>
    </>
  );
}
