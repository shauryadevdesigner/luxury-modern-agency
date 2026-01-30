"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight } from "lucide-react"
import { useContactForm } from "@/app/providers"
import { useLanguage } from "@/components/language-provider"


export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)
  const containerRef = useRef(null)
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
      const progress = Math.min(scrollY / 500, 1)
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
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-background">
      {/* Optimized Scattered Elements - Side Walls Positioned Level with Text */}

      {/* LEFT SIDE WALL GROUP */}
      <div className="hidden xl:block absolute left-0 top-[60%] -translate-y-1/2 w-1/4 h-[800px] pointer-events-none transition-all duration-300 ease-out z-0"
        style={{ transform: `translateY(-50%) translateX(-${scrollProgress * 250}px)`, opacity: 1 - scrollProgress }}>

        {/* Notebook Sketch - Far Left Wall */}
        <div className="absolute left-[-15%] top-[10%] w-[450px] -rotate-12 z-0 opacity-40">
          <img src="https://cdn.prod.website-files.com/6656e67ba33eadc8d460da9f/66585086c450ce5c246e65f2_Side%20Right%20Top.png" alt="" className="w-full h-auto" />
        </div>

        {/* Discussion Card - Bottom Angle */}
        <div className="absolute left-[5%] bottom-[5%] w-[420px] rotate-2 z-20">
          <img src="https://cdn.prod.website-files.com/6656e67ba33eadc8d460da9f/6658508666a051ca3d4d43d9_Side%20Left%20Top.png" alt="" className="w-full h-auto drop-shadow-2xl" />
        </div>

        {/* La French Tech Logo */}
        <div className="absolute left-[15%] top-[45%] w-32 rotate-[-15deg] z-10 transition-transform hover:scale-110 duration-500">
          <img src="https://cdn.prod.website-files.com/6656e67ba33eadc8d460da9f/665850868778ce771abedb52_Side%20Left%20Bottom.png" alt="" className="w-full h-auto drop-shadow-xl" />
        </div>

        {/* Bubble Logo Card */}
        <div className="absolute left-[10%] top-[30%] w-28 h-14 bg-white dark:bg-slate-800 rounded-xl shadow-lg flex items-center justify-center p-3 border border-border rotate-[-8deg] z-10">
          <img src="https://cdn.worldvectorlogo.com/logos/bubble-1.svg" alt="Bubble" className="h-full w-auto" />
        </div>

        {/* Excel Icon */}
        <div className="absolute left-[25%] top-[60%] w-16 h-16 bg-white dark:bg-slate-800 rounded-2xl shadow-lg flex items-center justify-center p-3 border border-border rotate-[20deg] z-10">
          <img src="https://cdn.worldvectorlogo.com/logos/microsoft-excel-2013.svg" alt="Excel" className="h-full w-auto" />
        </div>
      </div>

      {/* RIGHT SIDE WALL GROUP */}
      <div className="hidden xl:block absolute right-0 top-[60%] -translate-y-1/2 w-1/4 h-[800px] pointer-events-none transition-all duration-300 ease-out z-0"
        style={{ transform: `translateY(-50%) translateX(${scrollProgress * 250}px)`, opacity: 1 - scrollProgress }}>

        {/* Slack Mockup - Primary Right Wall */}
        <div className="absolute right-[-15%] top-[15%] w-[500px] rotate-[-8deg] z-0">
          <img src="https://cdn.prod.website-files.com/6656e67ba33eadc8d460da9f/6658508760ca60d26516e00d_Side%20Right%20Bottom.png" alt="" className="w-full h-auto drop-shadow-2xl" />
        </div>

        {/* Inpi Logo Card */}
        <div className="absolute right-[20%] top-[25%] w-28 h-16 bg-white dark:bg-slate-800 rounded-xl shadow-lg flex items-center justify-center p-4 border border-border rotate-[6deg] z-10">
          <img src="https://upload.wikimedia.org/wikipedia/fr/b/b3/Logo_INPI.svg" alt="Inpi" className="h-full w-auto" />
        </div>

        {/* Bpifrance Badge */}
        <div className="absolute right-[12%] top-[50%] px-6 py-3 bg-white dark:bg-slate-800 rounded-xl shadow-lg flex items-center justify-center border border-border rotate-[-4deg] z-10 font-black text-[#FFD700] tracking-tighter text-lg bg-white">
          bpifrance
        </div>

        {/* Fiverr Logo */}
        <div className="absolute right-[28%] bottom-[20%] w-20 h-20 bg-white dark:bg-slate-800 rounded-3xl shadow-lg flex items-center justify-center p-4 border border-border rotate-[15deg] z-10">
          <img src="https://cdn.worldvectorlogo.com/logos/fiverr.svg" alt="Fiverr" className="h-full w-auto" />
        </div>

        {/* Societe Brand Pill */}
        <div className="absolute right-[22%] bottom-[10%] px-8 py-3 bg-white dark:bg-slate-800 rounded-full shadow-lg flex items-center justify-center border border-border rotate-[-10deg] z-10 font-black text-slate-900 dark:text-white tracking-widest text-sm">
          SOCIETE
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto relative z-10 text-center px-4" ref={containerRef}>
        <div
          className={`transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
            <span className="text-[10px] font-black tracking-[0.2em] text-primary uppercase">{t.hero.badge}</span>
          </div>

          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-8 leading-[1.1] transition-all duration-700"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? "translateY(0)" : "translateY(20px)",
            }}
          >
            {t.hero.headline}{" "}
            <span className="relative inline-block text-primary min-w-[200px] text-left italic font-serif">
              {displayedText}
              <span className="animate-pulse not-italic">|</span>
            </span>
            <br />
            <span className="text-foreground">{t.hero.fast}</span>
          </h1>

          <p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed font-medium transition-all duration-700"
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
              className="px-12 py-6 bg-primary text-primary-foreground rounded-full font-bold text-xs tracking-widest transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] active:scale-95 group flex items-center gap-3"
            >
              {t.hero.getStarted}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button
              onClick={() => window.open("https://calendly.com/sosikomegrelidze95/new-meeting", "_blank")}
              className="px-12 py-6 bg-white dark:bg-black text-foreground border border-border rounded-full font-bold text-xs tracking-widest transition-all duration-500 hover:scale-105 hover:bg-muted active:scale-95 group"
            >
              {t.hero.watchDemo}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
