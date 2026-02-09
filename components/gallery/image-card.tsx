import { useState } from "react"
import { motion } from "motion/react"
import Image from "next/image"
import { Plus, MapPin } from "lucide-react"
import { GalleryItem } from "@/lib/gallery-data"
import { cn } from "@/lib/utils"

interface ImageCardProps {
    item: GalleryItem
    onClick: () => void
    priority?: boolean
}

export function ImageCard({ item, onClick, priority = false }: ImageCardProps) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className={cn(
                "group relative cursor-pointer overflow-hidden rounded-xl bg-muted",
                item.span === "large" ? "md:col-span-2 md:row-span-2" :
                    item.span === "medium" ? "md:col-span-1 md:row-span-2" : "md:col-span-1 md:row-span-1"
            )}
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Image */}
            <div className="absolute inset-0 h-full w-full transition-transform duration-700 ease-out group-hover:scale-105">
                <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover transition-opacity duration-300"
                    priority={priority}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />

            {/* Hover Reveal Overlay (Full solid overlay on hover for premium feel, optional, sticking to gradient mostly) */}
            <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="translate-y-4 transform transition-transform duration-300 ease-out group-hover:translate-y-0">
                    <div className="mb-2 flex items-center gap-2">
                        <span className="inline-flex rounded-full bg-white/20 px-2 py-0.5 text-xs font-medium text-white backdrop-blur-sm border border-white/10">
                            {item.category}
                        </span>
                        {item.year && (
                            <span className="text-xs font-medium text-white/80">
                                {item.year}
                            </span>
                        )}
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-1">
                        {item.title}
                    </h3>

                    <div className="flex items-center justify-between opacity-0 transition-opacity duration-300 delay-75 group-hover:opacity-100">
                        <div className="flex items-center gap-1.5 text-sm text-white/80">
                            {item.location && (
                                <>
                                    <MapPin className="h-3.5 w-3.5" />
                                    <span>{item.location}</span>
                                </>
                            )}
                        </div>

                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white transition-all hover:bg-white hover:text-black">
                            <Plus className="h-4 w-4" />
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
