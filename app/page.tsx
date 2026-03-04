import { HeroSection } from "@/components/home/hero-section"
import { AdvantagesSection } from "@/components/home/advantages-section"
import { CategoriesSection } from "@/components/home/categories-section"
import { StepsSection } from "@/components/home/steps-section"
import { CtaSection } from "@/components/home/cta-section"
import { FaqSection } from "@/components/home/faq-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AdvantagesSection />
      <CategoriesSection />
      <StepsSection />
      <CtaSection />
      <FaqSection />
    </>
  )
}
