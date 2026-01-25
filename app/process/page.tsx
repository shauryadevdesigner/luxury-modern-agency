import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ProcessHero from "@/components/sections/process-hero"
import ProcessDetail from "@/components/sections/process-detail"

export const metadata = {
  title: "Our Process | Elite Development Agency",
  description: "Discover our proven development methodology, communication practices, and delivery guarantee.",
}

export default function ProcessPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <ProcessHero />
      <ProcessDetail />
      <Footer />
    </main>
  )
}
