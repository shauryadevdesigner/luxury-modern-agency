"use client"

import { useEffect, useRef, useState } from "react"
import { Users, Zap, CheckCircle, TrendingUp } from "lucide-react"

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
      number: "144+",
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
    {
      icon: TrendingUp,
      number: "50+",
      label: "Happy Clients",
      description: "Building long-term partnerships",
      delay: "0.4s",
    },
  ]

  return (
    <section ref={sectionRef} className="py-16 md:py-20 px-4 md:px-8 bg-black relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 transition-all duration-700"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
            }}
          >
            144+ Projects Delivered!
          </h2>
          <p
            className="text-lg md:text-xl text-gray-400 font-medium transition-all duration-700"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transitionDelay: "0.1s",
            }}
          >
            Continuous support and growth for your business
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="group relative"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(20px)",
                  transition: `all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${stat.delay}`,
                }}
              >
                <div className="relative h-full bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-md border border-gray-800 rounded-2xl p-8 hover:border-white/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-white/20">
                  {/* Hover effect background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/0 group-hover:from-white/5 group-hover:to-white/10 rounded-2xl transition-all duration-500"></div>

                  {/* Shadow on hover */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 shadow-2xl shadow-white/20 pointer-events-none"></div>

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="mb-6 inline-flex p-3 bg-white/10 rounded-xl group-hover:bg-white/20 transition-all duration-500">
                      <Icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-500" />
                    </div>

                    {/* Large Number */}
                    <div className="mb-4">
                      <p className="text-5xl md:text-6xl font-bold text-white group-hover:text-white transition-colors duration-500">
                        {stat.number}
                      </p>
                    </div>

                    {/* Label */}
                    <p className="text-lg font-semibold text-white mb-2">{stat.label}</p>

                    {/* Description */}
                    <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-500">
                      {stat.description}
                    </p>

                    {/* Decorative element */}
                    <div className="mt-6 flex gap-2">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                      <div className="w-3 h-3 bg-white/50 rounded-full group-hover:bg-white transition-all duration-500"></div>
                      <div className="w-3 h-3 bg-white/30 rounded-full group-hover:bg-white transition-all duration-500"></div>
                      <div className="w-3 h-3 bg-white/10 rounded-full group-hover:bg-white transition-all duration-500"></div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom decorative text */}
        <div className="text-center mt-16 md:mt-24">
          <p
            className="text-white font-semibold tracking-wider transition-all duration-700"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transitionDelay: "0.5s",
            }}
          >
            ✦ Continuous Partnership ✦
          </p>
        </div>
      </div>
    </section>
  )
}
