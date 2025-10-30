"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { MagneticButton } from "./magnetic-button"

export function Hero() {
    const heroRef = useRef<HTMLElement>(null)
    const titleRef = useRef<HTMLHeadingElement>(null)

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

        const elements = heroRef.current?.querySelectorAll(".fade-in-element")
        elements?.forEach((el) => observer.observe(el))

        return () => observer.disconnect()
    }, [])

    // useEffect(() => {
    //     const handleScroll = () => {
    //         if (!titleRef.current) return
    //         const scrollY = window.scrollY
    //         titleRef.current.style.transform = `translateY(${scrollY * 0.3}px)`
    //     }

    //     window.addEventListener("scroll", handleScroll)
    //     return () => window.removeEventListener("scroll", handleScroll)
    // }, [])

    return (
        <section
            ref={heroRef}
            className="relative z-10 flex min-h-screen items-center justify-center overflow-hidden px-4 py-20"
        >
            <div className="relative mx-auto max-w-6xl text-center">
                <div className="fade-in-element glass-strong mb-8 inline-flex items-center gap-3 rounded-full px-6 py-3 opacity-0 shadow-lg shadow-rose-500/10 transition-all duration-700 [&.animate-in]:translate-y-0 [&.animate-in]:opacity-100 translate-y-4">
                    <span className="relative flex h-2.5 w-2.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-400 opacity-75"></span>
                        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-rose-500"></span>
                    </span>
                    <span className="bg-gradient-to-r from-rose-200 to-pink-200 bg-clip-text font-medium text-transparent">
                        Trusted by researchers at 200+ institutions
                    </span>
                    <Sparkles className="h-4 w-4 text-rose-400" />
                </div>

                <h1
                    ref={titleRef}
                    className="fade-in-element mb-8 text-balance font-[family-name:var(--font-display)] text-6xl font-bold tracking-tight opacity-0 transition-all duration-700 delay-100 [&.animate-in]:translate-y-0 [&.animate-in]:opacity-100 translate-y-4 md:text-8xl lg:text-9xl"
                    style={{ transition: "transform 0.1s ease-out" }}
                >
                    <span className="bg-gradient-to-br from-foreground via-foreground to-foreground/60 bg-clip-text text-transparent text-white">
                        Predict the future
                    </span>
                    <br />
                    <span className="animate-gradient bg-gradient-to-r from-rose-400 via-pink-400 to-rose-500 bg-clip-text text-transparent">
                        of your research
                    </span>
                </h1>

                <p className="fade-in-element mx-auto mb-12 max-w-3xl text-pretty text-xl leading-relaxed text-muted-foreground opacity-0 transition-all duration-700 delay-200 [&.animate-in]:translate-y-0 [&.animate-in]:opacity-100 translate-y-4 md:text-2xl">
                    <span className="font-semibold text-indigo-400">Paradigm AI</span> is a predictive research intelligence
                    platform that helps scientists validate hypotheses before investing years of work — analyzing{" "}
                    <span className="font-semibold text-indigo-400">200M+ papers, 15M grants</span>, and real-world failure data
                    to forecast feasibility, risk, and impact.
                </p>

                <div className="fade-in-element flex flex-col items-center justify-center gap-4 opacity-0 transition-all duration-700 delay-300 [&.animate-in]:translate-y-0 [&.animate-in]:opacity-100 translate-y-4 sm:flex-row">
                    <MagneticButton>
                        <Button
                            size="lg"
                            className="animate-glow-pulse group relative h-14 gap-2 overflow-hidden rounded-full px-10 text-lg font-semibold shadow-2xl shadow-rose-500/30 transition-all hover:scale-105 hover:shadow-rose-500/50 hover:cursor-pointer"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600" />
                            <span className="relative z-10 text-white">Start writing for free</span>
                            <ArrowRight className="relative z-10 h-5 w-5 text-white transition-transform group-hover:translate-x-1" />
                        </Button>
                    </MagneticButton>
                    {/* <MagneticButton>
                        <Button
                            size="lg"
                            variant="outline"
                            className="glass-strong h-14 rounded-full border-2 border-rose-500/30 px-10 text-lg font-semibold text-foreground transition-all hover:border-rose-500/50 hover:bg-rose-500/10 bg-transparent"
                        >
                            Watch demo
                        </Button>
                    </MagneticButton> */}
                </div>

                <p className="fade-in-element mt-8 text-sm text-muted-foreground opacity-0 transition-all duration-700 delay-400 [&.animate-in]:opacity-100">
                    No credit card required · 14-day free trial · Cancel anytime
                </p>
            </div>
        </section>
    )
}
