"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import NextImage from "next/image"
import {
    Search,
    Calendar,
    MapPin,
    Users,
    ArrowRight,
} from "lucide-react"
import { Event, getAllEventCategories } from "@/lib/events-data"
import { Pagination } from "@/components/pagination"
import { cn } from "@/lib/utils"

interface EventsGridProps {
    events?: Event[]
    totalEvents?: number
    currentPage?: number
    totalPages?: number
    currentCategory?: string
    baseUrl?: string
}

export function EventsGrid({
    events = [],
    totalEvents = 0,
    currentPage = 1,
    totalPages = 1,
    currentCategory = "All",
    baseUrl = "/events"
}: EventsGridProps) {
    const [search, setSearch] = useState("")

    // Client-side category filtering for display if needed, 
    // but primarily we use server-side for main navigation.
    // However, the Categories pills should link to category pages.

    const categories = ["All", ...getAllEventCategories()]

    const filtered = useMemo(() => {
        return events.filter((event) => {
            const matchSearch =
                !search ||
                event.title.toLowerCase().includes(search.toLowerCase()) ||
                event.location.toLowerCase().includes(search.toLowerCase())

            return matchSearch
        })
    }, [search, events])

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
                                placeholder="Search events..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="pl-10 h-11 bg-card border-border/60 focus-visible:ring-accent/30"
                            />
                        </div>

                        {/* Results count */}
                        <div className="text-sm text-muted-foreground">
                            Showing{" "}
                            <span className="font-semibold text-foreground">{filtered.length}</span>{" "}
                            of <span className="font-semibold text-foreground">{totalEvents}</span> events
                        </div>
                    </div>
                </div>

                {/* Category pills */}
                <div className="mt-8">
                    <div className="flex flex-wrap gap-2">
                        {categories.map((cat) => {
                            const href = cat === "All"
                                ? "/events"
                                : `/events/category/${encodeURIComponent(cat)}`

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
                                            layoutId="event-filter"
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

                {/* Grid */}
                <motion.div layout className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <AnimatePresence mode="popLayout">
                        {filtered.map((event) => (
                            <motion.div
                                key={event.id}
                                layout
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                                className="group h-full"
                            >
                                <Link href={`/events/${event.slug}`} className="block h-full">
                                    <div
                                        className="relative h-full overflow-hidden rounded-2xl border border-border/50 bg-card transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/[0.04] hover:border-border"
                                    >
                                        {/* Spotlight gradient on hover */}
                                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-[radial-gradient(600px_circle_at_var(--mouse-x,50%)_var(--mouse-y,0%),hsl(var(--accent)/0.04),transparent_40%)]" />

                                        {/* Image Header Area */}
                                        <div className="relative h-48 w-full overflow-hidden bg-muted">
                                            <NextImage
                                                src={event.imgSrc || "/placeholder-event.jpg"}
                                                alt={event.title}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-60" />

                                            {/* Date Badge */}
                                            <div className="absolute top-4 left-4 flex flex-col items-center justify-center rounded-xl bg-background/95 backdrop-blur-sm p-2 shadow-sm border border-border/50 min-w-[60px]">
                                                <span className="text-xl font-bold text-foreground">{event.dayDate}</span>
                                                <span className="text-[10px] uppercase font-medium text-muted-foreground">{event.monthYear.split(',')[0]}</span>
                                            </div>
                                        </div>

                                        <div className="relative p-6 lg:p-7 flex flex-col h-[calc(100%-12rem)]">
                                            <div className="flex items-center gap-2 mb-4">
                                                <Badge
                                                    variant="outline"
                                                    className="text-[10px] font-semibold"
                                                >
                                                    {event.skillLevel}
                                                </Badge>
                                            </div>

                                            <h3 className="text-lg font-semibold leading-snug text-foreground mb-3 line-clamp-2">
                                                {event.title}
                                            </h3>

                                            <div className="mt-auto space-y-3">
                                                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                                    <Calendar className="h-3.5 w-3.5" />
                                                    <span>{event.startTime} - {event.endTime}</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                                    <MapPin className="h-3.5 w-3.5" />
                                                    <span>{event.location}</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                                    <Users className="h-3.5 w-3.5" />
                                                    <span>{event.participants} Participants</span>
                                                </div>
                                            </div>

                                            <div className="mt-6 pt-5 border-t border-border/50 flex items-center justify-between">
                                                <span className="text-sm font-medium text-foreground">
                                                    View Details
                                                </span>
                                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary transition-all duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
                                                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Empty state */}
                {filtered.length === 0 && (
                    <div className="mt-16 text-center py-16">
                        <Search className="mx-auto h-10 w-10 text-muted-foreground/30" />
                        <h3 className="mt-4 text-lg font-semibold text-foreground">
                            No events found
                        </h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                            Try adjusting your search query.
                        </p>
                    </div>
                )}

                {/* Pagination */}
                <Pagination totalPages={totalPages} currentPage={currentPage} baseUrl={baseUrl} />
            </div>
        </section>
    )
}
