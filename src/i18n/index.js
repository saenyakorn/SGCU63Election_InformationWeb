import i18n from "i18next"
import { initReactI18next } from "react-i18next"

// TRANSLATION
import th from "./translation_th"

const resources = {
  th: {
    translation: th
  }
}

i18n.use(initReactI18next).init({
  resources: resources,
  lng: "th",
  fallbackLng: "th",
  interpolation: {
    escapeValue: false
  }
})

export default i18n
