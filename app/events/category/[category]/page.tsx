import { Navbar } from "@/components/navbar"
import { PageHeader } from "@/components/page-header"
import { EventsGrid } from "@/components/events-grid"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { getPaginatedEvents, getEventCountByCategory, getAllEventCategories } from "@/lib/events-data"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

interface CategoryPageProps {
    params: Promise<{
        category: string
    }>
}

// Generate static params for all categories
export async function generateStaticParams() {
    const categories = getAllEventCategories()
    return categories.map((category) => ({
        category: encodeURIComponent(category),
    }))
}

// Generate metadata for SEO
export async function generateMetadata({
    params,
}: CategoryPageProps): Promise<Metadata> {
    const { category: rawCategory } = await params
    const category = decodeURIComponent(rawCategory)
    const eventCount = getEventCountByCategory(category)

    if (eventCount === 0) {
        return {
            title: "Category Not Found",
        }
    }

    const title = `${category} Events | SkillHub`
    const description = `Explore our ${eventCount} professional ${category} events. Advance your career with industry-leading training programs designed for real-world impact.`

    return {
        title,
        description,
        keywords: `${category} events, ${category} training, professional development`,
        openGraph: {
            title,
            description,
            type: "website",
            siteName: "SkillHub",
        },
    }
}

export default async function CategoryPage({ params }: CategoryPageProps) {
    const { category: rawCategory } = await params
    const category = decodeURIComponent(rawCategory)
    const { events, totalPages, totalEvents } = getPaginatedEvents(1, 12, category)

    if (events.length === 0) {
        notFound()
    }

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
                ]}
            />
            <EventsGrid
                events={events}
                totalEvents={totalEvents}
                currentPage={1}
                totalPages={totalPages}
                currentCategory={category}
                baseUrl={`/events/category/${encodeURIComponent(category)}`}
            />
            <CtaSection />
            <Footer />
        </main>
    )
}
