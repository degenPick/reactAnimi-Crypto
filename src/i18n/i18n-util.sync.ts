import { initFormatters } from './formatters'
import type { Locales, Translations } from './i18n-types'
import { loadedFormatters, loadedLocales, locales } from './i18n-util'

import fr from './fr'
import en from './en'

const localeTranslations = {
	en,
	fr,
}

export const loadLocale = (locale: Locales): void => {
	if (loadedLocales[locale]) return

	loadedLocales[locale] = localeTranslations[locale] as unknown as Translations
	loadFormatters(locale)
}

export const loadAllLocales = (): void => locales.forEach(loadLocale)

// eslint-disable-next-line no-return-assign
export const loadFormatters = (locale: Locales): void =>
	// eslint-disable-next-line no-void
	void (loadedFormatters[locale] = initFormatters(locale))
