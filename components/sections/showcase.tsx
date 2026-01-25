"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { Palette, Smartphone, Zap, BarChart3, Wrench, Star } from "lucide-react"
import { useContactForm } from "@/app/providers"

export default function Showcase() {
  const { openContactForm } = useContactForm()
  const sectionRef = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const resources = [
    {
      icon: Palette,
      title: "Design Files",
      desc: "Figma components and libraries",
      gradient: "from-purple-500/20 to-purple-600/10",
    },
    {
      icon: Smartphone,
      title: "Mockups",
      desc: "Multiple device sizes",
      gradient: "from-blue-500/20 to-blue-600/10",
    },
    {
      icon: Zap,
      title: "Brand Kit",
      desc: "Colors, fonts, and guidelines",
      gradient: "from-yellow-500/20 to-yellow-600/10",
    },
    {
      icon: BarChart3,
      title: "Analytics",
      desc: "Performance metrics included",
      gradient: "from-green-500/20 to-green-600/10",
    },
    {
      icon: Wrench,
      title: "Dev Ready",
      desc: "Production-grade code",
      gradient: "from-pink-500/20 to-pink-600/10",
    },
    {
      icon: Star,
      title: "Premium Assets",
      desc: "Icons, illustrations & more",
      gradient: "from-orange-500/20 to-orange-600/10",
    },
  ]

  return (
    <section ref={sectionRef} className="relative bg-background overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-accent-purple/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-accent-yellow/5 to-transparent rounded-full blur-3xl" />

      <div className="relative z-10">
        {/* Section 1: App Screens Showcase */}
        <div className="py-8 md:py-12 px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left content */}
            <div
              className={`transition-all duration-700 ${
                isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
              }`}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                Your app's screens with a clean <span className="text-accent-purple">UI/UX design</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Having a good design is no longer optional. It's essential for your success as an product, or anyone
                building the future of design.
              </p>
              <button
                onClick={openContactForm}
                className="px-6 py-3 bg-white text-black rounded-full font-semibold text-sm transition-all duration-500 hover:scale-105 hover:shadow-lg active:scale-95"
              >
                Get Started
              </button>
            </div>

            {/* Right content - Images */}
            <div className="relative flex items-center justify-center">
              <div
                className={`relative transition-all duration-700 w-full ${
                  isInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
                style={{ transitionDelay: "0.2s" }}
              >
                <Image
                  src="/images/multiple-screens.png"
                  alt="App screens showcase"
                  width={450}
                  height={350}
                  className="w-full h-auto max-w-md object-contain mx-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Wireframe Ready */}
        <div className="py-8 md:py-10 px-6 md:px-12 lg:px-24">
          <div className="bg-gradient-to-br from-black via-neutral-900 to-neutral-800 rounded-3xl p-6 md:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left content */}
              <div
                className={`transition-all duration-700 ${
                  isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
                }`}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance text-white">
                  A production-ready system for <span className="text-accent-purple">building modern products</span>
                </h2>

                <p className="text-lg text-neutral-300 mb-8 leading-relaxed">
                  From wireframes to scalable systems, we help teams move faster with clean architecture, thoughtful UX,
                  and production-grade execution.
                </p>

                <button className="btn-primary hover-lift">View system</button>
              </div>

              {/* Right content - Visual placeholder */}
              <div className="relative flex items-center justify-center">
                <div
                  className={`relative w-full transition-all duration-700 ${
                    isInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
                  }`}
                  style={{ transitionDelay: "0.2s" }}
                >
                  {/* Placeholder for SaaS UI visual */}
                  <div className="w-full h-40 md:h-48 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl border border-white/10 flex items-center justify-center">
                    <span className="text-white/40 text-sm">Visual Coming Soon</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Mobile iPhone Frames */}
        <div className="py-12 md:py-16 px-6 md:px-12 lg:px-24">
          <div className="bg-gradient-to-br from-accent-purple/10 to-accent-purple/5 rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
              {/* Left - Phone with Dashboard UI Image */}
              <div className="relative flex justify-center items-center py-8 order-2 lg:order-1">
                <div
                  className={`relative transition-all duration-700 ${isInView ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
                  style={{ transitionDelay: "0.2s" }}
                >
                  {/* Mobile iPhone Frame with Dashboard UI */}
                  <div
                    className="relative mx-auto bg-black rounded-3xl shadow-2xl overflow-hidden w-44 sm:w-48 md:w-52 lg:w-56"
                    style={{ 
                      border: "10px solid #1a1a1a", 
                      aspectRatio: "9/19.5",
                    }}
                  >
                    {/* Dynamic Island Notch */}
                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-3/5 h-5 bg-black rounded-full z-40" />

                    {/* Screen content with dashboard image */}
                    <div className="pt-8 bg-white w-full h-full overflow-hidden">
                      <Image
                        src="/images/dashboard-ui.png"
                        alt="Dashboard UI"
                        width={280}
                        height={560}
                        className="w-full h-full object-cover"
                        priority
                      />
                    </div>
                  </div>

                  {/* Phone glow effect */}
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-full max-w-[288px] h-16 bg-gradient-to-b from-accent-purple/20 to-transparent rounded-full blur-2xl" />
                </div>
              </div>

              {/* Middle - Phone with Video */}
              <div className="relative flex justify-center items-center py-8 order-3 lg:order-2">
                <div
                  className={`relative transition-all duration-700 ${isInView ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
                  style={{ transitionDelay: "0.3s" }}
                >
                  {/* Mobile iPhone Frame with Video */}
                  <div
                    className="relative mx-auto bg-black rounded-3xl shadow-2xl overflow-hidden w-44 sm:w-48 md:w-52 lg:w-56"
                    style={{ 
                      border: "10px solid #1a1a1a", 
                      aspectRatio: "9/19.5",
                    }}
                  >
                    {/* Dynamic Island Notch */}
                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-3/5 h-5 bg-black rounded-full z-40" />

                    {/* Screen content with video */}
                    <div className="pt-8 bg-black w-full h-full overflow-hidden">
                      <video
                        src="https://dl.dropboxusercontent.com/scl/fi/yd74ei48y3bxepcmb6g3j/prototype-otopro.mp4?rlkey=gx7aygf3jj5l57s7xc7it08zg&st=7vmju5g4&dl=0"
                        className="w-full h-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                        controls
                      />
                    </div>
                  </div>

                  {/* Phone glow effect */}
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-full max-w-[288px] h-16 bg-gradient-to-b from-accent-purple/30 to-transparent rounded-full blur-2xl" />
                </div>
              </div>

              <div className="relative flex justify-center items-center py-8 order-4 lg:order-3">
                <div
                  className={`relative transition-all duration-700 ${isInView ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
                  style={{ transitionDelay: "0.4s" }}
                >
                  {/* Mobile iPhone Frame with Dashboard App */}
                  <div
                    className="relative mx-auto bg-black rounded-3xl shadow-2xl overflow-hidden w-44 sm:w-48 md:w-52 lg:w-56"
                    style={{ 
                      border: "10px solid #1a1a1a", 
                      aspectRatio: "9/19.5",
                    }}
                  >
                    {/* Dynamic Island Notch */}
                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-3/5 h-5 bg-black rounded-full z-40" />

                    {/* Screen content with dashboard app UI */}
                    <div className="pt-8 bg-white w-full h-full overflow-hidden">
                      <Image
                        src="/images/dashboard-app-ui.png"
                        alt="Dashboard App Interface"
                        width={280}
                        height={560}
                        className="w-full h-full object-cover"
                        priority
                      />
                    </div>
                  </div>

                  {/* Phone glow effect */}
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-full max-w-[288px] h-16 bg-gradient-to-b from-accent-purple/20 to-transparent rounded-full blur-2xl" />
                </div>
              </div>

              <div
                className={`transition-all duration-700 order-1 lg:order-4 ${
                  isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
                }`}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                  A wireframe file ready for <span className="text-accent-purple">development</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Using a good design workflow is no longer optional. It's essential for your success as a designer, or
                  anyone building the future of design.
                </p>
                <button className="btn-primary hover-lift">Explore Framework</button>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Resources & Tools */}
        <div className="py-12 md:py-16 px-6 md:px-12 lg:px-24">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Everything you need to <span className="text-accent-purple">present your project</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              All the tools you need to present your startup idea to investors and clients. We've included everything to
              accelerate your success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Resource Cards - Using local images instead */}
            {resources.map((resource, index) => (
              <div
                key={resource.title}
                className={`group p-6 rounded-2xl bg-gradient-to-br ${resource.gradient} border border-border/50 transition-all duration-700 hover-lift ${
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${0.1 + index * 0.05}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-background/80 flex items-center justify-center mb-4">
                  <resource.icon className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{resource.title}</h3>
                <p className="text-muted-foreground text-sm">{resource.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12">
            <button className="btn-primary hover-lift text-lg px-8 py-4">Check out our packages</button>
          </div>
        </div>

        {/* Section 5: Dinosaur Image */}
        <div className="py-12 md:py-16 px-6 md:px-12 lg:px-24 bg-background">
          <div className="max-w-3xl mx-auto">
            <Image
              src="/images/gemini-dinosaur.png"
              alt="Transform your online presence - from basic to exceptional"
              width={600}
              height={500}
              className="w-full h-auto object-contain mx-auto max-h-[400px]"
              priority
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  )
}
