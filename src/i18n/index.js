import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import translationEN from './en/translation.json'
import translationRU from './ru/translation.json'

const resources = {
	en: {
		translation: translationEN,
	},
	ru: {
		translation: translationRU,
	},
}

i18n
	.use(LanguageDetector) // используем LanguageDetector для определения языка
	.use(initReactI18next) // подключаем react-i18next
	.init({
		resources,
		fallbackLng: 'en',
		interpolation: {
			escapeValue: false, // react уже безопасен от XSS
		},
	})

export default i18n
