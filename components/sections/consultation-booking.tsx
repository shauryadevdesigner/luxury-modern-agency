"use client"

import { Calendar, Clock, Users } from "lucide-react"

export default function ConsultationBooking() {
  const CALENDLY_URL = "https://calendly.com/sosikomegrelidze95/new-meeting"

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
    <section className="py-16 md:py-20 px-4 md:px-8 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 slide-up">
          <h2 className="mb-4">
            Schedule a <span className="text-blue-400">Free Consultation</span>
          </h2>
          <p className="text-yellow-400 text-lg md:text-xl max-w-3xl mx-auto">
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
                className="border border-gray-700 rounded-lg p-6 hover:border-blue-400 transition-all duration-300 hover:bg-gray-900/50 group"
              >
                <div className="mb-4 inline-block">
                  <Icon className="w-6 h-6 text-blue-400 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            )
          })}
        </div>

        {/* Calendly Embed */}
        <div className="flex justify-center animation-delay-200">
          <div className="w-full max-w-2xl overflow-hidden">
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
              className="calendly-wrapper rounded-lg"
              style={{
                overflow: "hidden",
                height: "750px",
                width: "100%",
              }}
            >
              <iframe
                src={`${CALENDLY_URL}?hide_event_type_details=1&hide_gdpr_block=1&background_color=000000`}
                width="100%"
                height="800"
                frameBorder="0"
                title="Schedule a consultation"
                style={{
                  overflow: "hidden",
                  border: "none",
                  borderRadius: "0.5rem",
                }}
                scrolling="no"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
