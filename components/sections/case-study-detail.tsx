"use client"

import { ArrowRight, CheckCircle2 } from "lucide-react"

export default function CaseStudyDetail({ study }: { study: any }) {
  return (
    <section className="py-24 md:py-32 px-4 md:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <span className="text-accent text-sm font-semibold uppercase tracking-wide">Case Study</span>
          <h1 className="mt-4 mb-4">{study.title}</h1>
          <p className="text-xl text-foreground/60">{study.subtitle}</p>
        </div>

        {/* Project Meta */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 pb-16 border-b border-border">
          <div>
            <p className="text-sm font-semibold text-accent uppercase mb-2">Industry</p>
            <p className="text-lg font-bold">{study.industry}</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-accent uppercase mb-2">Timeline</p>
            <p className="text-lg font-bold">{study.timeline}</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-accent uppercase mb-2">Team Size</p>
            <p className="text-lg font-bold">{study.team}</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-accent uppercase mb-2">Stack Size</p>
            <p className="text-lg font-bold">{study.stack.length} technologies</p>
          </div>
        </div>

        {/* Problem */}
        <div className="mb-16">
          <h2 className="mb-8">The Challenge</h2>
          <div className="space-y-4">
            {study.problem.map((item: string, idx: number) => (
              <div key={idx} className="flex gap-4 items-start">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                </div>
                <p className="text-foreground/80">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Solution */}
        <div className="mb-16 p-12 rounded-xl border border-border bg-secondary">
          <h2 className="mb-8">Our Solution</h2>
          <div className="space-y-4">
            {study.solution.map((item: string, idx: number) => (
              <div key={idx} className="flex gap-4 items-start">
                <CheckCircle2 size={24} className="text-accent-green flex-shrink-0 mt-0" />
                <p className="text-foreground/80">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="mb-16">
          <h2 className="mb-8">Results & Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {study.results.map((result: any, idx: number) => (
              <div
                key={idx}
                className="p-6 rounded-lg border border-border bg-card hover:border-accent transition-colors duration-300"
              >
                <p className="text-3xl md:text-4xl font-bold text-accent mb-2">{result.metric}</p>
                <p className="text-sm text-foreground/60">{result.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-16 p-12 rounded-xl border border-border bg-background">
          <h3 className="text-lg font-bold mb-6">Technology Stack</h3>
          <div className="flex flex-wrap gap-3">
            {study.stack.map((tech: string, idx: number) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-lg bg-accent/10 text-accent text-sm font-medium border border-accent/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Challenges & Lessons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-lg font-bold mb-6">Key Challenges</h3>
            <ul className="space-y-3">
              {study.challenges.map((challenge: string, idx: number) => (
                <li key={idx} className="flex gap-3 items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-purple mt-2 flex-shrink-0" />
                  <p className="text-foreground/70">{challenge}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6">Key Lessons</h3>
            <ul className="space-y-3">
              {study.lessons.map((lesson: string, idx: number) => (
                <li key={idx} className="flex gap-3 items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-green mt-2 flex-shrink-0" />
                  <p className="text-foreground/70">{lesson}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Testimonial */}
        <div className="p-12 rounded-xl border border-border bg-secondary mb-16">
          <p className="text-2xl font-bold mb-6 italic">"{study.testimonial.quote}"</p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
              <span className="text-lg font-bold text-accent">{study.testimonial.author.charAt(0)}</span>
            </div>
            <div>
              <p className="font-semibold">{study.testimonial.author}</p>
              <p className="text-sm text-foreground/60">
                {study.testimonial.role} at {study.testimonial.company}
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center p-12 rounded-xl border border-border bg-background">
          <h3 className="text-2xl font-bold mb-4">Ready to build your next product?</h3>
          <p className="text-foreground/60 mb-8 max-w-lg mx-auto">
            Let's discuss your idea and show you how fast we can turn it into a production-ready platform.
          </p>
          <button className="btn-primary group">
            Start Your Project
            <ArrowRight className="inline ml-2 group-hover:translate-x-1 transition-transform" size={18} />
          </button>
        </div>
      </div>
    </section>
  )
}
