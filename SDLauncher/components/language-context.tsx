"use client"

import { createContext, useContext, useEffect, useState } from "react"
import type { Language } from "@/lib/translations"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en")
  const [mounted, setMounted] = useState(false)

  // Auto-detect language on first visit
  useEffect(() => {
    const saved = localStorage.getItem("voxelcraft-lang") as Language | null
    
    if (saved && ["en", "ru", "uz", "es"].includes(saved)) {
      setLanguageState(saved)
    } else {
      // Detect browser language
      const browserLang = navigator.language.split("-")[0]
      let detectedLang: Language = "en"
      
      if (browserLang === "ru") detectedLang = "ru"
      else if (browserLang === "uz") detectedLang = "uz"
      else if (browserLang === "es") detectedLang = "es"
      
      setLanguageState(detectedLang)
      localStorage.setItem("voxelcraft-lang", detectedLang)
    }
    
    setMounted(true)
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("voxelcraft-lang", lang)
  }

  // Update html lang attribute
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = language
    }
  }, [language])

  if (!mounted) {
    return <>{children}</>
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
