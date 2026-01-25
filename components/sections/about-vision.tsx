"use client"

import { useEffect, useState, useCallback } from "react"
import { useScrollTrigger } from "@/hooks/use-scroll-trigger"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

function GridParallaxBackground() {
  const [scrollY, setScrollY] = useState(0)

  const handleScroll = useCallback(() => {
    requestAnimationFrame(() => {
      setScrollY(window.scrollY)
    })
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Layer 1: Main grid - slowest parallax */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(31, 60, 136, 0.07) 1.5px, transparent 1.5px),
            linear-gradient(90deg, rgba(31, 60, 136, 0.07) 1.5px, transparent 1.5px)
          `,
          backgroundSize: "70px 70px",
          transform: `translate3d(0, ${scrollY * 0.08}px, 0)`,
          transition: "transform 0.1s linear",
          willChange: "transform",
        }}
      />

      {/* Layer 2: Diagonal grid - medium parallax */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(45deg, rgba(31, 60, 136, 0.04) 1px, transparent 1px),
            linear-gradient(-45deg, rgba(31, 60, 136, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: "35px 35px",
          transform: `translate3d(0, ${scrollY * 0.15}px, 0)`,
          transition: "transform 0.15s linear",
          willChange: "transform",
        }}
      />

      {/* Layer 3: Dot pattern - fastest parallax */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(31, 60, 136, 0.09) 1.5px, transparent 1.5px)`,
          backgroundSize: "45px 45px",
          transform: `translate3d(0, ${scrollY * 0.2}px, 0)`,
          transition: "transform 0.2s linear",
          willChange: "transform",
        }}
      />

      {/* Layer 4: Large accent circles - opposite direction */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 15% 25%, rgba(31, 60, 136, 0.05) 0%, transparent 40%),
            radial-gradient(circle at 85% 75%, rgba(31, 60, 136, 0.05) 0%, transparent 40%),
            radial-gradient(circle at 50% 50%, rgba(31, 60, 136, 0.03) 0%, transparent 60%)
          `,
          transform: `translate3d(0, ${scrollY * -0.05}px, 0)`,
          transition: "transform 0.25s linear",
          willChange: "transform",
        }}
      />

      {/* Layer 5: Subtle gradient for depth */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg, rgba(31, 60, 136, 0.02) 0%, transparent 30%, transparent 70%, rgba(31, 60, 136, 0.02) 100%)`,
          transform: `translate3d(0, ${scrollY * 0.03}px, 0)`,
          transition: "transform 0.3s linear",
          willChange: "transform",
        }}
      />
    </div>
  )
}

