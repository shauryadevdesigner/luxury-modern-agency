"use client"

import { Wrench, AlertCircle, TrendingUp, Zap, Box, Shield } from "lucide-react"

export default function Support() {
  const supportItems = [
    {
      icon: Wrench,
      title: "Bug Fixes",
      description: "Rapid response to critical issues and continuous bug fixes for optimal performance.",
    },
    {
      icon: AlertCircle,
      title: "Updates",
      description: "Regular security patches and feature updates to keep your system current.",
    },
    {
      icon: TrendingUp,
      title: "Monitoring",
      description: "Proactive 24/7 monitoring and performance tracking of your application.",
    },
    {
      icon: Zap,
      title: "Scaling",
      description: "Infrastructure optimization and scaling as your user base and demands grow.",
    },
    {
      icon: Box,
      title: "Feature Additions",
      description: "Continuous feature development and enhancements based on your needs.",
    },
    {
      icon: Shield,
      title: "SLA Guarantee",
      description: "99.9% uptime guarantee with dedicated support and response SLA commitments.",
    },
  ]

  return (
    <section className="py-16 md:py-20 px-4 md:px-8 bg-gradient-to-b from-background via-background to-accent/5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14 slide-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">We Don't Disappear After Launch</h2>
          <p className="text-lg text-foreground/60 max-w-3xl mx-auto">
            Long-term partnership means continuous support, maintenance, and growth. We scale with you and maintain your
            product because we built it.
          </p>
        </div>

        {/* Support Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {supportItems.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="group relative"
                style={{
                  animation: `slideUp 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards`,
                  animationDelay: `${0.1 + index * 0.08}s`,
                  opacity: 0,
                }}
              >
                <div className="relative h-full bg-background border border-border rounded-2xl p-8 md:p-10 hover:border-accent/50 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10 hover:scale-105 backdrop-blur-sm group">
                  {/* Gradient background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon Container */}
                    <div className="mb-6 inline-flex">
                      <div className="p-3 bg-accent/10 rounded-xl group-hover:bg-accent/20 transition-all duration-500">
                        <Icon className="w-6 h-6 text-accent group-hover:scale-110 transition-transform duration-500" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-500">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-foreground/60 group-hover:text-foreground/75 transition-colors duration-500 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Optional: decorative accent line */}
                  <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-accent via-accent/50 to-transparent w-0 group-hover:w-full transition-all duration-500 rounded-full" />
                </div>
              </div>
            )
          })}
        </div>

        {/* Optional: CTA at bottom */}
        <div className="mt-16 text-center slide-up" style={{ animationDelay: "0.6s", opacity: 0 }}>
          <p className="text-foreground/60 mb-6 md:mb-8">Monthly Retainer • Full Ownership • Complete Peace of Mind</p>
          <button className="btn-accent group">
            Start Your Maintenance Plan
            <svg
              className="inline ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}
