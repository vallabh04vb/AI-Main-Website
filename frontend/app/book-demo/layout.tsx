import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Book a Discovery Call | CorePlex.ai",
  description: "Schedule a 30-minute discovery call to discuss your operational challenge and explore how AI can solve it.",
}

export default function BookDemoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
