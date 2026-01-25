"use client"

const techStack = [
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Framer", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "GraphQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
  { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
]

const row1 = [...techStack.slice(0, 8)]
const row2 = [...techStack.slice(8)]

export default function TechStackCarousel() {
  return (
    <section className="py-16 bg-background overflow-hidden">
      <div className="container mx-auto px-4 mb-10 text-center">
        <p className="text-sm font-bold text-muted-foreground uppercase tracking-[0.2em]">
          Technologies & Platforms We Master
        </p>
      </div>

      <div className="flex flex-col gap-8">
        {/* Row 1: Left to Right */}
        <div className="relative w-full overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <div className="flex w-max animate-marquee-right" style={{ "--duration": "40s" } as any}>
            {[...row1, ...row1, ...row1, ...row1].map((tech, index) => (
              <TechIcon key={index} tech={tech} />
            ))}
          </div>
        </div>

        {/* Row 2: Right to Left */}
        <div className="relative w-full overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <div className="flex w-max animate-marquee-left" style={{ "--duration": "50s" } as any}>
            {[...row2, ...row2, ...row2, ...row2].map((tech, index) => (
              <TechIcon key={index} tech={tech} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function TechIcon({ tech }: { tech: typeof techStack[0] }) {
  return (
    <div className="flex items-center gap-3 mx-4 px-6 py-3 bg-muted/30 rounded-full border border-border/50 hover:border-primary/40 hover:bg-muted/50 transition-all duration-300 group cursor-default">
      <img
        src={tech.icon || "/placeholder.svg"}
        alt={tech.name}
        className="w-6 h-6 object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
      />
      <span className="text-base font-semibold text-muted-foreground group-hover:text-foreground transition-colors duration-300 whitespace-nowrap">
        {tech.name}
      </span>
    </div>
  )
}

