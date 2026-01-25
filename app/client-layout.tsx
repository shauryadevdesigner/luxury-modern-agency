"use client"

import type React from "react"

import { ContactFormProvider } from "./providers"
import { ContactFormModal } from "@/components/contact-form-modal"

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <ContactFormProvider>
      {children}
      <ContactFormModal />
    </ContactFormProvider>
  )
}
