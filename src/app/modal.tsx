import { View } from 'react-native';
import { StyledText as Text } from '@components/Text/StyledText';
import { ExternalLink } from '@components/Link/ExternalLink';

export default function ModalScreen() {
  return (
    <View className="flex-1 items-center justify-center max-w-sm mx-auto">
      <Text className="text-2xl font-bold pb-5">Modal</Text>
      <ExternalLink
        className="px-8 text-center"
        href="https://github.com/ritmillio/expo-starter-kit"
      >
        <Text className="text-center">
          Check out the GitHub repo for this project! If you find it helpful or
          interesting, please consider giving it a star ⭐️. Your support is
          greatly appreciated!
        </Text>
      </ExternalLink>
    </View>
  );
}
