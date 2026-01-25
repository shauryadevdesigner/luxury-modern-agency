"use client"

import { useEffect, useState } from "react"

export default function StackHero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section data-dark-section="true" className="relative pt-40 pb-24 px-4 md:px-8 overflow-hidden">
      {/* Navy gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1F3C88] via-[#1E40AF] to-[#1F3C88]" />

      {/* Parallax floating shapes - Tech/Grid theme */}
      {/* Grid squares */}
      <div
        className="absolute w-24 h-24 border border-white/20"
        style={{ top: "10%", left: "10%", transform: `translateY(${scrollY * 0.3}px)` }}
      />
      <div
        className="absolute w-16 h-16 border border-white/15"
        style={{ top: "15%", left: "12%", transform: `translateY(${scrollY * 0.35}px)` }}
      />
      <div
        className="absolute w-20 h-20 bg-white/5"
        style={{ top: "60%", right: "8%", transform: `translateY(${scrollY * -0.25}px)` }}
      />

      {/* Code brackets */}
      <div
        className="absolute text-white/20 text-5xl font-mono"
        style={{ top: "20%", right: "15%", transform: `translateY(${scrollY * 0.4}px)` }}
      >
        {"</>"}
      </div>
      <div
        className="absolute text-white/15 text-3xl font-mono"
        style={{ top: "70%", left: "25%", transform: `translateY(${scrollY * -0.3}px)` }}
      >
        {"{ }"}
      </div>

      {/* Circles */}
      <div
        className="absolute w-32 h-32 rounded-full border-2 border-white/10"
        style={{ top: "35%", left: "5%", transform: `translateY(${scrollY * -0.2}px)` }}
      />
      <div
        className="absolute w-10 h-10 rounded-full bg-white/15"
        style={{ top: "50%", right: "20%", transform: `translateY(${scrollY * 0.35}px)` }}
      />

      {/* Triangles */}
      <div
        className="absolute w-0 h-0 border-l-[25px] border-l-transparent border-r-[25px] border-r-transparent border-b-[40px] border-b-white/15"
        style={{ top: "25%", left: "30%", transform: `translateY(${scrollY * 0.45}px)` }}
      />
      <div
        className="absolute w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[25px] border-t-white/10"
        style={{ top: "75%", right: "35%", transform: `translateY(${scrollY * -0.4}px)` }}
      />

      {/* Dots */}
      <div
        className="absolute w-3 h-3 rounded-full bg-white/25"
        style={{ top: "45%", left: "45%", transform: `translateY(${scrollY * 0.5}px)` }}
      />
      <div
        className="absolute w-2 h-2 rounded-full bg-white/30"
        style={{ top: "30%", right: "40%", transform: `translateY(${scrollY * -0.35}px)` }}
      />
      <div
        className="absolute w-4 h-4 rounded-full bg-white/20"
        style={{ top: "80%", left: "55%", transform: `translateY(${scrollY * 0.3}px)` }}
      />

      {/* Content */}
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h1 className="mb-6 text-white">Our Stack & Expertise</h1>
        <p className="text-xl text-white/80 max-w-2xl mx-auto">
          Modern, battle-tested technologies. We choose tools that scale, perform, and allow us to ship fast without
          cutting corners.
        </p>
      </div>
    </section>
  )
}
