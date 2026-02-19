import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "CorePlex.ai | Elite Applied AI Engineering Studio",
  description: "We engineer high-scale AI systems that subtract manual toil from your core operations. Vision pipelines, intelligent data engines, autonomous voice, and enterprise automation — prototype-first, production-ready.",
  keywords: ["AI engineering studio", "computer vision pipelines", "industrial automation", "voice AI", "intelligent data extraction", "enterprise AI", "AWS EKS", "production AI systems"],
  openGraph: {
    title: "CorePlex.ai | Elite Applied AI Engineering Studio",
    description: "Engineering intelligence for operational excellence. We analyze, prototype, and deploy high-scale AI systems that subtract manual toil from your core logic.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CorePlex.ai | Elite Applied AI Engineering Studio",
    description: "Engineering intelligence for operational excellence. Vision pipelines, intelligent data engines, and autonomous voice systems.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
