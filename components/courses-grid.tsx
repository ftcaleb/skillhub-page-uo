"use client"

import { useState, useMemo, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useRouter, useSearchParams, usePathname } from "next/navigation"
import {
  Search,
  Clock,
  Users,
  ArrowRight,
  Sparkles,
  Cpu,
  Globe,
  BookOpen,
  Shield,
  Layers,
  GraduationCap
} from "lucide-react"
import { getAllCategories, Course } from "@/lib/courses-data"
import { Pagination } from "@/components/pagination"
import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"

// Map categories to icons
const getCategoryIcon = (category: string) => {
  const lowerCat = category.toLowerCase()
  if (lowerCat.includes("finance") || lowerCat.includes("financial")) return Globe
  if (lowerCat.includes("technology") || lowerCat.includes("data")) return Cpu
  if (lowerCat.includes("executive") || lowerCat.includes("leadership")) return Sparkles
  if (lowerCat.includes("inventory") || lowerCat.includes("warehouse")) return Layers
  if (lowerCat.includes("risk") || lowerCat.includes("compliance")) return Shield
  if (lowerCat.includes("port") || lowerCat.includes("shipping")) return BookOpen
  return GraduationCap
}

interface CoursesGridProps {
  courses: Course[]
  totalCourses: number
  currentPage: number
  totalPages: number
  currentCategory?: string
  baseUrl: string
}

export function CoursesGrid({
  courses,
  totalCourses,
  currentPage,
  totalPages,
  currentCategory = "All",
  baseUrl
}: CoursesGridProps) {
  const router = useRouter()
  const pathname = usePathname()
  const [search, setSearch] = useState("")

  // Filter functionality needs to be handled carefully
  // If we search, we are filtering the *current page* of results visible?
  // OR do we want client-side search across ALL courses?
  // For SEO pagination, typically search usually resets pagination or is a separate mode.
  // Given the requirement for "12 courses per page", client side filtering on just 12 items is bad.
  // We will filter the *display* of the 12 items, but for real search we should probably use a query param
  // OR just keep it simple that search filters the current view.
  // The prompt says "Filters should update the displayed courses instantly".

  // Actually, if we search, we probably want to filter the *current slice* or redirect?
  // Let's keep it simple: We display the passed `courses`. 
  // If the user Types in search, we filter these 12 items. 
  // (Ideally search would be server-side too but let's stick to the requested scope)

  const categories = ["All", ...getAllCategories()]

  // Get unique durations for filter
  const durations = useMemo(() => {
    // This derived data is now limited to the current page if we only have `courses`
    // To get ALL durations we would need all courses.
    // For now, let's just hardcode common ones or derive from current page
    return ["Any Duration", "5 Days", "10 Days", "2 Weeks", "4 Weeks"]
  }, [])

  const [duration, setDuration] = useState("Any Duration")

  const filtered = useMemo(() => {
    return courses.filter((course) => {
      // Filter by Search
      const matchSearch =
        !search ||
        course.title.toLowerCase().includes(search.toLowerCase()) ||
        course.overview.toLowerCase().includes(search.toLowerCase())

      // Filter by Duration
      const matchDuration =
        duration === "Any Duration" || course.duration === duration

      return matchSearch && matchDuration
    })
  }, [search, duration, courses])

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Search and filters */}
        <div>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            {/* Search */}
            <div className="relative max-w-md flex-1">
              <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search visible courses..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10 h-11 bg-card border-border/60 focus-visible:ring-accent/30"
              />
            </div>

            {/* Dropdown filters */}
            <div className="flex flex-wrap items-center gap-3">
              <select
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="h-10 rounded-lg border border-border/60 bg-card px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/30"
              >
                {durations.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Category pills */}
        <div className="mt-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              // Construct URL: 
              // If All -> /courses
              // If Category -> /courses/category/[cat]
              const href = cat === "All"
                ? "/courses"
                : `/courses/category/${encodeURIComponent(cat)}`

              const isActive = currentCategory === cat

              return (
                <Link
                  key={cat}
                  href={href}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300",
                    isActive
                      ? "text-accent-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="course-filter"
                      className="absolute inset-0 rounded-full bg-accent"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </Link>
              )
            })}
          </div>
        </div>

        {/* Results count */}
        <div className="mt-8 text-sm text-muted-foreground">
          Showing{" "}
          <span className="font-semibold text-foreground">{filtered.length}</span>{" "}
          of{" "}
          <span className="font-semibold text-foreground">{totalCourses}</span>{" "}
          courses
        </div>

        {/* Grid */}
        <motion.div layout className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((course) => {
              const Icon = getCategoryIcon(course.type)
              return (
                <motion.div
                  key={course.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  className="group h-full"
                >
                  <div
                    onClick={() => router.push(`/courses/${course.slg}`)}
                    className={`relative h-full overflow-hidden rounded-2xl border transition-all duration-500 hover:-translate-y-1 cursor-pointer ${course.popular
                      ? "border-accent/30 bg-card shadow-lg shadow-accent/[0.06]"
                      : "border-border/50 bg-card hover:shadow-xl hover:shadow-primary/[0.04] hover:border-border"
                      }`}
                  >
                    {/* Spotlight gradient on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-[radial-gradient(600px_circle_at_var(--mouse-x,50%)_var(--mouse-y,0%),hsl(var(--accent)/0.04),transparent_40%)]" />

                    {course.popular && (
                      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
                    )}

                    <div className="relative p-6 lg:p-7 flex flex-col h-full">
                      <div className="flex items-start justify-between">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/5 ring-1 ring-primary/10 transition-all duration-300 group-hover:bg-accent/10 group-hover:ring-accent/20">
                          <Icon className="h-5 w-5 text-primary transition-colors duration-300 group-hover:text-accent" />
                        </div>
                        <div className="flex items-center gap-2">
                          {course.popular && (
                            <Badge className="bg-accent/10 text-accent border-accent/20 text-[10px]">
                              Popular
                            </Badge>
                          )}
                          <Badge
                            variant="outline"
                            className="text-[10px] font-semibold"
                          >
                            Certificate
                          </Badge>
                        </div>
                      </div>

                      <div className="mt-5">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                          {course.type}
                        </p>
                        <h3 className="mt-1.5 text-lg font-semibold leading-snug text-foreground line-clamp-2">
                          {course.title}
                        </h3>
                      </div>

                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-3 mb-4">
                        {course.shortDesc || course.overview}
                      </p>

                      <div className="mt-auto">
                        <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1.5">
                            <Clock className="h-3.5 w-3.5" />
                            {course.duration}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Users className="h-3.5 w-3.5" />
                            Enrolling
                          </span>
                        </div>

                        <div className="mt-6 pt-5 border-t border-border/50 flex items-center justify-between gap-4">
                          <Button
                            size="sm"
                            className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-xl px-4"
                            asChild
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Link href={`/courses/${course.slg}/enroll`}>
                              Enroll Now
                            </Link>
                          </Button>
                          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary transition-all duration-300 group-hover:bg-secondary/80">
                            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="mt-16 text-center py-16">
            <Search className="mx-auto h-10 w-10 text-muted-foreground/30" />
            <h3 className="mt-4 text-lg font-semibold text-foreground">
              No courses found
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Try adjusting your filters.
            </p>
          </div>
        )}

        {/* Pagination */}
        <Pagination totalPages={totalPages} currentPage={currentPage} baseUrl={baseUrl} />
      </div>
    </section>
  )
}
