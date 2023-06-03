import 'intl-pluralrules';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Localization from 'expo-localization';
import resourcesToBackend from 'i18next-resources-to-backend';
import en from './en.json';
import es from './es.json';

const customBackend = resourcesToBackend((language, namespace, callback) => {
  let translations;
  if (language === 'en') {
    translations = en;
  } else if (language === 'es') {
    translations = es;
  } else {
    translations = {};
  }

  callback(null, translations);
});

i18n
  .use(customBackend)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    lng: Localization.locale.split('-')[0],
    ns: ['translation'],
    defaultNS: 'translation',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
