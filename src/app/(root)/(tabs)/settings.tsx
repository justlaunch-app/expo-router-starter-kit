import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

//COMPONENTS
import { Pressable, Text, View } from 'react-native';
import LanguagePicker from '_components/Picker/LanguagePicker';
import DeviceInfo from '_components/Device/DeviceInfo';
import AppVersion from '_components/Device/AppVersion';
import LoginInfo from '_components/Login/LoginInfo';
import Divider from '_components/Divider/Divider';

import { useColorScheme as nativewindUseColorScheme } from 'nativewind';
import analytics from '_utils/analytics/segment';

export default function Settings() {
  const { colorScheme, toggleColorScheme } = nativewindUseColorScheme();

  analytics.trackScreen('Settings');

  return (
    <SafeAreaView className="flex-1 items-center justify-between">
      <View className="flex-1">
        <Pressable
          onPress={() => {
            toggleColorScheme;

            analytics.trackEvent('Color Scheme Toggled', {
              colorScheme: colorScheme,
            });
          }}
        >
          <Text className="text-green-500">{`The color scheme is ${colorScheme}`}</Text>
        </Pressable>
      </View>
      <View className="flex-1 relative bg-transparent">
        <LoginInfo />
      </View>
      <View className="flex-1 relative bg-transparent">
        <LanguagePicker />
      </View>

      <View className="flex-1 justify-end relative bg-transparent mt-12">
        <Text className="text-lg font-bold">Device Info</Text>
        <DeviceInfo />
        <Divider />
        <AppVersion />
      </View>
    </SafeAreaView>
  );
}
