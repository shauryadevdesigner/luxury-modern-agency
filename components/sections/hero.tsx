"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight } from "lucide-react"
import { useContactForm } from "@/app/providers"
import { useLanguage } from "@/components/language-provider"

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)
  const { openContactForm } = useContactForm()
  const { t } = useLanguage()

  // Typewriter state
  const [displayedText, setDisplayedText] = useState("")
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const words = t.hero.words || ["video editing", "social media", "web apps"]

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // Typewriter effect
  useEffect(() => {
    const currentWord = words[currentWordIndex % words.length]
    const typeSpeed = isDeleting ? 50 : 100
    const pauseTime = 2000

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentWord.substring(0, displayedText.length + 1))
        if (displayedText === currentWord) {
          setTimeout(() => setIsDeleting(true), pauseTime)
        }
      } else {
        setDisplayedText(currentWord.substring(0, displayedText.length - 1))
        if (displayedText === "") {
          setIsDeleting(false)
          setCurrentWordIndex((prev) => (prev + 1) % words.length)
        }
      }
    }, typeSpeed)

    return () => clearTimeout(timeout)
  }, [displayedText, isDeleting, currentWordIndex, words])

  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden bg-background">

      {/* Right Side Fluid Background - The "Wave" */}
      <div className="hidden lg:block absolute top-0 right-0 w-[60%] h-full overflow-hidden z-0">
        {/* Custom SVG Wave Shape Mask / Background */}
        <svg
          className="absolute top-0 -left-1 w-[200%] h-full lg:w-full text-[#1C1C1C]" // Obsidor Dark Background
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path d="M0 0 V 100 H 100 V 0 Z M 0 0 C 30 10 20 60 0 100 Z" fill="currentColor" style={{ display: "none" }} />
          {/* Smoother Wave */}
          <path d="M 15 0 C 40 40 0 60 25 100 L 100 100 L 100 0 Z" fill="currentColor" />
        </svg>

        {/* Animated Blobs inside the Dark Zone */}
        <div className="absolute inset-0">
          {/* Main Gold Blob */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-br from-primary via-primary/80 to-primary/40 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] blur-xl opacity-90 animate-blob mix-blend-screen" />

          {/* Secondary Accent Blob */}
          <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-gradient-to-tr from-accent-purple to-blue-500 rounded-full blur-2xl opacity-60 animate-blob animation-delay-2000" />

          {/* Floating Particles */}
          <div className="absolute top-20 right-20 w-8 h-8 rounded-full bg-primary blur-sm animate-float" />
          <div className="absolute bottom-40 left-40 w-12 h-12 rounded-full bg-white blur-md animate-float animation-delay-1000" />
        </div>
      </div>

      {/* Mobile Background (Gradient for small screens) */}
      <div className="lg:hidden absolute inset-0 bg-background z-0">
        <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center h-full pt-20">

        {/* Left Content - Text */}
        <div className={`space-y-8 max-w-2xl transition-all duration-1000 ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-black tracking-widest text-primary uppercase">{t.hero.badge}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
            {t.hero.headline} <br />
            <span className="text-primary font-serif italic relative inline-block min-w-[200px]">
              {displayedText}
              <span className="animate-pulse ml-1 not-italic font-sans text-foreground">|</span>
            </span>
          </h1>

          <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button
              onClick={openContactForm}
              className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold text-sm tracking-widest hover:scale-105 transition-all duration-300 shadow-xl shadow-primary/20"
            >
              {t.hero.getStarted}
            </button>
            <button
              onClick={() => window.open("https://cal.com/shaurya-nischal-pandey-lx05yx/deal-talk", "_blank")}
              className="px-8 py-4 bg-transparent border-2 border-border text-foreground rounded-full font-bold text-sm tracking-widest hover:bg-muted hover:border-foreground transition-all duration-300"
            >
              {t.hero.watchDemo}
            </button>
          </div>
        </div>

        {/* Right Content - Empty placeholder for the layout flow, effectively pushing Left Content to the side */}
        <div className="hidden lg:block" />

      </div>
    </section>
  )
}
