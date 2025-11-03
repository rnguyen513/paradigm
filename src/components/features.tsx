"use client"

import { useEffect, useRef } from "react"
import { Sparkles, Zap, Network } from "lucide-react"
import { TiltCard } from "./tilt-card"

const features = [
  {
    icon: Sparkles,
    title: "Predict, visualize, and process your research",
    description:
      "Fine-tuned LLMs trained on scientific literature and experiment data help forecast outcomes, summarize findings, and accelerate insights across disciplines.",
  },
  {
    icon: Network,
    title: "Cross-vertical intelligence",
    description:
      "Paradigm understands domain-specific terminology across biology, engineering, and social sciences — empowering interdisciplinary breakthroughs.",
  },
  {
    icon: Zap,
    title: "Continuous learning engine",
    description:
      "Your workspace improves with every paper, citation, and dataset — adapting to your evolving research focus.",
  },
]

const partners = [
  { name: "Silver Lake", href: "https://www.silverlake.com" },
  { name: "EY", href: "https://www.ey.com" },
  { name: "University of Virginia", href: "https://www.virginia.edu" },
  { name: "Darden iLab", href: "https://www.darden.virginia.edu/innovation-lab" },
  { name: "The Foundry", href: "https://foundryuva.com" },
]

const universities = [
  { name: "Princeton" },
  { name: "Harvard" },
  { name: "UC Berkeley" },
  { name: "UVA" },
  { name: "MIT" },
]

export function Features() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("animate-in")
        })
      },
      { threshold: 0.1 }
    )

    const elements = sectionRef.current?.querySelectorAll(".fade-in-element")
    elements?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative z-10 px-4">
      {/* Animated backdrop glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="animate-spotlight h-[600px] w-[600px] rounded-full bg-gradient-to-br from-[#4A0E8A]/10 via-[#8E5BFF]/10 to-transparent blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Main header */}
        <div className="mb-24 text-center">
          <h2 className="fade-in-element mb-6 text-balance font-[family-name:var(--font-display)] text-5xl font-bold tracking-tight text-white opacity-0 transition-all duration-700 [&.animate-in]:translate-y-0 [&.animate-in]:opacity-100 translate-y-4 md:text-6xl lg:text-7xl">
            Use{" "}
            <span className="animate-gradient bg-gradient-to-r from-[#4A0E8A] via-[#8E5BFF] to-[#6A24C8] bg-clip-text text-transparent">
              fine-tuned LLMs
            </span>{" "}
            to power your research
          </h2>
          <p className="fade-in-element mx-auto max-w-3xl text-pretty text-xl text-zinc-300 opacity-0 transition-all duration-700 delay-100 [&.animate-in]:translate-y-0 [&.animate-in]:opacity-100 translate-y-4">
            Predict, visualize, and process your research across all verticals — from idea conception to publication.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid gap-8 md:grid-cols-3 mb-24">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="fade-in-element opacity-0 transition-all duration-700 [&.animate-in]:translate-y-0 [&.animate-in]:opacity-100 translate-y-4"
              style={{ transitionDelay: `${(index + 2) * 100}ms` }}
            >
              <TiltCard className="group relative h-full overflow-hidden rounded-3xl">
                <div className="absolute inset-0 bg-gradient-to-br from-[#4A0E8A]/15 via-[#8E5BFF]/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="glass-strong relative h-full p-8 bg-zinc-900/60 backdrop-blur-xl border border-zinc-800 shadow-xl shadow-[#4A0E8A]/10 transition-all group-hover:shadow-[#6A24C8]/30 group-hover:border-[#6A24C8]/30">
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#4A0E8A]/25 to-[#8E5BFF]/25 shadow-lg shadow-[#4A0E8A]/30 transition-all group-hover:scale-110 group-hover:shadow-[#6A24C8]/50">
                    <feature.icon className="h-8 w-8 text-[#8E5BFF]" />
                  </div>
                  <h3 className="mb-4 font-[family-name:var(--font-display)] text-2xl font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="text-pretty text-lg leading-relaxed text-zinc-400">
                    {feature.description}
                  </p>
                </div>
              </TiltCard>
            </div>
          ))}
        </div>

        {/* Partners section */}
        <div className="fade-in-element text-center opacity-0 transition-all duration-700 delay-200 [&.animate-in]:translate-y-0 [&.animate-in]:opacity-100 translate-y-4">
          <p className="mb-6 text-lg text-zinc-400">Built by founders backed by</p>
          <div className="flex flex-wrap justify-center gap-10">
            {partners.map((p) => (
              <a
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-semibold text-xl hover:text-[#8E5BFF] transition"
              >
                {p.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
