"use client"

import { ReactNode } from "react"
import { LanguageProvider } from "@/components/language-context"

export function ClientWrapper({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      {children}
    </LanguageProvider>
  )
}
