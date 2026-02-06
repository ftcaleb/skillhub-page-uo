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
        title="About Ascend Institute"
        description="Four decades of academic excellence, shaping leaders who drive meaningful change across the globe."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
        ]}
      />
      <AboutContent />
      <Footer />
    </main>
  )
}
