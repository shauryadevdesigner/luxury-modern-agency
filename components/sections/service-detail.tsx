"use client"

import { useEffect, useState, useCallback } from "react"
import { Code, Smartphone, Globe, Palette, Server, Wrench, ArrowRight, CheckCircle2 } from "lucide-react"
import { useScrollTrigger } from "@/hooks/use-scroll-trigger"

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

      {/* Layer 5: Subtle top gradient for depth */}
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

function ServiceCard({ service, idx, totalServices }: { service: any; idx: number; totalServices: number }) {
  const { ref, isVisible } = useScrollTrigger()
  const Icon = service.icon
  const isLeft = idx % 2 === 0

  return (
    <div
      ref={ref}
      className={`scroll-mt-20 transition-all duration-700 ${
        isVisible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-8"
      }`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div
          className={`transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          } ${!isLeft ? "lg:order-2" : ""}`}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-lg bg-blue-900/10 flex items-center justify-center hover:bg-blue-900/20 transition-all duration-300 border border-blue-900/20">
              <Icon size={28} className="text-blue-900" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-black">{service.title}</h2>
            </div>
          </div>

          <p className="text-lg text-gray-600 mb-8">{service.description}</p>

          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-semibold text-blue-900 uppercase tracking-wide mb-4">What's Included</h3>
              <ul className="space-y-3">
                {service.benefits.map((benefit: string, bidx: number) => (
                  <li key={bidx} className="flex gap-3 items-start">
                    <CheckCircle2 size={20} className="text-blue-900 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="p-4 rounded-lg bg-white border border-gray-300 hover:border-blue-900 hover:shadow-md transition-all duration-300">
                <p className="text-xs font-semibold text-blue-900 uppercase mb-1">Timeline</p>
                <p className="text-lg font-bold text-black">{service.timeline}</p>
              </div>
              <div className="p-4 rounded-lg bg-white border border-gray-300 hover:border-blue-900 hover:shadow-md transition-all duration-300">
                <p className="text-xs font-semibold text-blue-900 uppercase mb-1">Tech Stack</p>
                <p className="text-xs text-gray-600">{service.tech.slice(0, 2).join(", ")}</p>
              </div>
            </div>

            <button className="w-full px-6 py-3 bg-blue-900 text-white rounded-full font-medium hover:bg-black transition-colors duration-300 flex items-center justify-center gap-2 group">
              Discuss This Service
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </button>
          </div>
        </div>

        <div
          className={`transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          } ${!isLeft ? "lg:order-1" : ""}`}
        >
          <div className="aspect-square rounded-2xl bg-gray-100 border border-gray-300 flex items-center justify-center hover:shadow-lg hover:border-blue-900 transition-all duration-300 hover:scale-105">
            <Icon size={120} className="text-gray-300" />
          </div>
        </div>
      </div>

      {idx < totalServices - 1 && <div className="border-t border-gray-200 my-14" />}
    </div>
  )
}

function CustomSolutionCard() {
  const { ref, isVisible } = useScrollTrigger()

  return (
    <div
      ref={ref}
      className={`mt-14 p-10 rounded-2xl bg-white border border-gray-300 hover:shadow-lg hover:border-blue-900 transition-all duration-700 ${
        isVisible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-8"
      }`}
    >
      <div className="max-w-2xl mx-auto text-center">
        <h3 className="text-2xl font-bold text-black mb-4">Need a custom solution?</h3>
        <p className="text-gray-600 mb-8">
          Every project is unique. Let's discuss your specific needs and create a tailored plan.
        </p>
        <button className="px-6 py-3 bg-blue-900 text-white rounded-full font-medium hover:bg-black transition-colors duration-300 flex items-center justify-center gap-2 mx-auto">
          Schedule Discovery Call
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  )
}

export default function ServiceDetail() {
  const services = [
    {
      id: "saas",
      title: "SaaS Development",
      icon: Code,
      description:
        "Build scalable SaaS platforms from scratch. We handle architecture, database design, authentication, payments, and more.",
      benefits: [
        "Production-ready architecture on day one",
        "Scalable database design (PostgreSQL, Redis)",
        "Payment integration (Stripe, etc.)",
        "Authentication & authorization systems",
        "API design & documentation",
        "Performance optimization from launch",
      ],
      timeline: "30-60 days",
      tech: ["Next.js", "Node.js", "PostgreSQL", "Redis", "Stripe", "AWS"],
    },
    {
      id: "mobile",
      title: "Mobile Apps",
      icon: Smartphone,
      description: "Native and cross-platform mobile applications for iOS and Android. Fast, smooth, and feature-rich.",
      benefits: [
        "React Native for rapid deployment",
        "Native modules for performance",
        "App Store & Play Store optimization",
        "Push notifications & analytics",
        "Offline-first architecture",
        "Battery & memory optimization",
      ],
      timeline: "20-45 days",
      tech: ["React Native", "Flutter", "Firebase", "Expo", "Native iOS/Android"],
    },
    {
      id: "web",
      title: "Web Platforms",
      icon: Globe,
      description:
        "Complex, interactive web applications. Admin dashboards, data platforms, content systems, and more.",
      benefits: [
        "Real-time data synchronization",
        "Complex UI state management",
        "Data visualization & analytics",
        "Role-based access control",
        "Bulk operations & imports",
        "Export & reporting features",
      ],
      timeline: "25-50 days",
      tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    },
    {
      id: "design",
      title: "UI/UX Design",
      icon: Palette,
      description:
        "Design systems, user interfaces, and experiences that convert. Built for both aesthetics and functionality.",
      benefits: [
        "Design system creation",
        "Wireframing & prototyping",
        "User research & testing",
        "Accessibility compliance (WCAG)",
        "Responsive design",
        "Interactive prototypes",
      ],
      timeline: "10-20 days",
      tech: ["Figma", "Framer", "Design Systems", "Accessibility Tools"],
    },
    {
      id: "infrastructure",
      title: "Infrastructure & DevOps",
      icon: Server,
      description:
        "Scalable, secure infrastructure. We set up your entire deployment pipeline, monitoring, and optimization.",
      benefits: [
        "Infrastructure as code",
        "CI/CD pipeline setup",
        "Database optimization",
        "Load balancing & caching",
        "Security hardening",
        "Disaster recovery & backups",
      ],
      timeline: "5-15 days",
      tech: ["AWS", "Vercel", "Docker", "Kubernetes", "Terraform", "GitHub Actions"],
    },
    {
      id: "maintenance",
      title: "Maintenance & Scaling",
      icon: Wrench,
      description: "Long-term support, bug fixes, performance optimization, and feature development.",
      benefits: [
        "Bug fixes & patches",
        "Performance monitoring",
        "Scaling infrastructure",
        "Feature development",
        "Security updates",
        "24/7 uptime monitoring",
      ],
      timeline: "Ongoing",
      tech: ["Monitoring", "Analytics", "Performance Tools", "SRE Practices"],
    },
  ]

  return (
    <section className="py-16 md:py-20 px-4 md:px-8 bg-white border-y border-gray-200 relative overflow-hidden">
      <GridParallaxBackground />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="space-y-16">
          {services.map((service, idx) => (
            <ServiceCard key={service.id} service={service} idx={idx} totalServices={services.length} />
          ))}
        </div>

        <CustomSolutionCard />
      </div>
    </section>
  )
}
