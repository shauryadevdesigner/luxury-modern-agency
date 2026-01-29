"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Monitor, Smartphone, Globe, Layers, Zap, Shield } from "lucide-react"

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
    <section ref={sectionRef} className="py-20 md:py-24 bg-background text-foreground overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header - Sober & Minimal */}
        <div className="mb-12 md:mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(45,91,255,0.5)]"></div>
            <span className="text-[10px] font-black tracking-[0.3em] uppercase opacity-40">Expertise & Services</span>
          </div>
          <h2 className={`text-4xl md:text-5xl font-black tracking-tighter mb-6 transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            We build the future of <br className="hidden md:block" /> digital products <span className="text-primary italic">at scale.</span>
          </h2>
        </div>

        {/* Top Row: 3 Vertical Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6">
          <ServiceCard
            title="SaaS Development"
            icon={<Monitor className="w-4 h-4" />}
            image="/side-left.png"
            isInView={isInView}
            delay={100}
            color="bg-purple-500"
          />
          <ServiceCard
            title="Mobile Apps"
            icon={<Smartphone className="w-4 h-4" />}
            image="/side-right.png"
            isInView={isInView}
            delay={200}
            color="bg-blue-500"
          />
          <ServiceCard
            title="Web Platforms"
            icon={<Globe className="w-4 h-4" />}
            image="/side-left.png"
            isInView={isInView}
            delay={300}
            color="bg-emerald-500"
          />
        </div>

        {/* Bottom Area: Different Structure */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          {/* Detailed Card 1 */}
          <div className={`group relative h-[300px] rounded-[2rem] overflow-hidden border border-border bg-muted/20 transition-all duration-1000 delay-400 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <Image src="/side-left.png" alt="SaaS Mockup" fill className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent p-10 flex flex-col justify-end">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/10">
                  <Layers className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Advanced Architecture</h3>
              </div>
              <p className="text-white/60 text-sm max-w-sm">Production-ready systems designed for high-concurrency and global distribution.</p>
            </div>
          </div>

          {/* Grid within Grid */}
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            <div className={`group relative h-[300px] rounded-[2rem] overflow-hidden border border-border bg-[#0A0A0A] p-8 flex flex-col justify-between transition-all duration-1000 delay-500 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div className="flex items-center gap-2">
                <span className="text-primary font-black text-xl">FusionHealth</span>
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              </div>
              <div>
                <h4 className="text-white font-bold mb-2">Design Systems</h4>
                <p className="text-white/30 text-xs">Unified visual languages for consistency.</p>
              </div>
            </div>

            <div className={`group relative h-[300px] rounded-[2rem] overflow-hidden border border-border bg-muted/20 transition-all duration-1000 delay-600 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <Image src="/side-right.png" alt="Watch Mockup" fill className="object-cover opacity-50 grayscale" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <Zap className="w-5 h-5 text-yellow-400 mb-2" />
                <h4 className="text-white font-bold text-sm">IoT & Embedded</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ title, icon, image, isInView, delay, color }: any) {
  return (
    <div
      className={`group relative h-[350px] md:h-[400px] rounded-[2.5rem] overflow-hidden border border-border bg-muted/20 transition-all duration-1000 cursor-pointer ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src={image} alt={title} fill className="object-cover opacity-40 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 z-10 p-10 flex flex-col justify-between">
        <div className={`w-10 h-10 rounded-xl ${color} shadow-lg flex items-center justify-center text-white transform group-hover:rotate-12 transition-transform duration-500`}>
          {icon}
        </div>
        <div>
          <h3 className="text-2xl font-black mb-2 tracking-tight group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <div className="w-8 h-1 bg-primary/20 group-hover:w-full transition-all duration-700"></div>
        </div>
      </div>
    </div>
  )
}
