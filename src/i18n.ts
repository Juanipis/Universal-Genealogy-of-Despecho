import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { resources, supportedLocales } from './config/translations'

void i18n.use(initReactI18next).init({
  resources,
  lng: 'es',
  fallbackLng: 'es',
  supportedLngs: supportedLocales,
  defaultNS: 'common',
  interpolation: {
    escapeValue: false,
  },
  returnNull: false,
})

export { supportedLocales }
export default i18n
