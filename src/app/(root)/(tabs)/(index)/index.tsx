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
      <Text className="pt-10">{t('greeting')}</Text>
      <View className="py-10">
        <Carousel
          data={homeData}
          showPagination={true}
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
              className="justify-center items-center bg-white rounded-2xl p-4"
            >
              <Text className="text-5xl font-bold">{item.title}</Text>
              <Text>{item.description}</Text>
            </View>
          )}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
