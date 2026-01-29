"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export default function Presentation() {
    const [isVisible, setIsVisible] = useState(false)
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

    return (
        <section ref={sectionRef} className="py-24 md:py-32 bg-white text-black overflow-hidden px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header Section 1 */}
                <div className="text-center mb-16">
                    <p className="text-xs font-bold tracking-[0.3em] uppercase text-slate-400 mb-4">Set Your Agency</p>
                    <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tighter">
                        All your agency operations in one software
                    </h2>
                    <p className="text-slate-500 font-medium">All your data, your systems and your structure, in one platform.</p>
                </div>

                {/* Bento Grid 1 */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-20 lg:h-[600px]">
                    {/* Card 1: One Hub (Tall) */}
                    <div className="md:col-span-1 bg-slate-50 rounded-[2.5rem] p-8 overflow-hidden relative border border-slate-100 group">
                        <h3 className="text-2xl font-black mb-2 tracking-tight">One Hub for All Operations</h3>
                        <p className="text-slate-500 text-sm mb-8">All your leads, accounts, systems and tools, grouped in one place.</p>
                        <div className="relative h-[400px] w-full transform group-hover:scale-105 transition-transform duration-700">
                            <Image
                                src="/side-right.png"
                                alt="Mobile Hub"
                                fill
                                className="object-contain object-top rounded-2xl shadow-xl"
                            />
                        </div>
                    </div>

                    {/* Right Column: Nested Grid */}
                    <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Card 2: Automations (Blue) */}
                        <div className="bg-[#2D5BFF] rounded-[2.5rem] p-8 text-white relative overflow-hidden group">
                            <span className="text-[10px] font-bold tracking-widest uppercase mb-4 block opacity-80">Automations</span>
                            <h3 className="text-2xl font-black mb-4 tracking-tight">Automations that Works for You</h3>
                            <p className="text-white/80 text-sm mb-6">Operations, reports, notifications, and status updates happen automatically, saving 80% of manual work.</p>
                            <div className="relative h-48 w-full transform group-hover:-translate-y-2 transition-transform duration-500">
                                <Image src="/slack.png" alt="Automation" fill className="object-contain object-top" />
                            </div>
                        </div>

                        {/* Card 3: Built to Scale */}
                        <div className="bg-slate-50 rounded-[2.5rem] p-8 overflow-hidden relative border border-slate-100 group">
                            <h3 className="text-2xl font-black mb-4 tracking-tight text-slate-800">Built to Scale</h3>
                            <p className="text-slate-500 text-sm mb-6">Scale more models and organize more operations without breaking your backend.</p>
                            <div className="relative h-48 w-full transform group-hover:scale-110 transition-transform duration-700">
                                <Image src="/side-left.png" alt="Dashboard Scale" fill className="object-cover rounded-2xl shadow-lg" />
                            </div>
                        </div>

                        {/* Card 4: Built to Grow (Wide Bottom) */}
                        <div className="md:col-span-2 bg-[#0A0A0A] rounded-[2.5rem] p-8 text-white flex flex-col md:flex-row gap-8 overflow-hidden group border border-white/5">
                            <div className="md:w-1/3">
                                <h3 className="text-2xl font-black mb-4 tracking-tight">Built to Grow with You</h3>
                                <p className="text-white/40 text-sm mb-6 leading-relaxed">Handle 100x more leads and revenue while managing everything from one interface. Let the systems work for you and your growth stays on track.</p>
                            </div>
                            <div className="md:w-2/3 relative h-64 transform group-hover:translate-x-4 transition-transform duration-1000">
                                <Image src="/side-left.png" alt="Growth Interface" fill className="object-cover rounded-tl-3xl shadow-2xl" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 2 Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start mb-20">
                    {/* Card Left: High Fidelity Screens */}
                    <div className="lg:col-span-7 bg-slate-50 rounded-[3rem] p-10 md:p-16 relative overflow-hidden border border-slate-100 group min-h-[500px]">
                        <div className="max-w-md relative z-10">
                            <h3 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter">Your app's screens with a sexy UX/UI design</h3>
                            <p className="text-slate-500 text-lg md:text-xl font-medium mb-8">Having a good design is no longer optional. To stand out, find users, or raise funds, you need a quality design.</p>
                        </div>
                        <div className="absolute top-1/2 -right-20 transform -translate-y-1/2 w-[400px] h-[600px] rotate-12 group-hover:rotate-6 transition-transform duration-1000 hidden md:block opacity-60">
                            <div className="relative w-full h-full flex gap-4">
                                <div className="relative w-1/2 h-full -top-32">
                                    <Image src="/side-right.png" alt="Screen 1" fill className="object-contain" />
                                </div>
                                <div className="relative w-1/2 h-full top-32">
                                    <Image src="/side-right.png" alt="Screen 2" fill className="object-contain" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card Right: Tall Phone Mockup */}
                    <div className="lg:col-span-5 bg-slate-50 rounded-[3rem] p-10 flex items-center justify-center relative overflow-hidden border border-slate-100 min-h-[600px] group">
                        <div className="relative w-72 h-[550px] bg-black rounded-[3rem] border-[8px] border-slate-900 shadow-2xl z-10">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-2xl z-20"></div>
                            <div className="absolute inset-2 bg-white rounded-[2.2rem] overflow-hidden flex flex-col">
                                <div className="h-2/3 relative">
                                    <Image src="/side-right.png" alt="Car showcase" fill className="object-cover" />
                                </div>
                                <div className="p-6 bg-white flex-1 flex flex-col justify-center items-center text-center">
                                    <div className="w-10 h-10 bg-primary/10 rounded-xl mb-4 flex items-center justify-center">
                                        <div className="w-4 h-4 bg-primary rotate-45"></div>
                                    </div>
                                    <p className="text-xs font-bold text-slate-800 leading-tight">We help brands translate their ideas into real visual models.</p>
                                    <button className="mt-4 px-6 py-2 bg-primary text-white text-[10px] font-bold tracking-widest rounded-full uppercase">Review Now</button>
                                </div>
                            </div>
                        </div>
                        {/* Background glow */}
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent"></div>
                    </div>
                </div>

                {/* Section 3: Dark Minimal Card */}
                <div className="bg-[#1C2331] rounded-[2rem] p-8 md:p-12 mb-20 flex flex-col md:flex-row justify-between items-center group overflow-hidden relative">
                    <div className="relative z-10 mb-8 md:mb-0">
                        <h3 className="text-2xl md:text-3xl font-black text-white mb-2">A working file ready for development</h3>
                        <p className="text-white/40 font-medium">Production-grade Figma handoff for your engineers.</p>
                    </div>
                    <div className="relative w-16 h-16 md:w-24 md:h-24 transform group-hover:rotate-12 transition-transform duration-500 z-10">
                        <Image src="/figma.png" alt="Figma Icon" fill className="object-contain" />
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                </div>

                {/* Section 4: Tools Grid */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tighter max-w-2xl mx-auto">
                        Everything you need to present your project
                    </h2>
                    <p className="text-slate-500 font-medium max-w-xl mx-auto">We offer you a multitude of options to present your project to your users through our systems.</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="aspect-square bg-slate-50 rounded-3xl p-6 border border-slate-100 flex items-center justify-center group hover:bg-white hover:shadow-xl transition-all duration-300">
                            <div className="relative w-full h-full opacity-60 group-hover:opacity-100 transition-opacity">
                                <Image
                                    src={i % 2 === 0 ? "/side-right.png" : "/side-left.png"}
                                    alt="Asset"
                                    fill
                                    className="object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
