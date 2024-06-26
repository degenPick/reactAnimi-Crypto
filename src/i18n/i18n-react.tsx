import { useContext } from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import { initI18nReact } from 'typesafe-i18n/react'
import type { I18nContextType } from 'typesafe-i18n/react'
import type { Formatters, Locales, TranslationFunctions, Translations } from './i18n-types'
import { loadedFormatters, loadedLocales } from './i18n-util'

const { component: TypesafeI18n, context: I18nContext } = initI18nReact<Locales, Translations, TranslationFunctions, Formatters>(loadedLocales, loadedFormatters)

const useI18nContext = (): I18nContextType<Locales, Translations, TranslationFunctions> => useContext(I18nContext)

export { I18nContext, useI18nContext }

export default TypesafeI18n
