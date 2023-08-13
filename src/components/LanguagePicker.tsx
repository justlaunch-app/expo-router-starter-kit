import React from 'react';
import { View, Text } from '_context/Themed';
import { Platform } from 'react-native';
import { classNames } from '_utils/classNames';
import { Picker } from '@react-native-picker/picker';
import { useTranslation } from 'react-i18next';
import { useLang } from 'src/store/lang.store';

export function LanguagePicker() {
  const { t } = useTranslation();

  const lang = useLang(({ language }) => language);
  const setLang = useLang(({ setLang }) => setLang);

  return (
    <>
      <Text className="text-lg font-semibold">{t('language')}:</Text>
      <View
        className={classNames({
          '-mt-14': Platform.OS === 'ios',
          'bg-transparent': true,
        })}
      >
        <Picker
          selectedValue={lang}
          onValueChange={setLang}
          style={{ height: 50, width: 150 }}
        >
          <Picker.Item label="English" value="en" />
          <Picker.Item label="Spanish" value="es" />
        </Picker>
      </View>
    </>
  );
}
