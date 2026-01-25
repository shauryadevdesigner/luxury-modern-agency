"use client"

import Image from "next/image"
import { Star } from "lucide-react"

export default function MobileDevCaseStudy() {
  const StarRating = () => (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={16} className="fill-blue-500 text-blue-500" />
      ))}
    </div>
  )

  return (
    <section className="py-8 md:py-12 px-4 md:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Dark premium card with gradient pattern */}
        <div className="relative overflow-hidden rounded-2xl">
          {/* Dark background */}
          <div className="absolute inset-0 bg-[#0a0a12]" />
          
          {/* Gradient overlay */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(59, 130, 246, 0.12), transparent), radial-gradient(ellipse 60% 40% at 100% 100%, rgba(139, 92, 246, 0.08), transparent)'
            }}
          />
          
          {/* Dot pattern overlay */}
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'radial-gradient(circle at center, rgba(255,255,255,0.12) 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }}
          />
          
          {/* Grid lines */}
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }}
          />

          {/* Content */}
          <div className="relative z-10 p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              {/* Left - Profile Image */}
              <div className="flex-shrink-0">
                <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-white/10 shadow-xl">
                  <Image
                    src="/images/chatgpt-20image-20dec-2031-2c-202025-2c-2008-44-48-20pm.png"
                    alt="Marcus Rodriguez"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Center - Testimonial */}
              <div className="flex-1 text-center md:text-left">
                <StarRating />
                <p className="text-base md:text-lg text-white/80 leading-relaxed my-5 max-w-2xl">
                  "Oracle designed an incredible brand in record time. No bloated process and endless meetings, just sharp, smart design with fast delivery and zero fluff."
                </p>
                <div>
                  <h3 className="text-lg font-semibold text-white">Paul Damas</h3>
                  <p className="text-sm text-white/50">Founder of Digitality</p>
                </div>
              </div>

              {/* Right - Brand label */}
              <div className="flex-shrink-0 hidden md:block">
                <span className="text-blue-400 font-semibold text-lg tracking-wide">Oracle</span>
                {/* Blue accent bar */}
                <div className="mt-4 w-12 h-1.5 bg-blue-500 rounded-full ml-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
