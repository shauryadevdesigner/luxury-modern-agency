import { CheckCircle2 } from "lucide-react"

export default function Services() {
  const services = [
    "MVP development (fast prototypes to test ideas)",
    "Full-stack product engineering (Next.js, React, TypeScript, Node)",
    "UX/UI design & interactive prototyping",
    "API integrations & backend services",
    "Support and scaling after launch",
  ]

  return (
    <section className="py-24 bg-background px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="flex-1">
            <h2 className="text-3xl md:text-5xl font-black mb-8">Our Services</h2>
            <ul className="space-y-6">
              {services.map((service, index) => (
                <li key={index} className="flex items-start gap-4 group">
                  <div className="mt-1 p-1 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-lg md:text-xl font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1 w-full relative">
            <div className="aspect-square bg-gradient-to-br from-primary/10 to-transparent rounded-[3rem] p-1 border border-border/50">
              <div className="w-full h-full bg-muted/30 rounded-[2.8rem] flex items-center justify-center relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/20 blur-3xl rounded-full" />
                <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-blue-500/20 blur-3xl rounded-full" />
                <div className="relative z-10 text-center px-10">
                  <span className="text-sm font-bold uppercase tracking-widest text-primary mb-2 block">Premium Delivery</span>
                  <p className="text-xl font-bold">We handle everything from UX design to infrastructure automation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

