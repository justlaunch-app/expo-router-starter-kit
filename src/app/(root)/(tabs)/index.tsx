import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';

//i18n
import { useTranslation } from 'react-i18next';

export default function App() {
  const { t } = useTranslation();

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-blue-500">
        Open up App.js to start working on your app!
      </Text>
      <Text>{t('greeting')}</Text>
      <StatusBar style="auto" />
    </View>
  );
}
