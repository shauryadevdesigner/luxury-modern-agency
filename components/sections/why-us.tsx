"use client"

import { useEffect, useState, useRef } from "react"
import { Zap, Shield, Users, Handshake } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Speed first",
    description: "We move in days, not weeks.",
    color: "from-yellow-400 to-orange-500",
  },
  {
    icon: Shield,
    title: "Full ownership",
    description: "You own the code, infra and IP.",
    color: "from-blue-400 to-indigo-500",
  },
  {
    icon: Users,
    title: "Senior team only",
    description: "No juniors, no outsourcing chaos.",
    color: "from-green-400 to-emerald-500",
  },
  {
    icon: Handshake,
    title: "Long-term partner",
    description: "We build, maintain and scale with you.",
    color: "from-purple-400 to-pink-500",
  },
]

export default function WhyUs() {
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
        {/* Main Title from Image */}
        <div className="text-center mb-20 lg:mb-28">
          <h2 className={`text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter text-foreground mb-4 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            WHY US ? <span className="text-muted-foreground/30 mx-2">VS</span> OTHER AGENCIES
          </h2>
          <p className={`text-muted-foreground font-medium transition-all duration-1000 delay-100 ${isVisible ? "opacity-100" : "opacity-0"}`}>
            With this type of Design
          </p>
        </div>

        {/* 4 Pillars Header */}
        <div className={`mb-12 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
          <span className="text-sm font-bold text-muted-foreground uppercase tracking-[0.3em] mb-4 block">
            why us ?
          </span>
          <h3 className="text-4xl md:text-5xl font-black text-foreground">
            4 pillars <span className="text-muted-foreground font-light text-3xl ml-2">( bloc)</span>
          </h3>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`group transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
              style={{ transitionDelay: `${300 + idx * 100}ms` }}
            >
              <div className="relative p-1"> {/* Outer ring for glow */}
                <div className="relative bg-background border border-border/50 rounded-3xl p-8 hover:border-primary/20 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-xl group-hover:shadow-primary/5">
                  {/* Decorative corner accent */}
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${feature.color} opacity-[0.03] rounded-bl-full group-hover:opacity-[0.07] transition-all duration-500`} />

                  <div className="relative z-10">
                    <h4 className="font-black text-xl md:text-2xl text-foreground mb-6 group-hover:translate-x-1 transition-transform duration-500">
                      {feature.title}
                    </h4>

                    <div className="flex gap-4 items-start">
                      {/* Vertical line from image */}
                      <div className={`w-1 self-stretch rounded-full bg-gradient-to-b ${feature.color} opacity-40 group-hover:opacity-100 transition-opacity duration-500`} />

                      <p className="text-muted-foreground text-lg leading-relaxed group-hover:text-foreground transition-colors duration-500 italic">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
