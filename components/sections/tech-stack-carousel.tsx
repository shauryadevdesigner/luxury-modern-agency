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
    <section className="py-12 bg-background overflow-hidden border-b border-border/50">
      <div className="container mx-auto px-4 mb-8 text-center">
        <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.4em] opacity-60">
          TECHNOLOGIES & PLATFORMS WE MASTER
        </p>
      </div>

      <div className="flex flex-col gap-8">
        {/* Row 1: moves from LEFT TO RIGHT */}
        <div className="relative w-full overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none" />

          <div className="flex w-max animate-scroll-right pause-on-hover" style={{ "--duration": "25s" } as any}>
            {[...row1, ...row1, ...row1, ...row1].map((tech, index) => (
              <TechIcon key={index} tech={tech} />
            ))}
          </div>
        </div>

        {/* Row 2: moves from RIGHT TO LEFT */}
        <div className="relative w-full overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none" />

          <div className="flex w-max animate-scroll-left pause-on-hover" style={{ "--duration": "30s" } as any}>
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
    <div className="flex items-center gap-4 mx-4 px-6 py-3 bg-card/40 backdrop-blur-sm rounded-full border border-border/60 hover:border-primary/50 hover:bg-card/80 transition-all duration-300 group cursor-default shadow-[0_2px_10px_-3px_rgba(0,0,0,0.07)] hover:shadow-[0_8px_20px_-6px_rgba(0,0,0,0.1)]">
      <div className="relative w-6 h-6 flex items-center justify-center">
        <img
          src={tech.icon || "/placeholder.svg"}
          alt={tech.name}
          className="w-full h-full object-contain filter transition-all duration-500 group-hover:scale-110"
        />
      </div>
      <span className="text-sm font-bold text-muted-foreground group-hover:text-foreground transition-colors duration-300 whitespace-nowrap tracking-tight">
        {tech.name}
      </span>
    </div>
  )
}