function ParallaxShapes() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Stars */}
      <div
        className="absolute text-blue-900/10 text-5xl"
        style={{ top: "8%", left: "5%", transform: `translateY(${scrollY * 0.1}px)` }}
      >
        ★
      </div>
      <div
        className="absolute text-blue-900/8 text-4xl"
        style={{ top: "25%", right: "10%", transform: `translateY(${scrollY * -0.12}px)` }}
      >
        ★
      </div>
      <div
        className="absolute text-blue-900/6 text-3xl"
        style={{ top: "55%", left: "8%", transform: `translateY(${scrollY * 0.08}px)` }}
      >
        ★
      </div>
      <div
        className="absolute text-blue-900/8 text-4xl"
        style={{ top: "75%", right: "20%", transform: `translateY(${scrollY * -0.09}px)` }}
      >
        ★
      </div>

      {/* Circles (representing people/team) */}
      <div
        className="absolute w-24 h-24 rounded-full border-2 border-blue-900/8"
        style={{ top: "15%", right: "25%", transform: `translateY(${scrollY * 0.09}px)` }}
      />
      <div
        className="absolute w-16 h-16 rounded-full bg-blue-900/4"
        style={{ top: "40%", left: "15%", transform: `translateY(${scrollY * -0.1}px)` }}
      />
      <div
        className="absolute w-32 h-32 rounded-full border-2 border-blue-900/6"
        style={{ top: "65%", right: "5%", transform: `translateY(${scrollY * 0.11}px)` }}
      />

      {/* Speech bubbles (abstract) */}
      <div
        className="absolute w-20 h-16 rounded-2xl bg-blue-900/4"
        style={{ top: "30%", left: "3%", transform: `translateY(${scrollY * -0.07}px)` }}
      />
      <div
        className="absolute w-16 h-12 rounded-2xl border-2 border-blue-900/8"
        style={{ top: "50%", right: "30%", transform: `translateY(${scrollY * 0.08}px)` }}
      />

      {/* Hearts (passion) */}
      <div
        className="absolute text-blue-900/8 text-4xl"
        style={{ top: "20%", left: "35%", transform: `translateY(${scrollY * 0.06}px)` }}
      >
        ♥
      </div>
      <div
        className="absolute text-blue-900/6 text-3xl"
        style={{ top: "70%", left: "30%", transform: `translateY(${scrollY * -0.1}px)` }}
      >
        ♥
      </div>

      {/* Dots pattern */}
      <div
        className="absolute w-36 h-36"
        style={{ top: "45%", right: "15%", transform: `translateY(${scrollY * 0.05}px)` }}
      >
        {[...Array(16)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-blue-900/8"
            style={{
              top: `${Math.floor(i / 4) * 25}%`,
              left: `${(i % 4) * 25}%`,
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default function AboutVision() {
  const leftRef = useScrollTrigger()
  const rightRef = useScrollTrigger()
  const testimonialsRef = useScrollTrigger()
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "John Thompson",
      role: "CEO, TechStartup",
      quote:
        "Working with Elite was transformative. They delivered a production-ready platform in 3 weeks that our previous team couldn't accomplish in 3 months.",
      image: "/testimonial-1.jpg",
    },
    {
      name: "Marcus Rodriguez",
      role: "Founder, FinTech Inc",
      quote:
        "Their expertise in both design and engineering is exceptional. They didn't just build our MVP—they built it right from day one.",
      image: "/testimonial-2.jpg",
    },
    {
      name: "Alex Novak",
      role: "Product Manager, SaaS Co",
      quote:
        "The attention to detail and commitment to quality is unmatched. They own their work, and it shows in every line of code.",
      image: "/testimonial-3.jpg",
    },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-16 md:py-20 px-4 md:px-8 bg-white border-y border-gray-200 relative overflow-hidden">
      <GridParallaxBackground />
      <ParallaxShapes />

      <div className="absolute inset-0 bg-white/85" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div
            ref={leftRef.ref}
            className={`transition-all duration-700 ${
              leftRef.isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <h2 className={`mb-6 text-black text-5xl md:text-6xl font-bold`}>Who We Are</h2>
            <p className={`text-lg text-gray-600 mb-6 leading-relaxed`}>
              A collective of senior engineers and designers obsessed with shipping production-ready products fast.
            </p>
            <p className={`text-lg text-gray-600 mb-6 leading-relaxed`}>
              Speed and excellence aren't mutually exclusive—they're the result of deep expertise and disciplined
              execution.
            </p>
            <p className={`text-lg text-gray-600 leading-relaxed`}>
              Today, we partner with founders and companies who refuse to compromise. We ship MVPs in weeks, scale
              platforms to millions of users, and maintain the code long-term because we own it too.
            </p>
          </div>

          <div
            ref={rightRef.ref}
            className={`transition-all duration-700 ${
              rightRef.isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="aspect-square rounded-2xl overflow-hidden hover:shadow-lg hover:scale-105 transition-all duration-300 group">
              <Image
                src="/team-excellence-shipping.jpg"
                alt="Team shipping excellence"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div
          ref={testimonialsRef.ref}
          className={`mt-24 transition-all duration-700 ${
            testimonialsRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center mb-12">
            <h3 className={`text-3xl font-bold text-black mb-4`}>What Our Clients Say</h3>
            <p className={`text-gray-600`}>Real feedback from founders and leaders we've worked with</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="min-h-64 p-12 rounded-2xl border border-blue-900/30 bg-gradient-to-br from-blue-900/5 to-white hover:shadow-xl transition-all duration-500 flex flex-col justify-between">
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-blue-900 text-xl">
                      ★
                    </span>
                  ))}
                </div>
                <p className={`text-xl text-gray-800 mb-8 leading-relaxed`}>
                  "{testimonials[currentTestimonial].quote}"
                </p>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-blue-900/10">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-blue-900/30">
                  <Image
                    src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                    alt={testimonials[currentTestimonial].name}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-black">{testimonials[currentTestimonial].name}</p>
                  <p className="text-sm text-gray-600">{testimonials[currentTestimonial].role}</p>
                </div>
              </div>
            </div>

            {/* Navigation arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 w-12 h-12 rounded-full border border-gray-300 bg-white hover:bg-blue-900 hover:text-white hover:border-blue-900 flex items-center justify-center transition-all duration-300 hover:shadow-lg"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 w-12 h-12 rounded-full border border-gray-300 bg-white hover:bg-blue-900 hover:text-white hover:border-blue-900 flex items-center justify-center transition-all duration-300 hover:shadow-lg"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentTestimonial(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  idx === currentTestimonial ? "bg-blue-900 w-8" : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
