import { Navbar } from "@/components/navbar"
import { PageHeader } from "@/components/page-header"
import { AboutContent } from "@/components/about-content"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About | Ascend Institute",
  description:
    "Learn about Ascend Institute's four decades of academic excellence, our mission, values, and the impact we create worldwide.",
}

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <PageHeader
        title="Unleash Your Business Potential with SkillHub"
        description="SkillHub International is a dedicated partner in driving business excellence, enabling growth across the full spectrum of business operations.
                     We deliver expertly designed short courses and learnerships to help individuals and organisations reach their full potential.
"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" }
        ]}
      />
      <AboutContent />
      <Footer />
    </main>
  )
}
