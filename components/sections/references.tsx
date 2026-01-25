"use client"

import Image from "next/image"
import { Star } from "lucide-react"

export default function References() {
  const testimonials = [
    {
      id: 1,
      rating: 4.8,
      quote:
        "Let me start by saying: Louis Key and the crew at Orcale aren't just designers, they're so much more. When I needed a logo for my SaaS Denim, Nutri+Machine, I didn't just want something nice. I wanted something that would knock people's socks off. And boy, they did it. I couldn't be prouder to slap that logo on every thing they throw from our website to our coffee mugs. So if you're looking for designers who will take your vision and turn it into something beyond your wildest dreams, look no further than Louis Key and Orcale!",
      name: "John Danes",
      title: "Marketing Agency Founder - USA",
      company: "agencyClients",
      image:
        "https://cdn.prod.website-files.com/66f8845b6f7911f99d856648/69399119bea0848817792d39_7aa43d0de65cded6cdc8fe3eee788cd6_John%20Danes.avif",
      featured: true,
    },
    {
      id: 2,
      rating: 5,
      quote:
        "This singular idea using Last for one of our product logo designs, and they raised it! The logo design provides the look and feel we wished. The logo design has exceeded our brand vision by taking into account all information we provided. Other than that, everything was excellent — I'd definitely work with him again!",
      name: "client@tickle",
      title: "Date of experience: December 17, 2025",
      company: "",
    },
    {
      id: 3,
      rating: 5,
      quote:
        "I reached out to him for building our mobile app, and the experience was smooth from start to finish. He was extremely responsive, understood our requirements clearly, and suggested smart improvements we hadn't thought of. Revisions were handled quickly, and the final app turned out polished, fast, and user-friendly.",
      name: "beautyAuditia",
      title: "Date of experience: November 18, 2025",
      company: "",
    },
    {
      id: 4,
      rating: 5,
      quote:
        "Working with him on our SaaS product was a great decision. He took the time to understand our business goals and translated them into a clean, scalable solution. Communication was excellent throughout, and his technical suggestions really improved the overall product. The final SaaS app exceeded our expectations.",
      name: "VastChatRov",
      title: "Date of experience: November 3, 2025",
      company: "",
    },
    {
      id: 5,
      rating: 5,
      quote:
        "I contacted them for a professional website, and they delivered exactly what we needed. They paid close attention to our ideas, added creative inputs, and refined the design until it was perfect. The site looks modern, loads fast, and represents our brand beautifully!",
      name: "clientsMarkable",
      title: "Date of experience: September 18, 2025",
      company: "",
    },
    {
      id: 6,
      rating: 5,
      quote:
        "Excellent designer, took the time to fully understand my brand and worked diligently to get it right. The designer was incredibly helpful and even provided some amazing suggestions that helped align with our mission and values. Overall, I'm very happy with the results and highly recommend working with them.",
      name: "designsSmartly",
      title: "Date of experience: November 24, 2025",
      company: "",
    },
    {
      id: 7,
      rating: 5,
      quote:
        "As a startup, we needed someone who could understand our vision, and he did exactly that. From planning to execution, everything was handled professionally. He was patient, proactive, and delivered high-quality work that helped bring our idea to life.",
      name: "designsSmartly",
      title: "Date of experience: December 6, 2025",
      company: "",
    },
  ]

  const StarRating = () => (
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={16} className="fill-blue-500 text-blue-500" />
      ))}
    </div>
  )

  return (
    <section className="relative py-10 md:py-14 overflow-hidden bg-white">
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20 pointer-events-none" />
      <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-20 pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 max-w-7xl">


        {/* Grid */}
        <div className="relative z-10 container mx-auto px-6 max-w-7xl">
          {/* Top Row - Moving Right to Left */}
          <div className="marquee-container mb-8">
            <div className="marquee-content marquee-left">
              {[...testimonials.slice(1, 4), ...testimonials.slice(1, 4)].map((t, idx) => (
                <div
                  key={`top-${idx}`}
                  className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 flex-shrink-0 w-96"
                >
                  <StarRating />
                  <p className="text-gray-700 text-sm leading-relaxed mb-6 line-clamp-4">"{t.quote}"</p>
                  <h4 className="font-semibold text-gray-900 text-sm">{t.name}</h4>
                  <p className="text-xs text-gray-500">{t.title}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Row - Moving Left to Right */}
          <div className="marquee-container">
            <div className="marquee-content marquee-right">
              {[...testimonials.slice(4, 7), ...testimonials.slice(4, 7)].map((t, idx) => (
                <div
                  key={`bottom-${idx}`}
                  className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 flex-shrink-0 w-96"
                >
                  <StarRating />
                  <p className="text-gray-700 text-sm leading-relaxed mb-6 line-clamp-4">"{t.quote}"</p>
                  <h4 className="font-semibold text-gray-900 text-sm">{t.name}</h4>
                  <p className="text-xs text-gray-500">{t.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        @keyframes scrollRight {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .marquee-left {
          animation: scrollLeft 30s linear infinite;
        }

        .marquee-right {
          animation: scrollRight 30s linear infinite;
        }

        .marquee-container {
          overflow: hidden;
        }

        .marquee-content {
          display: flex;
          gap: 1.5rem;
          width: fit-content;
        }
      `}</style>
    </section>
  )
}
