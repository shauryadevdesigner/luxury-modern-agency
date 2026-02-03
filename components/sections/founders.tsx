"use client"

import { useEffect, useRef, useState } from "react"
import { Linkedin, Twitter, ArrowUpRight } from "lucide-react"
import Link from "next/link"

export default function Founders() {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true)
            },
            { threshold: 0.2 }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()
    }, [])

    return (
        <section ref={sectionRef} className="py-24 px-6 md:px-12 bg-background relative overflow-hidden border-t border-border/40">
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-3xl -z-10 rounded-full translate-x-1/2" />

            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">

                    {/* Text Content */}
                    <div className={`md:col-span-7 space-y-8 transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-bold tracking-widest uppercase mb-4">
                            Visionary Leadership
                        </div>

                        <h2 className="text-4xl md:text-6xl font-serif italic text-foreground leading-tight">
                            "We don't just build websites; <br /> we build <span className="text-primary not-italic font-sans">legacies</span>."
                        </h2>

                        <div className="space-y-6 pt-4">
                            <h3 className="text-3xl font-black tracking-tighter text-foreground">
                                Shaurya Nischal Pandey
                            </h3>
                            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
                                Founder of Obsidor. Dedicated to pushing the boundaries of digital excellence.
                                With a focus on precision, aesthetics, and performance, I help brands engage their audience
                                through compelling storytelling and state-of-the-art technology.
                            </p>
                        </div>

                        <div className="flex gap-6 pt-4">
                            <Link href="#" className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group">
                                <Linkedin size={20} />
                            </Link>
                            <Link href="#" className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group">
                                <Twitter size={20} />
                            </Link>
                        </div>
                    </div>

                    {/* Visual/Image Area */}
                    <div className={`md:col-span-5 relative transition-all duration-1000 delay-300 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
                        <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden bg-muted/20 border border-border group">
                            {/* Abstract Placeholder or Image */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-50" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-9xl font-black text-foreground/5 select-none scale-150 group-hover:scale-125 transition-transform duration-1000">SNP</span>
                            </div>

                            {/* Overlay Content */}
                            <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-background to-transparent">
                                <div className="h-1 w-12 bg-primary mb-4" />
                                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                                    Founder & CEO
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
