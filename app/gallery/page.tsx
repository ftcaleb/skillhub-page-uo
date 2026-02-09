import { Navbar } from "@/components/navbar"
import { PageHeader } from "@/components/page-header"
import { GalleryGrid } from "@/components/gallery/gallery-grid"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Gallery | SkillHub International",
    description:
        "Explore our gallery showcasing memorable moments from events, graduations, workshops, and milestones at SkillHub International.",
}

export default function GalleryPage() {
    return (
        <main>
            <Navbar />
            <PageHeader
                title="Our Gallery"
                description="Explore memorable moments from our events, graduations, workshops, and partnerships. Witness the impact we create together across the business excellence community."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Gallery", href: "/gallery" }
                ]}
            />
            <GalleryGrid />
            <CtaSection />
            <Footer />
        </main>
    )
}
