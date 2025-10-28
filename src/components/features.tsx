"use client"

import { useEffect, useRef } from "react"
import { Sparkles, Zap, Network } from "lucide-react"
import { TiltCard } from "./tilt-card"

const features = [
  {
    icon: Sparkles,
    title: "Context-aware writing",
    description:
      "Paradigm reads your citations and understands your research direction, offering suggestions that actually make sense.",
  },
  {
    icon: Network,
    title: "Cross-reference intelligence",
    description:
      "Instantly find connections between papers, identify gaps in literature, and discover relevant sources you might have missed.",
  },
  {
    icon: Zap,
    title: "Workflow integration",
    description: "Works seamlessly with Zotero, Mendeley, and your existing tools. No need to change how you work.",
  },
]

export function Features() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = sectionRef.current?.querySelectorAll(".fade-in-element")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative z-10 px-4 py-32">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="animate-spotlight h-[600px] w-[600px] rounded-full bg-gradient-to-br from-rose-500/10 to-transparent blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-24 text-center">
          <h2 className="fade-in-element mb-6 text-balance font-[family-name:var(--font-display)] text-5xl font-bold tracking-tight opacity-0 transition-all duration-700 [&.animate-in]:translate-y-0 [&.animate-in]:opacity-100 translate-y-4 md:text-6xl lg:text-7xl">
            Your research{" "}
            <span className="animate-gradient bg-gradient-to-r from-rose-400 via-pink-400 to-rose-500 bg-clip-text text-transparent">
              copilot
            </span>
          </h2>
          <p className="fade-in-element mx-auto max-w-3xl text-pretty text-xl text-muted-foreground opacity-0 transition-all duration-700 delay-100 [&.animate-in]:translate-y-0 [&.animate-in]:opacity-100 translate-y-4">
            Like Cursor, but for academic writing. Paradigm AI plugs into your workflow and accelerates every stage of
            research.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="fade-in-element opacity-0 transition-all duration-700 [&.animate-in]:translate-y-0 [&.animate-in]:opacity-100 translate-y-4"
              style={{ transitionDelay: `${(index + 2) * 100}ms` }}
            >
              <TiltCard className="group relative h-full overflow-hidden rounded-3xl">
                {/* Gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-rose-500/20 via-pink-500/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Glass card */}
                <div className="glass-strong relative h-full p-8 shadow-xl shadow-rose-500/5 transition-all group-hover:shadow-2xl group-hover:shadow-rose-500/20">
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-500/20 to-pink-500/20 shadow-lg shadow-rose-500/20 transition-all group-hover:scale-110 group-hover:shadow-rose-500/40">
                    <feature.icon className="h-8 w-8 text-rose-400" />
                  </div>
                  <h3 className="mb-4 font-[family-name:var(--font-display)] text-2xl font-bold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-pretty text-lg leading-relaxed text-muted-foreground">{feature.description}</p>
                </div>
              </TiltCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
