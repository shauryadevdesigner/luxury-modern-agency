"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight } from "lucide-react"
import { useContactForm } from "@/app/providers"
import { useLanguage } from "@/components/language-provider"

const logosLeft = [
  { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
  { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
]

const logosRight = [
  { name: "Framer", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
]

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)
  const { openContactForm } = useContactForm()
  const { t } = useLanguage()
  const [displayedText, setDisplayedText] = useState("")
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  const words = t.hero.words

  useEffect(() => {
    setIsLoaded(true)

    const handleScroll = () => {
      const scrollY = window.scrollY
      const progress = Math.min(scrollY / 600, 1)
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Typewriter effect
  useEffect(() => {
    const currentWord = words[currentWordIndex]
    const typeSpeed = isDeleting ? 50 : 100
    const pauseTime = 2000

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentWord.length) {
          setDisplayedText(currentWord.slice(0, displayedText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime)
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(displayedText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setCurrentWordIndex((prev) => (prev + 1) % words.length)
        }
      }
    }, typeSpeed)

    return () => clearTimeout(timeout)
  }, [displayedText, isDeleting, currentWordIndex, words])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold: 0.1 },
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative pt-36 pb-24 md:pt-48 md:pb-36 overflow-hidden bg-background">
      {/* Dynamic Background Logos - Left Side */}
      <div
        className="hidden lg:flex absolute left-8 top-1/2 -translate-y-1/2 flex-col gap-20 transition-all duration-300 ease-out z-0"
        style={{
          transform: `translateY(-50%) translateX(-${scrollProgress * 200}px)`,
          opacity: 1 - scrollProgress,
        }}
      >
        {logosLeft.map((logo, idx) => (
          <div
            key={idx}
            className="w-20 h-20 bg-background rounded-3xl border border-border/50 flex items-center justify-center p-4 shadow-2xl transition-transform duration-500 hover:scale-110 hover:-rotate-6 cursor-default group"
            style={{
              transitionDelay: `${idx * 100}ms`,
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)'
            }}
          >
            <img src={logo.icon} alt={logo.name} className="w-full h-full object-contain filter group-hover:drop-shadow-lg" />
          </div>
        ))}
      </div>

      {/* Dynamic Background Logos - Right Side */}
      <div
        className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col gap-20 transition-all duration-300 ease-out z-0"
        style={{
          transform: `translateY(-50%) translateX(${scrollProgress * 200}px)`,
          opacity: 1 - scrollProgress,
        }}
      >
        {logosRight.map((logo, idx) => (
          <div
            key={idx}
            className="w-20 h-20 bg-background rounded-3xl border border-border/50 flex items-center justify-center p-4 shadow-2xl transition-transform duration-500 hover:scale-110 hover:rotate-6 cursor-default group"
            style={{
              transitionDelay: `${idx * 100}ms`,
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)'
            }}
          >
            <img src={logo.icon} alt={logo.name} className="w-full h-full object-contain filter group-hover:drop-shadow-lg" />
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto relative z-10 text-center px-4" ref={containerRef}>
        <div
          className={`transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 mb-10">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
            <span className="text-[10px] font-black tracking-[0.3em] text-primary uppercase">INNOVATION FIRST</span>
          </div>

          <h1
            className="text-4xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8 leading-[1] transition-all duration-700"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? "translateY(0)" : "translateY(20px)",
            }}
          >
            {t.hero.headline}<br />
            <span className="relative inline-block italic font-serif text-primary min-w-[200px]">
              {displayedText}
              <span className="animate-pulse not-italic">|</span>
            </span>
            <br />
            <span className="text-foreground">— {t.hero.fast ? t.hero.fast.replace('.', '') : ''}.</span>
          </h1>

          <p
            className="text-lg md:text-2xl text-muted-foreground/60 max-w-2xl mx-auto mb-16 leading-relaxed font-medium transition-all duration-700"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? "translateY(0)" : "translateY(20px)",
              transitionDelay: "0.1s",
            }}
          >
            {t.hero.subtitle}
          </p>

          <div
            className="flex flex-row gap-6 items-center justify-center flex-wrap transition-all duration-700"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? "translateY(0)" : "translateY(20px)",
              transitionDelay: "0.2s",
            }}
          >
            <button
              onClick={openContactForm}
              className="px-14 py-7 bg-black text-white dark:bg-white dark:text-black rounded-full font-black text-xs tracking-widest transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.4)] active:scale-95 group flex items-center gap-4"
            >
              {t.hero.getStarted}
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button
              onClick={() => window.open("https://calendly.com/sosikomegrelidze95/new-meeting", "_blank")}
              className="px-14 py-7 bg-transparent text-foreground border-2 border-border/80 rounded-full font-black text-xs tracking-widest transition-all duration-500 hover:scale-105 hover:bg-muted active:scale-95"
            >
              {t.hero.watchDemo}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
