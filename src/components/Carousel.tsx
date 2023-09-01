import React, { useState } from 'react';
import { Platform, View } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import { viewportWidth, spacing } from '_utils/viewport';

interface CarouselProps<T> {
  data: T[];
  renderItem: any;
  showPagination?: boolean;
  className?: string;
}

const estimatedItemSize = Math.floor(viewportWidth * 0.8);

export const Carousel = <T,>({
  data,
  renderItem,
  showPagination = true,
  className,
}: CarouselProps<T>) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const itemSize = Math.floor(viewportWidth * 0.8);
  const fullItemSize = itemSize + spacing; // Item size including the space

  const handleScroll = (event: any) => {
    const offset = event.nativeEvent.contentOffset.x;
    const index = Math.round(offset / fullItemSize);
    setActiveIndex(index);
  };

  return (
    <>
      <FlashList
        className={className}
        data={data}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        onScroll={handleScroll}
        contentContainerStyle={{
          paddingHorizontal: spacing,
        }}
        estimatedItemSize={estimatedItemSize}
      />
      {showPagination && (
        <View className="flex-row justify-center mt-4">
          {data.map((_, index) => (
            <View
              key={index}
              style={{
                width: 8,
                height: 8,
                borderRadius: 4,
                backgroundColor: activeIndex === index ? '#3a3a3a' : '#ccc',
                marginHorizontal: 4,
              }}
            />
          ))}
        </View>
      )}
    </>
  );
};
