"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight, Zap, Target, Repeat } from "lucide-react"

export default function SpeedPromise() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const speeds = [
    {
      label: "MVP",
      timeline: "7–14 days",
      description: "Validate your idea with a working product.",
      icon: Target
    },
    {
      label: "Full SaaS",
      timeline: "30–60 days",
      description: "Production-ready platform with all core features.",
      icon: Zap
    },
    {
      label: "Iteration Speed",
      timeline: "Weekly",
      description: "Rapid updates, deployments, and improvements.",
      icon: Repeat
    },
  ]

  return (
    <section ref={sectionRef} id="speed" className="relative py-24 md:py-32 px-6 md:px-12 lg:px-24 overflow-hidden bg-black">
      {/* Background purely decorative elements - NO BLUE */}
      <div className="absolute inset-0 bg-background pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-purple/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-purple/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.15] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at center, var(--foreground) 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 bg-muted rounded-full text-xs font-bold text-muted-foreground mb-8 uppercase tracking-[0.2em]">
            Timeline & Speed
          </span>
          <h2 className={`text-5xl md:text-7xl font-bold text-foreground mb-8 transition-all duration-1000 ease-out leading-tight ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
            From Idea to Live Product
          </h2>
          <p className={`text-xl text-muted-foreground max-w-2xl mx-auto transition-all duration-1000 ease-out delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            Record-breaking speed without cutting corners. Senior engineering means we move fast and maintain quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          {speeds.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className={`text-center transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}
                style={{ transitionDelay: `${idx * 0.2}s` }}
              >
                <div className="mb-8 inline-flex p-5 bg-muted/50 rounded-3xl text-accent-purple transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-accent-purple/20">
                  <Icon size={32} />
                </div>
                <div className="text-5xl lg:text-6xl font-black text-foreground mb-4 tracking-tighter">
                  {item.timeline}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-foreground tracking-tight">
                  {item.label}
                </h3>
                <p className="text-lg text-muted-foreground font-medium opacity-80 leading-relaxed">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>

        <div className={`flex justify-center transition-all duration-1000 ease-out delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          <button
            className="btn-accent px-14 py-5 text-xl font-bold shadow-2xl"
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Start My Project
            <ArrowRight className="inline ml-3" size={22} strokeWidth={3} />
          </button>
        </div>
      </div>
    </section>
  )
}
