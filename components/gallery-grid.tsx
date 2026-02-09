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
} from "lucide-react"
import Image from "next/image"

const galleryItems = [
    {
        id: "leadership-summit-2025",
        category: "Events",
        title: "Executive Leadership Summit 2025",
        image: "/asset/bgimg2.jpeg",
        featured: true,
    },
    {
        id: "graduation-ceremony-2024",
        category: "Graduations",
        title: "Annual Graduation Ceremony",
        image: "/asset/bgimg3.jpeg",
        featured: true,
    },
    {
        id: "corporate-training-workshop",
        category: "Workshops",
        title: "Corporate Training Workshop",
        image: "/asset/img1.jpeg",
        featured: false,
    },
    {
        id: "innovation-awards",
        category: "Events",
        title: "Innovation Excellence Awards",
        image: "/asset/img2.jpeg",
        featured: false,
    },
    {
        id: "industry-partnership-forum",
        category: "Partnerships",
        title: "Industry Partnership Forum",
        image: "/asset/img3.jpeg",
        featured: false,
    },
    {
        id: "campus-expansion",
        category: "Milestones",
        title: "New Campus Opening",
        image: "/asset/img4.jpeg",
        featured: true,
    },
    {
        id: "ai-symposium",
        category: "Workshops",
        title: "AI & Data Science Symposium",
        image: "/asset/img5.jpeg",
        featured: false,
    },
    {
        id: "alumni-networking",
        category: "Events",
        title: "Alumni Networking Gala",
        image: "/asset/img6.jpeg",
        featured: false,
    },
]

const categories = ["All", "Events", "Graduations", "Workshops", "Partnerships", "Milestones"]

export function GalleryGrid() {
    const [search, setSearch] = useState("")
    const [category, setCategory] = useState("All")

    const filtered = useMemo(() => {
        return galleryItems.filter((item) => {
            const matchSearch =
                !search ||
                item.title.toLowerCase().includes(search.toLowerCase())
            const matchCategory = category === "All" || item.category === category
            return matchSearch && matchCategory
        })
    }, [search, category])

    return (
        <MotionSection className="py-16 lg:py-24 bg-background">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Search and intro */}
                <MotionDiv variants={fadeInUp}>
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                        {/* Search */}
                        <div className="relative max-w-md flex-1">
                            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                            <Input
                                placeholder="Search gallery..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="pl-10 h-11 bg-card border-border/60 focus-visible:ring-accent/30"
                            />
                        </div>

                        {/* Results count */}
                        <div className="text-sm text-muted-foreground">
                            Showing{" "}
                            <span className="font-semibold text-foreground">{filtered.length}</span>{" "}
                            {filtered.length === 1 ? "item" : "items"}
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
                                        layoutId="gallery-filter"
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
                        {filtered.map((item) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                                className="group"
                            >
                                <div
                                    className={`relative h-full overflow-hidden rounded-2xl border transition-all duration-500 hover:-translate-y-1 ${item.featured
                                        ? "border-accent/30 bg-card shadow-lg shadow-accent/[0.06]"
                                        : "border-border/50 bg-card hover:shadow-xl hover:shadow-primary/[0.04] hover:border-border"
                                        }`}
                                >
                                    {/* Spotlight gradient on hover */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-[radial-gradient(600px_circle_at_var(--mouse-x,50%)_var(--mouse-y,0%),hsl(var(--accent)/0.04),transparent_40%)]" />

                                    {item.featured && (
                                        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
                                    )}

                                    {/* Image placeholder - using gradient since we don't have actual images */}
                                    <div className="relative h-48 w-full overflow-hidden bg-muted">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        {item.featured && (
                                            <div className="absolute top-3 right-3">
                                                <Badge className="bg-accent/90 text-accent-foreground border-accent/20 text-xs backdrop-blur-sm">
                                                    Featured
                                                </Badge>
                                            </div>
                                        )}
                                    </div>

                                    <div className="relative p-6">
                                        <div className="flex items-start justify-between">
                                            <Badge
                                                variant="outline"
                                                className="text-[10px] font-semibold"
                                            >
                                                {item.category}
                                            </Badge>
                                        </div>

                                        <div className="mt-3">
                                            <h3 className="text-lg font-semibold leading-snug text-foreground">
                                                {item.title}
                                            </h3>
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
                            No items found
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
