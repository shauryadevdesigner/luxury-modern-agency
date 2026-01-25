"use client"

import { useEffect, useRef, useState } from "react"
import { X, Check, Zap } from "lucide-react"
import { useContactForm } from "@/app/providers"

const beforeItems = [
  "10+ tools to manage one agency",
  "KPIs scattered & outdated",
  "Founder buried in daily ops",
  "Missed opportunities due to slow decisions",
  "Growth capped by disorganization"
]

const afterItems = [
  "One central hub for all operations",
  "Real-time KPIs & insights",
  "Founder free to focus on growth",
  "Automated workflows running 24/7",
  "Growth without breaking your backend"
]

export default function BeforeAfter() {
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
    <section ref={sectionRef} className="py-12 md:py-16 px-6 md:px-12 lg:px-24 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-1.5 bg-background border border-border rounded-full text-sm font-medium text-muted-foreground mb-6">
            BEFORE/AFTER
          </span>
          <h2 
            className={`text-4xl md:text-5xl font-bold text-foreground transition-all duration-700 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            The System Behind 7-Figs<br />Agencies
          </h2>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Before Column */}
          <div
            className={`p-8 bg-background border border-border rounded-2xl transition-all duration-700 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="font-semibold text-lg text-foreground">Before</span>
              <div className="flex items-center gap-1 text-muted-foreground">
                <Zap className="w-4 h-4" />
                <span className="text-sm font-medium">setyouragency</span>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 text-sm">
              Scattered tools, scattered focus, scaling feels impossible
            </p>
            <ul className="space-y-4">
              {beforeItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* After Column */}
          <div
            className={`p-8 bg-background border border-primary/20 rounded-2xl transition-all duration-700 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
            style={{ transitionDelay: "0.2s" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="font-semibold text-lg text-foreground">After</span>
              <div className="flex items-center gap-1 text-primary">
                <Zap className="w-4 h-4" />
                <span className="text-sm font-medium">setyouragency</span>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 text-sm">
              One hub, total clarity, scaling becomes predictable
            </p>
            <ul className="space-y-4">
              {afterItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
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
