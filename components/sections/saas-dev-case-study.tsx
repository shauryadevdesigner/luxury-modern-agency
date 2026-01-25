"use client"

import Image from "next/image"
import { Star } from "lucide-react"

export default function SaasDevCaseStudy() {
  const StarRating = () => (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={20} className="fill-blue-500 text-blue-500" />
      ))}
    </div>
  )

  return (
    <section className="py-20 md:py-32 px-4 md:px-8 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl border border-blue-100/50 p-8 md:p-16 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left - Testimonial */}
            <div>
              <StarRating />
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed my-8">
                "Oracle transformed our SaaS product vision into reality. From architecture planning to deployment, they
                demonstrated exceptional technical expertise and attention to detail. They weren't just developers—they
                were strategic partners who truly understood our business goals. The platform is now handling thousands
                of users with zero downtime, and the scalability is exactly what we needed."
              </p>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Marcus Rodriguez</h3>
                <p className="text-sm text-gray-600">Founder - CloudScale SaaS</p>
              </div>
            </div>

            {/* Right - Image */}
            <div className="relative w-full aspect-square max-w-md rounded-2xl overflow-hidden shadow-xl mx-auto">
              <Image
                src="/images/chatgpt-20image-20dec-2031-2c-202025-2c-2008-44-48-20pm.png"
                alt="Marcus Rodriguez - SaaS Development"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
