import { View } from 'react-native';
import { StyledText as Text } from '@components/Text/StyledText';

export default function TabTwoScreen() {
  return (
    <View className={'px-4 flex-1'}>
      <View className={'flex-row justify-between items-center'}>
        <Text className={'text-2xl py-4'}>Page Two</Text>
      </View>
    </View>
  );
}
