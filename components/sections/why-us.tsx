"use client"

import { useEffect, useState, useRef } from "react"
import { Zap, Shield, Users, Handshake } from "lucide-react"
import { useContactForm } from "@/app/providers"
import { useLanguage } from "@/components/language-provider"

export default function WhyUs() {
  const { openContactForm } = useContactForm()
  const { t } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  const icons = [Zap, Shield, Users, Handshake]

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
    <section ref={sectionRef} className="py-12 md:py-16 px-6 md:px-12 lg:px-24 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header - Styled exactly like Problems section */}
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-1.5 bg-muted rounded-full text-sm font-medium text-muted-foreground mb-6">
            {t.whyUs.badge}
          </span>
          <h2 className={`text-4xl md:text-5xl font-bold text-foreground mb-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {t.whyUs.title} <span className="text-muted-foreground/30 mx-2">{t.whyUs.vs}</span> {t.whyUs.otherAgencies}
          </h2>
        </div>

        {/* Feature Cards Grid - 4 Blocks as requested */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {t.whyUs.features.map((feature: any, idx: number) => {
            const Icon = icons[idx]
            return (
              <div
                key={idx}
                className={`p-8 bg-background border border-border rounded-2xl hover:border-primary/30 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                style={{ transitionDelay: `${0.1 * idx}s` }}
              >
                <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* CTA Buttons - Matching Problems.tsx design */}
        <div
          className={`flex flex-wrap justify-center gap-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          style={{ transitionDelay: "0.4s" }}
        >
          <button
            onClick={openContactForm}
            className="px-8 py-3 bg-foreground text-background rounded-full font-semibold text-sm hover:bg-foreground/90 transition-all duration-300"
          >
            {t.whyUs.getStarted}
          </button>
          <button className="px-8 py-3 bg-background text-foreground border border-border rounded-full font-semibold text-sm hover:bg-muted transition-all duration-300">
            {t.whyUs.watchDemo}
          </button>
        </div>
      </div>
    </section>
  )
}
