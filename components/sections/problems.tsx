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

        {/* Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-20">
          {t.problems.items.map((problem: any, index: number) => {
            const Icon = icons[index]
            return (
              <div
                key={index}
                className={`group p-10 bg-card border border-border rounded-[2.5rem] transition-all duration-700 ease-out hover-lift shadow-sm hover:shadow-2xl hover:shadow-primary/5 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
                  }`}
                style={{ transitionDelay: `${index * 0.15}s` }}
              >
                <div className="w-16 h-16 bg-muted rounded-[1.25rem] flex items-center justify-center mb-10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <Icon className="w-8 h-8 text-foreground" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-5 leading-tight group-hover:text-primary transition-colors duration-300">
                  {problem.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg lg:text-xl font-medium opacity-80">
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
    </section>
  )
}
