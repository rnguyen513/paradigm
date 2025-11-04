"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { MagneticButton } from "./magnetic-button"
import { useRouter } from "next/navigation"
import { _libreBaskervilleBold, _robotoSerif } from "./fonts"

export function Hero() {
    const heroRef = useRef<HTMLElement>(null)
    const titleRef = useRef<HTMLHeadingElement>(null)

    const router = useRouter();

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

    return (
        <section
            ref={heroRef}
            className={`relative z-10 flex min-h-screen items-center justify-center overflow-hidden px-4 py-20`}
        >
            <div className="relative mx-auto max-w-6xl text-center">
                <div className="fade-in-element glass-strong mb-8 inline-flex items-center gap-3 rounded-full px-6 py-3 opacity-0 shadow-lg shadow-[#4A0E8A]/20 transition-all duration-700 [&.animate-in]:translate-y-0 [&.animate-in]:opacity-100 translate-y-4">
                    <span className="relative flex h-2.5 w-2.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#8E5BFF] opacity-75"></span>
                        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#6A24C8]"></span>
                    </span>
                    <span className={"bg-gradient-to-r from-[#8E5BFF] to-[#C09CFF] bg-clip-text font-medium text-transparent"}>
                        Trusted by researchers at 20+ institutions
                    </span>
                    <Sparkles className="h-4 w-4 text-[#8E5BFF]" />
                </div>

                <h1
                    ref={titleRef}
                    className="fade-in-element mb-8 text-balance font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight opacity-0 transition-all duration-700 delay-100 [&.animate-in]:translate-y-0 [&.animate-in]:opacity-100 translate-y-4 md:text-6xl lg:text-6xl"
                    style={{ transition: "transform 0.1s ease-out" }}
                >
                    <span className="bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                        Fine-tuned predictive
                    </span>
                    <br />
                    <span className={`animate-gradient bg-gradient-to-r from-[#4A0E8A] via-[#8E5BFF] to-[#6A24C8] bg-clip-text text-transparent ${_robotoSerif.className}`}>
                        research intelligence
                    </span>
                </h1>

                <p className="fade-in-element mx-auto mb-12 max-w-3xl text-pretty text-xl leading-relaxed opacity-0 transition-all duration-700 delay-200 [&.animate-in]:translate-y-0 [&.animate-in]:opacity-100 translate-y-4 md:text-2xl text-gray-200">
                    <span className="font-semibold text-white italic">Predict, process, visualize</span>
                </p>

                <div className="fade-in-element flex flex-col items-center justify-center gap-4 opacity-0 transition-all duration-700 delay-300 [&.animate-in]:translate-y-0 [&.animate-in]:opacity-100 translate-y-4 sm:flex-row">
                    <MagneticButton>
                        <Button
                            size="lg"
                            className="animate-glow-pulse group relative h-14 gap-2 overflow-hidden rounded-full px-10 text-lg font-semibold shadow-2xl shadow-[#4A0E8A]/40 transition-all hover:scale-105 hover:shadow-[#6A24C8]/50 hover:cursor-pointer"
                            onClick={() => window.open("https://calendly.com/rnguyen513/30min", "_blank", "noopener,noreferrer")}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-[#4A0E8A] via-[#8E5BFF] to-[#6A24C8]" />
                            <span className="relative z-10 text-white">Sign up for the beta | Book a demo</span>
                            <ArrowRight className="relative z-10 h-5 w-5 text-white transition-transform group-hover:translate-x-1" />
                        </Button>
                    </MagneticButton>
                </div>
            </div>
        </section>
    )
}