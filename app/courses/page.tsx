import { Navbar } from "@/components/navbar"
import { PageHeader } from "@/components/page-header"
import { CoursesGrid } from "@/components/courses-grid"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { getPaginatedCourses } from "@/lib/courses-data"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Courses | SkillHub International",
  description:
    "Explore world-class programs in leadership, technology, finance, and business management at SkillHub International.",
}

export default function CoursesPage() {
  const { courses, totalPages, totalCourses } = getPaginatedCourses(1)

  return (
    <main>
      <Navbar />
      <PageHeader
        title="Our Courses"
        description="Explore our comprehensive catalogue of world-class programs, each meticulously designed with industry leaders to deliver real-world competencies and lasting career impact."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Courses", href: "/courses" },
        ]}
      />
      <CoursesGrid
        courses={courses}
        totalCourses={totalCourses}
        currentPage={1}
        totalPages={totalPages}
        baseUrl="/courses"
      />
      <CtaSection />
      <Footer />
    </main>
  )
}
