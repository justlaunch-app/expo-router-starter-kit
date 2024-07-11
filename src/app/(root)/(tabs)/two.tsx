import { View } from 'react-native';
import { StyledText as Text } from '@components/Text/StyledText';
import PressableComponent from '@components/Button/TouchableOpacity';

export default function TabTwoScreen() {
  return (
    <View className={'px-4 flex-1'}>
      <View className={'flex-row justify-between items-center'}>
        <Text className={'text-2xl py-4'}>Page Two</Text>
        <PressableComponent
          onPress={() => {
            console.log('hole');
          }}
          className="bg-blue-500"
        >
          <Text>Test</Text>
        </PressableComponent>
      </View>
    </View>
  );
}
