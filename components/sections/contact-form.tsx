"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, ArrowRight, CheckCircle2 } from "lucide-react"

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here (integrate with your backend)
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        phone: "",
        message: "",
      })
    }, 3000)
  }

  return (
    <section className="py-16 md:py-20 px-4 md:px-8 bg-secondary border-y border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="mb-12">Get in Touch</h2>

            <div className="space-y-8">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Mail size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-foreground/60">hello@elitedev.co</p>
                  <p className="text-foreground/60">24-hour response guarantee</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Phone size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-foreground/60">+1 (555) 123-4567</p>
                  <p className="text-foreground/60">Mon-Fri, 9am-6pm PT</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Location</h3>
                  <p className="text-foreground/60">San Francisco, CA</p>
                  <p className="text-foreground/60">Remote-first team</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 rounded-xl border border-border bg-background">
              <h3 className="font-semibold mb-2">Quick Response Time</h3>
              <p className="text-sm text-foreground/60 mb-4">
                We typically respond within 24 hours. For urgent inquiries, call us directly.
              </p>
              <div className="flex gap-2 text-xs text-accent">
                <CheckCircle2 size={16} />
                <span>Senior team available for discovery calls</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-10 rounded-2xl border border-border bg-background">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 rounded-full bg-accent-green/20 flex items-center justify-center mb-4">
                  <CheckCircle2 size={32} className="text-accent-green" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Thank you!</h3>
                <p className="text-foreground/60">We received your message and will be in touch within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
                      placeholder="Alex"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
                      placeholder="Chen"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
                    placeholder="alex@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                    Phone (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2">
                    Tell us about your project
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors resize-none"
                    placeholder="What are you building? What's your timeline? Any specific challenges?"
                  />
                </div>

                <button type="submit" className="btn-primary w-full group justify-center">
                  Send Message
                  <ArrowRight className="inline ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </button>

                <p className="text-xs text-foreground/40 text-center">
                  We'll be in touch within 24 hours. Your data is safe with us.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
