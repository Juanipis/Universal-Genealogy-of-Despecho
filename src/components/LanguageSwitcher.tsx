import { useTranslation } from 'react-i18next'
import { supportedLocales } from '../config/translations'
import type { Locale } from '../types/tree'

function LanguageSwitcher() {
  const { i18n, t } = useTranslation()
  const current = (i18n.language as Locale) || 'es'

  const handleChange = (locale: Locale) => {
    if (locale !== current) {
      void i18n.changeLanguage(locale)
    }
  }

  return (
    <div className="language-switcher" aria-label={t('cta')}>
      {supportedLocales.map((locale) => (
        <button
          key={locale}
          type="button"
          className={`pill ${locale === current ? 'pill--active' : ''}`}
          onClick={() => handleChange(locale)}
          aria-pressed={locale === current}
        >
          {t(`language.${locale}`)}
        </button>
      ))}
    </div>
  )
}

export default LanguageSwitcher
