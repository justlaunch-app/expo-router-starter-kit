import { useNavigation } from 'expo-router';
import { useLayoutEffect } from 'react';

export const useSetTitle = (title: string) => {
  const { setOptions } = useNavigation();

  useLayoutEffect(() => {
    setOptions({ title });
  }, [setOptions, title]);
};
