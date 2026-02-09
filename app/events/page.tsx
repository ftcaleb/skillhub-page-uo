import { Navbar } from "@/components/navbar"
import { PageHeader } from "@/components/page-header"
import { EventsGrid } from "@/components/events-grid"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Events | SkillHub",
    description:
        "Explore our upcoming events, workshops, and training programs designed to help professionals unlock business operations excellence.",
}

export default function EventsPage() {
    return (
        <main>
            <Navbar />
            <PageHeader
                title="Events & Training Programs"
                description="Expand your expertise. Connect with professionals. Build real-world skills through our world-class operational leadership, logistics & AI training events."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Events", href: "/events" }
                ]}
            />
            <EventsGrid />
            <CtaSection />
            <Footer />
        </main>
    )
}
