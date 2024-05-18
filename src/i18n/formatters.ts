import type { FormattersInitializer } from 'typesafe-i18n'
// eslint-disable-next-line import/no-extraneous-dependencies
import { date } from 'typesafe-i18n/formatters'
import type { Locales, Formatters } from './i18n-types'

export const initFormatters: FormattersInitializer<Locales, Formatters> = (locale: Locales) => {
	const formatters: Formatters = {
		weekday: date(locale, { weekday: 'long' }),
	}

	return formatters
}
