import { Navbar } from "@/components/navbar"
import { PageHeader } from "@/components/page-header"
import { EventsGrid } from "@/components/events-grid"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { getPaginatedEvents, getAllEventCategories, getEventCountByCategory } from "@/lib/events-data"
import { notFound, redirect } from "next/navigation"
import type { Metadata } from "next"

interface PageProps {
    params: Promise<{
        category: string
        page: string
    }>
}

export async function generateStaticParams() {
    const categories = getAllEventCategories()
    const paths = []

    for (const category of categories) {
        const totalEvents = getEventCountByCategory(category)
        const totalPages = Math.ceil(totalEvents / 12)

        for (let i = 2; i <= totalPages; i++) {
            paths.push({
                category: encodeURIComponent(category),
                page: i.toString(),
            })
        }
    }

    return paths
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { category: rawCategory, page } = await params
    const category = decodeURIComponent(rawCategory)
    return {
        title: `${category} Events - Page ${page} | SkillHub`,
        description: `Browse page ${page} of our ${category} events and training programs.`,
    }
}

export default async function CategoryPaginationPage({ params }: PageProps) {
    const { category: rawCategory, page: pageStr } = await params
    const category = decodeURIComponent(rawCategory)
    const page = parseInt(pageStr)

    if (isNaN(page) || page < 1) notFound()
    if (page === 1) redirect(`/events/category/${rawCategory}`)

    const { events, totalPages, totalEvents } = getPaginatedEvents(page, 12, category)

    if (events.length === 0) notFound()

    return (
        <main>
            <Navbar />
            <PageHeader
                title={`${category} Events`}
                description={`Discover our comprehensive collection of ${category} training programs, designed to elevate your expertise and drive career advancement.`}
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Events", href: "/events" },
                    { label: category, href: `/events/category/${encodeURIComponent(category)}` },
                    { label: `Page ${page}`, href: `/events/category/${encodeURIComponent(category)}/page/${page}` },
                ]}
            />
            <EventsGrid
                events={events}
                totalEvents={totalEvents}
                currentPage={page}
                totalPages={totalPages}
                currentCategory={category}
                baseUrl={`/events/category/${encodeURIComponent(category)}`}
            />
            <CtaSection />
            <Footer />
        </main>
    )
}
