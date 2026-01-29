"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ArrowRight, Laptop, Smartphone, Globe, Palette, Server, BarChart3 } from "lucide-react"

const features = [
  {
    title: "SaaS Development",
    description: "End-to-end SaaS solutions built with scalability and performance in mind.",
    image: "/side-left.png",
    icon: <Laptop className="w-6 h-6" />,
    color: "from-slate-700 to-slate-900",
  },
  {
    title: "Mobile Apps (iOS / Android)",
    description: "Native and cross-platform mobile experiences that users love.",
    image: "/side-right.png",
    icon: <Smartphone className="w-6 h-6" />,
    color: "from-slate-600 to-slate-800",
  },
  {
    title: "Web Platforms",
    description: "Complex web applications and platforms designed for modern businesses.",
    image: "/side-left.png",
    icon: <Globe className="w-6 h-6" />,
    color: "from-slate-700 to-slate-900",
  },
  {
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces that enhance user engagement and conversion.",
    image: "/side-right.png",
    icon: <Palette className="w-6 h-6" />,
    color: "from-slate-600 to-slate-800",
  },
  {
    title: "Infrastructure & DevOps",
    description: "Secure, reliable, and automated infrastructure to support your growth.",
    image: "/side-left.png",
    icon: <Server className="w-6 h-6" />,
    color: "from-slate-700 to-slate-900",
  },
  {
    title: "Maintenance & Scaling",
    description: "Continuous support and optimization to keep your product at peak performance.",
    image: "/side-right.png",
    icon: <BarChart3 className="w-6 h-6" />,
    color: "from-slate-600 to-slate-800",
  },
]

export default function WhatWeDo() {
  const [isInView, setIsInView] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-background text-foreground overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-16 md:mb-24">
          <div
            className={`inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.2em] text-foreground uppercase border border-border rounded-full bg-muted transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <span className="relative flex h-2 w-2">
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            WHAT WE DO
          </div>

          <h2
            className={`text-4xl md:text-6xl font-black mb-8 leading-tight transition-all duration-1000 delay-100 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            Our Objective is to show <br className="hidden md:block" />
            that we do <span className="italic font-light text-primary underline decoration-primary/30 underline-offset-8">EVERYTHING</span>
          </h2>

          <p
            className={`text-muted-foreground text-lg md:text-xl max-w-2xl leading-relaxed transition-all duration-1000 delay-200 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            We don&apos;t just build features; we build businesses. From the first line of code to global scale, we are your dedicated product partner.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative h-[450px] md:h-[500px] rounded-[2.5rem] overflow-hidden border border-border bg-muted/30 transition-all duration-700 hover:border-primary/30 hover:shadow-2xl transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              style={{ transitionDelay: `${index * 100 + 300}ms` }}
            >
              <div className="absolute inset-0 z-0">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover transition-all duration-1000 group-hover:scale-110 opacity-30 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-700" />
              </div>

              <div className="absolute inset-0 z-10 p-10 flex flex-col justify-end">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 transform transition-all duration-500 group-hover:scale-110 shadow-lg text-white`}>
                  {feature.icon}
                </div>

                <h3 className="text-2xl md:text-3xl font-black mb-4 transform transition-all duration-500 group-hover:-translate-y-2">
                  {feature.title}
                </h3>

                <div className="overflow-hidden">
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed opacity-0 max-h-0 transform translate-y-8 transition-all duration-700 group-hover:opacity-100 group-hover:max-h-32 group-hover:translate-y-0">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-8 flex items-center text-xs font-bold tracking-widest text-primary uppercase opacity-0 transform translate-y-4 transition-all duration-500 delay-100 group-hover:opacity-100 group-hover:translate-y-0 hover:text-primary/80 pointer-events-auto cursor-pointer">
                  Explore Feature <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-2" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
