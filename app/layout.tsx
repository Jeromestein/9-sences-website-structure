import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import SmoothScroll from "@/components/providers/SmoothScroll"
import Scene3D from "@/components/Scene3D"
import { ScrollProgressProvider } from "@/components/ScrollProgressContext"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "9Sences | Beyond Senses, Within Presence",
  description:
    "A universe shaped by sensory intelligence and lived experience. Pure, enduring wellness experiences rooted in presence, not trends.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased relative">
        <ScrollProgressProvider>
          <div className="fixed inset-0 -z-10 w-full h-full pointer-events-none">
            <Scene3D />
            {/* eventSource handling might be needed if we want interaction, but for background 'pointer-events-none' is good for the wrapper so it doesn't block clicks.
                 If Scene3D needs mouse for parallax, it listens to window by default or we can pass a ref. 
                 However, if the wrapper is pointer-events-none, the Canvas might not receive events if it relies on its own DOM element. 
                 R3F usually attaches to the canvas. 
                 Let's try just the fixed positioning first. The parallax depends on `state.pointer`.
                 If the canvas is covered by content, we might need to use `eventSource={document.body}` (in client comp)
             */}
          </div>
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </ScrollProgressProvider>
        <Analytics />
      </body>
    </html>
  )
}
