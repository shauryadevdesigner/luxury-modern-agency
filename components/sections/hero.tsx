"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight } from "lucide-react"
import { useContactForm } from "@/app/providers"
import Image from "next/image"
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

  const CALENDLY_URL = "https://calendly.com/sosikomegrelidze95/new-meeting"

  const words = t.hero.words

  useEffect(() => {
    setIsLoaded(true)
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
    <section className="relative pt-24 pb-16 md:pt-28 md:pb-20 overflow-hidden bg-background">
      {/* Static UI Images - Left Side */}
      <div className="hidden xl:block absolute left-0 top-32 w-[22%] pointer-events-none z-0 space-y-8">
        <div className="w-full max-w-xs transform -translate-x-12 rotate-3 hover:rotate-0 transition-transform duration-700">
          <Image
            src="/side-left.png"
            alt="Dashboard UI mockup"
            width={500}
            height={400}
            className="w-full h-auto rounded-2xl shadow-2xl border border-border/50"
            priority
          />
        </div>
        <div className="w-full max-w-xs transform -translate-x-8 -rotate-6 hover:rotate-0 transition-transform duration-700 delay-100">
          <Image
            src="/slack.png"
            alt="Slack UI mockup"
            width={500}
            height={400}
            className="w-full h-auto rounded-2xl shadow-2xl border border-border/50"
          />
        </div>
      </div>

      {/* Static UI Images - Right Side */}
      <div className="hidden xl:block absolute right-0 top-32 w-[22%] pointer-events-none z-0 space-y-8">
        <div className="w-full max-w-xs transform translate-x-12 -rotate-3 hover:rotate-0 transition-transform duration-700 ml-auto">
          <Image
            src="/side-right.png"
            alt="Mobile app mockup"
            width={500}
            height={400}
            className="w-full h-auto rounded-2xl shadow-2xl border border-border/50"
            priority
          />
        </div>
        <div className="w-full max-w-xs transform translate-x-8 rotate-6 hover:rotate-0 transition-transform duration-700 delay-100 ml-auto">
          <Image
            src="/figma.png"
            alt="Figma UI mockup"
            width={500}
            height={400}
            className="w-full h-auto rounded-2xl shadow-2xl border border-border/50"
          />
        </div>
      </div>

      {/* Horizontal line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-border z-10" />

      {/* Main Content - Centered */}
      <div className="max-w-5xl mx-auto relative z-10 text-center px-4" ref={containerRef}>
        <div
          className={`transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Main Headline with Typewriter */}
          <h1
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight mb-8 leading-tight transition-all duration-700"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? "translateY(0)" : "translateY(20px)",
            }}
          >
            {t.hero.headline}{" "}
            <span className="relative inline-block text-primary min-w-[200px] text-left">
              {displayedText}
              <span className="animate-pulse">|</span>
            </span>
            <br />
            <span className="text-foreground">{t.hero.fast}</span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed font-medium transition-all duration-700"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? "translateY(0)" : "translateY(20px)",
              transitionDelay: "0.1s",
            }}
          >
            {t.hero.subtitle}
          </p>

          {/* CTA Buttons - Centered */}
          <div
            className="flex flex-row gap-4 items-center justify-center flex-wrap transition-all duration-700"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? "translateY(0)" : "translateY(20px)",
              transitionDelay: "0.2s",
            }}
          >
            <button
              onClick={openContactForm}
              className="px-10 py-5 bg-primary text-primary-foreground rounded-full font-bold text-sm tracking-widest transition-all duration-500 hover:scale-105 hover:shadow-2xl active:scale-95 group flex items-center gap-3"
            >
              {t.hero.getStarted}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button
              onClick={() => window.open(CALENDLY_URL, "_blank")}
              className="px-10 py-5 bg-transparent text-foreground border-2 border-border rounded-full font-bold text-sm tracking-widest transition-all duration-500 hover:scale-105 hover:bg-muted active:scale-95 group flex items-center gap-3"
            >
              {t.hero.watchDemo}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
