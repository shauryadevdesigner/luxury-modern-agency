import { ArrowRight } from "lucide-react"

export default function SpeedPromise() {
  const speeds = [
    { label: "MVP", timeline: "7–14 days", description: "Validate your idea with a working product." },
    { label: "Full SaaS", timeline: "30–60 days", description: "Production-ready platform with all core features." },
    { label: "Iteration Speed", timeline: "Weekly", description: "Rapid updates, deployments, and improvements." },
  ]

  return (
    <section className="relative py-16 md:py-20 px-4 md:px-8 overflow-hidden">
      {/* Premium dark background with gradient */}
      <div className="absolute inset-0 bg-[#0a0a0f]" />
      
      {/* Gradient overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(59, 130, 246, 0.15), transparent), radial-gradient(ellipse 60% 40% at 100% 100%, rgba(139, 92, 246, 0.1), transparent), radial-gradient(ellipse 50% 30% at 0% 100%, rgba(59, 130, 246, 0.08), transparent)'
        }}
      />
      
      {/* Dot pattern overlay */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'radial-gradient(circle at center, rgba(255,255,255,0.15) 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />
      
      {/* Grid lines overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      />
      
      {/* Blue glow accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-violet-500/10 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-white">From Idea to Live Product</h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Record-breaking speed without cutting corners. Senior engineering means we move fast and maintain quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {speeds.map((item, idx) => (
            <div key={idx} className="text-center">
              <div className="text-5xl font-bold text-blue-400 mb-2">{item.timeline}</div>
              <h3 className="text-xl font-semibold mb-2 text-white">{item.label}</h3>
              <p className="text-white/60">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40">
            Start My Project
            <ArrowRight className="inline ml-2 group-hover:translate-x-1 transition-transform" size={18} />
          </button>
        </div>
      </div>
    </section>
  )
}
