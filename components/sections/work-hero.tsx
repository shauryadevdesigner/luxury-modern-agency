"use client"

import { useEffect, useState } from "react"

export default function WorkHero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section data-dark-section="true" className="relative pt-32 pb-16 px-4 md:px-8 overflow-hidden">
      {/* Navy gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1F3C88] via-[#1E40AF] to-[#1F3C88]" />

      {/* Parallax floating shapes - Hexagons and geometric */}
      {/* Hexagons (using clip-path would need inline SVG, using border approach) */}
      <div
        className="absolute w-28 h-28 bg-white/10"
        style={{
          top: "15%",
          left: "8%",
          transform: `translateY(${scrollY * 0.3}px)`,
          clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
        }}
      />
      <div
        className="absolute w-20 h-20 border-2 border-white/20"
        style={{
          top: "55%",
          right: "12%",
          transform: `translateY(${scrollY * -0.25}px)`,
          clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
        }}
      />

      {/* Circles */}
      <div
        className="absolute w-36 h-36 rounded-full border border-white/15"
        style={{ top: "20%", right: "5%", transform: `translateY(${scrollY * 0.35}px)` }}
      />
      <div
        className="absolute w-14 h-14 rounded-full bg-white/10"
        style={{ top: "65%", left: "20%", transform: `translateY(${scrollY * -0.3}px)` }}
      />

      {/* Diamonds */}
      <div
        className="absolute w-20 h-20 border-2 border-white/15 rotate-45"
        style={{ top: "35%", left: "15%", transform: `translateY(${scrollY * 0.4}px) rotate(45deg)` }}
      />
      <div
        className="absolute w-12 h-12 bg-white/10 rotate-45"
        style={{ top: "70%", right: "25%", transform: `translateY(${scrollY * -0.2}px) rotate(45deg)` }}
      />

      {/* Lines */}
      <div
        className="absolute w-32 h-0.5 bg-white/15 rotate-[30deg]"
        style={{ top: "45%", left: "5%", transform: `translateY(${scrollY * 0.2}px) rotate(30deg)` }}
      />
      <div
        className="absolute w-24 h-0.5 bg-white/10 rotate-[-20deg]"
        style={{ top: "25%", right: "30%", transform: `translateY(${scrollY * -0.35}px) rotate(-20deg)` }}
      />

      {/* Small dots */}
      <div
        className="absolute w-3 h-3 rounded-full bg-white/25"
        style={{ top: "40%", left: "35%", transform: `translateY(${scrollY * 0.5}px)` }}
      />
      <div
        className="absolute w-2 h-2 rounded-full bg-white/30"
        style={{ top: "60%", right: "40%", transform: `translateY(${scrollY * -0.45}px)` }}
      />
      <div
        className="absolute w-4 h-4 rounded-full bg-white/15"
        style={{ top: "80%", left: "45%", transform: `translateY(${scrollY * 0.25}px)` }}
      />

      {/* Content */}
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h1 className="mb-6 text-white">Our Work</h1>
        <p className="text-xl text-white/80 max-w-2xl mx-auto">
          Production-ready products shipped on time. From MVPs to scaling platforms, see what we've built.
        </p>
      </div>
    </section>
  )
}
