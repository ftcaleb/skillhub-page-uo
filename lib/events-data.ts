import trajlonEvents from "@/events-content/event"

export interface Event {
    id: number
    related_id?: number
    imgSrc: string
    youtubeUrl?: string
    dayDate: string
    monthYear: string
    location: string
    startTime: string
    endTime: string
    participants: string
    regEndDate: string
    skillLevel: string // Acts as Category
    title: string
    slug: string
    seo: {
        seoTitle: string
        seoDescription: string
        seoKeywords: string
        seoHeading: string
    }
}

export const allEvents: Event[] = trajlonEvents

/**
 * Get all unique categories (skill levels)
 */
export function getAllEventCategories(): string[] {
    const categories = new Set(allEvents.map((event) => event.skillLevel))
    return Array.from(categories).sort()
}

/**
 * Get events by category (skill_level)
 */
export function getEventsByCategory(category: string): Event[] {
    return allEvents.filter((event) => event.skillLevel === category)
}

/**
 * Get event by slug
 */
export function getEventBySlug(slug: string): Event | undefined {
    return allEvents.find((event) => event.slug === slug)
}

/**
 * Get paginated events
 */
export function getPaginatedEvents(page: number, limit: number = 12, category: string = "All"): {
    events: Event[]
    totalPages: number
    totalEvents: number
} {
    const all = category === "All" ? allEvents : getEventsByCategory(category)
    const totalEvents = all.length
    const totalPages = Math.ceil(totalEvents / limit)
    const startIndex = (page - 1) * limit
    const endIndex = startIndex + limit
    const events = all.slice(startIndex, endIndex)

    return {
        events,
        totalPages,
        totalEvents,
    }
}

/**
 * Get total event count
 */
export function getTotalEventCount(): number {
    return allEvents.length
}

/**
 * Get event count by category
 */
export function getEventCountByCategory(category: string): number {
    return getEventsByCategory(category).length
}
