import { Navbar } from "@/components/navbar"
import { PageHeader } from "@/components/page-header"
import { CourseDetail } from "@/components/course-detail"
import { Footer } from "@/components/footer"
import { getCourseBySlug, allCourses } from "@/lib/courses-data"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

interface CoursePageProps {
    params: Promise<{
        slug: string
    }>
}

// Generate static params for all courses
export async function generateStaticParams() {
    return allCourses.map((course) => ({
        slug: course.slg,
    }))
}

// Generate metadata for SEO
export async function generateMetadata({
    params,
}: CoursePageProps): Promise<Metadata> {
    const { slug } = await params
    const course = getCourseBySlug(slug)

    if (!course) {
        return {
            title: "Course Not Found",
        }
    }

    const seo = course.seo || {}
    const title = seo.seoTitle || `${course.title} | SkillHub International`
    const description =
        seo.seoDescription || course.shortDesc || course.overview.substring(0, 160)
    const keywords = seo.seoKeywords

    return {
        title,
        description,
        keywords,
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

export default async function CoursePage({ params }: CoursePageProps) {
    const { slug } = await params
    const course = getCourseBySlug(slug)

    if (!course) {
        notFound()
    }

    // Generate structured data for SEO
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Course",
        name: course.title,
        description: course.overview,
        provider: {
            "@type": "Organization",
            name: "SkillHub International",
        },
        courseCode: course.id.toString(),
        educationalLevel: "Professional Development",
        timeRequired: course.duration,
        coursePrerequisites: "None specified",
        teaches: course.objectives.data,
        audience: {
            "@type": "EducationalAudience",
            educationalRole: course.audience,
        },
    }

    return (
        <main>
            <Navbar />
            <PageHeader
                title={course.seo?.seoHeading || course.title}
                description={course.shortDesc || course.overview.substring(0, 200) + "..."}
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Courses", href: "/courses" },
                    { label: course.type, href: `/courses/category/${encodeURIComponent(course.type)}` },
                    { label: course.title, href: `/courses/${course.slg}` },
                ]}
            />
            <CourseDetail course={course} />
            <Footer />

            {/* Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
        </main>
    )
}
