"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"
import { Monitor, Cpu, Code2, Palette, Smartphone, Globe } from "lucide-react"

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

  const cards: {
    key: keyof typeof t.features.cards;
    icon: React.ReactNode;
    image: string;
    className: string;
    variant: "default" | "blue" | "dark" | "light";
  }[] = [
      {
        key: 'saas',
        icon: <Globe size={24} />,
        image: "/side-left.png",
        className: "md:col-span-2 md:row-span-1",
        variant: "dark"
      },
      {
        key: 'mobile',
        icon: <Smartphone size={24} />,
        image: "/side-right.png",
        className: "md:col-span-1 md:row-span-2",
        variant: "blue"
      },
      {
        key: 'system',
        icon: <Cpu size={24} />,
        image: "/side-left.png",
        className: "md:col-span-1 md:row-span-1",
        variant: "default"
      },
      {
        key: 'design',
        icon: <Palette size={24} />,
        image: "/figma.png",
        className: "md:col-span-1 md:row-span-1",
        variant: "light"
      }
    ]

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 bg-background overflow-hidden" id="realisation">
      {/* Background purely decorative elements */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop"
          alt="Background"
          fill
          className="object-cover opacity-[0.03] grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header - Centered as per image */}
        <div className="text-center mb-20 md:mb-24">
          <span className="inline-block px-4 py-1.5 bg-muted rounded-full text-xs font-bold text-muted-foreground mb-6 uppercase tracking-[0.2em]">
            {t.features.badge}
          </span>
          <h2 className={`text-4xl md:text-7xl font-black tracking-tight transition-all duration-1000 leading-tight mb-6 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {t.features.title}
          </h2>
          <p className={`text-xl text-muted-foreground max-w-2xl mx-auto transition-all duration-1000 delay-200 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            {t.features.subtitle}
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[280px]">
          {cards.map((card, idx) => (
            <Link key={card.key} href="/stack" className={`block ${card.className}`}>
              <BentoCard
                title={t.features.cards[card.key].title}
                description={t.features.cards[card.key].description}
                image={card.image}
                icon={card.icon}
                isInView={isInView}
                delay={100 * (idx + 1)}
                variant={card.variant}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

interface BentoCardProps {
  title: string
  description: string
  image: string
  icon: React.ReactNode
  isInView: boolean
  delay: number
  variant?: "default" | "blue" | "dark" | "light"
}

function BentoCard({
  title,
  description,
  image,
  icon,
  isInView,
  delay,
  variant = "default",
}: BentoCardProps) {
  const variants = {
    default: "bg-card border-border",
    blue: "bg-primary text-primary-foreground border-primary",
    dark: "bg-black text-white border-white/10",
    light: "bg-white text-black border-slate-200",
  }

  return (
    <div
      className={`group relative h-full rounded-[2.5rem] overflow-hidden border transition-all duration-1000 ${variants[variant]} ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        } hover:shadow-2xl hover:shadow-primary/10`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Background Image / Overlay */}
      <div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-110">
        <Image
          src={image}
          alt={title}
          fill
          className={`object-cover ${variant === 'light' ? 'opacity-10' : 'opacity-20'} grayscale group-hover:grayscale-0 group-hover:opacity-40 transition-all duration-700`}
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${variant === 'light' ? 'from-white via-white/60 to-transparent' :
          variant === 'blue' ? 'from-primary via-primary/60 to-transparent' :
            variant === 'dark' ? 'from-black via-black/60 to-transparent' :
              'from-background via-background/60 to-transparent'
          }`} />
      </div>

      {/* Content */}
      <div className="relative z-10 p-10 h-full flex flex-col justify-end">
        <div className="mb-4">
          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 ${variant === 'light' ? 'bg-slate-100 text-slate-900' : 'bg-white/10 text-white backdrop-blur-xl border border-white/10'
            }`}>
            {icon}
          </div>
          <h3 className="text-3xl lg:text-4xl font-black mb-4 tracking-tight leading-none">
            {title}
          </h3>
          <p className={`text-lg leading-relaxed max-w-sm ${variant === 'light' ? 'text-slate-600' : 'text-white/70'
            }`}>
            {description}
          </p>
        </div>
      </div>

      {/* Hover Highlight */}
      <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/40 rounded-[2.5rem] transition-colors duration-500 pointer-events-none" />
    </div>
  )
}
