"use client"

import { useEffect, useRef } from "react"

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const canvas = containerRef.current?.querySelector("canvas") as HTMLCanvasElement
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    const particles: Array<{
      x: number
      y: number
      radius: number
      vx: number
      vy: number
      opacity: number
    }> = []

    // Initialize particles
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.3,
      })
    }

    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        ctx.fillStyle = `rgba(147, 112, 219, ${particle.opacity})`
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const serviceCategorys = [
    {
      title: "Branding",
      services: [
        "Brand Strategy & Positioning",
        "Brand Identity Design",
        "Brand Naming & Messaging",
        "Brand Architecture",
        "Rebranding",
        "Rebranding & Brand Transformation",
        "Employee Branding",
      ],
    },
    {
      title: "Design",
      services: [
        "UX Research & Experience Strategy",
        "UI Design Web & Mobile",
        "Design System (3+ Platforms)",
        "Design Systems",
        "Marketing & Campaign Design",
        "Motion & Visual Storytelling",
        "Packaging & Print Design",
      ],
    },
    {
      title: "Development",
      services: [
        "Website Development",
        "Web Application Development",
        "Mobile App Development",
        "E-commerce Development",
        "CMS & Headless Solutions",
        "API & Integrations",
        "Maintenance & Technical Support",
      ],
    },
  ]

  return (
    <section ref={containerRef} className="relative py-16 md:py-20 px-4 md:px-8 overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-slate-900/50 to-blue-950/40" />

      <canvas className="absolute inset-0 w-full h-full" />

      {/* Content wrapper with relative positioning */}
      <div className="relative max-w-6xl mx-auto z-10">
        <div className="text-center mb-16 md:mb-20">
          <div
            className="inline-block mb-4 text-sm font-semibold text-purple-400 opacity-0 animate-fade-in animate-pop-up"
            style={{
              animationDuration: "1s",
              animationDelay: "0.2s",
              animationFillMode: "forwards",
            }}
          >
            SERVICES
          </div>
          <h2
            className="text-4xl md:text-6xl font-bold text-white mb-4 opacity-0 animate-fade-in animate-typewriter"
            style={{
              animationDuration: "3s",
              animationDelay: "0.3s",
              animationFillMode: "forwards",
            }}
          >
            Our Services
          </h2>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 opacity-0 animate-fade-in"
            style={{
              animationDuration: "1s",
              animationDelay: "0.4s",
              animationFillMode: "forwards",
              background: "linear-gradient(to right, #a78bfa, #60a5fa)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Digital Product Design &
          </h2>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 opacity-0 animate-fade-in"
            style={{
              animationDuration: "1s",
              animationDelay: "0.4s",
              animationFillMode: "forwards",
              background: "linear-gradient(to right, #a78bfa, #60a5fa)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Development <span className="italic font-light">Services We Offer</span>
          </h2>
          <p
            className="text-lg text-gray-300/80 max-w-2xl mx-auto opacity-0 animate-fade-in"
            style={{
              animationDuration: "1s",
              animationDelay: "0.5s",
              animationFillMode: "forwards",
            }}
          >
            Complete product development from concept to scale. Senior team, full ownership, blazing fast.
          </p>
        </div>

        {/* Service category cards with detailed lists */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {serviceCategorys.map((category, categoryIdx) => (
            <div
              key={categoryIdx}
              className="group opacity-0 animate-fade-in"
              style={{
                animationDuration: "1s",
                animationDelay: `${0.6 + categoryIdx * 0.15}s`,
                animationFillMode: "forwards",
              }}
            >
              <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 md:p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 hover:bg-white group">
                <h3
                  className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 transition-all duration-500 group-hover:text-blue-600"
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  {category.title}
                </h3>

                <div className="space-y-4">
                  {category.services.map((service, serviceIdx) => (
                    <div
                      key={serviceIdx}
                      className="flex items-center justify-between group/item cursor-pointer p-3 rounded-xl transition-all duration-500 hover:bg-gray-50"
                      style={{
                        animation: `slideInLeft 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards`,
                        animationDelay: `${0.7 + categoryIdx * 0.15 + serviceIdx * 0.08}s`,
                      }}
                    >
                      <span className="text-gray-800 font-medium group-hover/item:text-gray-900 transition-all duration-400">
                        {service}
                      </span>
                      <div className="text-gray-400 group-hover/item:text-blue-600 transform group-hover/item:translate-x-1 transition-all duration-500">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes animate-pop-up {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes animate-typewriter {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        .animate-fade-in {
          animation: fadeIn forwards;
        }

        /* Smooth scroll behavior */
        * {
          scroll-behavior: smooth;
        }

        /* Butter-smooth hover transitions */
        button, [role="button"], a {
          transition-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
        }
      `}</style>
    </section>
  )
}
