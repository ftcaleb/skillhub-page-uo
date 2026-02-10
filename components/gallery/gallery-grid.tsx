"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "motion/react"
import { galleryItems, galleryCategories, GalleryItem } from "@/lib/gallery-data"
import { ImageCard } from "@/components/gallery/image-card"
import { Lightbox } from "@/components/gallery/lightbox"
import { cn } from "@/lib/utils"

export function GalleryGrid() {
    const [filter, setFilter] = useState("All")
    const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null)
    const [isLightboxOpen, setIsLightboxOpen] = useState(false)

    // Filter items
    const filteredItems = useMemo(() => {
        if (filter === "All") return galleryItems
        return galleryItems.filter((item) => item.category === filter)
    }, [filter])

    // Handle Lightbox Navigation
    const handleNext = () => {
        if (!selectedItem) return
        const currentIndex = filteredItems.findIndex((item) => item.id === selectedItem.id)
        if (currentIndex < filteredItems.length - 1) {
            setSelectedItem(filteredItems[currentIndex + 1])
        }
    }

    const handlePrev = () => {
        if (!selectedItem) return
        const currentIndex = filteredItems.findIndex((item) => item.id === selectedItem.id)
        if (currentIndex > 0) {
            setSelectedItem(filteredItems[currentIndex - 1])
        }
    }

    const openLightbox = (item: GalleryItem) => {
        setSelectedItem(item)
        setIsLightboxOpen(true)
    }

    return (
        <section className="py-12 lg:py-20 bg-background">
            <div className="container px-4 md:px-6">

                {/* Filters - Minimalist approach */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-1 p-1 bg-muted/50 rounded-full border border-border/40 backdrop-blur-sm">
                        {galleryCategories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setFilter(category)}
                                className={cn(
                                    "relative px-5 py-2 text-xs font-semibold tracking-wide uppercase transition-all rounded-full",
                                    filter === category
                                        ? "text-primary-foreground"
                                        : "text-muted-foreground hover:text-foreground"
                                )}
                            >
                                {filter === category && (
                                    <motion.div
                                        layoutId="gallery-filter"
                                        className="absolute inset-0 bg-primary rounded-full shadow-lg shadow-primary/20"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <span className="relative z-10">{category}</span>
                            </button>
                        ))}
                    </div>

                    <div className="hidden md:block text-sm text-muted-foreground tracking-tight">
                        Showing <span className="text-foreground font-medium">{filteredItems.length}</span> selected works
                    </div>
                </div>

                {/* Grid - Refined Masonry-like Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[300px]"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredItems.map((item, index) => (
                            <ImageCard
                                key={item.id}
                                item={item}
                                onClick={() => openLightbox(item)}
                                priority={index < 4}
                            />
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Empty State */}
                {filteredItems.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-32 border border-dashed border-border/60 rounded-3xl"
                    >
                        <p className="text-muted-foreground text-lg italic">No visual records found in this category.</p>
                    </motion.div>
                )}
            </div>

            {/* Lightbox */}
            <Lightbox
                item={selectedItem}
                isOpen={isLightboxOpen}
                onClose={() => setIsLightboxOpen(false)}
                onNext={handleNext}
                onPrev={handlePrev}
                hasNext={!!selectedItem && filteredItems.findIndex(i => i.id === selectedItem.id) < filteredItems.length - 1}
                hasPrev={!!selectedItem && filteredItems.findIndex(i => i.id === selectedItem.id) > 0}
            />
        </section>
    )
}
