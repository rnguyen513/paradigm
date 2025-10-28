"use client"

import { useEffect, useRef, useState } from "react"

export function Database() {
  const sectionRef = useRef<HTMLElement>(null)
  const [count, setCount] = useState(0)
  const targetCount = 250000000

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")

            // Start counting animation
            const duration = 2000
            const steps = 60
            const increment = targetCount / steps
            let current = 0

            const timer = setInterval(() => {
              current += increment
              if (current >= targetCount) {
                setCount(targetCount)
                clearInterval(timer)
              } else {
                setCount(Math.floor(current))
              }
            }, duration / steps)

            return () => clearInterval(timer)
          }
        })
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative z-10 overflow-hidden px-4 py-32">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[1000px] w-[1000px] rounded-full bg-gradient-radial from-rose-500/30 via-pink-500/10 to-transparent blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl text-center">
        <div className="fade-in-element mb-12 opacity-0 transition-all duration-700 [&.animate-in]:scale-100 [&.animate-in]:opacity-100 scale-95">
          <div className="mb-6 bg-gradient-to-br from-foreground via-rose-300 to-pink-400 bg-clip-text font-[family-name:var(--font-display)] text-8xl font-black tracking-tighter text-transparent md:text-9xl lg:text-[12rem]">
            {count.toLocaleString()}
          </div>
          <div className="text-3xl font-semibold text-muted-foreground md:text-4xl">research papers indexed</div>
        </div>

        <p className="fade-in-element mx-auto mb-16 max-w-3xl text-pretty text-xl leading-relaxed text-muted-foreground opacity-0 transition-all duration-700 delay-200 [&.animate-in]:translate-y-0 [&.animate-in]:opacity-100 translate-y-4">
          Our comprehensive database spans every major field of study, updated daily with the latest publications. When
          you cite a paper, Paradigm instantly understands the context and finds relevant connections.
        </p>

        <div className="fade-in-element grid gap-6 opacity-0 transition-all duration-700 delay-300 [&.animate-in]:translate-y-0 [&.animate-in]:opacity-100 translate-y-4 sm:grid-cols-3">
          <div className="glass-strong group rounded-2xl p-8 shadow-xl shadow-rose-500/5 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-rose-500/20">
            <div className="mb-3 bg-gradient-to-br from-rose-400 to-pink-500 bg-clip-text font-[family-name:var(--font-display)] text-5xl font-bold text-transparent">
              50K+
            </div>
            <div className="text-lg font-medium text-muted-foreground">Journals covered</div>
          </div>
          <div className="glass-strong group rounded-2xl p-8 shadow-xl shadow-rose-500/5 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-rose-500/20">
            <div className="mb-3 bg-gradient-to-br from-rose-400 to-pink-500 bg-clip-text font-[family-name:var(--font-display)] text-5xl font-bold text-transparent">
              Daily
            </div>
            <div className="text-lg font-medium text-muted-foreground">Database updates</div>
          </div>
          <div className="glass-strong group rounded-2xl p-8 shadow-xl shadow-rose-500/5 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-rose-500/20">
            <div className="mb-3 bg-gradient-to-br from-rose-400 to-pink-500 bg-clip-text font-[family-name:var(--font-display)] text-5xl font-bold text-transparent">
              100+
            </div>
            <div className="text-lg font-medium text-muted-foreground">Languages supported</div>
          </div>
        </div>
      </div>
    </section>
  )
}
