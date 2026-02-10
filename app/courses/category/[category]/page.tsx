import { Navbar } from "@/components/navbar"
import { PageHeader } from "@/components/page-header"
import { CoursesGrid } from "@/components/courses-grid"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { getCoursesByCategory, getAllCategories, getCourseCountByCategory, getPaginatedCourses } from "@/lib/courses-data"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

interface CategoryPageProps {
    params: Promise<{
        category: string
    }>
}

// Generate static params for all categories
export async function generateStaticParams() {
    const categories = getAllCategories()
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
    const courseCount = getCourseCountByCategory(category)

    if (courseCount === 0) {
        return {
            title: "Category Not Found",
        }
    }

    const title = `${category} Courses | Ascend Institute`
    const description = `Explore our ${courseCount} professional ${category} courses. Advance your career with industry-leading training programs designed for real-world impact.`

    return {
        title,
        description,
        keywords: `${category} courses, ${category} training, professional development, ${category} certification`,
        openGraph: {
            title,
            description,
            type: "website",
            siteName: "SkillHub International",
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
        },
    }
}

export default async function CategoryPage({ params }: CategoryPageProps) {
    const { category: rawCategory } = await params
    const category = decodeURIComponent(rawCategory)
    const { courses, totalPages, totalCourses } = getPaginatedCourses(1, 12, category)

    if (courses.length === 0) {
        notFound()
    }

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
                ]}
            />
            <CoursesGrid
                courses={courses}
                totalCourses={totalCourses}
                currentPage={1}
                totalPages={totalPages}
                currentCategory={category}
                baseUrl={`/courses/category/${encodeURIComponent(category)}`}
            />
            <CtaSection />
            <Footer />
        </main>
    )
}
