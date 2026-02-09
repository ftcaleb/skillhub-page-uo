import { Navbar } from "@/components/navbar"
import { PageHeader } from "@/components/page-header"
import { EventsGrid } from "@/components/events-grid"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { getPaginatedEvents, getTotalEventCount } from "@/lib/events-data"
import { notFound, redirect } from "next/navigation"
import type { Metadata } from "next"

interface PageProps {
    params: Promise<{
        page: string
    }>
}

export async function generateStaticParams() {
    const totalEvents = getTotalEventCount()
    const totalPages = Math.ceil(totalEvents / 12)
    const paths = []

    for (let i = 2; i <= totalPages; i++) {
        paths.push({ page: i.toString() })
    }

    return paths
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { page } = await params
    return {
        title: `Events - Page ${page} | SkillHub`,
        description: `Browse page ${page} of our professional events and training programs.`,
    }
}

export default async function EventsPaginationPage({ params }: PageProps) {
    const { page: pageStr } = await params
    const page = parseInt(pageStr)

    // If page is 1 or invalid, redirect to main events page
    if (isNaN(page) || page < 1) notFound()
    if (page === 1) redirect("/events")

    const { events, totalPages, totalEvents } = getPaginatedEvents(page)

    if (events.length === 0) notFound()

    return (
        <main>
            <Navbar />
            <PageHeader
                title="Events & Training Programs"
                description="Expand your expertise. Connect with professionals. Build real-world skills through our world-class operational leadership, logistics & AI training events."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Events", href: "/events" },
                    { label: `Page ${page}`, href: `/events/page/${page}` },
                ]}
            />
            <EventsGrid
                events={events}
                totalEvents={totalEvents}
                currentPage={page}
                totalPages={totalPages}
                baseUrl="/events"
            />
            <CtaSection />
            <Footer />
        </main>
    )
}
