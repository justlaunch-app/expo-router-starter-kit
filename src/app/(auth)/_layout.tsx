import { MaterialTopTabs } from '_layouts/material-top-tabs';
import { useNavigation } from 'expo-router';
import { useLayoutEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function IndexTopTabsLayout() {
  const { setOptions } = useNavigation();

  useLayoutEffect(() => {
    setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-white h-screen">
      <MaterialTopTabs />
    </SafeAreaView>
  );
}
