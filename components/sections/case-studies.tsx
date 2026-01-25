"use client"

import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { useState } from "react"

export default function CaseStudies() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "Alex Thompson",
      role: "CEO, TechStart Inc.",
      content:
        "Working with this team on Oracle was an incredible experience. Their expertise in cloud solutions was exactly what we needed. The entire process was smooth, communication was clear, and they delivered beyond our expectations.",
      stars: 5,
      image: "/professional-man-1.jpg",
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      role: "Product Manager, Digital Ventures",
      content:
        "These developers have transformed our product vision into reality. Their technical expertise and attention to detail are unmatched. I can confidently say this partnership is one of the best investments we've made for our platform.",
      stars: 5,
      image: "/professional-man-2.png",
    },
    {
      id: 3,
      name: "John Barrett",
      role: "Founder, Creative Studios",
      content:
        "From initial consultation to final delivery, this agency exceeded all expectations. Their strategic approach combined with solid execution has had a measurable impact on our business. Highly recommended for anyone looking for top-tier development.",
      stars: 5,
      image: "/professional-man-3.jpg",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentSlide]

  return (
    <section className="py-24 md:py-32 px-4 md:px-8 bg-[#1F3C88]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-white mb-20 text-4xl md:text-5xl font-bold">Client Testimonials</h2>

        <div className="relative flex items-center justify-center gap-8 md:gap-16">
          {/* Left Arrow Button */}
          <button
            onClick={prevSlide}
            className="absolute left-0 md:relative z-10 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 hover:bg-[#1F3C88]/60 border border-white/20 hover:border-white/40 flex items-center justify-center transition-all duration-300 group"
            aria-label="Previous slide"
          >
            <ChevronLeft size={28} className="text-white group-hover:scale-110 transition-transform" />
          </button>

          {/* Phone Mockup Container */}
          <div className="flex justify-center flex-1">
            <div className="relative w-full max-w-sm">
              {/* Phone Frame */}
              <div className="relative bg-black rounded-3xl shadow-2xl" style={{ aspectRatio: "9/19.5" }}>
                {/* Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-20"></div>

                {/* Phone Screen Content */}
                <div
                  className="absolute inset-0 rounded-3xl overflow-hidden bg-white p-6 md:p-8 flex flex-col justify-between"
                  style={{ margin: "2px" }}
                >
                  {/* Header with name and role */}
                  <div>
                    <p className="font-semibold text-foreground text-lg">{currentTestimonial.name}</p>
                    <p className="text-sm text-foreground/60 mb-4">{currentTestimonial.role}</p>

                    {/* Star Rating */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(currentTestimonial.stars)].map((_, i) => (
                        <Star key={i} size={18} className="fill-[#1F3C88] text-[#1F3C88]" />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-sm md:text-base text-foreground/70 leading-relaxed mb-8">
                      "{currentTestimonial.content}"
                    </p>
                  </div>

                  {/* Profile Image at bottom */}
                  <div className="flex justify-center">
                    <div className="w-24 h-24 rounded-xl overflow-hidden border-2 border-[#1F3C88]/20">
                      <img
                        src={currentTestimonial.image || "/placeholder.svg"}
                        alt={currentTestimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={nextSlide}
            className="absolute right-0 md:relative z-10 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 hover:bg-[#1F3C88]/60 border border-white/20 hover:border-white/40 flex items-center justify-center transition-all duration-300 group"
            aria-label="Next slide"
          >
            <ChevronRight size={28} className="text-white group-hover:scale-110 transition-transform" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-white w-8" : "bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
