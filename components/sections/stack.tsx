"use client"

import { useEffect, useState, useRef } from "react"
import { Code2, Database, Smartphone, Cloud, Settings, Brain } from "lucide-react"

export default function Stack() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  const stacks = [
    {
      category: "Frontend",
      icon: Code2,
      technologies: ["React", "Next.js", "Tailwind CSS"],
      color: "#2563eb",
    },
    {
      category: "Backend",
      icon: Database,
      technologies: ["Node.js", "Python", "Laravel"],
      color: "#9333ea",
    },
    {
      category: "Mobile",
      icon: Smartphone,
      technologies: ["React Native", "Flutter"],
      color: "#10b981",
    },
    {
      category: "Infrastructure",
      icon: Cloud,
      technologies: ["AWS", "Docker", "CI/CD"],
      color: "#f59e0b",
    },
    {
      category: "SaaS Tools",
      icon: Settings,
      technologies: ["Stripe", "Auth", "Analytics"],
      color: "#ef4444",
    },
    {
      category: "AI & Innovation",
      icon: Brain,
      technologies: ["LLMs", "Vector DBs", "AI Agents"],
      color: "#06b6d4",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-20">
          <span className="inline-block px-4 py-1.5 bg-muted rounded-full text-sm font-medium text-muted-foreground mb-6">
            STACK & TECHNOLOGY
          </span>
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-foreground mb-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            The next gen solution to create your <span className="text-primary italic">SaaS or App.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            We master AI, Code, and No-Code. With our team of fullstack developers,
            award-winning designers, and AI engineers, we build everything. <span className="text-foreground font-bold">Sky is the limit.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stacks.map((stack, idx) => (
            <div
              key={idx}
              className={`group p-8 rounded-[2rem] border border-border bg-card/30 backdrop-blur-sm transition-all duration-500 hover:border-primary/30 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
              style={{ transitionDelay: `${0.1 * idx}s` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg"
                  style={{ backgroundColor: stack.color }}
                >
                  <stack.icon size={24} />
                </div>
                <h3 className="text-xl font-bold">{stack.category}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {stack.technologies.map((tech, tidx) => (
                  <span
                    key={tidx}
                    className="px-3 py-1 bg-muted/50 border border-border/50 rounded-lg text-sm font-medium hover:bg-muted transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
