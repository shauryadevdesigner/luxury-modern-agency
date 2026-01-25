import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ContactHero from "@/components/sections/contact-hero"
import ContactForm from "@/components/sections/contact-form"

export const metadata = {
  title: "Contact | Elite Development Agency",
  description: "Get in touch with our team. Let's discuss your next project.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <ContactHero />
      <ContactForm />
      <Footer />
    </main>
  )
}
