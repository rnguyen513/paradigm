"use client"

import { useEffect, useRef } from "react"
import {
  Layers,
  CheckCircle,
  Bell,
  LineChart,
  Target,
  Database,
  TrendingUp,
  ShieldCheck,
  Radar,
  DollarSign,
  Users,
  Compass,
} from "lucide-react"
import { TiltCard } from "./tilt-card"

const topValues = [
  {
    icon: Layers,
    title: "The most comprehensive research data",
    description:
      "Don’t waste time searching for past attempts — access the Paradigm knowledge base with over 3B data points, 200M papers, 15M grants, and proprietary failure data in one platform.",
  },
  {
    icon: CheckCircle,
    title: "The easiest way to validate hypotheses",
    description:
      "Complex research questions made simple. Get success probability scores and feasibility assessments in seconds, not weeks.",
  },
  {
    icon: Bell,
    title: "The fastest competition alerts",
    description:
      "When researchers enter your space, you’ll know immediately. Real-time monitoring of preprints, grants, and patents keeps you ahead of the field.",
  },
  {
    icon: LineChart,
    title: "The best predictive analytics",
    description:
      "We predict research outcomes before you start — helping you choose high-impact projects and avoid failed experiments that waste years.",
  },
]

const deepFeatures = [
  {
    icon: Target,
    title: "Hypothesis Validation",
    description:
      "Analyze your research question against 200M papers. Get success probability scores and see which similar hypotheses succeeded or failed.",
  },
  {
    icon: Database,
    title: "Failed Experiments Database",
    description:
      "Access proprietary unpublished negative results. Discover what doesn’t work before you try it, saving years of wasted effort.",
  },
  {
    icon: TrendingUp,
    title: "Impact Forecasting",
    description:
      "Predict citation counts, publication probability, and breakthrough potential before starting research. Compare outcomes across directions.",
  },
  {
    icon: ShieldCheck,
    title: "Methodology Risk Scoring",
    description:
      "Quantitative risk assessments for experimental techniques. See success rates for specific methods across contexts with confidence intervals.",
  },
  {
    icon: Radar,
    title: "Competition Intelligence",
    description:
      "Real-time monitoring of who else is pursuing similar research. Track preprints, grants, and patents. Identify white space opportunities.",
  },
  {
    icon: DollarSign,
    title: "Grant Probability Analysis",
    description:
      "Analyze your hypothesis against funded and rejected grants from NIH, NSF, and others. See success probability by funding mechanism.",
  },
  {
    icon: Users,
    title: "Collaboration Matching",
    description:
      "Find researchers with complementary expertise. See publication overlap, citation relationships, and introduction pathways through mutual connections.",
  },
  {
    icon: Bell,
    title: "Research Alerts",
    description:
      "Custom monitoring for your research areas. Weekly digests of new preprints, funded grants, and emerging methodologies in your field.",
  },
  {
    icon: Compass,
    title: "Research Explorer",
    description:
      "Interactive visualization of the research landscape. See hypothesis clusters, researcher networks, and discover breakthrough opportunities.",
  },
]

const universities = [
  { name: "Princeton" },
  { name: "Harvard" },
  { name: "UC Berkeley" },
  { name: "UVA" },
  { name: "MIT" },
  { name: "Stanford" },
  { name: "Oxford" },
]

export function ValueGrid() {
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
    <section ref={sectionRef} className="relative z-10 px-4 py-32 border-t border-zinc-900">
      <div className="relative mx-auto max-w-7xl">
        {/* Headline */}
        <div className="fade-in-element mb-20 text-center opacity-0 transition-all duration-700 translate-y-4 [&.animate-in]:translate-y-0 [&.animate-in]:opacity-100">
          <h2 className="font-[family-name:var(--font-display)] text-5xl font-bold text-white mb-4">
            The predictive research platform trusted by scientists at leading institutions
          </h2>
          <p className="text-zinc-400 text-lg max-w-3xl mx-auto">
            From hypothesis validation to real-time competition tracking — Paradigm helps researchers work smarter and faster.
          </p>
        </div>

        {/* Value Proposition Grid (2x2) */}
        <div className="fade-in-element grid grid-cols-1 md:grid-cols-2 gap-8 mb-32 opacity-0 transition-all duration-700 [&.animate-in]:translate-y-0 [&.animate-in]:opacity-100 translate-y-4">
          {topValues.map((item, index) => (
            <TiltCard key={index} className="group relative h-full overflow-hidden rounded-3xl">
              <div className="absolute inset-0 bg-gradient-to-br from-[#4A0E8A]/15 via-[#8E5BFF]/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="glass-strong relative h-full p-8 bg-zinc-900/60 backdrop-blur-xl border border-zinc-800 shadow-lg shadow-[#4A0E8A]/10 transition-all group-hover:border-[#6A24C8]/30 group-hover:shadow-[#6A24C8]/30">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#4A0E8A]/25 to-[#8E5BFF]/25 shadow-md shadow-[#4A0E8A]/30">
                  <item.icon className="h-7 w-7 text-[#8E5BFF]" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-zinc-400 text-lg leading-relaxed">{item.description}</p>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Deep Capability Grid */}
        <div className="fade-in-element grid grid-cols-1 md:grid-cols-3 gap-8 opacity-0 transition-all duration-700 delay-200 [&.animate-in]:translate-y-0 [&.animate-in]:opacity-100 translate-y-4">
          {deepFeatures.map((f, i) => (
            <div key={i} className="glass-strong rounded-3xl p-8 bg-zinc-900/60 border border-zinc-800 shadow-lg shadow-[#4A0E8A]/10 hover:border-[#6A24C8]/30 transition-all">
              <div className="mb-4 flex items-center justify-center h-14 w-14 rounded-xl bg-gradient-to-br from-[#4A0E8A]/25 to-[#8E5BFF]/25 shadow-md shadow-[#4A0E8A]/30">
                <f.icon className="h-7 w-7 text-[#8E5BFF]" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">{f.title}</h4>
              <p className="text-zinc-400 leading-relaxed text-lg">{f.description}</p>
            </div>
          ))}
        </div>

        {/* Universities */}
        <div className="fade-in-element mt-24 text-center opacity-0 transition-all duration-700 delay-300 [&.animate-in]:translate-y-0 [&.animate-in]:opacity-100 translate-y-4">
          <p className="mb-6 text-lg text-zinc-400">Used by researchers at</p>
          <div className="flex flex-wrap justify-center gap-10">
            {universities.map((u) => (
              <span key={u.name} className="text-white font-semibold text-lg hover:text-[#8E5BFF] transition">
                {u.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}