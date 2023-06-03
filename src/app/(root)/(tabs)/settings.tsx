import React, { useState, useContext } from 'react';
import { Switch } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { View, Text } from '../../../context/Themed';
import {} from '../../../context/Themed';

//i18n
import i18n from '../../../locales/index';

//theme toggle
import { ThemeContext } from '../../../context/ThemeProvider';

export default function Settings() {
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const handleValueChange = (itemValue: string) => {
    setSelectedLanguage(itemValue);
    i18n.changeLanguage(itemValue);
  };

  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <View className="flex-1 items-center justify-center">
      <Picker
        selectedValue={selectedLanguage}
        onValueChange={handleValueChange}
        style={{ height: 50, width: 150 }}
      >
        <Picker.Item label="English" value="en" />
        <Picker.Item label="Spanish" value="es" />
      </Picker>
      <Switch
        onValueChange={(value) => setTheme(value ? 'dark' : 'light')}
        value={theme === 'dark'}
      />
      <Text className="dark:text-white text-red-500">sdaasdas</Text>
    </View>
  );
}
