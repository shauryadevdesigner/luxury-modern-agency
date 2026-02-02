"use client"

import { useEffect, useRef, useState } from "react"
import { Users, Zap, CheckCircle } from "lucide-react"

export default function ProofRow() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const stats = [
    {
      icon: Users,
      number: "+132",
      label: "Projects Delivered",
      description: "Successful solutions across industries",
      delay: "0.1s",
    },
    {
      icon: Zap,
      number: "95%",
      label: "Client Satisfaction",
      description: "Consistently exceeding expectations",
      delay: "0.2s",
    },
    {
      icon: CheckCircle,
      number: "100%",
      label: "On-Time Delivery",
      description: "Every project delivered on schedule",
      delay: "0.3s",
    },
  ]

  return (
    <section ref={sectionRef} id="proof" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-background relative overflow-hidden">
      {/* Premium dark aesthetics */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent-purple/5 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20 md:mb-24">
          <h2
            className="text-4xl md:text-6xl lg:text-7xl font-black text-foreground mb-6 transition-all duration-1000 ease-out leading-[1.1] tracking-tighter"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(30px)",
            }}
          >
            +132 Projects Delivered!
          </h2>
          <p
            className="text-lg md:text-2xl text-muted-foreground font-medium transition-all duration-1000 ease-out delay-200"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
            }}
          >
            Continuous support and growth for your business
          </p>
        </div>

        {/* Stats Grid - 3 Columns now */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-24 md:mb-32">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="group relative"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(40px)",
                  transition: `all 1s cubic-bezier(0.22, 1, 0.36, 1) ${stat.delay}`,
                }}
              >
                <div className="relative h-full bg-card border border-border rounded-[2.5rem] p-10 hover:border-primary/20 transition-all duration-500 hover-lift shadow-sm hover:shadow-2xl hover:shadow-primary/5">
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="mb-8 inline-flex p-4 bg-muted rounded-2xl group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-500">
                      <Icon className="w-8 h-8 group-hover:scale-110 transition-transform duration-500" />
                    </div>

                    {/* Number */}
                    <div className="mb-6">
                      <p className="text-6xl md:text-7xl font-bold text-foreground tracking-tighter">
                        {stat.number}
                      </p>
                    </div>

                    {/* Label */}
                    <p className="text-2xl font-bold text-foreground mb-3">{stat.label}</p>

                    {/* Description */}
                    <p className="text-lg text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                      {stat.description}
                    </p>

                    {/* Indicators */}
                    <div className="mt-10 flex gap-2">
                      <div className="w-4 h-1 bg-primary rounded-full"></div>
                      <div className="w-4 h-1 bg-muted rounded-full group-hover:bg-primary/30 transition-all duration-500"></div>
                      <div className="w-4 h-1 bg-muted rounded-full group-hover:bg-primary/20 transition-all duration-500"></div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Client Logos Row */}
        <div className="space-y-12">
          <div className="text-center">
            <p className="text-[10px] font-black tracking-[0.4em] uppercase text-muted-foreground">TRUSTED BY GLOBAL BRANDS</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
            {['Figma', 'Supabase', 'Stripe', 'Vercel', 'Next.js', 'Tailwind'].map((logo) => (
              <div key={logo} className="text-2xl md:text-3xl font-black tracking-tighter hover:scale-110 transition-transform duration-300 pointer-events-none">
                {logo}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom decorative text */}
        <div className="text-center mt-24 md:mt-32">
          <p
            className="text-muted-foreground text-sm font-bold tracking-[0.3em] uppercase transition-all duration-1000 ease-out delay-500"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
            }}
          >
            ✦ Continuous Partnership ✦
          </p>
        </div>
      </div>
    </section>
  )
}
