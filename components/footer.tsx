"use client"

import Link from "next/link"
import { Mail, Linkedin, Twitter, ArrowRight } from "lucide-react"
import { useContactForm } from "@/app/providers"

export default function Footer() {
  const { openContactForm } = useContactForm()

  return (
    <footer className="bg-[#050505] text-white py-20 px-4 md:px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-black tracking-tighter">Qlyra</h3>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Premium development agency. Fast builds, full ownership, long-term partnership focused on your success.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-8 text-gray-400">Services</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li>
                <Link href="/services#saas" className="hover:text-primary transition-colors">SaaS Development</Link>
              </li>
              <li>
                <Link href="/services#mobile" className="hover:text-primary transition-colors">Mobile Apps</Link>
              </li>
              <li>
                <Link href="/services#web" className="hover:text-primary transition-colors">Web Platforms</Link>
              </li>
              <li>
                <Link href="/services#design" className="hover:text-primary transition-colors">UI/UX Design</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-8 text-gray-400">Company</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">About</Link>
              </li>
              <li>
                <Link href="/process" className="hover:text-primary transition-colors">Process</Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-primary transition-colors">Work</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-8 text-gray-400">Connect</h4>
            <div className="flex gap-4">
              {[
                { icon: Mail, label: 'Email' },
                { icon: Linkedin, label: 'LinkedIn' },
                { icon: Twitter, label: 'Twitter' }
              ].map((social, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 group">
                  <social.icon size={20} className="group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-xs font-medium text-gray-600">
          <p>© 2025 Qlyra Development Agency. All rights reserved.</p>
          <div className="flex gap-10">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <button onClick={openContactForm} className="text-primary font-bold hover:brightness-125 transition-all">
              Book a discovery call →
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
