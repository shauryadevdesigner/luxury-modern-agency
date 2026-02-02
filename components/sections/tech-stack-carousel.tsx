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
  { name: "Stripe", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/chrome/chrome-original.svg" },
  { name: "Auth0", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg" },
]

export default function TechStackCarousel() {
  return (
    <section className="py-20 bg-background overflow-hidden relative">
      <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-background to-transparent z-10" />

      <div className="container mx-auto px-4 mb-12 text-center">
        <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-muted-foreground opacity-50 mb-2">Technologies & Platforms</h3>
        <p className="text-2xl md:text-3xl font-black">We use the best tools to ship fast.</p>
      </div>

      <div className="flex flex-col gap-10">
        <div className="flex w-max animate-infinite-scroll hover:[animation-play-state:paused]">
          {[...techStack, ...techStack].map((tech, index) => (
            <TechBadge key={index} tech={tech} />
          ))}
        </div>

        <div className="flex w-max animate-infinite-scroll-reverse hover:[animation-play-state:paused]">
          {[...techStack, ...techStack].map((tech, index) => (
            <TechBadge key={index} tech={tech} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TechBadge({ tech }: { tech: typeof techStack[0] }) {
  return (
    <div className="flex items-center gap-3 mx-6 px-6 py-3.5 bg-muted/40 backdrop-blur-md rounded-2xl border border-border/50 hover:bg-muted/80 hover:border-primary/30 transition-all duration-300 group cursor-default">
      <img
        src={tech.icon || "/placeholder.svg"}
        alt={tech.name}
        className="w-6 h-6 object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
      />
      <span className="text-sm font-bold text-muted-foreground group-hover:text-foreground transition-colors duration-300 whitespace-nowrap">
        {tech.name}
      </span>
    </div>
  )
}

