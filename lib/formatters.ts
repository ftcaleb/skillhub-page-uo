/**
 * Presentation-layer formatters.
 *
 * ⚠️ These functions are for DISPLAY ONLY.
 * Never use them to transform URL params, route slugs, or data-layer values.
 */

/**
 * Converts a URL-style category slug into a human-readable label.
 *
 * Examples:
 *   "project-management"   → "Project Management"
 *   "it-support-services"  → "It Support Services"
 *   "Finance"              → "Finance"  (unchanged – no hyphens)
 *
 * @param category - Raw category string (slug or plain text).
 * @returns A display-friendly string with hyphens replaced by spaces.
 */
export function formatCategoryForDisplay(category: string | undefined | null): string {
    if (!category || typeof category !== "string") return ""
    return category.replace(/-/g, " ").trim()
}
