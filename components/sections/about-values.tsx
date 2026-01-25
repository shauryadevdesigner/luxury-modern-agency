import { CheckCircle2, Zap, Users, Lock } from "lucide-react"

export default function AboutValues() {
  const values = [
    {
      icon: Zap,
      title: "Speed Without Cutting Corners",
      description:
        "Fast doesn't mean sloppy. We move quickly because we're senior engineers who know how to architect clean systems on day one.",
    },
    {
      icon: CheckCircle2,
      title: "Full Ownership, Zero Excuses",
      description:
        "We own the code, infrastructure, and product outcomes. No passing the buck. You own everything too—no vendor lock-in.",
    },
    {
      icon: Users,
      title: "Senior Team Only",
      description:
        "Architects, staff engineers, and designers with 10+ years of experience. No juniors, no outsourcing, no compromises.",
    },
    {
      icon: Lock,
      title: "Long-term Partner",
      description:
        "We don't disappear after launch. We scale with you, maintain the product, and fix issues because we built it.",
    },
  ]

  return (
    <section className="py-16 md:py-20 px-4 md:px-8 bg-secondary border-y border-border">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center mb-16">Our Values</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, idx) => {
            const Icon = value.icon
            return (
              <div
                key={idx}
                className="p-10 rounded-xl border border-border bg-background hover:border-accent hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-6">
                  <Icon size={24} className="text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-foreground/70">{value.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
