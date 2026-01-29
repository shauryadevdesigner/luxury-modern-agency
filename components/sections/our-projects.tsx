"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"

// Project data from the work page
const FEATURED_PROJECTS = [
    {
        id: 1,
        title: "ZNS Connect",
        image: "https://cdn.prod.website-files.com/6656e67ba33eadc8d460da9f/665850868778ce771abedb52_Side%20Left%20Bottom.png",
        url: "https://www.znsconnect.io",
        position: "left-top"
    },
    {
        id: 2,
        title: "DeFi Fanbase",
        image: "https://cdn.prod.website-files.com/6656e67ba33eadc8d460da9f/6658508666a051ca3d4d43d9_Side%20Left%20Top.png",
        url: "https://defi.fanbase.io/swap",
        position: "center-left"
    },
    {
        id: 3,
        title: "Pixel Realm",
        image: "https://cdn.prod.website-files.com/6656e67ba33eadc8d460da9f/66585086c450ce5c246e65f2_Side%20Right%20Top.png",
        url: "https://app.pixelrealm.io",
        position: "center-right"
    },
    {
        id: 4,
        title: "LiveScore Bet",
        image: "https://cdn.prod.website-files.com/6656e67ba33eadc8d460da9f/6658508760ca60d26516e00d_Side%20Right%20Bottom.png",
        url: "https://www.livescorebet.com/uk/",
        position: "right-bottom"
    },
]

