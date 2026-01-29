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

  const CALENDLY_URL = "https://calendly.com/sosikomegrelidze95/new-meeting"

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
    { label: t.nav.process, href: "/process" },
    { label: t.nav.realisation, href: "/realisation" },
    { label: t.nav.stack, href: "/stack" },
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
    <nav ref={navRef} className="fixed top-0 w-full z-50 transition-all duration-500 ease-out">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div
          className={`relative flex items-center justify-between px-4 md:px-6 py-2 rounded-full transition-all duration-500 ease-out ${scrolled || isOverDark
              ? isOverDark
                ? "bg-slate-900/80 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/20"
                : "bg-white/90 backdrop-blur-xl border border-slate-200/50 shadow-xl shadow-slate-200/50"
              : "bg-white/90 backdrop-blur-xl border border-slate-200/50 shadow-lg"
            }`}
        >
          {/* Logo */}
          <Link href="/" className="transition-all duration-300 hover:scale-105 flex-shrink-0">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.jpg"
                alt="Qlyra Logo"
                width={120}
                height={40}
                className={`h-8 w-auto object-contain ${theme === 'dark' ? 'invert brightness-200' : ''}`}
              />
            </div>
          </Link>

          {/* Navigation Items with Capsule Animation */}
          <div className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2 bg-muted/30 p-1 rounded-full border border-border/50">
            <div className="relative flex">
              {navItems.map((item, index) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className={`relative px-6 py-2 rounded-full text-xs font-bold tracking-widest transition-all duration-300 z-10 ${isActive || hoveredIndex === index
                        ? "text-primary-foreground"
                        : inactiveTextClass
                      }`}
                  >
                    {item.label}
                    {(isActive || hoveredIndex === index) && (
                      <div
                        className="absolute inset-0 bg-primary rounded-full -z-10 transition-all duration-300 ease-in-out"
                        style={{
                          opacity: (isActive && hoveredIndex === null) || hoveredIndex === index ? 1 : 0,
                        }}
                      />
                    )}
                  </Link>
                )
              })}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-2 flex-shrink-0">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className={`p-2 rounded-full transition-all duration-300 hover:bg-muted flex items-center gap-1 text-xs font-bold ${textColorClass}`}
            >
              <Globe size={16} />
              {language.toUpperCase()}
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-all duration-300 hover:bg-muted ${textColorClass}`}
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button
              onClick={openContactForm}
              className={`px-4 py-2 rounded-full font-bold text-xs tracking-widest transition-all duration-300 hover:scale-105 active:scale-95 ${isOverDark
                  ? "text-white/80 hover:text-white hover:bg-white/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
            >
              {t.nav.contact}
            </button>
            <button
              onClick={() => window.open(CALENDLY_URL, "_blank")}
              className="px-6 py-2 bg-primary text-primary-foreground rounded-full font-bold text-xs tracking-widest transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
            >
              {t.nav.bookCall}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-full transition-all duration-300 hover:scale-110 ${isOverDark ? "hover:bg-white/10 text-white" : "hover:bg-slate-100 text-slate-700"
              }`}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-2 bg-background/95 backdrop-blur-xl rounded-3xl border border-border shadow-xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="p-4 flex flex-col gap-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-4 py-3 rounded-xl text-sm font-bold tracking-widest transition-all duration-300 ${isActive ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground hover:bg-muted"
                      }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              })}
              <div className="flex flex-col gap-2 pt-4 mt-2 border-t border-border">
                <div className="flex justify-between items-center px-4">
                  <button onClick={toggleLanguage} className="flex items-center gap-2 text-sm font-bold">
                    <Globe size={18} /> {language === "en" ? "French" : "English"}
                  </button>
                  <button onClick={toggleTheme} className="flex items-center gap-2 text-sm font-bold">
                    {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />} {theme === "dark" ? "Light" : "Dark"}
                  </button>
                </div>
                <div className="flex gap-2 mt-2">
                  <button
                    onClick={() => {
                      setIsOpen(false)
                      openContactForm()
                    }}
                    className="flex-1 px-4 py-3 bg-muted text-foreground rounded-xl font-bold text-xs tracking-widest transition-all duration-300 hover:bg-muted/80"
                  >
                    {t.nav.contact}
                  </button>
                  <button
                    onClick={() => {
                      setIsOpen(false)
                      window.open(CALENDLY_URL, "_blank")
                    }}
                    className="flex-1 px-4 py-3 bg-primary text-primary-foreground rounded-xl font-bold text-xs tracking-widest transition-all duration-300 hover:bg-primary/90"
                  >
                    {t.nav.bookCall}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
