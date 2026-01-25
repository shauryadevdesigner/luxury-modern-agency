"use client"

import { useEffect, useState, useRef } from "react"
import { Star, CheckCircle2, X, Zap, Shield, Users, Handshake } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Speed first",
    description: "We move in days, not weeks.",
    color: "text-yellow-500",
  },
  {
    icon: Shield,
    title: "Full ownership",
    description: "You own the code, infra and IP.",
    color: "text-blue-500",
  },
  {
    icon: Users,
    title: "Senior team only",
    description: "No juniors, no outsourcing chaos.",
    color: "text-green-500",
  },
  {
    icon: Handshake,
    title: "Long-term partner",
    description: "We build, maintain and scale with you.",
    color: "text-purple-500",
  },
]

export default function WhyUs() {
  const [isVisible, setIsVisible] = useState(false)
  const [animateCards, setAnimateCards] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          setTimeout(() => setAnimateCards(true), 300)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const comparisonData = [
    {
      traditional: { icon: "✕", label: "1-2 Months on average" },
      bootnow: { icon: "✓", label: "48 Hour delivery" },
    },
    {
      traditional: { icon: "✕", label: "Starting at +$5,000" },
      bootnow: { icon: "✓", label: "Starting at $320" },
    },
    {
      traditional: { icon: "✕", label: "Long time-consuming process" },
      bootnow: { icon: "✓", label: "Effortless Ordering" },
    },
  ]

  return (
    <section ref={sectionRef} className="py-16 md:py-20 px-4 md:px-8 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-accent/10 to-transparent rounded-full blur-3xl -z-10 opacity-50" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-accent/10 to-transparent rounded-full blur-3xl -z-10 opacity-50" />

      <div className="max-w-6xl mx-auto">
        <div
          className={`flex justify-center items-center gap-2 mb-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-5 h-5 fill-accent text-accent"
                style={{
                  animation: `twinkle 0.6s ease-in-out ${i * 0.1}s`,
                }}
              />
            ))}
          </div>
          <span className="text-sm font-medium text-foreground ml-2">+5,000 - 5-star reviews</span>
        </div>

        <div
          className={`text-center mb-8 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-balance">
            From ignored, to world-class, in 48 hours.
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            You've built something incredible, your brand should reflect it.
          </p>
        </div>

        <div className="my-16 md:my-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto mb-12">
            {/* Traditional Agency Column */}
            <div
              className={`transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
            >
              <h3 className="text-2xl font-bold mb-8 text-center">Traditional Agency</h3>
              <div className="space-y-4">
                {comparisonData.map((item, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center gap-4 p-4 rounded-lg bg-foreground/5 hover:bg-red-500/10 transition-all duration-500 transform hover:scale-105 ${
                      isVisible ? `opacity-100 translate-x-0` : "opacity-0 -translate-x-4"
                    }`}
                    style={{
                      transitionDelay: isVisible ? `${200 + idx * 100}ms` : "0ms",
                    }}
                  >
                    <X className="w-6 h-6 text-red-500 flex-shrink-0" />
                    <span className="text-foreground/70 font-medium">{item.traditional.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bootnow Column */}
            <div
              className={`transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
            >
              <h3 className="text-2xl font-bold mb-8 text-center">Oracle</h3>
              <div className="space-y-4">
                {comparisonData.map((item, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center gap-4 p-4 rounded-lg bg-accent/10 hover:bg-accent/20 transition-all duration-500 transform hover:scale-105 ${
                      isVisible ? `opacity-100 translate-x-0` : "opacity-0 translate-x-4"
                    }`}
                    style={{
                      transitionDelay: isVisible ? `${200 + idx * 100}ms` : "0ms",
                    }}
                  >
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
                    <span className="text-foreground font-medium">{item.bootnow.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Why Us - 4 Pillars */}
        <div className="mt-12 md:mt-16">
          <div className="text-center mb-12">
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">why us ?</span>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mt-4">4 pillars (bloc)</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className={`group relative p-8 rounded-2xl bg-background border border-border hover:border-primary/30 transition-all duration-500 ${
                  animateCards ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: animateCards ? `${300 + idx * 100}ms` : "0ms",
                }}
              >
                {/* Colored left border indicator */}
                <div className={`absolute left-0 top-8 bottom-8 w-1 ${feature.color.replace('text-', 'bg-')} rounded-full`} />

                <div className="pl-4">
                  <h4 className={`font-bold text-lg text-foreground mb-2 ${feature.color}`}>
                    {feature.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.2);
          }
        }
      `}</style>
    </section>
  )
}
