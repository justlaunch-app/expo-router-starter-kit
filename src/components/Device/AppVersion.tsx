import { View } from 'react-native';
import appVersion from '@config/version';
import { StyledText as Text } from '@components/Text/StyledText';

export default function AppVersion() {
  return (
    <View className="bg-red-500 px-4 py-2 rounded-lg">
      <Text>Your app version is: {`${appVersion}`}</Text>
    </View>
  );
}
