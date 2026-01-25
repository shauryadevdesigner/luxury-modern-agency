"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

// Project data with real links from each category
const PROJECTS = [
  // Crypto / Web3
  { id: 1, title: "ZNS Connect", link: "https://www.znsconnect.io", category: "Crypto", description: "Web3 Domain Platform" },
  { id: 2, title: "Fanbase DeFi", link: "https://defi.fanbase.io/swap", category: "Crypto", description: "DeFi Swap Platform" },
  { id: 3, title: "Pixel Realm", link: "https://app.pixelrealm.io", category: "Crypto", description: "NFT Gaming Platform" },
  { id: 4, title: "Ternoa Network", link: "https://www.ternoa.network", category: "Crypto", description: "Blockchain Network" },
  
  // Sports / Games
  { id: 5, title: "LiveScore Bet", link: "https://www.livescorebet.com/uk/", category: "Sports", description: "Sports Betting Platform" },
  { id: 6, title: "IndieDB Games", link: "https://www.indiedb.com/games/brunelleschi/", category: "Sports", description: "Indie Game Platform" },
  { id: 7, title: "Crypto Crush", link: "https://cryptocrushgame.com", category: "Sports", description: "Crypto Gaming" },
  { id: 8, title: "Irys Gems", link: "https://test.cryptocrushgame.com/irys_gems", category: "Sports", description: "Gaming Platform" },
  
  // Car Rental / Logistics
  { id: 9, title: "M Delivery", link: "https://mdeliveryservice.org", category: "Logistics", description: "Delivery Service" },
  { id: 10, title: "Hunos", link: "https://hunos.co", category: "Logistics", description: "Logistics Platform" },
  { id: 11, title: "Plastic Express", link: "https://www.plasticexpress.com", category: "Logistics", description: "Shipping Solutions" },
  { id: 12, title: "Daily ROI Wallet", link: "https://wallet.dailyroi.online", category: "Logistics", description: "Digital Wallet" },
  
  // Casino
  { id: 13, title: "Super Slots", link: "https://www.superslots.ag", category: "Casino", description: "Online Casino" },
  { id: 14, title: "World of Solana", link: "https://worldofsolana.io", category: "Casino", description: "Crypto Casino" },
  { id: 15, title: "JeetWin", link: "https://www.jeetwin.pro", category: "Casino", description: "Gaming Platform" },
  { id: 16, title: "Snapmuse", link: "https://snapmuse.io", category: "Casino", description: "NFT Marketplace" },
  
  // Ecommerce
  { id: 17, title: "Forever Buy", link: "https://foreverbuy.in", category: "Ecommerce", description: "E-commerce Store" },
  { id: 18, title: "Lakeside Fulfillment", link: "https://lakesidefulfillment.com", category: "Ecommerce", description: "Fulfillment Services" },
  { id: 19, title: "Tentree", link: "https://www.tentree.com/", category: "Ecommerce", description: "Sustainable Fashion" },
  { id: 20, title: "Rothy's", link: "https://rothys.com/", category: "Ecommerce", description: "Sustainable Footwear" },
  
  // SaaS
  { id: 21, title: "Kwabas", link: "https://kwabas.com", category: "SaaS", description: "Business SaaS" },
  { id: 22, title: "Synack", link: "https://www.synack.com", category: "SaaS", description: "Security Platform" },
  { id: 23, title: "Reels Builder AI", link: "https://reelsbuilder.ai", category: "SaaS", description: "AI Video Builder" },
  { id: 24, title: "Devty", link: "https://devty.io", category: "SaaS", description: "Developer Tools" },
  
  // Music
  { id: 25, title: "Audio Fi", link: "https://audio-fi.vercel.app", category: "Music", description: "Music Platform" },
  { id: 26, title: "Sonicraft", link: "https://sonicraft.swarnendu.me", category: "Music", description: "Audio Tools" },
  { id: 27, title: "Neowave Tech", link: "https://neowave.tech", category: "Music", description: "Music Tech" },
  { id: 28, title: "JRG Studio", link: "https://jrgstudio.com/unitytutor/", category: "Music", description: "Audio Studio" },
  
  // Restaurant
  { id: 29, title: "Food Delivery", link: "https://food-del-kappa-wine.vercel.app", category: "Restaurant", description: "Food Delivery App" },
  { id: 30, title: "Chewy", link: "https://www.chewy.com", category: "Restaurant", description: "Pet Food Store" },
  { id: 31, title: "Maguire Shoes", link: "https://maguireshoes.com/", category: "Restaurant", description: "Fashion Store" },
  { id: 32, title: "Suta", link: "https://suta.in/", category: "Restaurant", description: "Ethnic Fashion" },
]

const CATEGORIES = ["Crypto", "Sports", "Logistics", "Casino", "Ecommerce", "SaaS", "Music", "Restaurant"]

