"use client"

import { useEffect, useState, useRef } from "react"
import { Zap, Shield, Users, Handshake, ArrowRightLeft, Rocket, X, Check } from "lucide-react"
import { useContactForm } from "@/app/providers"
import { useLanguage } from "@/components/language-provider"
import Image from "next/image"
import { useTheme } from "next-themes"

export default function WhyUs() {
  const { openContactForm } = useContactForm()
  const { t } = useLanguage()
  const { theme } = useTheme()
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  const featureIcons = [Zap, Shield, Users, Handshake, ArrowRightLeft, Rocket]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
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
    <section ref={sectionRef} id="why-us" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <span className="inline-block px-4 py-1.5 bg-muted rounded-full text-xs font-bold text-muted-foreground mb-8 uppercase tracking-[0.2em]">
            {t.whyUs.badge}
          </span>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6">
            <h2 className={`text-4xl md:text-5xl lg:text-7xl font-bold text-foreground transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
              Why
            </h2>
            <div className={`transition-all duration-1000 ease-out delay-100 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}>
              <Image
                src="/logo.jpg"
                alt="Qlyra Logo"
                width={180}
                height={60}
                className={`h-12 md:h-16 w-auto object-contain ${theme === 'dark' ? 'invert brightness-200' : ''}`}
              />
            </div>
            <h2 className={`text-4xl md:text-5xl lg:text-7xl font-bold text-foreground transition-all duration-1000 ease-out delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
              is different?
            </h2>
          </div>
          <p className={`text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto transition-all duration-1000 ease-out delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {t.whyUs.subtitle}
          </p>
        </div>

        {/* Comparison Table */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 transition-all duration-1000 ease-out delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}>
          {/* Traditional Agencies */}
          <div className="bg-muted/30 border border-border rounded-[3rem] p-10 md:p-12 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 text-destructive/10 group-hover:scale-110 transition-transform duration-700">
              <X size={120} strokeWidth={3} />
            </div>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 bg-destructive/10 text-destructive rounded-full flex items-center justify-center">
                <X size={24} strokeWidth={3} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                {t.whyUs.comparison.traditional.title}
              </h3>
            </div>
            <ul className="space-y-6">
              {t.whyUs.comparison.traditional.items.map((item: string, i: number) => (
                <li key={i} className="flex gap-4 items-start text-lg text-muted-foreground">
                  <span className="w-2 h-2 mt-2.5 rounded-full bg-destructive/40 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Qlyra */}
          <div className="bg-primary/5 border-2 border-primary/20 rounded-[3rem] p-10 md:p-12 relative overflow-hidden group shadow-2xl shadow-primary/5">
            <div className="absolute top-0 right-0 p-8 text-primary/10 group-hover:scale-110 transition-transform duration-700">
              <Check size={120} strokeWidth={3} />
            </div>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
                <Check size={24} strokeWidth={3} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                {t.whyUs.comparison.qlyra.title}
              </h3>
            </div>
            <ul className="space-y-6">
              {t.whyUs.comparison.qlyra.items.map((item: string, i: number) => (
                <li key={i} className="flex gap-4 items-start text-lg text-foreground font-medium">
                  <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center">
                    <Check size={14} strokeWidth={3} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Feature Cards Grid - 6 Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {t.whyUs.features.map((feature: any, idx: number) => {
            const Icon = featureIcons[idx]
            return (
              <div
                key={idx}
                className={`group p-10 bg-card border border-border rounded-[2.5rem] transition-all duration-700 ease-out hover-lift shadow-sm hover:shadow-2xl hover:shadow-primary/5 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
                  }`}
                style={{ transitionDelay: `${0.1 * idx}s` }}
              >
                <div className="w-16 h-16 bg-muted rounded-[1.25rem] flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <Icon className="w-8 h-8 text-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg opacity-80">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* CTA Buttons */}
        <div
          className={`flex flex-wrap justify-center gap-6 transition-all duration-1000 ease-out delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
        >
          <button
            onClick={openContactForm}
            className="btn-primary px-12 py-5 text-lg font-bold"
          >
            {t.whyUs.getStarted}
          </button>
          <button className="btn-secondary px-12 py-5 text-lg font-bold">
            {t.whyUs.watchDemo}
          </button>
        </div>
      </div>

      {/* Background purely decorative elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/2 rounded-full blur-[150px] pointer-events-none -z-0" />
    </section>
  )
}
