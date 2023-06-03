import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { View } from '../../../context/Themed';

import i18n from '../../../locales/index';

export default function Settings() {
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const handleValueChange = (itemValue: string) => {
    setSelectedLanguage(itemValue);
    i18n.changeLanguage(itemValue);
  };

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
    </View>
  );
}
