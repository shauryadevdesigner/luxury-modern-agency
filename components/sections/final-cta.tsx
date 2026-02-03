"use client"

import { ArrowRight } from "lucide-react"
import { useContactForm } from "@/app/providers"
import { useLanguage } from "@/components/language-provider"

export default function FinalCTA() {
  const { openContactForm } = useContactForm()
  const { t } = useLanguage()
  const CALENDLY_URL = "https://cal.com/shaurya-nischal-pandey-lx05yx/deal-talk"

  return (
    <section className="py-12 md:py-16 px-4 md:px-8 bg-background border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="mb-3">{t.finalCta.title}</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          {t.finalCta.description}
        </p>

        <div className="flex flex-row gap-4 justify-center flex-wrap">
          <button
            onClick={() => window.open(CALENDLY_URL, "_blank")}
            className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-bold text-sm tracking-wider transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 active:scale-95 btn-magnetic flex items-center gap-2"
          >
            {t.finalCta.bookCall}
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
          </button>
          <button
            onClick={openContactForm}
            className="px-8 py-3 bg-background text-foreground border border-border rounded-full font-bold text-sm tracking-wider transition-all duration-500 hover:scale-105 hover:bg-muted active:scale-95 flex items-center gap-2"
          >
            {t.finalCta.startProject}
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
          </button>
        </div>
      </div>
    </section>
  )
}
