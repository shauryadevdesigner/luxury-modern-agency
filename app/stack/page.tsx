import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import StackHero from "@/components/sections/stack-hero"
import StackDetail from "@/components/sections/stack-detail"

export const metadata = {
  title: "Stack & Expertise | Elite Development Agency",
  description: "Our technology stack, architecture philosophy, and scalability focus.",
}

export default function StackPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <StackHero />
      <StackDetail />
      <Footer />
    </main>
  )
}
