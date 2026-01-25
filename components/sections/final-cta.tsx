"use client"

import { ArrowRight } from "lucide-react"
import { useContactForm } from "@/app/providers"

export default function FinalCTA() {
  const { openContactForm } = useContactForm()
  const CALENDLY_URL = "https://calendly.com/sosikomegrelidze95/new-meeting"

  return (
    <section className="py-16 md:py-20 px-4 md:px-8 bg-background border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="mb-6 slide-up">Ready to build something serious?</h2>
        <p className="text-lg text-foreground/60 mb-12 max-w-2xl mx-auto slide-up animation-delay-100">
          Let's talk about your idea. We'll show you how fast we can turn it into a production-ready product.
        </p>

        <div className="flex flex-row gap-3 justify-center flex-wrap scale-in animation-delay-200">
          <button
            onClick={() => window.open(CALENDLY_URL, "_blank")}
            className="px-6 py-3 bg-white text-black rounded-full font-semibold text-sm transition-all duration-500 hover:scale-105 hover:shadow-lg active:scale-95 group flex items-center gap-2"
          >
            Book a Call
            <ArrowRight className="inline group-hover:translate-x-1 transition-transform" size={16} />
          </button>
          <button
            onClick={openContactForm}
            className="px-6 py-3 bg-accent-purple text-white rounded-full font-semibold text-sm transition-all duration-500 hover:scale-105 hover:shadow-lg active:scale-95 group flex items-center gap-2"
          >
            Start a Project
            <ArrowRight className="inline group-hover:translate-x-1 transition-transform" size={16} />
          </button>
        </div>
      </div>
    </section>
  )
}
