import React from 'react';
import { View, Text } from '_context/Themed';
import { Platform, useColorScheme } from 'react-native';
import { classNames } from '_utils/classNames';
import { Picker } from '@react-native-picker/picker';
import { useTranslation } from 'react-i18next';
import { useLang } from 'src/store/langStore/lang.store';

const options = [
  { label: 'English', value: 'en' },
  { label: 'Spanish', value: 'es' },
];

export default function LanguagePicker() {
  const { t } = useTranslation();
  const colorScheme = useColorScheme();

  const lang = useLang(({ language }) => language);
  const setLang = useLang(({ setLang }) => setLang);

  const isDark = colorScheme === 'dark';

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
          style={{
            height: 50,
            width: 150,
            color: isDark ? 'white' : 'black',
          }}
          dropdownIconColor={isDark ? 'white' : undefined}
        >
          {options.map((item) => (
            <Picker.Item
              {...item}
              key={item.value}
              color={isDark ? 'white' : 'black'}
            />
          ))}
        </Picker>
      </View>
    </>
  );
}
