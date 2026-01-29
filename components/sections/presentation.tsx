"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export default function Presentation() {
    const [isVisible, setIsVisible] = useState(false)
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
    const sectionRef = useRef(null)

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

    const VIDEO_URL = "https://dl.dropboxusercontent.com/scl/fi/yd74ei48y3bxepcmb6g3j/prototype-otopro.mp4?rlkey=gx7aygf3jj5l57s7xc7it08zg&st=7vmju5g4&dl=0"

    return (
        <section ref={sectionRef} className="py-24 md:py-32 bg-white text-black overflow-hidden px-4 md:px-8 border-b border-border/50">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16 space-y-4">
                    <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-slate-400">SET YOUR AGENCY</p>
                    <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter">
                        All your agency operations in one software
                    </h2>
                    <p className="text-slate-500 font-medium text-lg">All your data, your systems and your structure, in one platform.</p>
                </div>

                {/* Bento Grid Layer 1 */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 mb-8 lg:h-[650px]">
                    {/* Card 1: One Hub */}
                    <div className="md:col-span-1 bg-slate-50 rounded-[3rem] p-10 overflow-hidden relative border border-slate-100 group hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500 hover:-translate-y-1">
                        <h3 className="text-2xl font-black mb-3 tracking-tight">One Hub for All Operations</h3>
                        <p className="text-slate-500 text-sm mb-10 leading-relaxed">All your leads, accounts, systems and tools, grouped in one place.</p>
                        <div className="relative h-full w-full transform group-hover:scale-105 transition-transform duration-700 ease-out">
                            <Image
                                src="/side-right.png"
                                alt="Mobile Hub"
                                fill
                                className="object-contain object-top rounded-3xl"
                            />
                        </div>
                    </div>

                    {/* Right Column Grid */}
                    <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                        {/* Card 2: Automations (Blue) */}
                        <div className="bg-[#2D5BFF] rounded-[3rem] p-10 text-white relative overflow-hidden group hover:shadow-2xl hover:shadow-[#2D5BFF]/30 transition-all duration-500 hover:-translate-y-1">
                            <span className="text-[10px] font-bold tracking-[0.2em] uppercase mb-6 block opacity-70">Automations</span>
                            <h3 className="text-2xl font-black mb-4 tracking-tight">Automations that Works for You</h3>
                            <p className="text-white/80 text-sm mb-8 leading-relaxed">Operations, reports, notifications, and status updates happen automatically, saving 80% of manual work.</p>
                            <div className="relative h-56 w-full transform group-hover:-translate-y-4 transition-transform duration-700 ease-out">
                                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 h-full">
                                    <Image src="/slack.png" alt="Automation UI" fill className="object-contain p-2" />
                                </div>
                            </div>
                        </div>

                        {/* Card 3: Built to Scale */}
                        <div className="bg-slate-50 rounded-[3rem] p-10 overflow-hidden relative border border-slate-100 group hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500 hover:-translate-y-1">
                            <h3 className="text-2xl font-black mb-4 tracking-tight text-slate-800">Built to Scale</h3>
                            <p className="text-slate-500 text-sm mb-8 leading-relaxed">Scale more models and organize more operations without breaking your backend.</p>
                            <div className="relative h-56 w-full transform group-hover:scale-110 transition-transform duration-1000 ease-in-out">
                                <Image src="/side-left.png" alt="Dashboard Scale" fill className="object-cover rounded-3xl shadow-xl" />
                            </div>
                        </div>

                        {/* Card 4: Built to Grow (Black Wide) */}
                        <div className="md:col-span-2 bg-[#0A0A0A] rounded-[3rem] p-10 text-white flex flex-col md:flex-row gap-8 overflow-hidden group border border-white/10 hover:shadow-2xl hover:shadow-black/50 transition-all duration-500 hover:-translate-y-1">
                            <div className="md:w-1/3 flex flex-col justify-center">
                                <h3 className="text-3xl font-black mb-6 tracking-tight">Built to Grow with You</h3>
                                <p className="text-white/40 text-sm mb-6 leading-relaxed">Handle 100x more leads and revenue while managing everything from one interface. Let the systems work.</p>
                                <div className="flex gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
                                    <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                                    <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                                </div>
                            </div>
                            <div className="md:w-2/3 relative h-[300px] transform group-hover:translate-x-6 transition-transform duration-1000 ease-out">
                                <Image src="/side-left.png" alt="Growth Interface" fill className="object-cover rounded-tl-[3rem] shadow-3xl border-l border-t border-white/10" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bento Grid Layer 2 */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-stretch mb-8">
                    {/* Card Left: High Fidelity Screens */}
                    <div className="lg:col-span-7 bg-slate-50 rounded-[3rem] p-10 md:p-16 relative overflow-hidden border border-slate-100 group hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500 hover:-translate-y-1 min-h-[550px]">
                        <div className="max-w-md relative z-10">
                            <h3 className="text-4xl md:text-5xl font-black mb-8 tracking-tighter leading-none">Your app's screens with a sexy UX/UI design</h3>
                            <p className="text-slate-500 text-lg md:text-xl font-medium mb-10 leading-relaxed">Having a good design is no longer optional. To stand out, find users, or raise funds, you need a quality design.</p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center bg-white shadow-sm">
                                    <span className="text-xs font-black">UX</span>
                                </div>
                                <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center bg-white shadow-sm">
                                    <span className="text-xs font-black">UI</span>
                                </div>
                            </div>
                        </div>

                        {/* Floating screens with better spacing and animation */}
                        <div className="absolute top-1/2 -right-32 transform -translate-y-1/2 w-[500px] h-[700px] hidden md:block">
                            <div className="relative w-full h-full rotate-12 group-hover:rotate-6 transition-all duration-1000 ease-out">
                                <div className="absolute top-0 right-40 w-56 h-[450px] transform -translate-y-12 translate-x-12 opacity-40 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-1000">
                                    <Image src="/side-right.png" alt="Screen 1" fill className="object-contain grayscale" />
                                </div>
                                <div className="absolute top-20 right-10 w-56 h-[450px] shadow-2xl transform translate-x-24 group-hover:translate-x-12 transition-transform duration-1000">
                                    <Image src="/side-right.png" alt="Screen 2" fill className="object-contain" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card Right: Video Mobile Mockup */}
                    <div className="lg:col-span-5 bg-slate-50 rounded-[3rem] p-10 flex items-center justify-center relative overflow-hidden border border-slate-100 min-h-[600px] group hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500 hover:-translate-y-1">
                        <div className="relative w-72 h-[580px] bg-black rounded-[3.5rem] border-[10px] border-slate-950 shadow-3xl z-10 transform group-hover:scale-105 transition-transform duration-700 ease-out">
                            {/* Dynamic Island */}
                            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full z-40 flex items-center justify-center">
                                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500/50 absolute right-6"></div>
                            </div>

                            {/* Screen Content: Video */}
                            <div className="absolute inset-x-1 inset-y-1 bg-white rounded-[3rem] overflow-hidden flex flex-col">
                                <div className="h-[75%] relative bg-black">
                                    <video
                                        src={VIDEO_URL}
                                        className="w-full h-full object-cover"
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                    />
                                </div>
                                <div className="p-8 bg-white flex-1 flex flex-col justify-center items-center text-center">
                                    <div className="w-10 h-10 bg-primary/10 rounded-xl mb-4 flex items-center justify-center">
                                        <div className="w-4 h-4 bg-primary rounded-sm rotate-45"></div>
                                    </div>
                                    <p className="text-[11px] font-black text-slate-800 leading-tight uppercase tracking-widest">Interactive Prototypes</p>
                                    <button className="mt-4 px-8 py-2.5 bg-black text-white text-[9px] font-bold tracking-[0.2em] rounded-full uppercase hover:scale-110 transition-transform">Live Demo</button>
                                </div>
                            </div>
                        </div>

                        {/* Background Effects */}
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent"></div>
                        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    </div>
                </div>

                {/* Section 3: Creative Black Card (Fhandover) */}
                <div className="bg-[#0A0A0A] rounded-[3rem] p-10 md:p-16 mb-20 group overflow-hidden relative border border-white/10 hover:shadow-3xl transition-all duration-700 min-h-[250px] flex items-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 w-full items-center relative z-20">
                        <div>
                            <h3 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tighter">A working file ready for development</h3>
                            <p className="text-white/40 text-lg font-medium">Production-grade Figma handoff. Clean layers, design tokens, and perfect structure.</p>
                        </div>
                        <div className="relative flex justify-center md:justify-end mt-12 md:mt-0">
                            {/* Creative visualization of Figma layers */}
                            <div className="relative w-64 h-48">
                                {/* Layer 1 (bottom) */}
                                <div className="absolute bottom-0 right-0 w-48 h-32 bg-white/5 border border-white/10 rounded-xl transform rotate-[-15deg] group-hover:rotate-0 group-hover:translate-x-4 transition-all duration-700 backdrop-blur-sm flex items-end p-4">
                                    <div className="w-full h-2 bg-white/10 rounded-full"></div>
                                </div>
                                {/* Layer 2 (middle) */}
                                <div className="absolute bottom-4 right-4 w-48 h-32 bg-[#2D5BFF]/10 border border-[#2D5BFF]/30 rounded-xl transform rotate-[-5deg] group-hover:rotate-[-8deg] group-hover:translate-x-2 transition-all duration-700 backdrop-blur-sm flex items-center justify-center">
                                    <Image src="/figma.png" alt="Figma" width={40} height={40} className="opacity-40" />
                                </div>
                                {/* Layer 3 (Top) */}
                                <div className="absolute bottom-12 right-8 w-48 h-32 bg-white/10 border border-white/30 rounded-xl group-hover:translate-y-[-10px] transition-all duration-700 backdrop-blur-md flex flex-col p-6 gap-3 shadow-2xl">
                                    <div className="w-1/2 h-2 bg-primary rounded-full"></div>
                                    <div className="w-3/4 h-2 bg-white/20 rounded-full"></div>
                                    <div className="w-full h-2 bg-white/10 rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Animated Background Gradients */}
                    <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(45,91,255,0.15),transparent_40%)] group-hover:opacity-100 transition-opacity duration-1000"></div>
                </div>

                {/* Section 4: Tools Grid */}
                <div className="text-center mb-20 space-y-6">
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter max-w-3xl mx-auto leading-none">
                        Everything you need to present your project
                    </h2>
                    <p className="text-slate-500 text-lg md:text-xl font-medium max-w-2xl mx-auto">We offer you a multitude of options to present your project to your users through our systems.</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div
                            key={i}
                            onMouseEnter={() => setHoveredIndex(i)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className="aspect-square bg-slate-50 rounded-[2.5rem] p-8 border border-slate-100 flex items-center justify-center group hover:bg-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
                        >
                            <div className="relative w-full h-full opacity-40 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110">
                                <Image
                                    src={i % 2 === 0 ? "/side-right.png" : "/side-left.png"}
                                    alt="System Asset"
                                    fill
                                    className="object-contain grayscale group-hover:grayscale-0 transition-all duration-700"
                                />
                            </div>
                            {/* Hover Glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
