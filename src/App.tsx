import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./components/LanguageSwitcher";
import Tree from "./components/tree/Tree";
import "./App.css";

function App() {
  const { t } = useTranslation();

  return (
    <div className="app-shell">
      <header className="hero">
        <div className="hero__content">
          <div className="hero__text">
            <p className="hero__eyebrow">{t("eyebrow")}</p>
            <h1 className="hero__title">{t("pageTitle")}</h1>
            <p className="hero__subtitle">{t("subtitle")}</p>

            <LanguageSwitcher />
          </div>

          <div className="hero__video" aria-hidden="true">
            <div className="hero__video-inner">
              <iframe
                src="https://www.youtube.com/embed/3vWt-ZXtBmE?autoplay=1&loop=1&playlist=3vWt-ZXtBmE"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </header>

      <main className="content">
        <Tree />
        <p className="tip">{t("tip")}</p>
      </main>
    </div>
  );
}

export default App;
