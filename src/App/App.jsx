import "../assets/App.css"
import Header from "../components/layout/Header.jsx";
import Content from "../components/layout/Content.jsx";
import Footer from "../components/layout/Foooter.jsx";
import i18n from "i18next"; 
import { initReactI18next } from "react-i18next";
import translationsUz from "../locales/translationsUz.js";
import translationsRu from "../locales/translationsRu.js";
import translationsEn
 from "../locales/translationsEn.js";
import translationsTr from "../locales/translationsTr.js";
import translationsFr from "../locales/translationsFr.js";

function App() {


    i18n.use(initReactI18next).init({
        resources: {
            uz: { translation: translationsUz },
            tr: { translation: translationsTr },
            ru: { translation: translationsRu },
            fr: { translation: translationsFr },
            en: { translation: translationsEn },
        },
        lng: "uz",
        fallbackLng: "uz",
    });


    return (
        <>
            <Header />
            <Content />
            <Footer />
        </>
    )
}

export default App
