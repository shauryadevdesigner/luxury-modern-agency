"use client"

import Image from "next/image"

export default function Presentation() {
    const cards = [
        {
            title: "One Hub for All Operations",
            description: "CENTRALIZED DATA & SYSTEMS",
            image: "/side-right.png"
        },
        {
            title: "Automations that Works for You",
            description: "AI & WORKFLOW AUTOMATION",
            image: "/side-left.png"
        },
        {
            title: "Built to Scale",
            description: "HIGH-PERFORMANCE INFRASTRUCTURE",
            image: "/figma.png"
        }
    ]

    return (
        <section className="py-24 bg-black text-white px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20">
                    <h2 className="text-5xl md:text-8xl font-black lowercase tracking-tighter mb-4 opacity-100 transition-all duration-700">
                        software
                    </h2>
                    <div className="w-24 h-1.5 bg-primary rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="group relative bg-[#111] rounded-[2.5rem] p-10 border border-white/5 hover:border-white/10 transition-all duration-500 overflow-hidden flex flex-col h-full"
                        >
                            <div className="relative z-10 mb-10">
                                <h3 className="text-3xl font-black mb-4 group-hover:text-primary transition-colors leading-tight">
                                    {card.title}
                                </h3>
                                <p className="text-gray-500 group-hover:text-gray-400 transition-colors text-[10px] font-black tracking-[0.3em] uppercase">
                                    {card.description}
                                </p>
                            </div>

                            <div className="relative flex-1 rounded-[2rem] overflow-hidden bg-white/5 border border-white/5 min-h-[300px]">
                                <Image
                                    src={card.image}
                                    alt={card.title}
                                    fill
                                    className="object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-110"
                                />
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/5 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

