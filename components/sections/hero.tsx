"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight } from "lucide-react"
import { useContactForm } from "@/app/providers"
import Image from "next/image"

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)
  const containerRef = useRef(null)
  const [isInView, setIsInView] = useState(false)
  const { openContactForm } = useContactForm()
  const [displayedText, setDisplayedText] = useState("")
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const CALENDLY_URL = "https://calendly.com/sosikomegrelidze95/new-meeting"
  
  const words = ["SaaS & apps", "web platforms", "mobile apps", "dashboards"]

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
      {/* Static UI Images - Left Side (touching the edge) */}
      <div className="hidden xl:block absolute left-0 top-20 w-[22%] pointer-events-none z-0">
        {/* Top Left Image */}
        <div className="w-44 2xl:w-56 mb-4">
          <Image
            src="https://cdn.prod.website-files.com/6656e67ba33eadc8d460da9f/6658508666a051ca3d4d43d9_Side%20Left%20Top.png"
            alt="Dashboard UI mockup"
            width={280}
            height={200}
            className="w-full h-auto"
            unoptimized
            priority
          />
        </div>

        {/* Bottom Left Image */}
        <div className="w-52 2xl:w-64">
          <Image
            src="https://cdn.prod.website-files.com/6656e67ba33eadc8d460da9f/665850868778ce771abedb52_Side%20Left%20Bottom.png"
            alt="App interface mockup"
            width={320}
            height={250}
            className="w-full h-auto"
            unoptimized
            priority
          />
        </div>
      </div>

      {/* Static UI Images - Right Side (touching the edge) */}
      <div className="hidden xl:block absolute right-0 top-20 w-[22%] pointer-events-none z-0 flex flex-col items-end">
        {/* Top Right Image */}
        <div className="w-44 2xl:w-56 mb-4 ml-auto">
          <Image
            src="https://cdn.prod.website-files.com/6656e67ba33eadc8d460da9f/66585086c450ce5c246e65f2_Side%20Right%20Top.png"
            alt="Mobile app mockup"
            width={280}
            height={200}
            className="w-full h-auto"
            unoptimized
            priority
          />
        </div>

        {/* Bottom Right Image */}
        <div className="w-52 2xl:w-64 ml-auto">
          <Image
            src="https://cdn.prod.website-files.com/6656e67ba33eadc8d460da9f/6658508760ca60d26516e00d_Side%20Right%20Bottom.png"
            alt="Dashboard analytics mockup"
            width={320}
            height={250}
            className="w-full h-auto"
            unoptimized
            priority
          />
        </div>
      </div>

      {/* Horizontal line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-border z-10" />

      {/* Main Content - Centered */}
      <div className="max-w-4xl mx-auto relative z-10 text-center" ref={containerRef}>
        <div
          className={`transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Main Headline with Typewriter */}
          <h1
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight mb-6 leading-tight transition-all duration-700"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? "translateY(0)" : "translateY(20px)",
            }}
          >
            We design, build and scale
            <br />
            <span className="relative inline-block text-[#1F3C88]">
              {displayedText}
              <span className="animate-pulse">|</span>
            </span>
            <br />
            <span className="text-foreground">— fast.</span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-base md:text-lg lg:text-xl text-foreground/60 max-w-2xl mx-auto mb-10 leading-relaxed font-light transition-all duration-700"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? "translateY(0)" : "translateY(20px)",
              transitionDelay: "0.1s",
            }}
          >
            From idea to production-ready product in days, not months. We bring full ownership, senior expertise, and
            relentless focus on speed.
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
              className="px-8 py-4 bg-black text-white rounded-full font-semibold text-sm transition-all duration-500 hover:scale-105 hover:shadow-lg active:scale-95 group flex items-center gap-2"
            >
              Get Started
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button
              onClick={() => window.open(CALENDLY_URL, "_blank")}
              className="px-8 py-4 bg-transparent text-foreground border border-border rounded-full font-semibold text-sm transition-all duration-500 hover:scale-105 hover:shadow-lg active:scale-95 group flex items-center gap-2 hover:bg-muted"
            >
              Watch The Demo
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="flex justify-center mt-16 transition-all duration-700"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(20px)",
            transitionDelay: "0.4s",
          }}
        >
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <div className="w-7 h-11 border-2 border-foreground/30 rounded-full flex justify-center pt-2">
              <div className="w-1.5 h-3 bg-foreground/30 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
