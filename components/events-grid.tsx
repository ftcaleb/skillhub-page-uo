"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "motion/react"
import { MotionSection, MotionDiv, fadeInUp } from "@/components/motion"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
    Search,
    Calendar,
    MapPin,
    Users,
    ArrowRight,
    Briefcase,
    Brain,
    TrendingUp,
} from "lucide-react"

const allEvents = [
    {
        id: "transport-fleet-management",
        category: "Logistics",
        title: "Transport & Fleet Management",
        description:
            "A high-impact training designed to help professionals optimise transport resources, manage fleets effectively, and ensure compliance for strategic gains.",
        date: "17 – 21 Nov 2026",
        location: "Sandton, South Africa",
        duration: "5 Days",
        icon: Briefcase,
        featured: true,
    },
    {
        id: "supply-chain-analytics",
        category: "AI & Analytics",
        title: "AI-Driven Supply Chain Analytics",
        description:
            "Master the art of using artificial intelligence to forecast demand, optimize inventory, and streamline supply chain operations for maximum efficiency.",
        date: "05 – 07 Dec 2026",
        location: "Online / Virtual",
        duration: "3 Days",
        icon: Brain,
        featured: true,
    },
    {
        id: "operational-leadership",
        category: "Leadership",
        title: "Operational Leadership Summit",
        description:
            "Join top industry leaders for a transformative summit focused on strategic decision-making, team empowerment, and organizational excellence.",
        date: "15 – 18 Jan 2027",
        location: "Cape Town, South Africa",
        duration: "4 Days",
        icon: TrendingUp,
        featured: false,
    },
]

const categories = ["All", "Logistics", "AI & Analytics", "Leadership"]

export function EventsGrid() {
    const [search, setSearch] = useState("")
    const [category, setCategory] = useState("All")

    const filtered = useMemo(() => {
        return allEvents.filter((event) => {
            const matchSearch =
                !search ||
                event.title.toLowerCase().includes(search.toLowerCase()) ||
                event.description.toLowerCase().includes(search.toLowerCase()) ||
                event.location.toLowerCase().includes(search.toLowerCase())
            const matchCategory = category === "All" || event.category === category
            return matchSearch && matchCategory
        })
    }, [search, category])

    return (
        <MotionSection className="py-16 lg:py-24 bg-background">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Search and filters */}
                <MotionDiv variants={fadeInUp}>
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
                            {filtered.length === 1 ? "event" : "events"}
                        </div>
                    </div>
                </MotionDiv>

                {/* Category pills */}
                <MotionDiv variants={fadeInUp} className="mt-8">
                    <div className="flex flex-wrap gap-2">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                type="button"
                                onClick={() => setCategory(cat)}
                                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${category === cat
                                        ? "text-accent-foreground"
                                        : "text-muted-foreground hover:text-foreground"
                                    }`}
                            >
                                {category === cat && (
                                    <motion.span
                                        layoutId="event-filter"
                                        className="absolute inset-0 rounded-full bg-accent"
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                                <span className="relative z-10">{cat}</span>
                            </button>
                        ))}
                    </div>
                </MotionDiv>

                {/* Grid */}
                <motion.div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" layout>
                    <AnimatePresence mode="popLayout">
                        {filtered.map((event) => (
                            <motion.div
                                key={event.id}
                                layout
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                                className="group"
                            >
                                <div
                                    className={`relative h-full overflow-hidden rounded-2xl border transition-all duration-500 hover:-translate-y-1 ${event.featured
                                            ? "border-accent/30 bg-card shadow-lg shadow-accent/[0.06]"
                                            : "border-border/50 bg-card hover:shadow-xl hover:shadow-primary/[0.04] hover:border-border"
                                        }`}
                                >
                                    {/* Spotlight gradient on hover */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-[radial-gradient(600px_circle_at_var(--mouse-x,50%)_var(--mouse-y,0%),hsl(var(--accent)/0.04),transparent_40%)]" />

                                    {event.featured && (
                                        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
                                    )}

                                    <div className="relative p-6 lg:p-7">
                                        <div className="flex items-start justify-between">
                                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/5 ring-1 ring-primary/10 transition-all duration-300 group-hover:bg-accent/10 group-hover:ring-accent/20">
                                                <event.icon className="h-5 w-5 text-primary transition-colors duration-300 group-hover:text-accent" />
                                            </div>
                                            <div className="flex items-center gap-2">
                                                {event.featured && (
                                                    <Badge className="bg-accent/10 text-accent border-accent/20 text-[10px]">
                                                        Featured
                                                    </Badge>
                                                )}
                                                <Badge
                                                    variant="outline"
                                                    className="text-[10px] font-semibold"
                                                >
                                                    {event.category}
                                                </Badge>
                                            </div>
                                        </div>

                                        <div className="mt-5">
                                            <h3 className="text-lg font-semibold leading-snug text-foreground">
                                                {event.title}
                                            </h3>
                                        </div>

                                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                                            {event.description}
                                        </p>

                                        <div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                                            <span className="flex items-center gap-1.5">
                                                <Calendar className="h-3.5 w-3.5" />
                                                {event.date}
                                            </span>
                                            <span className="flex items-center gap-1.5">
                                                <MapPin className="h-3.5 w-3.5" />
                                                {event.location}
                                            </span>
                                            <span className="flex items-center gap-1.5">
                                                <Users className="h-3.5 w-3.5" />
                                                {event.duration}
                                            </span>
                                        </div>

                                        <div className="mt-6 pt-5 border-t border-border/50 flex items-center justify-between">
                                            <span className="text-sm font-medium text-foreground">
                                                Learn More
                                            </span>
                                            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary transition-all duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
                                                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Empty state */}
                {filtered.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-16 text-center py-16"
                    >
                        <Search className="mx-auto h-10 w-10 text-muted-foreground/30" />
                        <h3 className="mt-4 text-lg font-semibold text-foreground">
                            No events found
                        </h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                            Try adjusting your filters or search query.
                        </p>
                    </motion.div>
                )}
            </div>
        </MotionSection>
    )
}
