import { AllCourseLists } from "@/short-courses/AllCourseLists"
import { NewCourse } from "@/short-courses/NewCourse"

// Course type definition
export interface Course {
    id: number
    type: string
    title: string
    slg: string
    duration: string
    popular?: boolean
    seo?: {
        seoTitle?: string
        seoDescription?: string
        seoKeywords?: string
        seoHeading?: string
    }
    brochure?: string
    shortDesc?: string
    overview: string
    audience: string[]
    objectives: {
        title: string
        data: string[]
    }
    content: {
        module: number
        lessons: string[]
    }[]
}

// Merge all courses from both data sources
export const allCourses: Course[] = [...AllCourseLists, ...NewCourse]

/**
 * Get a single course by its slug
 */
export function getCourseBySlug(slug: string): Course | undefined {
    return allCourses.find((course) => course.slg === slug)
}

/**
 * Get all courses in a specific category
 */
export function getCoursesByCategory(category: string): Course[] {
    return allCourses.filter((course) => course.type === category)
}

/**
 * Get all unique categories
 */
export function getAllCategories(): string[] {
    const categories = new Set(allCourses.map((course) => course.type))
    return Array.from(categories).sort()
}

/**
 * Get popular/featured courses
 */
export function getPopularCourses(): Course[] {
    return allCourses.filter((course) => course.popular === true)
}

/**
 * Get total course count
 */
export function getTotalCourseCount(): number {
    return allCourses.length
}

/**
 * Get course count by category
 */
export function getCourseCountByCategory(category: string): number {
    return getCoursesByCategory(category).length
}

/**
 * Search courses by title or description
 */
export function searchCourses(query: string): Course[] {
    const lowerQuery = query.toLowerCase()
    return allCourses.filter(
        (course) =>
            course.title.toLowerCase().includes(lowerQuery) ||
            course.overview.toLowerCase().includes(lowerQuery) ||
            course.shortDesc?.toLowerCase().includes(lowerQuery)
    )
}

/**
 * Get paginated courses
 */
export function getPaginatedCourses(page: number, limit: number = 12, category: string = "All"): {
    courses: Course[]
    totalPages: number
    totalCourses: number
} {
    const all = category === "All" ? allCourses : getCoursesByCategory(category)
    const totalCourses = all.length
    const totalPages = Math.ceil(totalCourses / limit)
    const startIndex = (page - 1) * limit
    const endIndex = startIndex + limit
    const courses = all.slice(startIndex, endIndex)

    return {
        courses,
        totalPages,
        totalCourses,
    }
}
