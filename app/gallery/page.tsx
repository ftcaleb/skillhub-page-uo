import { Navbar } from "@/components/navbar"
import { PageHeader } from "@/components/page-header"
import { Footer } from "@/components/footer"
import { GalleryGrid } from "@/components/gallery-grid"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Gallery | SkillHub International",
    description: "Explore our campus life, workshops, and graduation ceremonies through our photo gallery.",
}

export default function GalleryPage() {
    return (
        <main>
            <Navbar />
            <PageHeader
                title="Our Gallery"
                description="A visual journey through our campus life, professional workshops, and milestones."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Gallery", href: "/gallery" },
                ]}
            />

            <GalleryGrid />

            <Footer />
        </main>
    )
}
