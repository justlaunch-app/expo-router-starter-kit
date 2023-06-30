import React, { useState } from 'react';
import { View } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import { viewportWidth } from '_utils/viewport';

interface CarouselProps<T> {
  data: T[];
  renderItem: any;
  showPagination?: boolean;
}

const estimatedItemSize = Math.floor(viewportWidth * 0.8);

export const Carousel = <T,>({
  data,
  renderItem,
  showPagination = true,
}: CarouselProps<T>) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (event: any) => {
    const offset = event.nativeEvent.contentOffset.x;
    const index = Math.floor(offset / estimatedItemSize);
    setActiveIndex(index);
  };

  return (
    <>
      <FlashList
        className="w-full justify-center items-center bg-white rounded-lg p-2.5 shadow-md m-x-2.5"
        data={data}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        estimatedItemSize={estimatedItemSize}
        onMomentumScrollEnd={handleScroll}
      />
      {showPagination && (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 10,
          }}
        >
          {data.map((_, index) => (
            <View
              key={index}
              style={{
                width: 8,
                height: 8,
                borderRadius: 4,
                backgroundColor: activeIndex === index ? '#000' : '#ccc',
                marginHorizontal: 4,
              }}
            />
          ))}
        </View>
      )}
    </>
  );
};
