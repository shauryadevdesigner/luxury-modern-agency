"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

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

function ProjectCard({ project, idx }: { project: any; idx: number }) {
  return (
    <Link
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group"
      style={{
        animation: `fadeInUp 0.6s ease-out ${idx * 0.05}s both`,
      }}
    >
      <div className="h-full p-8 rounded-2xl border border-gray-300 bg-white hover:border-blue-900 hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-semibold uppercase tracking-wide text-blue-900">{project.category}</span>
          <ArrowRight
            size={18}
            className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
          />
        </div>

        <h3 className="text-xl font-bold mb-3 group-hover:text-blue-900 transition-colors text-black line-clamp-2">
          {project.title}
        </h3>
        <p className="text-gray-600 text-sm mb-6 line-clamp-3">{project.description}</p>

        <div className="mb-6 aspect-video rounded-lg bg-gradient-to-br from-blue-900/5 to-blue-900/10 border border-gray-300 flex items-center justify-center group/image hover:bg-gray-200 transition-colors duration-300">
          <div className="text-center">
            <div className="text-lg font-bold text-blue-900 truncate px-2">{project.type}</div>
            <p className="text-xs text-gray-400 mt-1">View Project →</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag: string, tidx: number) => (
            <span
              key={tidx}
              className="px-2 py-1 text-xs font-medium rounded bg-blue-900/10 text-blue-900 border border-blue-900/30 hover:bg-blue-900/20 transition-all duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}

export default function WorkGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [displayCount, setDisplayCount] = useState(12)
  const gridRef = useRef<HTMLDivElement>(null)

  const projects = [
    {
      title: "ZNS Connect",
      url: "https://www.znsconnect.io",
      category: "Crypto Web3",
      type: "Domain Service",
      description: "Decentralized domain name service on blockchain. Connect and manage crypto identities.",
      tags: ["Blockchain", "Web3", "DNS"],
    },
    {
      title: "DeFi Fanbase Swap",
      url: "https://defi.fanbase.io/swap",
      category: "Crypto Web3",
      type: "DEX Platform",
      description: "Decentralized exchange with fan token swapping. Community-driven trading platform.",
      tags: ["DeFi", "Swap", "Web3"],
    },
    {
      title: "Pixel Realm",
      url: "https://app.pixelrealm.io",
      category: "Crypto Web3",
      type: "NFT Marketplace",
      description: "Pixel art NFT marketplace and creation platform. Mint, trade, and collect pixel art.",
      tags: ["NFT", "Art", "Marketplace"],
    },
    {
      title: "Crypto Crush Game",
      url: "https://cryptocrushgame.com",
      category: "Crypto Web3",
      type: "Gaming",
      description: "Play-to-earn crypto gaming experience. Earn rewards while crushing challenges.",
      tags: ["Gaming", "P2E", "Rewards"],
    },
    {
      title: "Crypto Crush - Irys Gems",
      url: "https://test.cryptocrushgame.com/irys_gems",
      category: "Crypto Web3",
      type: "NFT Gaming",
      description: "NFT gems collection and trading system. Irys-powered decentralized storage.",
      tags: ["NFT", "Gaming", "Storage"],
    },
    {
      title: "Ternoa Network",
      url: "https://www.ternoa.network",
      category: "Crypto Web3",
      type: "NFT Protocol",
      description: "Privacy-first NFT protocol and platform. Create and manage secret NFTs.",
      tags: ["NFT", "Privacy", "Protocol"],
    },
    {
      title: "DailyROI Wallet",
      url: "https://wallet.dailyroi.online",
      category: "Crypto Web3",
      type: "Wallet Service",
      description: "Daily ROI crypto wallet with yield farming. Secure multi-asset management.",
      tags: ["Wallet", "DeFi", "Yield"],
    },
    {
      title: "SnapMuse",
      url: "https://snapmuse.io",
      category: "Crypto Web3",
      type: "Creator Platform",
      description: "Creator marketplace powered by blockchain. Connect fans and monetize content.",
      tags: ["Creator", "Web3", "Marketplace"],
    },
    {
      title: "Init Raffle Platform",
      url: "https://init-raffle-front-54z4.vercel.app",
      category: "Crypto Web3",
      type: "Raffle System",
      description: "Decentralized raffle and lottery system. Fair and transparent prize distribution.",
      tags: ["Raffle", "Lottery", "Smart Contract"],
    },
    {
      title: "CryptoBase",
      url: "https://cryptobase-5c326.web.app",
      category: "Crypto Web3",
      type: "Analytics",
      description: "Cryptocurrency analytics and tracking dashboard. Real-time market insights.",
      tags: ["Analytics", "Crypto", "Dashboard"],
    },
    {
      title: "Propellent Exchange",
      url: "https://propellent.vercel.app",
      category: "Crypto Web3",
      type: "Swap Exchange",
      description: "Fast and secure cryptocurrency exchange. Multi-chain swap functionality.",
      tags: ["Exchange", "Swap", "Multi-chain"],
    },
    {
      title: "Climb Swap V2",
      url: "https://climb-swap-v-2-bx9race4d-gobilinc.vercel.app/#/swap",
      category: "Crypto Web3",
      type: "AMM DEX",
      description: "Automated market maker with advanced features. Liquidity pools and yield farming.",
      tags: ["DEX", "AMM", "Liquidity"],
    },
    {
      title: "LiveScoreBet",
      url: "https://www.livescorebet.com/uk/",
      category: "Sports & Games",
      type: "Betting Platform",
      description: "Live sports betting with real-time odds. Fast payouts and multiple sports coverage.",
      tags: ["Sports", "Betting", "Live"],
    },
    {
      title: "Brunelleschi Game",
      url: "https://www.indiedb.com/games/brunelleschi/",
      category: "Sports & Games",
      type: "Indie Game",
      description: "Indie game project featuring architecture-based puzzles. Community-driven development.",
      tags: ["Gaming", "Indie", "Puzzle"],
    },
    {
      title: "M Delivery Service",
      url: "https://mdeliveryservice.org",
      category: "Logistics",
      type: "Delivery Platform",
      description: "Fast delivery and logistics management. Track shipments in real-time.",
      tags: ["Delivery", "Logistics", "Tracking"],
    },
    {
      title: "Hunos Delivery",
      url: "https://hunos.co",
      category: "Logistics",
      type: "Courier Service",
      description: "On-demand courier and delivery service. Nationwide coverage with live tracking.",
      tags: ["Courier", "Delivery", "On-demand"],
    },
    {
      title: "Plastic Express",
      url: "https://www.plasticexpress.com",
      category: "Logistics",
      type: "Shipping",
      description: "Specialized plastic packaging and shipping. B2B logistics solutions.",
      tags: ["Shipping", "Packaging", "B2B"],
    },
    {
      title: "SuperSlots Casino",
      url: "https://www.superslots.ag",
      category: "Casino",
      type: "Online Casino",
      description: "Premium online casino with diverse games. Secure transactions and live dealers.",
      tags: ["Casino", "Gaming", "Live"],
    },
    {
      title: "World of Solana",
      url: "https://worldofsolana.io",
      category: "Casino",
      type: "Crypto Casino",
      description: "Solana blockchain-based casino games. Fast transactions and transparency.",
      tags: ["Casino", "Solana", "Blockchain"],
    },
    {
      title: "Jeetwin Pro",
      url: "https://www.jeetwin.pro",
      category: "Casino",
      type: "Gaming Platform",
      description: "Comprehensive gaming platform with sports and casino. Multiple payment options.",
      tags: ["Casino", "Gaming", "Payments"],
    },
    {
      title: "ForeverBuy",
      url: "https://foreverbuy.in",
      category: "E-commerce",
      type: "Retail Platform",
      description: "Indian e-commerce platform with diverse products. Fast delivery and easy returns.",
      tags: ["E-commerce", "Retail", "India"],
    },
    {
      title: "Lakeside Fulfillment",
      url: "https://lakesidefulfillment.com",
      category: "E-commerce",
      type: "Fulfillment",
      description: "Complete fulfillment and logistics services. Warehouse management integration.",
      tags: ["Fulfillment", "Logistics", "B2B"],
    },
    {
      title: "Chewy",
      url: "https://www.chewy.com",
      category: "E-commerce",
      type: "Pet Retail",
      description: "Leading pet supplies e-commerce platform. Same-day delivery in many areas.",
      tags: ["E-commerce", "Pets", "Retail"],
    },
    {
      title: "Tentree",
      url: "https://www.tentree.com/",
      category: "E-commerce",
      type: "Sustainable Fashion",
      description: "Eco-friendly apparel and accessories. Plant trees with every purchase.",
      tags: ["Fashion", "Sustainable", "E-commerce"],
    },
    {
      title: "The Outrage",
      url: "https://www.the-outrage.com/",
      category: "E-commerce",
      type: "Fashion Retail",
      description: "Urban fashion brand and e-commerce store. Trendy clothing and accessories.",
      tags: ["Fashion", "Retail", "Urban"],
    },
    {
      title: "Maguire Shoes",
      url: "https://maguireshoes.com/",
      category: "E-commerce",
      type: "Footwear",
      description: "Premium shoe retail store. Classic and contemporary footwear collection.",
      tags: ["Fashion", "Shoes", "Retail"],
    },
    {
      title: "Adored Vintage",
      url: "https://www.adoredvintage.com/",
      category: "E-commerce",
      type: "Vintage Fashion",
      description: "Curated vintage clothing and accessories. Unique pre-owned pieces.",
      tags: ["Fashion", "Vintage", "Curated"],
    },
    {
      title: "Rothy's",
      url: "https://rothys.com/",
      category: "E-commerce",
      type: "Sustainable Fashion",
      description: "Recycled plastic fiber fashion brand. Comfortable and eco-conscious clothing.",
      tags: ["Fashion", "Sustainable", "Eco"],
    },
    {
      title: "Suta",
      url: "https://suta.in/",
      category: "E-commerce",
      type: "Fashion Platform",
      description: "Indian handcrafted fashion platform. Supporting artisans and craftspeople.",
      tags: ["Fashion", "Handcrafted", "India"],
    },
    {
      title: "Nike Landing Page",
      url: "https://nike-landing-page-pied-two.vercel.app",
      category: "E-commerce",
      type: "Brand Campaign",
      description: "Premium Nike product landing page. Showcase and conversion optimization.",
      tags: ["E-commerce", "Brand", "Landing"],
    },
    {
      title: "Kwabas",
      url: "https://kwabas.com",
      category: "SaaS",
      type: "HR Platform",
      description: "Human resources management system. Employee tracking and payroll integration.",
      tags: ["HR", "SaaS", "Management"],
    },
    {
      title: "Synack",
      url: "https://www.synack.com",
      category: "SaaS",
      type: "Security Platform",
      description: "Crowdsourced security and bug bounty platform. Protect applications with ethical hackers.",
      tags: ["Security", "CyberSecurity", "Bounty"],
    },
    {
      title: "ReelsBuilder AI",
      url: "https://reelsbuilder.ai",
      category: "SaaS",
      type: "Video Creation",
      description: "AI-powered video creation and editing. Generate reels and shorts instantly.",
      tags: ["AI", "Video", "Content"],
    },
    {
      title: "Cloven",
      url: "https://cloven.dev",
      category: "SaaS",
      type: "Dev Tools",
      description: "Developer collaboration and project management. Streamlined code review workflow.",
      tags: ["Developer", "Collaboration", "Tools"],
    },
    {
      title: "Devty",
      url: "https://devty.io",
      category: "SaaS",
      type: "Developer Chat",
      description: "Real-time chat platform for developers. Integrated coding and collaboration features.",
      tags: ["Developer", "Chat", "Collaboration"],
    },
    {
      title: "NeoWave Tech",
      url: "https://neowave.tech",
      category: "SaaS",
      type: "Tech Platform",
      description: "Advanced technology solutions and consultation. Enterprise-grade infrastructure.",
      tags: ["Tech", "Enterprise", "Solutions"],
    },
    {
      title: "CarsIQ AI",
      url: "https://www.carsiqai.com",
      category: "SaaS",
      type: "Automotive AI",
      description: "AI-powered automotive insights and analytics. Vehicle data analysis platform.",
      tags: ["AI", "Automotive", "Analytics"],
    },
    {
      title: "FluxCraft",
      url: "https://fluxcraft.swarnendu.me",
      category: "SaaS",
      type: "Workflow Tool",
      description: "Workflow automation and optimization platform. Streamline business processes.",
      tags: ["Automation", "Workflow", "SaaS"],
    },
    {
      title: "ImageMagic",
      url: "https://imagemagic.swarnendu.me",
      category: "SaaS",
      type: "Image Tool",
      description: "AI-powered image editing and enhancement. Professional-grade photo processing.",
      tags: ["AI", "Image", "Tools"],
    },
    {
      title: "Prigen",
      url: "https://prigen.swarnendu.me",
      category: "SaaS",
      type: "Generation Tool",
      description: "Content generation and automation platform. Create at scale with AI.",
      tags: ["AI", "Content", "Generation"],
    },
    {
      title: "SoniCraft",
      url: "https://sonicraft.swarnendu.me",
      category: "SaaS",
      type: "Audio Tool",
      description: "Audio creation and music production platform. Professional sound design tools.",
      tags: ["Audio", "Music", "Tools"],
    },
    {
      title: "BillFox",
      url: "https://billfox.de",
      category: "SaaS",
      type: "Invoicing",
      description: "Invoice and billing management system. Automated payment tracking and reminders.",
      tags: ["Billing", "Finance", "Invoicing"],
    },
    {
      title: "JRG Studio - Unity Tutor",
      url: "https://jrgstudio.com/unitytutor/",
      category: "SaaS",
      type: "Learning Platform",
      description: "Unity game development tutorial and learning platform. Interactive courses.",
      tags: ["Learning", "Gaming", "Education"],
    },
    {
      title: "CaseDoc",
      url: "https://www.casedok.com",
      category: "SaaS",
      type: "Case Management",
      description: "Legal case and document management system. Secure file organization and collaboration.",
      tags: ["Legal", "Management", "Collaboration"],
    },
    {
      title: "HackerVerse AI",
      url: "https://hackerverse.ai",
      category: "SaaS",
      type: "Security Platform",
      description: "Hacking and security learning platform. Ethical hacking and cybersecurity training.",
      tags: ["Security", "Learning", "Hacking"],
    },
    {
      title: "InboxHR",
      url: "https://inboxhr.cloud",
      category: "SaaS",
      type: "HR Platform",
      description: "Email and HR communication hub. Unified employee communication system.",
      tags: ["HR", "Communication", "Email"],
    },
    {
      title: "GoSonar",
      url: "https://gosonar.com",
      category: "SaaS",
      type: "Analytics",
      description: "Enterprise analytics and data visualization platform. Business intelligence tools.",
      tags: ["Analytics", "BI", "Data"],
    },
    {
      title: "Ticket Souq",
      url: "https://www.ticket-souq.com",
      category: "SaaS",
      type: "Event Ticketing",
      description: "Event ticketing and booking platform. Sell and manage event tickets online.",
      tags: ["Events", "Ticketing", "Booking"],
    },
    {
      title: "Scrap.io",
      url: "https://scrap.io",
      category: "SaaS",
      type: "Web Scraping",
      description: "Web scraping and data extraction platform. Automated data collection tools.",
      tags: ["Scraping", "Data", "Automation"],
    },
    {
      title: "Vervoe",
      url: "https://vervoe.com",
      category: "SaaS",
      type: "Hiring Platform",
      description: "Skills-based hiring and assessment platform. Identify top talent through real work.",
      tags: ["HR", "Hiring", "Assessment"],
    },
    {
      title: "Spice Kitchen",
      url: "https://spicekitchen.com",
      category: "Restaurant",
      type: "Restaurant Site",
      description: "Modern restaurant website with online ordering. Menu management and reservations.",
      tags: ["Restaurant", "Food", "Ordering"],
    },
  ]

  const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))]

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((p) => p.category === selectedCategory)

  const displayedProjects = filteredProjects.slice(0, displayCount)

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    setDisplayCount(12)
  }

  const loadMore = () => {
    setDisplayCount((prev) => prev + 12)
  }

  return (
    <section className="py-16 md:py-20 px-4 md:px-8 bg-white border-y border-gray-200 relative overflow-hidden">
      <GridParallaxBackground />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Category filters */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-blue-900 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayedProjects.map((project, idx) => (
            <ProjectCard key={project.title} project={project} idx={idx} />
          ))}
        </div>

        {/* Load more button */}
        {displayedProjects.length < filteredProjects.length && (
          <div className="mt-12 text-center">
            <button
              onClick={loadMore}
              className="px-8 py-3 bg-blue-900 text-white rounded-full font-medium hover:bg-black transition-colors duration-300"
            >
              Load More Projects
            </button>
          </div>
        )}

        {/* View all projects link */}
        <div className="mt-12 text-center">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-900 text-white rounded-full font-semibold hover:bg-black transition-all duration-300 group"
          >
            View All Projects
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
        </div>
      </div>
    </section>
  )
}
