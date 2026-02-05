import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Impact } from "@/components/impact"
import { Programs } from "@/components/programs"
import { Events } from "@/components/events"
import { CtaSection } from "@/components/cta-section"
import { Partners } from "@/components/partners"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Impact />
      <Programs />
      <Events />
      <CtaSection />
      <Partners />
      <Footer />
    </main>
  )
}
