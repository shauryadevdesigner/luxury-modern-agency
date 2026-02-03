"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Menu, X, Sun, Moon, Globe } from "lucide-react"
import { usePathname } from "next/navigation"
import { useContactForm } from "@/app/providers"
import { useTheme } from "next-themes"
import { useLanguage } from "@/components/language-provider"
import Image from "next/image"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isOverDark, setIsOverDark] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const navRef = useRef<HTMLElement>(null)
  const { openContactForm } = useContactForm()
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const { language, setLanguage, t } = useLanguage()

  const CALENDLY_URL = "https://cal.com/shaurya-nischal-pandey-lx05yx/deal-talk"

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      if (navRef.current) {
        const navRect = navRef.current.getBoundingClientRect()
        const navCenter = navRect.top + navRect.height / 2
        const elementsAtPoint = document.elementsFromPoint(window.innerWidth / 2, navCenter)

        let isDark = false
        for (const el of elementsAtPoint) {
          if (el === navRef.current || navRef.current?.contains(el)) continue
          const computedStyle = window.getComputedStyle(el)
          const bgColor = computedStyle.backgroundColor
          const bgImage = computedStyle.backgroundImage

          if (
            bgImage.includes("linear-gradient") &&
            (bgImage.includes("31, 60, 136") || bgImage.includes("1F3C88") || bgImage.includes("30, 64, 175"))
          ) {
            isDark = true
            break
          }

          const rgbMatch = bgColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/)
          if (rgbMatch) {
            const r = parseInt(rgbMatch[1])
            const g = parseInt(rgbMatch[2])
            const b = parseInt(rgbMatch[3])
            const luminance = 0.299 * r + 0.587 * g + 0.114 * b
            if (luminance < 128 && bgColor !== "rgba(0, 0, 0, 0)") {
              isDark = true
              break
            }
          }

          if (el.getAttribute("data-dark-section") === "true") {
            isDark = true
            break
          }
        }
        setIsOverDark(isDark)
      }
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: t.nav.home, href: "/" },
    // { label: t.nav.process, href: "/process" },
    // { label: t.nav.realisation, href: "/realisation" },
    // { label: t.nav.stack, href: "/stack" },
  ]

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "fr" : "en")
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  if (!mounted) return null

  const textColorClass = isOverDark ? "text-white" : "text-foreground"
  const inactiveTextClass = isOverDark ? "text-white/70" : "text-muted-foreground"

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
        ? "py-4 bg-white/80 dark:bg-black/80 backdrop-blur-lg border-b border-border shadow-sm"
        : "py-6 bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group transition-all duration-300">
          <div className="relative h-28 w-80 transition-transform group-hover:scale-105">
            <Image
              src="/obsidor-logo.png"
              alt="Obsidor Logo"
              fill
              className={`object-contain ${scrolled ? "brightness-0" : "brightness-0 dark:brightness-0 invert dark:invert"}`}
              priority
            />
          </div>
        </Link>

        {/* Navigation Items (Middle) */}
        <div className="hidden md:flex items-center gap-10">
          {[
            { label: t.nav.home, href: "/" },
            { label: t.nav.process, href: "/process" },

            { label: t.nav.stack, href: "/stack" },
          ].map((item, index) => {
            return (
              <Link
                key={index}
                href={item.href}
                className={`text-[14px] font-semibold transition-all duration-300 ${scrolled
                  ? "text-gray-600 hover:text-black"
                  : "text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white"
                  }`}
              >
                {item.label}
              </Link>
            )
          })}
        </div>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-6">
          <button
            onClick={toggleLanguage}
            className={`text-[12px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full border transition-all duration-300 ${scrolled
              ? "border-black/10 text-black hover:bg-black/5"
              : "border-gray-200 text-gray-500 hover:bg-gray-50 dark:border-white/10 dark:text-white dark:hover:bg-white/10"
              }`}
          >
            {language}
          </button>
          <button
            onClick={openContactForm}
            className={`text-[14px] font-semibold transition-all ${scrolled ? "text-gray-600 hover:text-black" : "text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white"
              }`}
          >
            {t.nav.contact}
          </button>
          <button
            onClick={() => window.open(CALENDLY_URL, "_blank")}
            className={`px-8 py-3 text-[14px] font-bold rounded-full border transition-all duration-300 ${scrolled
              ? "bg-black text-white border-black hover:bg-gray-800"
              : "bg-white text-black border-white hover:bg-gray-100"
              }`}
          >
            {t.nav.bookCall}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden p-2 rounded-xl transition-all duration-300 ${scrolled ? "text-foreground hover:bg-muted" : "text-foreground dark:text-white hover:bg-white/10"
            }`}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden mt-2 mx-6 bg-white dark:bg-black rounded-3xl border border-border shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="p-6 flex flex-col gap-4">
            {[
              { label: t.nav.home, href: "/" },
              { label: t.nav.process, href: "/process" },

              { label: t.nav.stack, href: "/stack" },
            ].map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-lg font-bold text-gray-600 dark:text-gray-400"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-6 border-t border-border flex flex-col gap-4">
              <div className="flex justify-between items-center mb-4">
                <button onClick={toggleLanguage} className="flex items-center gap-2 text-sm font-bold">
                  <Globe size={18} /> {language === "en" ? "French" : "English"}
                </button>
              </div>
              <button
                onClick={() => {
                  setIsOpen(false)
                  openContactForm()
                }}
                className="w-full py-4 text-center font-bold text-gray-600 dark:text-gray-400"
              >
                {t.nav.contact}
              </button>
              <button
                onClick={() => {
                  setIsOpen(false)
                  window.open(CALENDLY_URL, "_blank")
                }}
                className="w-full py-4 bg-primary text-white rounded-2xl font-bold"
              >
                {t.nav.bookCall}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
