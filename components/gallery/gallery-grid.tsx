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
        <section className="py-16 lg:py-24 bg-background border-t border-border/40">
            <div className="container px-4 md:px-6">

                {/* Filters */}
                <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
                    {galleryCategories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setFilter(category)}
                            className={cn(
                                "relative px-4 py-2 text-sm font-medium transition-colors rounded-full",
                                filter === category
                                    ? "text-primary-foreground"
                                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                            )}
                        >
                            {filter === category && (
                                <motion.div
                                    layoutId="gallery-filter"
                                    className="absolute inset-0 bg-primary rounded-full"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            <span className="relative z-10">{category}</span>
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[250px]"
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
                    <div className="text-center py-20">
                        <p className="text-muted-foreground">No images found in this category.</p>
                    </div>
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
