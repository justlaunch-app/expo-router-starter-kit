import { View } from 'react-native';
import { deviceBrand, deviceName, deviceOS, deviceModel } from '_config/device';
import { StyledText as Text } from '_components/Text/StyledText';

export default function AppVersion() {
  return (
    <View className="py-2 rounded-lg">
      <Text>
        {`Device Brand: ${deviceBrand}`}
        {`\nDevice Name: ${deviceName}`}
        {`\nDevice OS: ${deviceOS}`}
        {`\nDevice Model: ${deviceModel}`}
      </Text>
    </View>
  );
}
