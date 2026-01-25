import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import WorkHero from "@/components/sections/work-hero"
import WorkGrid from "@/components/sections/work-grid"
import WorkCTA from "@/components/sections/work-cta"

export const metadata = {
  title: "Work & Case Studies | Elite Development Agency",
  description: "Explore our portfolio of SaaS, mobile apps, and web platforms we've built from scratch.",
}

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <WorkHero />
      <WorkGrid />
      <WorkCTA />
      <Footer />
    </main>
  )
}
