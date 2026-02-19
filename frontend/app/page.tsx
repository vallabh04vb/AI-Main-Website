import { Hero } from "@/components/sections/Hero"
import { Services } from "@/components/sections/Services"
import { ParallaxDivider } from "@/components/sections/ParallaxDivider"
import { CaseStudies } from "@/components/sections/CaseStudies"
import { CTA } from "@/components/sections/CTA"

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <ParallaxDivider
        src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1920&h=1080&fit=crop&q=80"
        alt="Abstract AI neural patterns"
        overlayText="Built for Scale."
        overlaySubtext="Simplifying a complex business core with CorePlex."
      />
      <CaseStudies />
      <CTA />
    </>
  )
}
