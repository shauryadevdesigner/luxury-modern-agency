"use client"

import { useEffect, useState, useRef } from "react"
import { Zap, Shield, Users, Handshake } from "lucide-react"
import { useContactForm } from "@/app/providers"

const features = [
  {
    icon: Zap,
    title: "Speed first",
    description: "We move in days, not weeks.",
  },
  {
    icon: Shield,
    title: "Full ownership",
    description: "You own the code, infra and IP.",
  },
  {
    icon: Users,
    title: "Senior team only",
    description: "No juniors, no outsourcing chaos.",
  },
  {
    icon: Handshake,
    title: "Long-term partner",
    description: "We build, maintain and scale with you.",
  },
]

export default function WhyUs() {
  const { openContactForm } = useContactForm()
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

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
    <section ref={sectionRef} className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6">
        {/* Main Title Styled like Problems section but with Why Us content */}
        <div className="text-center mb-16 lg:mb-24">
          <span className="inline-block px-4 py-1.5 bg-muted rounded-full text-sm font-medium text-muted-foreground mb-6">
            WHY US ?
          </span>
          <h2 className={`text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter text-foreground mb-4 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            WHY US ? <span className="text-muted-foreground/30 mx-2">VS</span> OTHER AGENCIES
          </h2>
          <p className={`text-muted-foreground font-medium transition-all duration-1000 delay-100 ${isVisible ? "opacity-100" : "opacity-0"}`}>
            Experience the Qlyra difference
          </p>
        </div>

        {/* Feature Cards Grid - Using the design from Problems.tsx */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`p-8 bg-background border border-border rounded-2xl hover:border-primary/30 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              style={{ transitionDelay: `${0.3 + idx * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Buttons - Matching Problems.tsx design */}
        <div
          className={`flex flex-wrap justify-center gap-4 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          style={{ transitionDelay: "0.8s" }}
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
