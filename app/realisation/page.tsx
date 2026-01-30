import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import WorkHero from "@/components/sections/work-hero"
import Portfolio from "@/components/sections/portfolio"
import OurProjects from "@/components/sections/our-projects"
import FinalCTA from "@/components/sections/final-cta"

export const metadata = {
    title: "Our Realisations | Qlyra",
    description: "Discover our portfolio of SaaS, mobile apps, and web platforms we've built from scratch.",
}

export default function RealisationPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navigation />
            <WorkHero />
            <OurProjects />
            <Portfolio />
            <FinalCTA />
            <Footer />
        </main>
    )
}
