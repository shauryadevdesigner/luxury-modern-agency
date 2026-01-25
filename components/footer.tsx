"use client"

import Link from "next/link"
import { Mail, Linkedin, Twitter, ArrowRight } from "lucide-react"
import { useContactForm } from "@/app/providers"

export default function Footer() {
  const { openContactForm } = useContactForm()

  return (
    <footer className="bg-primary text-primary-foreground py-14 px-4 md:px-8 border-t border-primary-foreground/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          <div className="fade-in">
            <h3 className="text-2xl font-bold mb-4">Elite</h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Premium development agency. Fast builds, full ownership, long-term partnership focused on your success.
            </p>
          </div>

          <div className="fade-in" style={{ animationDelay: "0.1s" }}>
            <h4 className="font-semibold mb-6">Services</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li>
                <Link
                  href="/services#saas"
                  className="hover:text-primary-foreground link-underline transition-colors duration-300"
                >
                  SaaS Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services#mobile"
                  className="hover:text-primary-foreground link-underline transition-colors duration-300"
                >
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link
                  href="/services#web"
                  className="hover:text-primary-foreground link-underline transition-colors duration-300"
                >
                  Web Platforms
                </Link>
              </li>
              <li>
                <Link
                  href="/services#design"
                  className="hover:text-primary-foreground link-underline transition-colors duration-300"
                >
                  UI/UX Design
                </Link>
              </li>
            </ul>
          </div>

          <div className="fade-in" style={{ animationDelay: "0.2s" }}>
            <h4 className="font-semibold mb-6">Company</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li>
                <Link
                  href="/about"
                  className="hover:text-primary-foreground link-underline transition-colors duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/process"
                  className="hover:text-primary-foreground link-underline transition-colors duration-300"
                >
                  Process
                </Link>
              </li>
              <li>
                <Link
                  href="/work"
                  className="hover:text-primary-foreground link-underline transition-colors duration-300"
                >
                  Work
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-primary-foreground link-underline transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="fade-in" style={{ animationDelay: "0.3s" }}>
            <h4 className="font-semibold mb-6">Connect</h4>
            <div className="flex gap-6">
              <a
                href="#"
                className="hover:text-primary-foreground/70 hover:scale-125 transition-all duration-300 group"
                aria-label="Email"
              >
                <Mail size={20} className="group-hover:rotate-12 transition-transform duration-300" />
              </a>
              <a
                href="#"
                className="hover:text-primary-foreground/70 hover:scale-125 transition-all duration-300 group"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} className="group-hover:rotate-12 transition-transform duration-300" />
              </a>
              <a
                href="#"
                className="hover:text-primary-foreground/70 hover:scale-125 transition-all duration-300 group"
                aria-label="Twitter"
              >
                <Twitter size={20} className="group-hover:rotate-12 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-primary-foreground/70">
          <p>&copy; 2025 Elite Development Agency. All rights reserved.</p>
          <div className="flex gap-8">
            <Link
              href="/privacy"
              className="hover:text-primary-foreground link-underline transition-colors duration-300"
            >
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-primary-foreground link-underline transition-colors duration-300">
              Terms
            </Link>
            <button
              onClick={openContactForm}
              className="group hover:text-primary-foreground transition-colors duration-300 flex items-center gap-2"
            >
              Get Started{" "}
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
