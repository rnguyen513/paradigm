"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
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
    <section ref={sectionRef} className="relative z-10 px-4 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-[2rem] shadow-2xl shadow-rose-500/20">
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-rose-500/40 via-pink-500/30 to-fuchsia-500/40" />
          <div className="animate-spotlight absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial from-rose-400/40 to-transparent blur-3xl" />

          {/* Glass overlay */}
          <div className="glass-strong relative p-16 md:p-20">
            <div className="relative text-center">
              <h2 className="fade-in-element mb-8 text-balance font-[family-name:var(--font-display)] text-5xl font-bold tracking-tight opacity-0 transition-all duration-700 [&.animate-in]:translate-y-0 [&.animate-in]:opacity-100 translate-y-4 md:text-6xl lg:text-7xl">
                Start writing{" "}
                <span className="bg-gradient-to-r from-rose-300 to-pink-300 bg-clip-text text-transparent">
                  smarter
                </span>{" "}
                today
              </h2>
              <p className="fade-in-element mx-auto mb-12 max-w-2xl text-pretty text-xl leading-relaxed text-muted-foreground opacity-0 transition-all duration-700 delay-100 [&.animate-in]:translate-y-0 [&.animate-in]:opacity-100 translate-y-4">
                Join thousands of researchers who are accelerating their work with Paradigm AI. No credit card required.
              </p>
              <div className="fade-in-element flex flex-col items-center justify-center gap-4 opacity-0 transition-all duration-700 delay-200 [&.animate-in]:translate-y-0 [&.animate-in]:opacity-100 translate-y-4 sm:flex-row">
                <Button
                  size="lg"
                  className="animate-glow-pulse group h-14 gap-2 rounded-full bg-gradient-to-r from-rose-500 to-pink-600 px-10 text-lg font-bold text-white shadow-2xl shadow-rose-500/40 transition-all hover:scale-105 hover:shadow-rose-500/60"
                >
                  Get started free
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="glass-strong h-14 rounded-full border-2 border-rose-400/50 px-10 text-lg font-bold text-foreground transition-all hover:border-rose-400 hover:bg-rose-500/10 bg-transparent"
                >
                  Schedule a demo
                </Button>
              </div>
            </div>
          </div>
        </div>

        <footer className="fade-in-element mt-20 text-center text-base text-muted-foreground opacity-0 transition-all duration-700 delay-300 [&.animate-in]:opacity-100">
          <p>© 2025 Paradigm AI. Built for researchers, by researchers.</p>
        </footer>
      </div>
    </section>
  )
}
