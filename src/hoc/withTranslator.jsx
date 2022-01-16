import { useEffect, useState } from "react/cjs/react.development";
import { translatesEn } from "../components/resources/transtales/translates.en";
import { translatesRu } from "../components/resources/transtales/translates.ru";

const locales = {
    "en": translatesEn,
    "ru": translatesRu,
}
const subscribes = [];

let globalLanguage = "ru";


const setGlobalLanguage = (lang) => {
    if (globalLanguage === lang) return;
    globalLanguage = lang;
    subscribes.forEach(subscribe => subscribe(globalLanguage));
};

const translate = (textId) => locales[globalLanguage][textId] || textId;


export const withTranslator = (Component) => (props) => {
    const [language, setLanguage] = useState(globalLanguage);

    useEffect(() => {
        const f = (lang) => setLanguage(lang)
        subscribes.push(f);

        return () => {
            const i = subscribes.findIndex(f);
            subscribes.splice(i, 1);
        } 
    }, [])

        return (
            <Component
                translate={translate}
                language={language}
                setLanguage={setGlobalLanguage}
                {...props}
            />
        );
}