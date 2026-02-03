"use client"

import { useEffect, useRef, useState } from "react"
import { Film, TrendingUp, Code2, Check, Sparkles } from "lucide-react"
import { useContactForm } from "@/app/providers"

export default function FlagshipPackage() {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef(null)
    const { openContactForm } = useContactForm()

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

    const services = [
        {
            icon: Code2,
            title: "Web Development",
            description: "Premium, conversion-focused website. Fully responsive, SEO-optimized, and built to represent a serious brand.",
            features: [
                "Modern, high-end aesthetic",
                "Optimized for speed & scalability",
                "Mobile-first responsive design",
                "Enterprise-grade foundation"
            ]
        },
        {
            icon: Film,
            title: "Advertisement Video Editing",
            description: "High-quality promotional videos optimized for social media platforms with premium editing style.",
            features: [
                "Cinematic pacing & transitions",
                "Platform-optimized formats",
                "Brand-aligned visual identity",
                "Conversion-focused storytelling"
            ]
        },
        {
            icon: TrendingUp,
            title: "Marketing & Advertising",
            description: "Strategic marketing foundation with brand positioning, social media structure, and growth-oriented strategy.",
            features: [
                "Brand positioning & messaging",
                "Social media marketing setup",
                "Advertising-ready content",
                "Clear growth strategy"
            ]
        }
    ]

    return (
        <section ref={sectionRef} className="py-16 md:py-20 px-4 bg-background relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-breathe" />
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/5 border border-primary/10 rounded-full mb-4">
                        <Sparkles size={14} className="text-primary" />
                        <span className="text-[10px] font-black tracking-[0.2em] text-primary uppercase">FLAGSHIP PACKAGE</span>
                    </div>

                    <h2 className={`text-foreground mb-3 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                        The Obsidor Foundation
                    </h2>

                    <p className={`text-muted-foreground max-w-2xl mx-auto mb-6 transition-all duration-1000 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                        From zero to a fully operational, premium online presence. We build brands that command authority.
                    </p>

                    {/* Pricing */}
                    <div className={`transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
                        <div className="inline-block">
                            <div className="flex items-baseline gap-2 mb-2">
                                <span className="text-4xl md:text-5xl font-black text-primary">$4,000</span>
                                <span className="text-sm text-muted-foreground">USD</span>
                            </div>
                            <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-primary to-transparent line-draw" />
                        </div>
                    </div>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {services.map((service, idx) => (
                        <div
                            key={idx}
                            className={`group p-6 bg-card border border-border rounded-2xl transition-all duration-700 hover-premium ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                                }`}
                            style={{ transitionDelay: `${0.1 * (idx + 3)}s` }}
                        >
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                                <service.icon className="w-6 h-6 text-primary" />
                            </div>

                            <h3 className="text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                                {service.title}
                            </h3>

                            <p className="text-muted-foreground text-xs mb-4 leading-relaxed">
                                {service.description}
                            </p>

                            <ul className="space-y-2">
                                {service.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                                        <Check size={14} className="text-primary flex-shrink-0 mt-0.5" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* What You Get */}
                <div className={`bg-muted/30 border border-border rounded-2xl p-8 mb-8 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
                    <h3 className="text-foreground mb-4 text-center">What You Receive</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
                        {[
                            "Complete brand foundation",
                            "Production-ready website",
                            "Professional video content",
                            "Strategic marketing setup",
                            "Full ownership of all assets",
                            "Enterprise-grade execution",
                            "Scalable infrastructure",
                            "Premium support included"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                                    <Check size={12} className="text-primary" strokeWidth={3} />
                                </div>
                                <span className="text-sm text-foreground font-medium">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className={`text-center transition-all duration-1000 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                    <button
                        onClick={openContactForm}
                        className="px-10 py-4 bg-primary text-primary-foreground rounded-full font-bold text-sm tracking-wider transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30 active:scale-95 btn-magnetic inline-flex items-center gap-2"
                    >
                        <Sparkles size={16} />
                        Start Your Brand Journey
                    </button>

                    <p className="text-xs text-muted-foreground mt-4">
                        Limited availability · Enterprise execution · Premium positioning
                    </p>
                </div>
            </div>
        </section>
    )
}
