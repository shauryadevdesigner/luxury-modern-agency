"use client"

export default function Process() {
  const steps = [
    { title: "UX Workshop", description: "Deep dive into your vision, market, and technical requirements." },
    { title: "Design", description: "Iterative design sprints with rapid prototyping & feedback loops." },
    { title: "Build & Test", description: "Production-ready code, infrastructure, and automated testing." },
    { title: "Launch", description: "Ship to production with confidence, monitoring, and analytics." },
  ]

  return (
    <section className="py-16 md:py-20 px-4 md:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Our Process</h2>
          <p className="text-lg text-foreground/60 max-w-2xl">
            Simple, transparent, and proven methodology to bring your vision to life in record time.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 md:w-1 opacity-60 md:transform md:-translate-x-1/2 bg-gradient-to-b from-accent-purple via-accent-yellow to-accent-green" />

          <div className="space-y-12">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="relative pl-20 md:pl-0 group"
                style={{
                  animationName: "slideUp",
                  animationDuration: "0.8s",
                  animationTimingFunction: "ease-out",
                  animationDelay: `${idx * 0.15}s`,
                  animationFillMode: "forwards",
                  opacity: 0,
                }}
              >
                <div className="absolute left-0 md:left-1/2 top-2 md:transform md:-translate-x-1/2">
                  <div className="relative w-10 h-10">
                    <div
                      className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `radial-gradient(circle, var(--accent-purple) 0%, transparent 70%)`,
                        filter: "blur(10px)",
                      }}
                    />
                    <div
                      className="absolute inset-0 rounded-full bg-background border-2 flex items-center justify-center transition-all duration-300 group-hover:scale-125 group-hover:shadow-lg"
                      style={{
                        borderColor: `var(--accent-purple)`,
                        boxShadow: "0 0 0 3px rgba(236, 72, 153, 0.1)",
                      }}
                    >
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: `var(--accent-purple)` }} />
                    </div>
                  </div>
                </div>

                <div className={`md:w-1/2 ${idx % 2 === 0 ? "md:pr-20 md:text-right" : "md:pl-20 md:ml-auto"}`}>
                  <div className="p-6 rounded-lg hover-lift transition-all duration-500 hover:bg-card">
                    <h3 className="text-2xl font-bold mb-3 transition-colors duration-300">
                      {idx + 1}. {step.title}
                    </h3>
                    <p className="text-foreground/60 group-hover:text-foreground/80 transition-colors duration-300">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
