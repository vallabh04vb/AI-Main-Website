import { Hero } from "@/components/sections/Hero"
import { Services } from "@/components/sections/Services"
import { CaseStudies } from "@/components/sections/CaseStudies"
import { CTA } from "@/components/sections/CTA"

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <CaseStudies />
      <CTA />
    </>
  )
}
