"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { useLanguage } from "@/components/language-provider"
import { Monitor, Cpu, TrendingUp, BarChart3, Palette, Smartphone } from "lucide-react"

export default function WhatWeDo() {
  const [isInView, setIsInView] = useState(false)
  const sectionRef = useRef(null)
  const { t } = useLanguage()

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
    <section ref={sectionRef} className="py-24 md:py-32 bg-background overflow-hidden" id="realisation">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header - Centered as per image */}
        <div className="text-center mb-20 md:mb-24">
          <p className="text-muted-foreground text-lg mb-4 tracking-tight opacity-80">
            {t.features.subtitle}
          </p>
          <h2 className={`text-4xl md:text-6xl font-black tracking-tight transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            {t.features.title}
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[240px]">
          {/* Card 1: One Hub for All Operations (Vertical Left) */}
          <BentoCard
            className="md:row-span-2"
            title={t.features.cards.hub.title}
            description={t.features.cards.hub.description}
            image="/hub_operations_mockup_1769788745022.png" // Using generated image
            icon={<Monitor size={20} />}
            isInView={isInView}
            delay={100}
          />

          {/* Card 2: Automations (Blue) */}
          <BentoCard
            className="bg-primary text-primary-foreground border-primary/20"
            title={t.features.cards.automations.title}
            description={t.features.cards.automations.description}
            image="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2670&auto=format&fit=crop"
            icon={<Cpu size={20} />}
            isInView={isInView}
            delay={200}
            variant="blue"
          />

          {/* Card 3: Built to Scale */}
          <BentoCard
            title={t.features.cards.scale.title}
            description={t.features.cards.scale.description}
            image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop"
            icon={<TrendingUp size={20} />}
            isInView={isInView}
            delay={300}
          />

          {/* Card 4: Built to Grow With You (Wide Mid) */}
          <BentoCard
            className="md:col-span-2 bg-[#0A0A0A] border-white/5"
            title={t.features.cards.grow.title}
            description={t.features.cards.grow.description}
            image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
            icon={<BarChart3 size={20} />}
            isInView={isInView}
            delay={400}
            variant="dark"
          />

          {/* Card 5: UX/UI Design (Large White) */}
          <BentoCard
            className="md:col-span-2 md:row-span-2 bg-white text-black border-slate-200"
            title={t.features.cards.design.title}
            description={t.features.cards.design.description}
            image="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2670&auto=format&fit=crop"
            icon={<Palette size={20} />}
            isInView={isInView}
            delay={500}
            variant="light"
            badges={["UX", "UI", "Design Systems"]}
          />

          {/* Card 6: Interactive Prototypes (Phone) */}
          <BentoCard
            className="md:row-span-2"
            title={t.features.cards.prototype.title}
            description={t.features.cards.prototype.description}
            image="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2670&auto=format&fit=crop"
            icon={<Smartphone size={20} />}
            isInView={isInView}
            delay={600}
            phoneMockup
          />
        </div>
      </div>
    </section>
  )
}

function BentoCard({
  className = "",
  title,
  description,
  image,
  icon,
  isInView,
  delay,
  variant = "default",
  badges = [],
  phoneMockup = false
}: any) {
  const variants: any = {
    default: "bg-card border-border",
    blue: "bg-primary text-primary-foreground border-primary",
    dark: "bg-black text-white border-white/10",
    light: "bg-white text-black border-slate-200",
  }

  return (
    <div
      className={`group relative rounded-[2.5rem] overflow-hidden border transition-all duration-1000 ${variants[variant]} ${className} ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        } hover:shadow-2xl hover:shadow-primary/5 cursor-pointer`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Background Image / Overlay */}
      <div className={`absolute inset-0 transition-transform duration-1000 group-hover:scale-105 ${phoneMockup ? 'flex justify-center items-end' : ''}`}>
        <Image
          src={image}
          alt={title}
          fill={!phoneMockup}
          width={phoneMockup ? 280 : undefined}
          height={phoneMockup ? 560 : undefined}
          className={`${phoneMockup ? 'relative top-20 shadow-2xl rounded-[3rem] border-8 border-slate-900 object-cover' : 'object-cover'} ${variant === 'default' ? 'opacity-20 grayscale' : 'opacity-40'} group-hover:opacity-60 transition-opacity duration-700`}
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${variant === 'light' ? 'from-white via-white/40 to-transparent' :
            variant === 'blue' ? 'from-primary via-primary/40 to-transparent' :
              'from-background via-background/40 to-transparent'
          }`} />
      </div>

      {/* Content */}
      <div className="relative z-10 p-8 md:p-10 h-full flex flex-col">
        <div className="mb-4">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:rotate-12 ${variant === 'light' ? 'bg-slate-100 text-slate-900' : 'bg-white/10 text-white backdrop-blur-md'
            }`}>
            {icon}
          </div>
          <h3 className="text-2xl font-black mb-3 tracking-tight leading-tight">
            {title}
          </h3>
          <p className={`text-sm leading-relaxed max-w-[280px] ${variant === 'light' ? 'text-slate-600' : 'text-white/60'
            }`}>
            {description}
          </p>
        </div>

        {badges.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {badges.map((badge: string, i: number) => (
              <span key={i} className="px-3 py-1 bg-slate-100 border border-slate-200 rounded-full text-[10px] font-black tracking-widest uppercase text-slate-400">
                {badge}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Hover Highlight */}
      <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/20 rounded-[2.5rem] transition-colors duration-500 pointer-events-none" />
    </div>
  )
}
