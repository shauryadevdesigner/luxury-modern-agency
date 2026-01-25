"use client"

import { Linkedin, Twitter, Mail } from "lucide-react"

export default function AboutTeam() {
  const team = [
    {
      name: "Alex Chen",
      role: "Lead Architect & Co-founder",
      bio: "10+ years building scalable systems. Former tech lead at major SaaS unicorn.",
      socials: ["linkedin", "twitter"],
    },
    {
      name: "Jordan Martinez",
      role: "Full-Stack Engineer",
      bio: "Specialist in React/Next.js and DevOps. Ship fast, break nothing philosophy.",
      socials: ["linkedin", "mail"],
    },
    {
      name: "Casey Williams",
      role: "Product Designer",
      bio: "Design systems expert. 8 years designing products used by millions.",
      socials: ["twitter", "linkedin"],
    },
    {
      name: "Morgan Zhang",
      role: "Mobile & Backend Engineer",
      bio: "React Native and Node.js specialist. Built apps with 100k+ users.",
      socials: ["linkedin", "mail"],
    },
    {
      name: "Riley Thompson",
      role: "DevOps & Infrastructure",
      bio: "AWS & Kubernetes expert. Built infrastructure handling billions of requests.",
      socials: ["linkedin", "twitter"],
    },
    {
      name: "Sam Patel",
      role: "Senior Full-Stack Engineer",
      bio: "PostgreSQL and API design expert. Clean code advocate.",
      socials: ["linkedin", "mail"],
    },
  ]

  return (
    <section className="py-16 md:py-20 px-4 md:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center mb-16">Our Team</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="p-8 rounded-xl border border-border bg-card hover:border-accent transition-colors duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent-purple to-accent-green mb-4" />
              <h3 className="text-lg font-bold mb-1">{member.name}</h3>
              <p className="text-sm font-semibold text-accent mb-3">{member.role}</p>
              <p className="text-foreground/60 text-sm mb-6">{member.bio}</p>

              <div className="flex gap-3">
                {member.socials.map((social, sidx) => (
                  <a
                    key={sidx}
                    href="#"
                    className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center hover:bg-accent/20 transition-colors"
                  >
                    {social === "linkedin" && <Linkedin size={16} className="text-accent" />}
                    {social === "twitter" && <Twitter size={16} className="text-accent" />}
                    {social === "mail" && <Mail size={16} className="text-accent" />}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 p-12 rounded-2xl bg-gradient-to-r from-accent-purple/20 to-accent-green/20 border border-border text-center">
          <h3 className="text-2xl font-bold mb-4">Actively Growing</h3>
          <p className="text-foreground/70 max-w-xl mx-auto mb-8">
            We're hiring senior engineers and designers. If you're passionate about shipping fast and maintaining high
            standards, let's talk.
          </p>
          <button className="btn-accent">Join Our Team</button>
        </div>
      </div>
    </section>
  )
}
