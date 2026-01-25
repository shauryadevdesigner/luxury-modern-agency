import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import AboutHero from "@/components/sections/about-hero"
import AboutVision from "@/components/sections/about-vision"
import AboutTeam from "@/components/sections/about-team"
import AboutValues from "@/components/sections/about-values"

export const metadata = {
  title: "About | Elite Development Agency",
  description: "Our story, mission, and why we exist. Senior engineers building premium products.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <AboutHero />
      <AboutVision />
      <AboutTeam />
      <AboutValues />
      <Footer />
    </main>
  )
}
