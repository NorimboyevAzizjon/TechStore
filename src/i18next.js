<<<<<<< HEAD
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import uzTranslation from './locales/uz.json';
import enTranslation from './locales/en.json';
import ruTranslation from './locales/ru.json';

const resources = {
  uz: {
    translation: uzTranslation
  },
  en: {
    translation: enTranslation
  },
  ru: {
    translation: ruTranslation
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'uz',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    }
  });

export default i18n;
=======
// Hozircha faqat JSON fayllarni import qilamiz
// react-i18next keyinroq qo'shiladi

import uzTranslation from './locales/uz/common.json';
import ruTranslation from './locales/ru/common.json';
import enTranslation from './locales/en/common.json';

// Oddiy til obyekti
export const translations = {
  uz: uzTranslation,
  ru: ruTranslation,
  en: enTranslation
};

// Oddiy tarjima funksiyasi
export const t = (key, language = 'uz') => {
  const keys = key.split('.');
  let value = translations[language];
  
  for (const k of keys) {
    value = value?.[k];
  }
  
  return value || key;
};

// Hozirgi til
export let currentLanguage = 'uz';

// Tilni o'zgartirish funksiyasi
export const changeLanguage = (lng) => {
  currentLanguage = lng;
  localStorage.setItem('preferred-language', lng);
};

// Dastlabki sozlash
const savedLanguage = localStorage.getItem('preferred-language');
if (savedLanguage && translations[savedLanguage]) {
  currentLanguage = savedLanguage;
}

export default {
  t: (key) => t(key, currentLanguage),
  changeLanguage,
  currentLanguage
};
>>>>>>> a532a094d2ad1aaac3da7485eaf535fe50346ac4
