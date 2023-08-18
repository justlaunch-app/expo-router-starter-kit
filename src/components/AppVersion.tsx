import React from 'react';
import { View } from '_context/Themed';
import appVersion from '_config/version';
import StyledText from './Text/StyledText';

export default function AppVersion() {
  return (
    <View className="bg-red-500 px-4 py-2 rounded-lg">
      <StyledText className="dark:text-green-500 text-white">
        Your app version is: {`${appVersion}`}
      </StyledText>
    </View>
  );
}
