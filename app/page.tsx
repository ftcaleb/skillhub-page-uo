import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Impact } from "@/components/impact"
import { Testimonials } from "@/components/testimonials"
import { Events } from "@/components/events"
import { CtaSection } from "@/components/cta-section"
import { Partners } from "@/components/partners"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Impact />
      <Testimonials />
      <Events />
      <Partners />
      <CtaSection />
      <Footer />
    </main>
  )
}
