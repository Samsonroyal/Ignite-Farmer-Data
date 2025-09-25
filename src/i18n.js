import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      Welcome: 'Welcome',
      'Sign In': 'Sign In',
      'Sign Up': 'Sign Up',
      // Add more translations as needed
    },
  },
  // Add more languages here
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
