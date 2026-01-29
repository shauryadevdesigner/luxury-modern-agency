"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function AppCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  const screens = [
    { id: 1, image: "/side-left.png", title: "Dashboard Interface" },
    { id: 2, image: "/side-right.png", title: "Mobile Finance App" },
    { id: 3, image: "/figma.png", title: "Design System" },
    { id: 4, image: "/slack.png", title: "Communication Portal" },
  ]

  useEffect(() => {
    if (!isAutoPlay) return
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % screens.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [isAutoPlay, screens.length])

  const goToSlide = (index: number) => {
    setActiveIndex(index)
    setIsAutoPlay(false)
  }

  const handlePrevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + screens.length) % screens.length)
    setIsAutoPlay(false)
  }

  const handleNextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % screens.length)
    setIsAutoPlay(false)
  }

  return (
    <section className="py-20 md:py-28 bg-background border-t border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-bold tracking-widest uppercase text-xs mb-4">App Showcase</p>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
            Experience the App Interface
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
            See how our interactive prototypes bring your vision to life in record time.
          </p>
        </div>

        <div
          className="relative h-[400px] md:h-[500px] flex items-center justify-center mb-10 group"
          style={{ perspective: "1500px" }}
        >
          {/* Main Background Panel */}
          <div className="absolute inset-0 bg-muted/30 rounded-[3rem] -z-10 border border-border"></div>

          <button
            onClick={handlePrevSlide}
            className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full bg-background border border-border hover:border-primary transition-all duration-300 transform hover:scale-110 shadow-xl group/arrow"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-foreground transition-transform duration-300 group-hover/arrow:-translate-x-1" />
          </button>

          {/* Carousel Slides */}
          <div className="relative w-full h-full flex items-center justify-center">
            {screens.map((screen, index) => {
              const position = (index - activeIndex + screens.length) % screens.length
              const isActive = position === 0
              const isNext = position === 1
              const isPrev = position === screens.length - 1

              let transform = "translateX(400%) scale(0.6) opacity(0)"
              let zIndex = 0

              if (isActive) {
                transform = "translateX(0) scale(1) opacity(1)"
                zIndex = 50
              } else if (isNext) {
                transform = "translateX(100%) scale(0.8) opacity(0.5) rotateY(-20deg)"
                zIndex = 30
              } else if (isPrev) {
                transform = "translateX(-100%) scale(0.8) opacity(0.5) rotateY(20deg)"
                zIndex = 30
              }

              return (
                <div
                  key={screen.id}
                  className="absolute transition-all duration-700 ease-in-out"
                  style={{
                    transform,
                    zIndex,
                    transformStyle: "preserve-3d"
                  }}
                >
                  {/* Phone Mockup */}
                  <div
                    className="relative w-48 md:w-64 h-[280px] md:h-[380px] bg-black rounded-[2.5rem] border-[6px] border-slate-900 shadow-2xl"
                    style={{
                      boxShadow: isActive
                        ? "0 40px 100px -20px rgba(0, 0, 0, 0.4), 0 0 40px rgba(0, 0, 0, 0.1)"
                        : "0 20px 50px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-slate-900 rounded-b-2xl z-10"></div>

                    {/* Screen Content */}
                    <div className="absolute inset-0 rounded-[2rem] overflow-hidden m-2 bg-slate-100">
                      <Image
                        src={screen.image || "/placeholder.svg"}
                        alt={screen.title}
                        fill
                        className="object-cover"
                        priority={isActive}
                      />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <button
            onClick={handleNextSlide}
            className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full bg-background border border-border hover:border-primary transition-all duration-300 transform hover:scale-110 shadow-xl group/arrow"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-foreground transition-transform duration-300 group-hover/arrow:translate-x-1" />
          </button>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-3 mb-10">
          {screens.map((screen, index) => (
            <button
              key={screen.id}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-500 rounded-full h-1.5 ${activeIndex === index ? "bg-primary w-12" : "bg-muted-foreground/30 w-3 hover:bg-muted-foreground/50"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button className="px-10 py-4 bg-primary text-primary-foreground font-bold text-xs tracking-widest rounded-full hover:scale-105 transition-all duration-300 shadow-xl">
            EXPLORE CASE STUDIES
          </button>
        </div>
      </div>
    </section>
  )
}
