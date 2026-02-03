"use client"

import { useEffect, useRef, useState } from "react"
import { Cpu, Clock, Zap } from "lucide-react"
import { useContactForm } from "@/app/providers"
import { useLanguage } from "@/components/language-provider"

export default function Problems() {
  const { openContactForm } = useContactForm()
  const { t } = useLanguage()
  const sectionRef = useRef(null)
  const [isInView, setIsInView] = useState(false)

  const icons = [Cpu, Clock, Zap]

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
    <section ref={sectionRef} id="problems" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 bg-muted rounded-full text-xs font-bold text-muted-foreground mb-6 uppercase tracking-[0.2em]">
            {t.problems.badge}
          </span>
          <h2
            className={`text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8 transition-all duration-1000 ease-out max-w-4xl mx-auto leading-[1.1] tracking-tight ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
          >
            {t.problems.title}
          </h2>
        </div>

        {/* Problem Cards - Reduced Size */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {t.problems.items.map((problem: any, index: number) => {
            const Icon = icons[index]
            return (
              <div
                key={index}
                className={`group p-6 bg-card border border-border rounded-2xl transition-all duration-700 ease-out hover-lift shadow-sm hover:shadow-2xl hover:shadow-primary/5 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
                  }`}
                style={{ transitionDelay: `${index * 0.15}s` }}
              >
                <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <Icon className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 leading-tight group-hover:text-primary transition-colors duration-300">
                  {problem.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm font-medium opacity-80">
                  {problem.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* CTA Buttons */}
        <div
          className={`flex flex-wrap justify-center gap-6 transition-all duration-1000 ease-out ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          style={{ transitionDelay: "0.6s" }}
        >
          <button
            onClick={openContactForm}
            className="btn-primary px-12 py-5 text-lg font-bold"
          >
            {t.problems.getStarted}
          </button>
          <button className="btn-secondary px-12 py-5 text-lg font-bold">
            {t.problems.watchDemo}
          </button>
        </div>
      </div>

      {/* Decorative elements - Subtle gradients */}
      <div className="absolute top-1/4 -left-64 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-0" />
      <div className="absolute bottom-1/4 -right-64 w-[500px] h-[500px] bg-accent-purple/5 rounded-full blur-[120px] pointer-events-none -z-0" />

      {/* "Half-Collided" Wall Decoration (Big Vector) */}
      <div className="absolute top-[20%] right-[-15%] w-[60%] h-auto pointer-events-none opacity-[0.45] overflow-hidden -z-10 -rotate-45">
        <svg viewBox="0 0 687 622" fill="none" className="w-full h-auto text-muted-foreground" xmlns="http://www.w3.org/2000/svg">
          <path d="M125.136 130.841C273.234 23.0822 591.391 -112.114 715.876 -122.738C871.483 -136.018 34.561 359.185 76.5296 439.562C118.498 519.94 692.632 35.2218 799.814 35.2218C906.995 35.2218 231.871 444.088 294.501 531.455C357.131 618.822 692.936 332.522 833.074 280.623C836.34 334.765 817.475 460.729 715.876 531.455" stroke="currentColor" strokeWidth="148" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  )
}
