import React from 'react';
import { FlashList } from '@shopify/flash-list';
import { viewportWidth } from '_utils/viewport';

interface CarouselProps<T> {
  data: T[];
  renderItem: any;
}

export const Carousel = <T,>({ data, renderItem }: CarouselProps<T>) => {
  return (
    <FlashList
      className="w-full justify-center items-center bg-white rounded-lg p-2.5 shadow-md m-x-2.5"
      data={data}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      estimatedItemSize={viewportWidth - 40}
    />
  );
};
