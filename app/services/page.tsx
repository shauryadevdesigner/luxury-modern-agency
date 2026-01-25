import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ServiceHero from "@/components/sections/service-hero"
import ServiceDetail from "@/components/sections/service-detail"

export const metadata = {
  title: "Services | Elite Development Agency",
  description: "SaaS development, mobile apps, web platforms, UI/UX design, infrastructure, and maintenance.",
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <ServiceHero />
      <ServiceDetail />
      <Footer />
    </main>
  )
}
