import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { viewportWidth } from '_utils/viewport';

//i18n
import { useTranslation } from 'react-i18next';

//Components
import { Carousel } from '_components/Carousel';

//Data
import homeData from '_assets/data/home.json';

export default function Index() {
  const { t } = useTranslation();

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-blue-500">Home</Text>
      <Text>{t('greeting')}</Text>
      <Carousel
        data={homeData}
        renderItem={({ item }: any) => (
          <View
            style={{
              width: viewportWidth,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 5 },
              shadowOpacity: 0.3,
              shadowRadius: 3,
              elevation: 1,
            }}
            className="justify-center items-center bg-white rounded-2xl p-4 m-x-4"
          >
            <Text className="text-5xl font-bold">{item.title}</Text>
            <Text className="text-4xl">{item.text}</Text>
          </View>
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}
