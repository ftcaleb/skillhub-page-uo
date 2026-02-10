import { Navbar } from "@/components/navbar"
import { PageHeader } from "@/components/page-header"
import { CoursesGrid } from "@/components/courses-grid"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { getPaginatedCourses, getTotalCourseCount } from "@/lib/courses-data"
import { notFound, redirect } from "next/navigation"
import type { Metadata } from "next"

interface PageProps {
    params: Promise<{
        page: string
    }>
}

export async function generateStaticParams() {
    const totalCourses = getTotalCourseCount()
    const totalPages = Math.ceil(totalCourses / 12)
    const paths = []

    for (let i = 2; i <= totalPages; i++) {
        paths.push({ page: i.toString() })
    }

    return paths
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { page } = await params
    return {
        title: `Courses - Page ${page} | SkillHub International`,
        description: `Browse page ${page} of our professional courses and training programs.`,
    }
}

export default async function CoursesPaginationPage({ params }: PageProps) {
    const { page: pageStr } = await params
    const page = parseInt(pageStr)

    // If page is 1 or invalid, redirect to main courses page
    if (isNaN(page) || page < 1) notFound()
    if (page === 1) redirect("/courses")

    const { courses, totalPages, totalCourses } = getPaginatedCourses(page)

    if (courses.length === 0) notFound()

    return (
        <main>
            <Navbar />
            <PageHeader
                title="Our Courses"
                description="Explore our comprehensive catalogue of world-class programs, each meticulously designed with industry leaders to deliver real-world competencies and lasting career impact."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Courses", href: "/courses" },
                    { label: `Page ${page}`, href: `/courses/page/${page}` },
                ]}
            />
            <CoursesGrid
                courses={courses}
                totalCourses={totalCourses}
                currentPage={page}
                totalPages={totalPages}
                baseUrl="/courses"
            />
            <CtaSection />
            <Footer />
        </main>
    )
}
