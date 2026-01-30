"use client"

import { useEffect, useRef, useState } from "react"
import { Search, PenTool, Code, Rocket, BarChart } from "lucide-react"

export default function Process() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  const steps = [
    {
      icon: Search,
      title: "Discovery",
      items: ["Call", "Specs", "Scope & timeline"],
      description: "We dive deep into your goals to define the perfect roadmap.",
    },
    {
      icon: PenTool,
      title: "Design",
      items: ["UX flows", "UI system", "Validation"],
      description: "Crafting intuitive interfaces and seamless user experiences.",
    },
    {
      icon: Code,
      title: "Build",
      items: ["Frontend", "Backend", "Infrastructure"],
      description: "Engineering robust, scalable code and high-performance systems.",
    },
    {
      icon: Rocket,
      title: "Launch",
      items: ["QA", "Deployment", "Monitoring"],
      description: "Strict quality assurance followed by a flawless go-live.",
    },
    {
      icon: BarChart,
      title: "Scale & Maintain",
      items: ["Updates", "Performance", "Support"],
      description: "Constant iteration and optimization to keep you ahead.",
    },
  ]

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
    <section ref={sectionRef} className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 bg-muted rounded-full text-sm font-medium text-muted-foreground mb-6">
            HOW IT WORKS
          </span>
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-foreground transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            Our Proven Process
          </h2>
        </div>

        <div className="relative">
          {/* Central Line (Desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

          <div className="space-y-16 lg:space-y-24">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className={`relative flex flex-col lg:flex-row items-center gap-8 ${idx % 2 === 0 ? "lg:flex-row-reverse" : ""
                  }`}
              >
                {/* Step Content */}
                <div className="lg:w-1/2 w-full">
                  <div
                    className={`p-8 bg-background border border-border rounded-3xl hover:border-primary/30 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                      }`}
                    style={{ transitionDelay: `${0.2 + idx * 0.1}s` }}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center text-foreground">
                        <step.icon size={24} />
                      </div>
                      <h3 className="text-2xl font-bold">0{idx + 1}. {step.title}</h3>
                    </div>

                    <p className="text-muted-foreground mb-8 text-lg">
                      {step.description}
                    </p>

                    <div className="flex flex-wrap gap-3">
                      {step.items.map((item, iidx) => (
                        <span key={iidx} className="px-4 py-1.5 bg-muted/50 rounded-full text-sm font-medium border border-border/50">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Step Connector Dot */}
                <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-background border-4 border-primary z-10 items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>

                {/* Spacer for secondary side */}
                <div className="lg:w-1/2 hidden lg:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
