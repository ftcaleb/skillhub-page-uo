import { Navbar } from "@/components/navbar"
import { PageHeader } from "@/components/page-header"
import { CoursesGrid } from "@/components/courses-grid"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { getPaginatedCourses, getAllCategories, getCourseCountByCategory } from "@/lib/courses-data"
import { notFound, redirect } from "next/navigation"
import type { Metadata } from "next"

interface PageProps {
    params: Promise<{
        category: string
        page: string
    }>
}

export async function generateStaticParams() {
    const categories = getAllCategories()
    const paths = []

    for (const category of categories) {
        const totalCourses = getCourseCountByCategory(category)
        const totalPages = Math.ceil(totalCourses / 12)

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
        title: `${category} Courses - Page ${page} | Ascend Institute`,
        description: `Browse page ${page} of our ${category} courses and training programs.`,
    }
}

export default async function CategoryPaginationPage({ params }: PageProps) {
    const { category: rawCategory, page: pageStr } = await params
    const category = decodeURIComponent(rawCategory)
    const page = parseInt(pageStr)

    if (isNaN(page) || page < 1) notFound()
    if (page === 1) redirect(`/courses/category/${rawCategory}`)

    const { courses, totalPages, totalCourses } = getPaginatedCourses(page, 12, category)

    if (courses.length === 0) notFound()

    return (
        <main>
            <Navbar />
            <PageHeader
                title={`${category} Courses`}
                description={`Discover our comprehensive collection of ${category} training programs, designed to elevate your expertise and drive career advancement.`}
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Courses", href: "/courses" },
                    { label: category, href: `/courses/category/${encodeURIComponent(category)}` },
                    { label: `Page ${page}`, href: `/courses/category/${encodeURIComponent(category)}/page/${page}` },
                ]}
            />
            <CoursesGrid
                courses={courses}
                totalCourses={totalCourses}
                currentPage={page}
                totalPages={totalPages}
                currentCategory={category}
                baseUrl={`/courses/category/${encodeURIComponent(category)}`}
            />
            <CtaSection />
            <Footer />
        </main>
    )
}
