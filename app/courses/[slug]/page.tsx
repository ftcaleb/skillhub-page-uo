// Core layout components
import { Navbar } from "@/components/navbar"
import { PageHeader } from "@/components/page-header"
import { CourseDetail } from "@/components/course-detail"
import { Footer } from "@/components/footer"

// Course data utilities
import { getCourseBySlug, allCourses } from "@/lib/courses-data"

// Next.js utilities
import { notFound } from "next/navigation"
import type { Metadata } from "next"

// Define the expected structure of the dynamic route params
interface CoursePageProps {
    params: Promise<{
        slug: string
    }>
}

// ------------------------------------------------------------
// Generate static params for all courses (Static Site Generation)
// This allows Next.js to pre-build each course page at build time
// ------------------------------------------------------------
export async function generateStaticParams() {
    return allCourses.map((course) => ({
        slug: course.slg, // Ensure this matches your course slug field
    }))
}

// ------------------------------------------------------------
// Generate dynamic SEO metadata for each course page
// This improves search engine visibility and social sharing
// ------------------------------------------------------------
export async function generateMetadata({
    params,
}: CoursePageProps): Promise<Metadata> {

    // Extract slug from dynamic route params
    const { slug } = await params

    // Retrieve course using slug
    const course = getCourseBySlug(slug)

    // If no course found, return fallback metadata
    if (!course) {
        return {
            title: "Course Not Found",
        }
    }

    // Extract SEO configuration if available
    const seo = course.seo || {}

    // SEO title fallback hierarchy
    const title = seo.seoTitle || `${course.title} | SkillHub International`

    // SEO description fallback hierarchy
    const description =
        seo.seoDescription ||
        course.shortDesc ||
        course.overview.substring(0, 160)

    const keywords = seo.seoKeywords

    // Return full metadata object for SEO + social platforms
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

// ------------------------------------------------------------
// Main Course Page Component
// Dynamically renders a single course page based on slug
// ------------------------------------------------------------
export default async function CoursePage({ params }: CoursePageProps) {

    // Extract slug from params
    const { slug } = await params

    // Fetch the course data
    const course = getCourseBySlug(slug)

    // If course does not exist, trigger Next.js 404 page
    if (!course) {
        notFound()
    }

    // ------------------------------------------------------------
    // Generate Structured Data (JSON-LD) for enhanced SEO
    // Helps Google understand course details for rich results
    // ------------------------------------------------------------
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
            {/* Top Navigation */}
            <Navbar />

            {/* Page Header Section with Breadcrumb Navigation */}
            <PageHeader
                title={course.seo?.seoHeading || course.title}
                description={
                    course.shortDesc ||
                    course.overview.substring(0, 200) + "..."
                }
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Courses", href: "/courses" },
                    {
                        label: course.type,
                        href: `/courses/category/${encodeURIComponent(course.type)}`
                    },
                    {
                        label: course.title,
                        href: `/courses/${course.slg}`
                    },
                ]}
            />

            {/* Main Course Content Section */}
            <CourseDetail course={course} />

            {/* Footer Section */}
            <Footer />

            {/* Inject Structured Data for SEO (JSON-LD format) */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(structuredData),
                }}
            />
        </main>
    )
}