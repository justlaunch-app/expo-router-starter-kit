import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import i18n from '_locales/index';

//COMPONENTS
import LanguagePicker from '_components/LanguagePicker';
import AppVersion from 'src/components/AppVersion';
import LoginInfo from '_components/LoginInfo';
import { View } from '_context/Themed';

import { useColorScheme as nativewindUseColorScheme } from 'nativewind';
import { Pressable, Text, useColorScheme } from 'react-native';

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
