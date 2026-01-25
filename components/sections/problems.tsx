"use client"

import { useEffect, useRef, useState } from "react"
import { Database, Clock, BarChart3 } from "lucide-react"
import { useContactForm } from "@/app/providers"

const problems = [
  {
    icon: Database,
    title: "Data Everywhere",
    description: "Your data, KPIs, and tasks are split across spreadsheets, chats, and dozens of apps, making it impossible to see the full picture."
  },
  {
    icon: Clock,
    title: "Trapped in Operations",
    description: "Instead of focusing on growth, you're stuck micromanaging projects, chasing updates, and putting out fires."
  },
  {
    icon: BarChart3,
    title: "Guesswork over Growth",
    description: "Without real-time visibility, decisions are based on gut feeling, and scaling becomes a gamble, not a system."
  }
]

export default function Problems() {
  const { openContactForm } = useContactForm()
  const sectionRef = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-12 md:py-16 px-6 md:px-12 lg:px-24 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-1.5 bg-muted rounded-full text-sm font-medium text-muted-foreground mb-6">
            PROBLEMS
          </span>
          <h2 
            className={`text-4xl md:text-5xl font-bold text-foreground mb-4 transition-all duration-700 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            The chaos that's killing<br />your agency's growth
          </h2>
        </div>

        {/* Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {problems.map((problem, index) => (
            <div
              key={problem.title}
              className={`p-8 bg-background border border-border rounded-2xl hover:border-primary/30 transition-all duration-500 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center mb-6">
                <problem.icon className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {problem.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div 
          className={`flex flex-wrap justify-center gap-4 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "0.4s" }}
        >
          <button 
            onClick={openContactForm}
            className="px-8 py-3 bg-foreground text-background rounded-full font-semibold text-sm hover:bg-foreground/90 transition-all duration-300"
          >
            Get Started
          </button>
          <button className="px-8 py-3 bg-background text-foreground border border-border rounded-full font-semibold text-sm hover:bg-muted transition-all duration-300">
            Watch The Demo
          </button>
        </div>
      </div>
    </section>
  )
}
