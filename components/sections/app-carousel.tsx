"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function AppCarousel() {
  const [activeIndex, setActiveIndex] = useState(1)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  const screens = [
    { id: 1, image: "/images/app-screen-1.png", title: "Browse Vehicles" },
    { id: 2, image: "/images/app-screen-2.png", title: "Select Options" },
    { id: 3, image: "/images/app-screen-3.png", title: "Checkout" },
    { id: 4, image: "/images/app-screen-4.png", title: "Confirmation" },
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
    <section className="py-10 md:py-14 bg-gradient-to-b from-background to-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8">
          <p className="text-accent-purple font-semibold mb-3">App Showcase</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Experience the App Interface
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            See how our interactive prototype brings your vision to life
          </p>
        </div>

        <div
          className="relative h-[280px] md:h-[320px] flex items-center justify-center mb-6 group"
          style={{ perspective: "1000px" }}
        >
          {/* Dark Background */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-800 rounded-3xl -z-10"></div>

          <button
            onClick={handlePrevSlide}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 transform hover:scale-110 backdrop-blur-sm border border-white/20 group/arrow"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-white transition-transform duration-300 group-hover/arrow:-translate-x-1" />
          </button>

          {/* Carousel Slides */}
          <div className="relative w-full h-full flex items-center justify-center">
            {screens.map((screen, index) => {
              const position = (index - activeIndex + screens.length) % screens.length
              const isActive = position === 0
              const isNext = position === 1
              const isPrev = position === screens.length - 1

              let transform = "translateX(200%) scale(0.7) opacity(0)"
              let zIndex = 0

              if (isActive) {
                transform = "translateX(0) scale(1) opacity(1)"
                zIndex = 50
              } else if (isNext) {
                transform = "translateX(200%) scale(0.8) opacity(0.5)"
                zIndex = 30
              } else if (isPrev) {
                transform = "translateX(-200%) scale(0.8) opacity(0.5)"
                zIndex = 30
              }

              return (
                <div
                  key={screen.id}
                  className="absolute transition-all duration-500 ease-out"
                  style={{
                    transform,
                    zIndex,
                  }}
                >
                  {/* iPhone Mockup */}
                  <div
                    className="relative w-36 md:w-44 h-[220px] md:h-[260px] bg-black rounded-2xl border-4 border-gray-800 shadow-2xl"
                    style={{
                      boxShadow: isActive
                        ? "0 20px 60px rgba(133, 46, 214, 0.3), 0 0 40px rgba(168, 85, 247, 0.2)"
                        : "0 10px 30px rgba(0, 0, 0, 0.3)",
                    }}
                  >
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-10"></div>

                    {/* Screen Content */}
                    <div className="absolute inset-0 rounded-2xl overflow-hidden mt-2 ml-2 mr-2 mb-2">
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
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 transform hover:scale-110 backdrop-blur-sm border border-white/20 group/arrow"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-white transition-transform duration-300 group-hover/arrow:translate-x-1" />
          </button>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mb-6">
          {screens.map((screen, index) => (
            <button
              key={screen.id}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${activeIndex === index ? "bg-accent-purple w-10 h-3" : "bg-slate-300 w-3 h-3 hover:bg-slate-400"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button className="px-8 py-4 bg-foreground text-background font-semibold rounded-full hover:bg-accent-purple transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            Explore More
          </button>
        </div>
      </div>
    </section>
  )
}
