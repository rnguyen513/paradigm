import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Gideon_Roman } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { _gideonRoman, _libreBaskerville, _libreBaskervilleBold } from "@/components/fonts"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Paradigm AI",
  description: "Predict the future of your research",
  themeColor: '#000000',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={_libreBaskerville.className}>
      <body className={`antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
