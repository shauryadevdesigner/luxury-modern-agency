"use client"

import { useEffect, useState } from "react"
import { useLanguage } from "@/components/language-provider"

export default function ProcessHero() {
  const [scrollY, setScrollY] = useState(0)
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section data-dark-section="true" className="relative pt-40 pb-24 px-4 md:px-8 overflow-hidden">
      {/* Navy gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1F3C88] via-[#1E40AF] to-[#1F3C88]" />

      {/* Parallax floating shapes - Flow/Process theme */}
      {/* Arrows */}
      <div
        className="absolute text-white/20 text-6xl"
        style={{ top: "15%", left: "8%", transform: `translateY(${scrollY * 0.3}px)` }}
      >
        →
      </div>
      <div
        className="absolute text-white/15 text-4xl"
        style={{ top: "65%", right: "10%", transform: `translateY(${scrollY * -0.25}px)` }}
      >
        →
      </div>

      {/* Circles (steps) */}
      <div
        className="absolute w-20 h-20 rounded-full border-2 border-white/20 flex items-center justify-center text-white/30 text-2xl font-bold"
        style={{ top: "25%", right: "15%", transform: `translateY(${scrollY * 0.35}px)` }}
      >
        1
      </div>
      <div
        className="absolute w-16 h-16 rounded-full border-2 border-white/15 flex items-center justify-center text-white/25 text-xl font-bold"
        style={{ top: "55%", left: "12%", transform: `translateY(${scrollY * -0.3}px)` }}
      >
        2
      </div>
      <div
        className="absolute w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-white/30 text-lg font-bold"
        style={{ top: "70%", right: "30%", transform: `translateY(${scrollY * 0.4}px)` }}
      >
        3
      </div>

      {/* Connecting lines */}
      <div
        className="absolute w-40 h-0.5 bg-white/15"
        style={{ top: "40%", left: "10%", transform: `translateY(${scrollY * 0.2}px) rotate(15deg)` }}
      />
      <div
        className="absolute w-32 h-0.5 bg-white/10"
        style={{ top: "50%", right: "15%", transform: `translateY(${scrollY * -0.35}px) rotate(-10deg)` }}
      />

      {/* Dots */}
      <div
        className="absolute w-3 h-3 rounded-full bg-white/25"
        style={{ top: "35%", left: "35%", transform: `translateY(${scrollY * 0.5}px)` }}
      />
      <div
        className="absolute w-2 h-2 rounded-full bg-white/30"
        style={{ top: "45%", right: "45%", transform: `translateY(${scrollY * -0.4}px)` }}
      />
      <div
        className="absolute w-4 h-4 rounded-full bg-white/20"
        style={{ top: "75%", left: "50%", transform: `translateY(${scrollY * 0.3}px)` }}
      />

      {/* Squares */}
      <div
        className="absolute w-12 h-12 border border-white/15 rotate-45"
        style={{ top: "20%", left: "25%", transform: `translateY(${scrollY * 0.45}px) rotate(45deg)` }}
      />

      {/* Content */}
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h1 className="mb-6 text-white">{t.process.badge}</h1>
        <p className="text-xl text-white/80 max-w-2xl mx-auto">
          Transparent methodology. Clear communication. Rapid iteration. This is how we ship production-ready products
          in days and weeks, not months.
        </p>
      </div>
    </section>
  )
}
