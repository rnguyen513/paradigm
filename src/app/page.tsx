import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Integration } from "@/components/integration"
import { Database } from "@/components/database"
import { CTA } from "@/components/cta"
import { ParticleField } from "@/components/particle-field"
import { FloatingElements } from "@/components/floating-elements"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="pointer-events-none absolute inset-0 z-0 h-[200vh]">
        {/* Animated spotlight effect */}
        <div className="animate-spotlight absolute left-1/2 top-0 h-[150vh] w-[1200px] -translate-x-1/2 rounded-full bg-gradient-radial from-rose-500/40 via-pink-500/20 to-transparent blur-3xl" />

        {/* Morphing blobs */}
        <div className="animate-morph absolute right-1/4 top-0 h-[120vh] w-[800px] rounded-full bg-gradient-to-br from-rose-400/30 via-pink-500/20 to-fuchsia-500/30 blur-3xl" />
        <div
          className="animate-morph absolute bottom-0 left-1/4 h-[100vh] w-[700px] rounded-full bg-gradient-to-tl from-pink-400/25 via-rose-500/15 to-red-400/20 blur-3xl"
          style={{ animationDelay: "4s" }}
        />

        {/* Grid overlay for depth */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      <ParticleField />
      <FloatingElements />
      <Hero />
      <Features />
      <Integration />
      {/* <Database />
      <CTA /> */}
    </main>
  )
}
