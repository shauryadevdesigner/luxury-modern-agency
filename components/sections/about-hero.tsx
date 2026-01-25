"use client"

import { useEffect, useState } from "react"

export default function AboutHero() {
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

      {/* Parallax floating shapes - People/Team theme */}
      {/* Large circles */}
      <div
        className="absolute w-40 h-40 rounded-full border-2 border-white/15"
        style={{ top: "10%", left: "5%", transform: `translateY(${scrollY * 0.3}px)` }}
      />
      <div
        className="absolute w-28 h-28 rounded-full bg-white/5"
        style={{ top: "50%", right: "5%", transform: `translateY(${scrollY * -0.25}px)` }}
      />

      {/* People icons (abstract) */}
      <div
        className="absolute w-8 h-8 rounded-full bg-white/20"
        style={{ top: "20%", right: "20%", transform: `translateY(${scrollY * 0.35}px)` }}
      />
      <div
        className="absolute w-6 h-10 rounded-t-full bg-white/15"
        style={{ top: "24%", right: "19%", transform: `translateY(${scrollY * 0.35}px)` }}
      />

      <div
        className="absolute w-6 h-6 rounded-full bg-white/15"
        style={{ top: "60%", left: "18%", transform: `translateY(${scrollY * -0.3}px)` }}
      />
      <div
        className="absolute w-5 h-8 rounded-t-full bg-white/10"
        style={{ top: "63%", left: "17.5%", transform: `translateY(${scrollY * -0.3}px)` }}
      />

      {/* Stars */}
      <div
        className="absolute text-white/25 text-4xl"
        style={{ top: "30%", left: "30%", transform: `translateY(${scrollY * 0.4}px)` }}
      >
        ★
      </div>
      <div
        className="absolute text-white/20 text-3xl"
        style={{ top: "70%", right: "25%", transform: `translateY(${scrollY * -0.35}px)` }}
      >
        ★
      </div>

      {/* Diamonds */}
      <div
        className="absolute w-16 h-16 border-2 border-white/15 rotate-45"
        style={{ top: "40%", left: "10%", transform: `translateY(${scrollY * -0.2}px) rotate(45deg)` }}
      />
      <div
        className="absolute w-10 h-10 bg-white/10 rotate-45"
        style={{ top: "75%", right: "15%", transform: `translateY(${scrollY * 0.45}px) rotate(45deg)` }}
      />

      {/* Dots */}
      <div
        className="absolute w-3 h-3 rounded-full bg-white/30"
        style={{ top: "35%", right: "35%", transform: `translateY(${scrollY * 0.5}px)` }}
      />
      <div
        className="absolute w-2 h-2 rounded-full bg-white/25"
        style={{ top: "55%", left: "40%", transform: `translateY(${scrollY * -0.4}px)` }}
      />
      <div
        className="absolute w-4 h-4 rounded-full bg-white/20"
        style={{ top: "80%", left: "35%", transform: `translateY(${scrollY * 0.3}px)` }}
      />

      {/* Plus signs */}
      <div
        className="absolute text-white/15 text-5xl font-thin"
        style={{ top: "15%", right: "8%", transform: `translateY(${scrollY * 0.25}px)` }}
      >
        +
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h1 className="mb-6 text-white">Who We Are</h1>
        <p className="text-xl text-white/80 max-w-2xl mx-auto">
          A collective of senior engineers and designers obsessed with shipping production-ready products fast.
        </p>
      </div>
    </section>
  )
}
