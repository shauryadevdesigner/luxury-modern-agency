"use client"

import { Code2, Database, Smartphone, Cloud } from "lucide-react"

export default function Stack() {
  const stacks = [
    {
      category: "Frontend",
      icon: Code2,
      technologies: ["React/Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      color: "var(--accent-purple)",
    },
    {
      category: "Backend",
      icon: Database,
      technologies: ["Node.js/Python", "PostgreSQL", "Redis", "GraphQL"],
      color: "var(--accent-yellow)",
    },
    {
      category: "Mobile",
      icon: Smartphone,
      technologies: ["React Native", "Flutter", "Native iOS/Android", "Expo"],
      color: "var(--accent-green)",
    },
    {
      category: "Infrastructure",
      icon: Cloud,
      technologies: ["Vercel", "AWS", "Docker", "Kubernetes", "CI/CD"],
      color: "var(--accent-purple)",
    },
  ]

  return (
    <section className="py-24 md:py-32 px-4 md:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Our Stack & Expertise</h2>
          <p className="text-lg text-foreground/60 max-w-2xl">
            Cutting-edge technologies, proven frameworks, and battle-tested tools to build at scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {stacks.map((stack, idx) => {
            const Icon = stack.icon
            return (
              <div
                key={idx}
                className="group p-8 rounded-2xl border border-border bg-card hover-lift transition-all duration-500 relative overflow-hidden"
                style={{
                  animationName: "slideUp",
                  animationDuration: "0.8s",
                  animationTimingFunction: "ease-out",
                  animationDelay: `${idx * 0.1}s`,
                  animationFillMode: "forwards",
                  opacity: 0,
                }}
              >
                {/* Glow background on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at top right, ${stack.color}15, transparent 70%)`,
                  }}
                />

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className="p-3 rounded-lg transition-all duration-300 group-hover:scale-110"
                      style={{
                        backgroundColor: `color-mix(in oklch, ${stack.color} 15%, transparent)`,
                      }}
                    >
                      <Icon size={24} style={{ color: stack.color }} />
                    </div>
                    <h3 className="text-xl font-bold">{stack.category}</h3>
                  </div>

                  <div className="space-y-3">
                    {stack.technologies.map((tech, tidx) => (
                      <div
                        key={tidx}
                        className="text-foreground/70 group-hover:text-foreground transition-colors duration-300 pl-2 border-l-2 border-border group-hover:border-accent-purple/50"
                        style={{
                          transitionDelay: `${tidx * 0.05}s`,
                        }}
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
