import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { View } from '_context/Themed';
import { MonoText as Text } from '_components/StyledText';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from 'react-native';

//i18next
import i18n from '_locales/index';

//app version
import appVersion from '_utils/version';
import { useAuth } from 'src/store/auth.store';
import { useTranslation } from 'react-i18next';

export default function Settings() {
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const handleValueChange = (itemValue: string) => {
    setSelectedLanguage(itemValue);
    i18n.changeLanguage(itemValue);
  };

  const { t } = useTranslation();

  const logout = useAuth(({ logout }) => logout);
  const nickname = useAuth(({ user }) => user?.nickname);

  return (
    <SafeAreaView className="flex-1 items-center">
      <View className="my-4 bg-transparent gap-y-4 p-4">
        <Text className="text-lg">
          {t('auth.logged-in-as')} {nickname}
        </Text>
        <Button title={t('auth.sign-out')} onPress={logout} color="red" />
      </View>
      <View className="flex-1 bg-transparent">
        <Picker
          selectedValue={selectedLanguage}
          onValueChange={handleValueChange}
          style={{ height: 50, width: 150 }}
        >
          <Picker.Item label="English" value="en" />
          <Picker.Item label="Spanish" value="es" />
        </Picker>
      </View>
      <View className="flex-2 bg-red-500 px-4 py-2 rounded-lg">
        <Text className="text-white">
          Your app version is: {`${appVersion}`}
        </Text>
      </View>
    </SafeAreaView>
  );
}
