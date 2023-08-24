import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

//COMPONENTS
import { Pressable, Text, View } from 'react-native';
import LanguagePicker from '_components/Picker/LanguagePicker';
import AppVersion from '_components/Device/AppVersion';
import LoginInfo from '_components/Login/LoginInfo';

import { useColorScheme as nativewindUseColorScheme } from 'nativewind';

export default function Settings() {
  const { colorScheme, toggleColorScheme } = nativewindUseColorScheme();

  return (
    <SafeAreaView className="flex-1 items-center justify-between">
      <View className="flex-1">
        <Pressable onPress={toggleColorScheme}>
          <Text className="text-green-500">{`The color scheme is ${colorScheme}`}</Text>
        </Pressable>
      </View>
      <View className="flex-1 relative bg-transparent">
        <LoginInfo />
      </View>
      <View className="flex-1 relative bg-transparent">
        <LanguagePicker />
      </View>
      <View className="flex-1 justify-end relative bg-transparent">
        <AppVersion />
      </View>
    </SafeAreaView>
  );
}
