import { Navbar } from "@/components/navbar"
import { PageHeader } from "@/components/page-header"
import { Footer } from "@/components/footer"
import { GalleryGrid } from "@/components/gallery/gallery-grid"
import { CtaSection } from "@/components/cta-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Gallery | SkillHub International",
    description: "Explore our campus life, workshops, and milestones through our premium editorial gallery.",
}

export default function GalleryPage() {
    return (
        <main>
            <Navbar />
            <PageHeader
                title="Visual Narrative"
                description="Explore the moments that define our institutional excellence, from high-impact summits to state-of-the-art learning environments."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Gallery", href: "/gallery" },
                ]}
            />

            <GalleryGrid />

            <CtaSection />

            <Footer />
        </main>
    )
}