// Generate gradient colors for each category
const categoryGradients: Record<string, { from: string; to: string; accent: string }> = {
  Crypto: { from: "#6366f1", to: "#8b5cf6", accent: "rgba(99, 102, 241, 0.2)" },
  Sports: { from: "#10b981", to: "#14b8a6", accent: "rgba(16, 185, 129, 0.2)" },
  Logistics: { from: "#f59e0b", to: "#f97316", accent: "rgba(245, 158, 11, 0.2)" },
  Casino: { from: "#ef4444", to: "#ec4899", accent: "rgba(239, 68, 68, 0.2)" },
  Ecommerce: { from: "#3b82f6", to: "#6366f1", accent: "rgba(59, 130, 246, 0.2)" },
  SaaS: { from: "#8b5cf6", to: "#a855f7", accent: "rgba(139, 92, 246, 0.2)" },
  Music: { from: "#ec4899", to: "#f43f5e", accent: "rgba(236, 72, 153, 0.2)" },
  Restaurant: { from: "#f97316", to: "#ef4444", accent: "rgba(249, 115, 22, 0.2)" },
}

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("Crypto")

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => project.category === activeCategory)
  }, [activeCategory])

  const displayedProjects = filteredProjects.slice(0, 4)
  const currentGradient = categoryGradients[activeCategory]

  return (
    <section className="relative w-full py-14 md:py-20 px-4 md:px-8 lg:px-16 overflow-hidden">
      {/* Dynamic gradient background */}
      <div 
        className="absolute inset-0 transition-all duration-700 ease-out"
        style={{
          background: `linear-gradient(135deg, ${currentGradient.from}15 0%, transparent 50%), linear-gradient(225deg, ${currentGradient.to}15 0%, transparent 50%), linear-gradient(180deg, #fafafa 0%, #f5f5f5 100%)`
        }}
      />
      
      {/* Animated grid pattern */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `linear-gradient(${currentGradient.from}20 1px, transparent 1px), linear-gradient(90deg, ${currentGradient.from}20 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />
      
      {/* Floating gradient orbs */}
      <div 
        className="absolute top-20 left-10 w-72 h-72 rounded-full blur-[100px] transition-all duration-700"
        style={{ background: currentGradient.accent }}
      />
      <div 
        className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-[120px] transition-all duration-700"
        style={{ background: currentGradient.accent }}
      />
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[150px] transition-all duration-700 opacity-30"
        style={{ background: `linear-gradient(135deg, ${currentGradient.from}, ${currentGradient.to})` }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <span 
            className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 transition-all duration-500"
            style={{ background: currentGradient.accent, color: currentGradient.from }}
          >
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6">
            Our Recent Work
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our latest projects across different industries. Click on any project to view it live.
          </p>
        </div>

        {/* Category buttons */}
        <div className="mb-8 md:mb-10">
          <div className="flex flex-wrap gap-2 md:gap-3 justify-center">
            {CATEGORIES.map((category) => {
              const isActive = activeCategory === category
              const gradient = categoryGradients[category]
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 md:px-7 py-2.5 md:py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 ease-out whitespace-nowrap ${
                    isActive
                      ? "text-white shadow-lg scale-105"
                      : "text-gray-700 bg-white/80 backdrop-blur-sm border border-gray-200 hover:border-gray-300 hover:bg-white"
                  }`}
                  style={isActive ? {
                    background: `linear-gradient(135deg, ${gradient.from}, ${gradient.to})`,
                    boxShadow: `0 10px 40px -10px ${gradient.from}80`
                  } : {}}
                >
                  {category}
                </button>
              )
            })}
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {displayedProjects.map((project, index) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ease-out cursor-pointer hover:scale-[1.03] hover:-translate-y-2"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Card gradient header */}
              <div 
                className="h-32 md:h-40 relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${currentGradient.from}, ${currentGradient.to})`
                }}
              >
                {/* Pattern overlay */}
                <div 
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 1px, transparent 1px), radial-gradient(circle at 80% 50%, rgba(255,255,255,0.3) 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                  }}
                />
                
                {/* External link icon */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                  <ExternalLink className="w-5 h-5 text-white" />
                </div>
                
                {/* Decorative shapes */}
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white/10 rounded-full" />
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-white/10 rounded-full" />
              </div>

              {/* Card content */}
              <div className="p-5 md:p-6">
                <h3 
                  className="text-lg md:text-xl font-bold mb-2 bg-clip-text text-transparent"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${currentGradient.from}, ${currentGradient.to})`
                  }}
                >
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500 mb-3">{project.description}</p>
                <div className="flex items-center justify-between">
                  <span 
                    className="text-xs font-medium px-3 py-1 rounded-full"
                    style={{ background: currentGradient.accent, color: currentGradient.from }}
                  >
                    {project.category}
                  </span>
                  <span className="text-xs text-gray-400 group-hover:text-gray-600 transition-colors">
                    View Live →
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* View All button */}
        <div className="flex justify-center mt-12 md:mt-16">
          <Link
            href="/work"
            className="px-8 py-3.5 md:py-4 md:px-10 text-white font-semibold rounded-full transition-all duration-300 ease-out hover:shadow-xl hover:scale-105"
            style={{
              background: `linear-gradient(135deg, ${currentGradient.from}, ${currentGradient.to})`,
              boxShadow: `0 10px 40px -10px ${currentGradient.from}60`
            }}
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  )
}