export default function OurProjects() {
    const [scrollProgress, setScrollProgress] = useState(0)
    const sectionRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return

            const rect = sectionRef.current.getBoundingClientRect()
            const windowHeight = window.innerHeight
            const sectionHeight = rect.height

            // Calculate scroll progress when section is in view
            if (rect.top <= windowHeight && rect.bottom >= 0) {
                // Progress from 0 to 1 as user scrolls through section
                const scrolled = windowHeight - rect.top
                const total = windowHeight + sectionHeight
                const progress = Math.max(0, Math.min(1, scrolled / total))
                setScrollProgress(progress)
            }
        }

        window.addEventListener("scroll", handleScroll, { passive: true })
        handleScroll() // Initial calculation

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    // Calculate zoom scale (starts zoomed in, zooms out as you scroll)
    const getScale = (baseScale: number) => {
        const zoomStart = 1.5 // Start zoomed in
        const zoomEnd = 1.0 // End at normal size
        return zoomStart - (scrollProgress * (zoomStart - zoomEnd)) * baseScale
    }

    // Calculate opacity (fades in as you scroll)
    const getOpacity = (delay: number) => {
        const adjustedProgress = Math.max(0, scrollProgress - delay)
        return Math.min(1, adjustedProgress * 2)
    }

    // Calculate rotation for 3D effect
    const getRotation = (baseRotation: number) => {
        return baseRotation * (1 - scrollProgress)
    }

    return (
        <section
            ref={sectionRef}
            className="relative w-full py-20 md:py-32 px-4 md:px-8 overflow-hidden bg-black"
            style={{ minHeight: "100vh" }}
        >
            {/* Background gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-90" />

            {/* Subtle grid pattern */}
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
                    backgroundSize: '50px 50px',
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16 md:mb-24">
                    <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 bg-blue-500/20 text-blue-400 border border-blue-500/30">
                        Portfolio
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
                        Our <span className="italic font-light">projects</span>
                        <br />
                        that make a difference
                    </h2>
                    <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
                        Discover our latest projects. Modern, high-performing websites designed to convert your visitors into loyal customers.
                    </p>
                </div>

                {/* 3D Project Images Container */}
                <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px]">
                    {/* Left Top Image */}
                    <div
                        className="absolute top-[5%] left-[5%] w-[280px] md:w-[350px] lg:w-[420px] transition-all duration-700 ease-out"
                        style={{
                            transform: `
                scale(${getScale(1)})
                rotateY(${getRotation(-15)}deg)
                rotateX(${getRotation(5)}deg)
                translateZ(${scrollProgress * 50}px)
              `,
                            opacity: getOpacity(0),
                            transformStyle: 'preserve-3d',
                        }}
                    >
                        <a
                            href={FEATURED_PROJECTS[0].url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block group"
                        >
                            <div className="relative rounded-xl overflow-hidden shadow-2xl hover:shadow-blue-500/20 transition-shadow duration-300">
                                <Image
                                    src={FEATURED_PROJECTS[0].image}
                                    alt={FEATURED_PROJECTS[0].title}
                                    width={420}
                                    height={300}
                                    className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
                                    unoptimized
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                        </a>
                    </div>

                    {/* Center Left Image (Medical/Healthcare) */}
                    <div
                        className="absolute top-[25%] left-[8%] w-[300px] md:w-[380px] lg:w-[450px] transition-all duration-700 ease-out"
                        style={{
                            transform: `
                scale(${getScale(1.1)})
                rotateY(${getRotation(-10)}deg)
                rotateX(${getRotation(8)}deg)
                translateZ(${scrollProgress * 80}px)
              `,
                            opacity: getOpacity(0.1),
                            transformStyle: 'preserve-3d',
                        }}
                    >
                        <a
                            href={FEATURED_PROJECTS[1].url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block group"
                        >
                            <div className="relative rounded-xl overflow-hidden shadow-2xl hover:shadow-blue-500/20 transition-shadow duration-300">
                                <Image
                                    src={FEATURED_PROJECTS[1].image}
                                    alt={FEATURED_PROJECTS[1].title}
                                    width={450}
                                    height={320}
                                    className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
                                    unoptimized
                                />
                                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <p className="text-white text-sm font-medium">{FEATURED_PROJECTS[1].title}</p>
                                </div>
                            </div>
                        </a>
                    </div>

                    {/* Center Right Image (Mobile App) */}
                    <div
                        className="absolute top-[20%] right-[8%] w-[260px] md:w-[320px] lg:w-[380px] transition-all duration-700 ease-out"
                        style={{
                            transform: `
                scale(${getScale(1.05)})
                rotateY(${getRotation(12)}deg)
                rotateX(${getRotation(-6)}deg)
                translateZ(${scrollProgress * 60}px)
              `,
                            opacity: getOpacity(0.15),
                            transformStyle: 'preserve-3d',
                        }}
                    >
                        <a
                            href={FEATURED_PROJECTS[2].url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block group"
                        >
                            <div className="relative rounded-xl overflow-hidden shadow-2xl hover:shadow-blue-500/20 transition-shadow duration-300">
                                <Image
                                    src={FEATURED_PROJECTS[2].image}
                                    alt={FEATURED_PROJECTS[2].title}
                                    width={380}
                                    height={280}
                                    className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
                                    unoptimized
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                        </a>
                    </div>

                    {/* Right Bottom Image */}
                    <div
                        className="absolute bottom-[5%] right-[5%] w-[290px] md:w-[360px] lg:w-[420px] transition-all duration-700 ease-out"
                        style={{
                            transform: `
                scale(${getScale(0.95)})
                rotateY(${getRotation(8)}deg)
                rotateX(${getRotation(-10)}deg)
                translateZ(${scrollProgress * 70}px)
              `,
                            opacity: getOpacity(0.2),
                            transformStyle: 'preserve-3d',
                        }}
                    >
                        <a
                            href={FEATURED_PROJECTS[3].url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block group"
                        >
                            <div className="relative rounded-xl overflow-hidden shadow-2xl hover:shadow-blue-500/20 transition-shadow duration-300">
                                <Image
                                    src={FEATURED_PROJECTS[3].image}
                                    alt={FEATURED_PROJECTS[3].title}
                                    width={420}
                                    height={300}
                                    className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
                                    unoptimized
                                />
                                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <p className="text-white text-sm font-medium">{FEATURED_PROJECTS[3].title}</p>
                                </div>
                            </div>
                        </a>
                    </div>

                    {/* Additional scattered smaller images for depth */}
                    <div
                        className="absolute top-[45%] left-[25%] w-[180px] md:w-[220px] transition-all duration-700 ease-out"
                        style={{
                            transform: `
                scale(${getScale(0.8)})
                rotateY(${getRotation(-20)}deg)
                rotateX(${getRotation(12)}deg)
                translateZ(${scrollProgress * 40}px)
              `,
                            opacity: getOpacity(0.25) * 0.6,
                            transformStyle: 'preserve-3d',
                        }}
                    >
                        <div className="relative rounded-lg overflow-hidden shadow-xl opacity-70">
                            <Image
                                src="https://cdn.prod.website-files.com/6656e67ba33eadc8d460da9f/6658508666a051ca3d4d43d9_Side%20Left%20Top.png"
                                alt="Background project"
                                width={220}
                                height={160}
                                className="w-full h-auto"
                                unoptimized
                            />
                        </div>
                    </div>
                </div>

                {/* View All Projects Button */}
                <div className="flex justify-center mt-16 md:mt-24">
                    <Link
                        href="/work"
                        className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all duration-300 ease-out hover:shadow-lg hover:shadow-blue-500/30 hover:scale-105"
                    >
                        View All Projects
                    </Link>
                </div>
            </div>
        </section>
    )
}
