"use client"

import type React from "react"

import { useContactForm } from "@/app/providers"
import { useState } from "react"
import { X, AlertCircle, CheckCircle } from "lucide-react"

export function ContactFormModal() {
  const { isOpen, closeContactForm } = useContactForm()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (!response.ok) throw new Error("Failed to send message")

      setSuccess(true)
      setFormData({ firstName: "", lastName: "", email: "", company: "", phone: "", message: "" })
      setTimeout(() => {
        setSuccess(false)
        closeContactForm()
      }, 2000)
    } catch (err) {
      setError("Failed to send message. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={closeContactForm} />

      <div className="relative bg-background border border-border rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="sticky top-0 bg-background border-b border-border p-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Get In Touch</h2>
          <button onClick={closeContactForm} className="p-2 hover:bg-secondary rounded-lg transition-colors">
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="px-4 py-3 bg-secondary border border-border rounded-lg text-sm focus:outline-none focus:border-accent-purple transition-colors"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="px-4 py-3 bg-secondary border border-border rounded-lg text-sm focus:outline-none focus:border-accent-purple transition-colors"
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-sm focus:outline-none focus:border-accent-purple transition-colors"
          />

          <input
            type="text"
            name="company"
            placeholder="Company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-sm focus:outline-none focus:border-accent-purple transition-colors"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone (Optional)"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-sm focus:outline-none focus:border-accent-purple transition-colors"
          />

          <textarea
            name="message"
            placeholder="Tell us about your project"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-sm focus:outline-none focus:border-accent-purple transition-colors resize-none"
          />

          {error && (
            <div className="flex gap-2 items-center text-red-500 text-sm">
              <AlertCircle size={16} />
              {error}
            </div>
          )}

          {success && (
            <div className="flex gap-2 items-center text-green-500 text-sm">
              <CheckCircle size={16} />
              Message sent successfully!
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-accent-purple text-white rounded-lg font-semibold hover:bg-accent-purple/90 disabled:opacity-50 transition-all duration-300"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          <p className="text-xs text-foreground/50 text-center">
            We will be in touch within 24 hours. Your data is safe with us.
          </p>
        </form>
      </div>
    </div>
  )
}
