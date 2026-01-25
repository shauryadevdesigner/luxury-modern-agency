"use client"

import { useEffect, useState, useCallback } from "react"
import { useScrollTrigger } from "@/hooks/use-scroll-trigger"
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

function PhaseCard({ phase, idx, totalPhases }: { phase: any; idx: number; totalPhases: number }) {
  const { ref, isVisible } = useScrollTrigger()

  return (
    <div
      ref={ref}
      className={`scroll-mt-20 transition-all duration-700 ${
        isVisible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-8"
      }`}
    >
      <div className="p-8 md:p-12 rounded-2xl border border-gray-300 bg-white hover:border-blue-900 hover:shadow-2xl hover:bg-gradient-to-br hover:from-white hover:to-blue-900/5 transition-all duration-500">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div
            className={`transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="w-14 h-14 rounded-full overflow-hidden mb-4 border-2 border-blue-900/30 hover:border-blue-900 transition-all duration-300">
              <Image
                src={phase.image || "/placeholder.svg"}
                alt={phase.title}
                width={56}
                height={56}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-sm font-semibold text-blue-900 uppercase">{phase.duration}</span>
            <h2 className={`text-3xl font-bold text-black mb-4 mt-2`}>{phase.title}</h2>
            <p className={`text-gray-600`}>{phase.description}</p>
          </div>

          <div
            className={`lg:col-span-2 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-semibold text-blue-900 uppercase mb-4">What Happens</h3>
                <ul className="space-y-3">
                  {phase.details.map((detail: string, didx: number) => (
                    <li key={didx} className="flex gap-3 items-start">
                      <div className="w-5 h-5 rounded-full bg-blue-900/10 flex items-center justify-center flex-shrink-0 mt-0.5 border border-blue-900/30">
                        <div className="w-2 h-2 rounded-full bg-blue-900" />
                      </div>
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-blue-900 uppercase mb-4">Deliverables</h3>
                <div className="flex flex-wrap gap-2">
                  {phase.deliverables.map((deliverable: string, didx: number) => (
                    <span
                      key={didx}
                      className="px-3 py-2 rounded-lg bg-white text-sm font-medium border border-gray-300 text-gray-700 hover:border-blue-900 hover:bg-blue-900/5 hover:shadow-md transition-all duration-300"
                    >
                      {deliverable}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {idx < totalPhases - 1 && <div className="border-t border-gray-200 my-12" />}
    </div>
  )
}

function BenefitCard({ item, idx }: { item: any; idx: number }) {
  const { ref, isVisible } = useScrollTrigger()

  return (
    <div
      ref={ref}
      className={`p-8 rounded-xl border border-gray-300 bg-white hover:border-blue-900 hover:shadow-lg hover:scale-105 hover:bg-gradient-to-br hover:from-white hover:to-blue-900/5 transition-all duration-500 group ${
        isVisible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-8"
      }`}
      style={{ transitionDelay: isVisible ? `${idx * 100}ms` : "0ms" }}
    >
      <h3 className="font-semibold mb-2 text-lg text-black group-hover:text-blue-900 transition-colors">
        {item.title}
      </h3>
      <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors">{item.desc}</p>
    </div>
  )
}

export default function ProcessDetail() {
  const phases = [
    {
      title: "Discovery & Planning",
      duration: "Days 1-3",
      image: "/process-discovery.jpg",
      description: "Deep dive into your vision, market, and technical requirements.",
      details: [
        "Stakeholder interviews and requirements gathering",
        "Market research and competitive analysis",
        "User flow definition and wireframing",
        "Technical architecture planning",
        "Timeline and resource allocation",
      ],
      deliverables: ["Requirements document", "Technical architecture", "Project timeline", "Resource plan"],
    },
    {
      title: "Design & Prototyping",
      duration: "Days 4-8",
      image: "/process-design.jpg",
      description: "Iterative design sprints with rapid prototyping and feedback loops.",
      details: [
        "High-fidelity design system creation",
        "Interactive prototypes in Figma",
        "Design reviews with stakeholders",
        "Accessibility compliance check",
        "Design handoff to engineering",
      ],
      deliverables: ["Design system", "Interactive prototypes", "Design documentation", "Component library"],
    },
    {
      title: "Development & Build",
      duration: "Days 9-25",
      image: "/process-development.jpg",
      description: "Production-ready code, infrastructure, and deployment pipeline.",
      details: [
        "Frontend development with component testing",
        "Backend API development and optimization",
        "Database schema design and migration",
        "Authentication and authorization setup",
        "Third-party integrations (payments, analytics, etc.)",
        "Automated testing and quality assurance",
      ],
      deliverables: ["Source code", "API documentation", "Test coverage report", "Deployment pipeline"],
    },
    {
      title: "Launch & Deploy",
      duration: "Days 26-30",
      image: "/process-launch.jpg",
      description: "Go live with confidence. Monitoring, alerts, and performance optimization.",
      details: [
        "Production environment setup",
        "Database migration and backup setup",
        "Monitoring and alerting configuration",
        "Performance testing and optimization",
        "Security hardening and compliance",
        "Launch communication and documentation",
      ],
      deliverables: ["Live product", "Monitoring dashboards", "Runbooks", "Documentation"],
    },
  ]

  const benefitCards = [
    {
      title: "Communication",
      desc: "Weekly standups, Slack access, and open documentation. You're always in the loop.",
    },
    {
      title: "Tools & Access",
      desc: "GitHub, Figma, Jira, Slack. You have full access to codebase, designs, and documentation.",
    },
    {
      title: "Ownership & Security",
      desc: "You own the code, infrastructure, and data. We prioritize security and compliance from day one.",
    },
  ]

  return (
    <section className="py-24 md:py-32 px-4 md:px-8 bg-white border-y border-gray-200 relative overflow-hidden">
      <GridParallaxBackground />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="space-y-16">
          {phases.map((phase, idx) => (
            <PhaseCard key={idx} phase={phase} idx={idx} totalPhases={phases.length} />
          ))}
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefitCards.map((item, idx) => (
            <BenefitCard key={idx} item={item} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}
