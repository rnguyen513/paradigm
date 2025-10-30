"use client"

import { useEffect, useRef } from "react"
import { FileText, BookOpen, Library } from "lucide-react"

export function Integration() {
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
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <h2 className="fade-in-element mb-8 text-balance font-[family-name:var(--font-display)] text-5xl font-bold tracking-tight text-white opacity-0 transition-all duration-700 [&.animate-in]:translate-y-0 [&.animate-in]:opacity-100 translate-y-4 md:text-6xl">
              Plugs into your{" "}
              <span className="bg-gradient-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent">
                existing workflow
              </span>
            </h2>
            <p className="fade-in-element mb-10 text-pretty text-xl leading-relaxed text-gray-300 opacity-0 transition-all duration-700 delay-100 [&.animate-in]:translate-y-0 [&.animate-in]:opacity-100 translate-y-4">
              Paradigm AI integrates seamlessly with the tools you already use. It reads your citation library,
              understands your research context, and provides intelligent suggestions without disrupting your flow.
            </p>

            <div className="fade-in-element space-y-6 opacity-0 transition-all duration-700 delay-200 [&.animate-in]:translate-y-0 [&.animate-in]:opacity-100 translate-y-4">
              {[
                {
                  icon: FileText,
                  title: "Citation managers",
                  desc: "Works with Zotero, Mendeley, EndNote, and more",
                },
                {
                  icon: BookOpen,
                  title: "Writing tools",
                  desc: "Integrates with Word, Google Docs, Overleaf, and LaTeX",
                },
                {
                  icon: Library,
                  title: "Research databases",
                  desc: "Direct access to PubMed, arXiv, JSTOR, and institutional libraries",
                },
              ].map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="glass-strong group flex items-start gap-5 rounded-2xl p-6 shadow-lg shadow-rose-500/10 transition-all hover:shadow-xl hover:shadow-rose-500/30 backdrop-blur-md"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-rose-500/20 to-pink-500/20 shadow-md shadow-rose-500/30">
                    <Icon className="h-7 w-7 text-rose-400" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-semibold text-white">{title}</h3>
                    <p className="text-base text-gray-400">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="fade-in-element relative opacity-0 transition-all duration-700 delay-300 [&.animate-in]:translate-x-0 [&.animate-in]:opacity-100 translate-x-8">
            <div className="relative aspect-square overflow-hidden rounded-3xl">
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-rose-500/25 via-pink-500/15 to-fuchsia-500/25" />
              <div className="glass-strong absolute inset-4 rounded-2xl shadow-2xl shadow-rose-500/20 backdrop-blur-lg">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(244,114,182,0.15),transparent_70%)]" />

                {/* Floating shimmer lines */}
                <div className="relative flex h-full flex-col justify-between p-10">
                  {[0, 1, 2].map((col) => (
                    <div key={col} className="space-y-4">
                      {[0, 1, 2].map((row) => {
                        const delay = col * 1.5 + row * 0.5
                        return (
                          <div
                            key={`${col}-${row}`}
                            className="animate-shimmer h-4 w-[80%] rounded-full bg-gradient-to-r from-transparent via-rose-400/40 to-transparent bg-[length:1000px_100%]"
                            style={{ animationDelay: `${delay}s` }}
                          />
                        )
                      })}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
