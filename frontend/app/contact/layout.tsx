import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact | CorePlex.ai — Share Your Challenge",
  description: "Tell us about your operational challenge. We'll assess how AI can solve it and respond within 48 hours.",
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
