import { createContext, useContext, useEffect, useState } from "react";
import { translations } from "../data/translations";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(
    () => localStorage.getItem("language") || "en",
  );
  
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((current) => (current === "en" ? "fr" : "en"));
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        t: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
