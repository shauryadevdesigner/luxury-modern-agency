"use client"

import { useEffect, useState } from "react"

export default function ServiceHero() {
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

      {/* Parallax floating shapes */}
      {/* Circles */}
      <div
        className="absolute w-32 h-32 rounded-full border-2 border-white/20"
        style={{ top: "10%", left: "5%", transform: `translateY(${scrollY * 0.3}px)` }}
      />
      <div
        className="absolute w-20 h-20 rounded-full bg-white/10"
        style={{ top: "60%", left: "15%", transform: `translateY(${scrollY * -0.2}px)` }}
      />
      <div
        className="absolute w-16 h-16 rounded-full border border-white/15"
        style={{ top: "30%", right: "10%", transform: `translateY(${scrollY * 0.4}px)` }}
      />
      <div
        className="absolute w-24 h-24 rounded-full bg-white/5"
        style={{ top: "70%", right: "20%", transform: `translateY(${scrollY * -0.3}px)` }}
      />

      {/* Squares */}
      <div
        className="absolute w-16 h-16 border-2 border-white/15 rotate-45"
        style={{ top: "20%", left: "25%", transform: `translateY(${scrollY * 0.25}px) rotate(45deg)` }}
      />
      <div
        className="absolute w-12 h-12 bg-white/10 rotate-12"
        style={{ top: "50%", right: "8%", transform: `translateY(${scrollY * -0.35}px) rotate(12deg)` }}
      />

      {/* Triangles (using CSS borders) */}
      <div
        className="absolute w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-b-[50px] border-b-white/15"
        style={{ top: "40%", left: "8%", transform: `translateY(${scrollY * -0.25}px)` }}
      />
      <div
        className="absolute w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[35px] border-b-white/10"
        style={{ top: "15%", right: "25%", transform: `translateY(${scrollY * 0.35}px)` }}
      />

      {/* Plus signs */}
      <div
        className="absolute text-white/20 text-6xl font-thin"
        style={{ top: "25%", right: "5%", transform: `translateY(${scrollY * 0.2}px)` }}
      >
        +
      </div>
      <div
        className="absolute text-white/15 text-4xl font-thin"
        style={{ top: "65%", left: "30%", transform: `translateY(${scrollY * -0.15}px)` }}
      >
        +
      </div>

      {/* Dots pattern */}
      <div
        className="absolute w-2 h-2 rounded-full bg-white/30"
        style={{ top: "35%", left: "40%", transform: `translateY(${scrollY * 0.5}px)` }}
      />
      <div
        className="absolute w-3 h-3 rounded-full bg-white/20"
        style={{ top: "55%", right: "35%", transform: `translateY(${scrollY * -0.4}px)` }}
      />
      <div
        className="absolute w-2 h-2 rounded-full bg-white/25"
        style={{ top: "75%", left: "50%", transform: `translateY(${scrollY * 0.3}px)` }}
      />

      {/* Content */}
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h1 className="mb-6 text-white">Our Services</h1>
        <p className="text-xl text-white/80 max-w-2xl mx-auto">
          Complete product development solutions. From concept to scale, we handle design, engineering, infrastructure,
          and growth.
        </p>
      </div>
    </section>
  )
}
