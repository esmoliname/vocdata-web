import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'ES' | 'EN' | 'ET' | 'DE';

interface LangContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (translations: { ES: string; EN: string; ET?: string; DE?: string }) => string;
}

const LangContext = createContext<LangContextType | undefined>(undefined);

export const LangProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>('ES');

  const t = (translations: { ES: string; EN: string; ET?: string; DE?: string }) => {
    return translations[lang] || translations['EN'] || translations['ES'] || '';
  };

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => {
  const context = useContext(LangContext);
  if (context === undefined) {
    throw new Error('useLang must be used within a LangProvider');
  }
  return context;
};
