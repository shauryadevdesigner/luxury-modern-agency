"use client"

import { useEffect, useState } from "react"
import { useLanguage } from "@/components/language-provider"

export default function ProcessHero() {
    const [isLoaded, setIsLoaded] = useState(false)
    const { t } = useLanguage()

    useEffect(() => {
        setIsLoaded(true)
    }, [])

    return (
        <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-background">
            {/* Right Side Fluid Background - Mimicking Home Hero */}
            <div className="hidden lg:block absolute top-0 right-0 w-[60%] h-full overflow-hidden z-0">
                <svg
                    className="absolute top-0 -left-1 w-[200%] h-full lg:w-full text-[#1C1C1C]"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                >
                    <path d="M 15 0 C 40 40 0 60 25 100 L 100 100 L 100 0 Z" fill="currentColor" />
                </svg>
            </div>

            {/* Mobile Background */}
            <div className="lg:hidden absolute inset-0 bg-background z-0">
                <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            </div>

            <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center h-full pt-20">
                <div className={`space-y-6 max-w-2xl transition-all duration-1000 ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        <span className="text-xs font-black tracking-widest text-primary uppercase">{t.process.badge}</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
                        {t.process.title}
                    </h1>
                </div>
            </div>
        </section>
    )
}
