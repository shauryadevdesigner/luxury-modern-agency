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

function StackCategoryCard({
  category,
  idx,
  totalCategories,
}: { category: any; idx: number; totalCategories: number }) {
  const { ref, isVisible } = useScrollTrigger()
  const isEvenIndex = idx % 2 === 0
  const slideClass = isEvenIndex
    ? isVisible
      ? "opacity-100 translate-x-0 translate-y-0"
      : "opacity-0 translate-x-12 translate-y-8"
    : isVisible
      ? "opacity-100 translate-x-0 translate-y-0"
      : "opacity-0 -translate-x-12 translate-y-8"

  return (
    <div ref={ref} className={`scroll-mt-20 transition-all duration-700 ${slideClass}`}>
      <div className="p-8 rounded-2xl border border-gray-300 bg-white hover:border-blue-900 hover:shadow-xl hover:bg-blue-900/2 transition-all duration-500 mb-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-xl overflow-hidden border-2 border-blue-900/30 hover:border-blue-900 hover:shadow-lg transition-all duration-300">
            <Image
              src={category.image || "/placeholder.svg"}
              alt={category.title}
              width={64}
              height={64}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div>
            <h2 className={`text-3xl font-bold text-black`}>{category.title}</h2>
            <p className={`text-gray-600 mt-2 text-sm`}>{category.description}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {category.tools.map((tool: any, tidx: number) => (
          <div
            key={tidx}
            className={`group p-6 rounded-xl border border-gray-300 bg-white hover:border-blue-900 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: isVisible ? `${tidx * 50}ms` : "0ms" }}
          >
            <h3 className="font-semibold mb-2 text-black group-hover:text-blue-900 transition-colors">{tool.name}</h3>
            <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors">{tool.description}</p>
          </div>
        ))}
      </div>

      {idx < totalCategories - 1 && <div className="border-t border-gray-200 my-12" />}
    </div>
  )
}

function PhilosophyCard() {
  const { ref, isVisible } = useScrollTrigger()

  return (
    <div
      ref={ref}
      className={`mt-24 p-12 rounded-2xl bg-gradient-to-br from-white to-blue-900/5 border border-blue-900 hover:shadow-2xl transition-all duration-700 ${
        isVisible
          ? "opacity-100 scale-100 translate-x-0 translate-y-0"
          : "opacity-0 scale-95 -translate-x-12 translate-y-8"
      }`}
    >
      <div className="max-w-2xl mx-auto text-center">
        <div className="inline-block mb-4 px-4 py-2 bg-blue-900/10 rounded-full border border-blue-900/30">
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-900">Our Philosophy</p>
        </div>
        <h3 className={`text-3xl font-bold text-black mb-4`}>Architecture Philosophy</h3>
        <p className={`text-gray-600 mb-8 leading-relaxed`}>
          We don't just use tools. We architect systems. Every technology choice is made for scalability, performance,
          maintainability, and your business goals. Senior engineers mean architectural decisions that pay dividends at
          scale.
        </p>
      </div>
    </div>
  )
}

const StackDetail = () => {
  const stackCategories = [
    {
      title: "Frontend",
      image: "/stack-frontend.jpg",
      description: "Modern web interfaces with performance, accessibility, and beautiful UX.",
      tools: [
        { name: "Next.js", description: "React framework with SSR, SSG, and API routes" },
        { name: "React", description: "Component-based UI with hooks and state management" },
        { name: "TypeScript", description: "Type-safe JavaScript for maintainable code" },
        { name: "Tailwind CSS", description: "Utility-first styling for rapid UI development" },
        { name: "Framer Motion", description: "Production-ready animations and interactions" },
        { name: "SWR/React Query", description: "Data fetching and caching optimization" },
      ],
    },
    {
      title: "Backend",
      image: "/stack-backend.jpg",
      description: "Scalable APIs and services built for high performance and reliability.",
      tools: [
        { name: "Node.js", description: "JavaScript runtime for fast backend development" },
        { name: "Python", description: "For data processing, ML, and complex business logic" },
        { name: "PostgreSQL", description: "Robust relational database with advanced features" },
        { name: "Redis", description: "In-memory caching for performance at scale" },
        { name: "GraphQL", description: "Flexible API layer with strong typing" },
        { name: "Microservices", description: "Modular, scalable architecture patterns" },
      ],
    },
    {
      title: "Mobile",
      image: "/stack-mobile.jpg",
      description: "iOS and Android apps that feel native and perform flawlessly.",
      tools: [
        { name: "React Native", description: "JavaScript for iOS and Android development" },
        { name: "Flutter", description: "Fast, beautiful mobile apps with hot reload" },
        { name: "Expo", description: "Simplified React Native development and deployment" },
        { name: "Firebase", description: "Real-time database and cloud infrastructure" },
        { name: "Native Modules", description: "Custom native code for performance-critical tasks" },
        { name: "App Store Optimization", description: "Launch strategy and store management" },
      ],
    },
    {
      title: "Infrastructure",
      image: "/stack-infrastructure.jpg",
      description: "Deployment, monitoring, and scaling infrastructure that just works.",
      tools: [
        { name: "Vercel", description: "Next.js hosting with edge functions and CDN" },
        { name: "AWS", description: "EC2, S3, Lambda, RDS, and managed services" },
        { name: "Docker", description: "Containerization for consistent deployments" },
        { name: "Kubernetes", description: "Orchestration for scaling containerized apps" },
        { name: "GitHub Actions", description: "CI/CD automation and workflows" },
        { name: "Terraform", description: "Infrastructure as code for repeatable deployments" },
      ],
    },
    {
      title: "DevOps & Monitoring",
      image: "/stack-devops.jpg",
      description: "Performance monitoring, error tracking, and system reliability.",
      tools: [
        { name: "Sentry", description: "Error tracking and performance monitoring" },
        { name: "DataDog", description: "Infrastructure and application monitoring" },
        { name: "New Relic", description: "Full-stack observability and APM" },
        { name: "PagerDuty", description: "Incident management and alerting" },
        { name: "Grafana", description: "Metrics visualization and alerting" },
        { name: "ELK Stack", description: "Centralized logging and analysis" },
      ],
    },
  ]

  return (
    <section className="py-24 md:py-32 px-4 md:px-8 bg-white border-y border-gray-200 relative overflow-hidden">
      <GridParallaxBackground />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="space-y-16">
          {stackCategories.map((category, idx) => (
            <StackCategoryCard key={idx} category={category} idx={idx} totalCategories={stackCategories.length} />
          ))}
        </div>

        <PhilosophyCard />
      </div>
    </section>
  )
}

export default StackDetail
