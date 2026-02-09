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
        description="Welcome to Trajlon Group — Your Stage for Business Excellence, your dedicated partner in unlocking profound growth and expertise across the entire business operations spectrum. We provide a comprehensive suite of short courses and learnerships, meticulously crafted to help you reach your full potential."
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
