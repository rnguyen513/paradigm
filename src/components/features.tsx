"use client"

import { useEffect, useRef } from "react"
import { Sparkles, Zap, Network } from "lucide-react"
import { TiltCard } from "./tilt-card"

const features = [
  {
    icon: Sparkles,
    title: "Predictive feasibility scoring",
    description:
      "Assess your hypothesis before investing months of work. Paradigm analyzes past attempts and predicts success probability.",
  },
  {
    icon: Network,
    title: "Failure discovery network",
    description:
      "Uncover unpublished negative results and identify where similar approaches have failed — so you don’t repeat them.",
  },
  {
    icon: Zap,
    title: "Real-time research signals",
    description:
      "Monitor new grants, experiments, and papers in your field to see what others are pursuing right now.",
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
      {/* Subtle moving spotlight for depth */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="animate-spotlight h-[600px] w-[600px] rounded-full bg-gradient-to-br from-rose-500/10 via-fuchsia-600/10 to-transparent blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-24 text-center">
          <h2 className="fade-in-element mb-6 text-balance font-[family-name:var(--font-display)] text-5xl font-bold tracking-tight text-white opacity-0 transition-all duration-700 [&.animate-in]:translate-y-0 [&.animate-in]:opacity-100 translate-y-4 md:text-6xl lg:text-7xl">
            Predict research{" "}
            <span className="animate-gradient bg-gradient-to-r from-rose-400 via-pink-400 to-fuchsia-500 bg-clip-text text-transparent">
              outcomes
            </span>
          </h2>
          <p className="fade-in-element mx-auto max-w-3xl text-pretty text-xl text-zinc-400 opacity-0 transition-all duration-700 delay-100 [&.animate-in]:translate-y-0 [&.animate-in]:opacity-100 translate-y-4">
            Paradigm AI turns research from trial-and-error into foresight — validating hypotheses, revealing hidden
            risks, and guiding your next breakthrough.
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
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 via-pink-500/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Glass-like dark card */}
                <div className="glass-strong relative h-full p-8 bg-zinc-900/60 backdrop-blur-xl border border-zinc-800 shadow-xl shadow-rose-500/5 transition-all group-hover:shadow-rose-500/20 group-hover:border-rose-500/30">
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-500/20 to-pink-500/20 shadow-lg shadow-rose-500/20 transition-all group-hover:scale-110 group-hover:shadow-rose-500/40">
                    <feature.icon className="h-8 w-8 text-rose-400" />
                  </div>
                  <h3 className="mb-4 font-[family-name:var(--font-display)] text-2xl font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="text-pretty text-lg leading-relaxed text-zinc-400">{feature.description}</p>
                </div>
              </TiltCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
