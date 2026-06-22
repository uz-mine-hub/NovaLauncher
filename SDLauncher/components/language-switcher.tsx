"use client"

import { useLanguage } from "@/components/language-context"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

const languages = [
  { code: "en" as const, name: "English", flag: "🇬🇧" },
  { code: "ru" as const, name: "Русский", flag: "🇷🇺" },
  { code: "uz" as const, name: "O'zbek", flag: "🇺🇿" },
  { code: "es" as const, name: "Español", flag: "🇪🇸" },
]

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()
  const [open, setOpen] = useState(false)
  const current = languages.find((l) => l.code === language)

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
        aria-label="Til almashtirgich"
      >
        <span className="text-base">{current?.flag}</span>
        <span className="hidden sm:inline">{current?.code.toUpperCase()}</span>
        <ChevronDown className={`size-3.5 transition-transform ${open ? "rotate-180" : ""}`} aria-hidden="true" />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-48 rounded-lg border border-border bg-card shadow-lg z-50 overflow-hidden animate-fade-in">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code)
                setOpen(false)
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 text-left text-sm transition-colors ${
                language === lang.code
                  ? "bg-primary/10 text-primary"
                  : "text-foreground hover:bg-secondary"
              }`}
            >
              <span className="text-lg">{lang.flag}</span>
              <span className="font-medium">{lang.name}</span>
              {language === lang.code && (
                <span className="ml-auto text-xs font-mono text-primary">✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
