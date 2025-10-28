"use client"

export function FloatingElements() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div
        className="animate-float absolute left-[10%] top-[20%] h-32 w-32 rounded-full bg-gradient-to-br from-pink-200/20 to-rose-300/20 blur-2xl"
        style={{ animationDelay: "0s" }}
      />
      <div
        className="animate-float absolute right-[15%] top-[40%] h-40 w-40 rounded-full bg-gradient-to-br from-rose-200/20 to-pink-300/20 blur-2xl"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="animate-float absolute left-[20%] bottom-[30%] h-36 w-36 rounded-full bg-gradient-to-br from-pink-300/20 to-rose-200/20 blur-2xl"
        style={{ animationDelay: "4s" }}
      />
      <div
        className="animate-float absolute right-[25%] bottom-[20%] h-28 w-28 rounded-full bg-gradient-to-br from-rose-300/20 to-pink-200/20 blur-2xl"
        style={{ animationDelay: "1s" }}
      />
    </div>
  )
}
