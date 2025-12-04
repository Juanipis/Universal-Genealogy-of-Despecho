import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './components/LanguageSwitcher'
import Tree from './components/tree/Tree'
import './App.css'

function App() {
  const { t } = useTranslation()

  return (
    <div className="app-shell">
      <header className="hero">
        <p className="hero__eyebrow">{t('eyebrow')}</p>
        <h1 className="hero__title">{t('pageTitle')}</h1>
        <p className="hero__subtitle">{t('subtitle')}</p>

        <LanguageSwitcher />
      </header>

      <main className="content">
        <Tree />
        <p className="tip">{t('tip')}</p>
      </main>
    </div>
  )
}

export default App
