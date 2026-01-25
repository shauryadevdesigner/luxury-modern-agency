"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"
import { useContactForm } from "@/app/providers"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isOverDark, setIsOverDark] = useState(false)
  const navRef = useRef<HTMLElement>(null)
  const { openContactForm } = useContactForm()
  const pathname = usePathname()
  const CALENDLY_URL = "https://calendly.com/sosikomegrelidze95/new-meeting"

  useEffect(() => {
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
            const r = Number.parseInt(rgbMatch[1])
            const g = Number.parseInt(rgbMatch[2])
            const b = Number.parseInt(rgbMatch[3])

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
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Process", href: "/process" },
    { label: "Work", href: "/work" },
    { label: "Stack", href: "/stack" },
    { label: "About", href: "/about" },
  ]

  const textColorClass = isOverDark ? "text-white" : "text-slate-700"
  const textHoverClass = isOverDark ? "hover:text-white" : "hover:text-slate-900"
  const inactiveTextClass = isOverDark ? "text-white/70" : "text-slate-500"

  return (
    <nav ref={navRef} className="fixed top-0 w-full z-50 transition-all duration-500 ease-out">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div
          className={`relative flex items-center justify-between px-4 md:px-6 py-3 rounded-full transition-all duration-500 ease-out ${
            scrolled || isOverDark
              ? isOverDark
                ? "bg-slate-900/80 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/20"
                : "bg-white/90 backdrop-blur-xl border border-slate-200/50 shadow-xl shadow-slate-200/50"
              : "bg-white/90 backdrop-blur-xl border border-slate-200/50 shadow-lg"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="transition-all duration-300 hover:scale-105 flex-shrink-0">
            <span
              className={`text-2xl font-bold tracking-tight transition-all duration-500 ${
                isOverDark ? "text-white" : "text-slate-900"
              }`}
            >
              Oracle
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-[#1F3C88] text-white shadow-lg shadow-[#1F3C88]/30"
                      : `${inactiveTextClass} ${textHoverClass} hover:bg-slate-100/50`
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </div>

          <div className="hidden md:flex items-center gap-3 flex-shrink-0">
            <button
              onClick={openContactForm}
              className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 hover:scale-105 active:scale-95 ${
                isOverDark
                  ? "text-white/80 hover:text-white hover:bg-white/10"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              Contact
            </button>
            <button
              onClick={() => window.open(CALENDLY_URL, "_blank")}
              className="px-5 py-2.5 bg-[#1F3C88] text-white rounded-full font-medium text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#1F3C88]/40 active:scale-95"
            >
              Book a Call
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-full transition-all duration-300 hover:scale-110 ${
              isOverDark ? "hover:bg-white/10 text-white" : "hover:bg-slate-100 text-slate-700"
            }`}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-2 bg-white/95 backdrop-blur-xl rounded-3xl border border-slate-200/50 shadow-xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="p-4 flex flex-col gap-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                      isActive ? "bg-[#1F3C88] text-white" : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              })}
              <div className="flex gap-2 pt-4 mt-2 border-t border-slate-200">
                <button
                  onClick={() => {
                    setIsOpen(false)
                    openContactForm()
                  }}
                  className="flex-1 px-4 py-3 bg-slate-100 text-slate-700 rounded-xl font-medium text-sm transition-all duration-300 hover:bg-slate-200"
                >
                  Contact
                </button>
                <button
                  onClick={() => {
                    setIsOpen(false)
                    window.open(CALENDLY_URL, "_blank")
                  }}
                  className="flex-1 px-4 py-3 bg-[#1F3C88] text-white rounded-xl font-medium text-sm transition-all duration-300 hover:bg-[#1a3470]"
                >
                  Book a Call
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
