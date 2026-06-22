"use client"

import { useState, useEffect } from "react"
import { Apple, Download, Monitor, Terminal, X } from "lucide-react"
import { useLanguage } from "@/components/language-context"
import { LanguageSwitcher } from "@/components/language-switcher"
import { getTranslation } from "@/lib/translations"

export function SiteHeaderClient() {
  const { language } = useLanguage()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const navLinks = [
    { label: getTranslation(language, "nav.features"), href: "#features" },
    { label: getTranslation(language, "nav.screenshots"), href: "#screenshots" },
    { label: getTranslation(language, "nav.faq"), href: "#faq" },
  ]

  const downloads = [
    { icon: Monitor, label: "Windows", detail: getTranslation(language, "download.windows"), file: "VoxelCraft-Setup-3.2.1.exe" },
    { icon: Apple,   label: "macOS",   detail: getTranslation(language, "download.macos"), file: "VoxelCraft-3.2.1.dmg" },
    { icon: Terminal,label: "Linux",   detail: getTranslation(language, "download.linux"), file: "VoxelCraft-3.2.1.AppImage" },
  ]

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handler, { passive: true })
    return () => window.removeEventListener("scroll", handler)
  }, [])

  // lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [open])

  return (
    <>
      {/* ── Top bar ── */}
      <header
        className={`fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 md:px-10 h-16 transition-all duration-300 ${
          scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border" : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group" aria-label="VoxelCraft — bosh sahifa">
          <span className="size-7 rounded-md bg-primary flex items-center justify-center text-primary-foreground font-heading font-bold text-sm select-none">
            V
          </span>
          <span className="font-heading font-semibold text-foreground text-base tracking-tight">
            VoxelCraft
          </span>
        </a>

        {/* Language switcher + Hamburger */}
        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <button
            onClick={() => setOpen(true)}
            aria-label="Menyuni ochish"
            aria-expanded={open}
            className="flex flex-col gap-[5px] items-center justify-center size-10 rounded-lg hover:bg-secondary transition-colors"
          >
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </button>
        </div>
      </header>

      {/* ── Full-screen overlay menu ── */}
      {open && (
        <div
          className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-2xl animate-fade-in flex flex-col"
          role="dialog"
          aria-modal="true"
          aria-label="Navigatsiya menyusi"
        >
          {/* Header row inside menu */}
          <div className="flex items-center justify-between px-6 md:px-10 h-16 border-b border-border shrink-0">
            <span className="font-heading font-semibold text-foreground text-base tracking-tight">
              VoxelCraft
            </span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Menyuni yopish"
              className="size-10 flex items-center justify-center rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
            >
              <X className="size-5" />
            </button>
          </div>

          {/* Menu content */}
          <div className="flex-1 overflow-y-auto px-6 md:px-10 py-10 flex flex-col gap-10">

            {/* Nav links */}
            <nav aria-label="Asosiy navigatsiya">
              <ul className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`block text-3xl md:text-4xl font-heading font-semibold py-3 border-b border-border text-muted-foreground hover:text-foreground transition-colors animate-fade-up delay-${(i + 1) * 100}`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Download section */}
            <div className="animate-fade-up delay-400">
              <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-4 flex items-center gap-2">
                <Download className="size-3" />
                {getTranslation(language, "download.label")} — v3.2.1
              </p>
              <div className="grid gap-3 sm:grid-cols-3">
                {downloads.map((item) => (
                  <a
                    key={item.label}
                    href="#"
                    className="glass rounded-xl p-4 flex flex-col gap-2 group hover:border-primary/40 transition-all duration-200"
                  >
                    <item.icon className="size-5 text-primary" aria-hidden="true" />
                    <div>
                      <p className="font-heading font-semibold text-foreground text-sm group-hover:text-primary transition-colors">
                        {item.label}
                      </p>
                      <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">{item.detail}</p>
                    </div>
                    <span className="text-[11px] font-mono text-muted-foreground/70 mt-auto">{item.file}</span>
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  )
}
