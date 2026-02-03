"use client"

import { Calendar, Clock, Users } from "lucide-react"

export default function ConsultationBooking() {
  const CALENDLY_URL = "https://cal.com/shaurya-nischal-pandey-lx05yx/deal-talk"

  const features = [
    {
      icon: Calendar,
      title: "Easy Scheduling",
      description: "Pick a time slot that works for your calendar",
    },
    {
      icon: Clock,
      title: "30-Min Call",
      description: "Quick consultation to discuss your needs",
    },
    {
      icon: Users,
      title: "Expert Advice",
      description: "Get insights from our specialists",
    },
  ]

  return (
    <section className="py-16 md:py-20 px-4 md:px-8 bg-background text-foreground border-t border-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 slide-up">
          <h2 className="mb-4 text-3xl md:text-5xl font-black">
            Schedule a <span className="text-primary italic">Free Consultation</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto font-medium">
            Choose a time that works best for you. We'll discuss your project, answer your questions, and explore how we
            can help your business grow.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 animation-delay-100">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="border border-border rounded-xl p-6 hover:border-primary transition-all duration-300 hover:bg-muted/50 group"
              >
                <div className="mb-4 inline-block">
                  <Icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            )
          })}
        </div>

        {/* Calendly Embed */}
        <div className="flex justify-center animation-delay-200">
          <div className="w-full max-w-2xl overflow-hidden border border-border rounded-2xl shadow-2xl">
            <style>{`
              .calendly-wrapper::-webkit-scrollbar {
                display: none;
              }
              .calendly-wrapper {
                scrollbar-width: none;
                -ms-overflow-style: none;
              }
            `}</style>
            <div
              className="calendly-wrapper"
              style={{
                overflow: "hidden",
                height: "750px",
                width: "100%",
                background: "white"
              }}
            >
              <iframe
                src={`${CALENDLY_URL}?hide_event_type_details=1&hide_gdpr_block=1&background_color=ffffff`}
                width="100%"
                height="800"
                frameBorder="0"
                title="Schedule a consultation"
                style={{
                  overflow: "hidden",
                  border: "none",
                }}
                scrolling="no"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Background Decoration (Big Vector) */}
      <div className="absolute top-[10%] left-[-10%] w-[50%] h-auto pointer-events-none opacity-[0.45] overflow-hidden -z-0 rotate-180">
        <svg viewBox="0 0 687 622" fill="none" className="w-full h-auto text-muted-foreground" xmlns="http://www.w3.org/2000/svg">
          <path d="M125.136 130.841C273.234 23.0822 591.391 -112.114 715.876 -122.738C871.483 -136.018 34.561 359.185 76.5296 439.562C118.498 519.94 692.632 35.2218 799.814 35.2218C906.995 35.2218 231.871 444.088 294.501 531.455C357.131 618.822 692.936 332.522 833.074 280.623C836.34 334.765 817.475 460.729 715.876 531.455" stroke="currentColor" strokeWidth="148" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  )
}
