import Navigation from "@/components/navigation"
import Hero from "@/components/sections/hero"
import WhatWeDo from "@/components/sections/what-we-do"
import TechStackCarousel from "@/components/sections/tech-stack-carousel"
import Problems from "@/components/sections/problems"
import BeforeAfter from "@/components/sections/before-after"
import ProofRow from "@/components/sections/proof-row"
import Services from "@/components/sections/services"
import WhyUs from "@/components/sections/why-us"
import Process from "@/components/sections/process"
import SpeedPromise from "@/components/sections/speed-promise"
import Showcase from "@/components/sections/showcase"
import CaseStudy from "@/components/sections/mobile-dev-case-study"
import References from "@/components/sections/references"
import Portfolio from "@/components/sections/portfolio"
import AppCarousel from "@/components/sections/app-carousel"
import ConsultationBooking from "@/components/sections/consultation-booking"
import Support from "@/components/sections/support"
import FinalCTA from "@/components/sections/final-cta"
import Footer from "@/components/footer"

export default function Home() {
  console.log("[v0] Home page rendering")
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <WhatWeDo />
      <TechStackCarousel />
      <Problems />
      <BeforeAfter />
      <ProofRow />
      <Services />
      <WhyUs />
      <Process />
      <SpeedPromise />
      <Showcase />
      <CaseStudy />
      <References />
      <Portfolio />
      <AppCarousel />
      <ConsultationBooking />
      <Support />
      <FinalCTA />
      <Footer />
    </main>
  )
}
