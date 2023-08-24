import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, useColorScheme } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { viewportWidth, spacing } from '_utils/viewport';
import { Link } from 'expo-router';
import analytics from '_utils/analytics/segment';

//i18n
import { useTranslation } from 'react-i18next';

//Components
import { Carousel } from '_components/Carousel/Carousel';

//Data
import homeData from '_assets/data/home.json';
import { classNames } from '_utils/classNames';

export default function Index() {
  const { t } = useTranslation();
  const colorScheme = useColorScheme();

  analytics.trackScreen('Home');

  return (
    <SafeAreaView
      className={classNames({
        'flex flex-1 items-center justify-start': true,
        'bg-white': colorScheme === 'light',
        'bg-black': colorScheme === 'dark',
      })}
    >
      <Text className="text-blue-500 pt-2 text-2xl text-bold">
        {t('greeting')}
      </Text>
      <Text className="text-blue-500 text-xl px-8 pt-5 pb-10">
        This is an example of using Material Top Tabs with Bottom navigation in
        expo-router
      </Text>

      <View className="flex flex-1 items-center">
        <Carousel
          data={homeData}
          showPagination={true}
          renderItem={({ item }: any) => (
            <Link
              onPress={() => {
                analytics.trackEvent('Banner Pressed', {
                  bannerId: item.id,
                });
              }}
              href={{
                pathname: '/banner/[id]',
                params: {
                  id: item.id,
                  title: item.title,
                  description: item.description,
                },
              }}
              style={{
                width: viewportWidth * 0.8,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 5 },
                shadowOpacity: 0.3,
                shadowRadius: 3,
                elevation: 1,
                marginRight: spacing,
              }}
              className="justify-center items-center bg-white rounded-2xl p-4"
            >
              <Text className="text-5xl font-bold">{item.title}</Text>
              <Text>{item.description}</Text>
            </Link>
          )}
        />
      </View>

      <View className="py-12 px-8">
        <Text className="text-blue-500">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam,
          eveniet ut unde, nemo minus nisi, ullam iure exercitationem amet quia
          praesentium! Minima non debitis labore, rem odit enim itaque qui?
        </Text>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
