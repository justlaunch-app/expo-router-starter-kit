import React from 'react';
import { View, Text } from 'react-native';
import { Platform, useColorScheme } from 'react-native';
import { classNames } from '_utils/classNames';
import { Picker } from '@react-native-picker/picker';
import { useTranslation } from 'react-i18next';
import { useLang } from 'src/store/langStore/lang.store';
import { Label } from '_context/Themed';

const options = [
  { label: 'English', value: 'en' },
  { label: 'Spanish', value: 'es' },
];

export function LanguagePicker() {
  const { t } = useTranslation();
  const colorScheme = useColorScheme();

  const lang = useLang(({ language }) => language);
  const setLang = useLang(({ setLang }) => setLang);

  const isDark = colorScheme === 'dark';

  return (
    <>
      <Label className="text-lg font-semibold" htmlFor="lang">
        {t('language')}:
      </Label>
      <View
        className={classNames({
          '-mt-14': Platform.OS === 'ios',
          'bg-transparent': true,
        })}
      >
        <Picker
          nativeID="lang"
          selectedValue={lang}
          onValueChange={setLang}
          style={{
            height: 50,
            width: 150,
            color: isDark ? 'white' : 'black',
            backgroundColor: isDark ? 'black' : 'white',
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
