"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const floatingAssets = [
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg", className: "top-[10%] left-[5%] w-16 h-16 rotate-[-15deg]" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", className: "bottom-[20%] left-[10%] w-20 h-20 rotate-[10deg]" },
  { src: "/logo.jpg", className: "top-[40%] left-[2%] w-14 h-14 rotate-[-5deg]" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", className: "top-[15%] right-[5%] w-24 h-24 rotate-[20deg]" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", className: "bottom-[15%] right-[10%] w-20 h-20 rotate-[-10deg]" },
  { src: "/favicon.jpg", className: "bottom-[40%] right-[3%] w-16 h-16 rotate-[5deg]" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", className: "top-[60%] left-[8%] w-12 h-12 rotate-[-12deg]" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", className: "top-[60%] right-[8%] w-12 h-12 rotate-[12deg]" },
]

export default function Problems() {
  const [isInView, setIsInView] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        const winHeight = window.innerHeight
        const progress = Math.max(0, Math.min(1, (winHeight - rect.top) / (winHeight + rect.height)))
        setScrollProgress(progress)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-32 bg-white overflow-hidden border-b border-border/50">
      {/* Scattered Floating Assets */}
      {floatingAssets.map((asset, idx) => (
        <div
          key={idx}
          className={`absolute pointer-events-none transition-all duration-1000 ease-out hidden md:block ${asset.className}`}
          style={{
            transform: `translateY(${(scrollProgress - 0.5) * 100 * (idx % 2 === 0 ? 1 : -1)}px) scale(${isInView ? 1 : 0.8})`,
            opacity: isInView ? 1 : 0,
            transitionDelay: `${idx * 50}ms`
          }}
        >
          <div className="p-4 bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-border/10">
            <img src={asset.src} alt="tool" className="w-full h-full object-contain" />
          </div>
        </div>
      ))}

      <div className="container mx-auto px-6 relative z-10 text-center">
        {/* Pink Title */}
        <p className="text-[#FF00FF] font-black text-sm tracking-[0.4em] uppercase mb-10 transition-all duration-700"
          style={{ opacity: isInView ? 1 : 0, transform: isInView ? 'translateY(0)' : 'translateY(10px)' }}>
          Problématique
        </p>

        {/* Headline */}
        <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-12 max-w-4xl mx-auto leading-[1.1] text-slate-900 transition-all duration-1000 delay-100"
          style={{ opacity: isInView ? 1 : 0, transform: isInView ? 'translateY(0)' : 'translateY(20px)' }}>
          Build your first version<br />
          is <span className="relative">
            long, expensive, and a struggle...
            <svg className="absolute -bottom-2 left-0 w-full h-4 text-[#FF00FF]/40" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="transparent" strokeLinecap="round" />
            </svg>
          </span>
        </h2>

        {/* Testimonial Quote */}
        <div className="max-w-2xl mx-auto mt-20 transition-all duration-1000 delay-300"
          style={{ opacity: isInView ? 1 : 0, transform: isInView ? 'translateY(0)' : 'translateY(20px)' }}>
          <p className="text-slate-400 text-lg md:text-xl font-medium italic mb-8 leading-relaxed">
            "In general, it takes $70,000 and 18 months for our project holders to launch the first version of their app."
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#FF00FF]/20">
              <Image src="/favicon.jpg" alt="Avatar" width={48} height={48} className="object-cover" />
            </div>
            <div className="text-left">
              <p className="font-bold text-slate-900 leading-none">Alex Chen</p>
              <p className="text-xs text-slate-400 font-bold tracking-widest uppercase mt-1">PM, Startup Manager</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
