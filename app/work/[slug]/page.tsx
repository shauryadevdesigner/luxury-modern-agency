import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import CaseStudyDetail from "@/components/sections/case-study-detail"
import { notFound } from "next/navigation"

export const metadata = {
  title: "Case Study | Elite Development Agency",
  description: "Detailed case study of our product development process and results.",
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const studies: Record<string, any> = {
    "ecommerce-platform": {
      title: "E-Commerce Platform",
      subtitle: "Building a modern marketplace with real-time inventory management",
      industry: "Retail",
      timeline: "8 weeks",
      team: "5 senior engineers, 1 designer",
      problem: [
        "Client was using a legacy WooCommerce setup that couldn't handle scale",
        "Manual order management was error-prone and slow",
        "Poor mobile experience losing 40% of potential customers",
        "No real-time inventory sync across channels",
      ],
      solution: [
        "Built custom Next.js e-commerce platform from scratch",
        "Real-time inventory management with WebSocket updates",
        "Mobile-first responsive design with Tailwind CSS",
        "Stripe integration for secure payment processing",
        "Admin dashboard for order and inventory management",
      ],
      results: [
        {
          metric: "+250%",
          label: "Revenue increase within 3 months",
        },
        {
          metric: "0.8s",
          label: "Page load time (was 3.2s)",
        },
        {
          metric: "45%",
          label: "Mobile conversion rate increase",
        },
        {
          metric: "$50k",
          label: "Monthly recurring revenue added",
        },
      ],
      stack: ["Next.js", "React", "PostgreSQL", "Stripe", "Redis", "Tailwind CSS", "Vercel"],
      challenges: [
        "Migrating from WordPress with 50k+ existing products without downtime",
        "Building real-time inventory sync across 3 sales channels",
        "Complex pricing rules for B2B and B2C customers",
      ],
      lessons: [
        "Mobile-first design is non-negotiable for e-commerce",
        "Real-time updates create significantly better UX",
        "Senior team moves fast without technical debt",
      ],
      testimonial: {
        quote:
          "Elite took our struggling e-commerce business and turned it into a growth engine. They shipped fast, the code is clean, and the platform scales effortlessly.",
        author: "Sarah Chen",
        role: "Founder & CEO",
        company: "ModernRetail",
      },
    },
    "saas-analytics": {
      title: "SaaS Analytics Dashboard",
      subtitle: "Rapid MVP launch for data analytics platform",
      industry: "SaaS",
      timeline: "6 weeks",
      team: "4 senior engineers, 1 designer",
      problem: [
        "Founder had a vision but no MVP to attract investors",
        "Needed to prove product-market fit quickly",
        "Competitors had feature-rich dashboards already",
        "Time was critical - investor meetings scheduled",
      ],
      solution: [
        "Rapid design-to-code process (48h from design to working product)",
        "Built core analytics features: dashboards, reports, exports",
        "Real-time data processing with WebSockets",
        "Beautiful, intuitive UI that required minimal onboarding",
        "API-first architecture for future integrations",
      ],
      results: [
        {
          metric: "500",
          label: "Beta users in first month",
        },
        {
          metric: "4.8★",
          label: "Product Hunt launch rating",
        },
        {
          metric: "25%",
          label: "Daily active user retention",
        },
        {
          metric: "$2M",
          label: "Series A funding raised",
        },
      ],
      stack: ["Next.js", "React", "Node.js", "PostgreSQL", "Redis", "Plotly", "Vercel"],
      challenges: [
        "Building real-time analytics with complex aggregations",
        "Handling large datasets without performance degradation",
        "MVP that doesn't look like an MVP",
      ],
      lessons: [
        "Speed matters more than perfection for MVPs",
        "Beautiful design and great UX unlock growth",
        "Senior engineers ship production-ready code on day one",
      ],
      testimonial: {
        quote:
          "We needed to launch an analytics dashboard in 6 weeks to secure Series A funding. Elite delivered in time, and the product quality exceeded expectations. We're still using the codebase they built.",
        author: "Marcus Johnson",
        role: "Founder",
        company: "DataViz Pro",
      },
    },
    "fitness-mobile": {
      title: "Fitness Mobile App",
      subtitle: "Native iOS & Android app for workout tracking and coaching",
      industry: "Health & Fitness",
      timeline: "10 weeks",
      team: "3 senior engineers, 2 designers",
      problem: [
        "Existing fitness apps were bloated and had terrible UX",
        "Coaches needed a way to manage multiple clients",
        "No good integration between web coaching and mobile tracking",
        "Performance issues on older devices",
      ],
      solution: [
        "React Native for iOS and Android simultaneous launch",
        "Offline-first architecture for workout tracking",
        "Real-time sync when connection available",
        "Coach dashboard for progress tracking",
        "Beautiful UI with smooth animations",
      ],
      results: [
        {
          metric: "50k",
          label: "Downloads in first week",
        },
        {
          metric: "4.8★",
          label: "App Store & Play Store rating",
        },
        {
          metric: "35%",
          label: "Day 30 retention rate",
        },
        {
          metric: "$500k",
          label: "MRR within 6 months",
        },
      ],
      stack: ["React Native", "Firebase", "Stripe", "Expo", "TypeScript"],
      challenges: [
        "Simultaneous iOS and Android launch without delays",
        "Offline-first architecture for reliable workout tracking",
        "Smooth animations on budget Android devices",
      ],
      lessons: [
        "React Native can deliver native-quality apps",
        "Offline-first is essential for fitness apps",
        "Focus on core user journey, not feature bloat",
      ],
      testimonial: {
        quote:
          "Elite built our fitness app in 10 weeks. The speed of delivery combined with the quality of the code and design was incredible. Our users love it.",
        author: "Emma Rodriguez",
        role: "Founder",
        company: "FitFlow",
      },
    },
  }

  const study = studies[params.slug]

  if (!study) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <CaseStudyDetail study={study} />
      <Footer />
    </main>
  )
}

export function generateStaticParams() {
  return [{ slug: "ecommerce-platform" }, { slug: "saas-analytics" }, { slug: "fitness-mobile" }]
}
