import { useState } from "react"
import { motion } from "motion/react"
import Image from "next/image"
import { MapPin, Calendar, ArrowUpRight } from "lucide-react"
import { GalleryItem } from "@/lib/gallery-data"
import { cn } from "@/lib/utils"

interface ImageCardProps {
    item: GalleryItem
    onClick: () => void
    priority?: boolean
}

export function ImageCard({ item, onClick, priority = false }: ImageCardProps) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
                "group relative cursor-pointer overflow-hidden rounded-[2rem] bg-muted border border-border/40",
                item.span === "large" ? "md:col-span-2 md:row-span-2" :
                    item.span === "medium" ? "md:col-span-1 md:row-span-2" : "md:col-span-1 md:row-span-1"
            )}
            onClick={onClick}
        >
            {/* Background Image with sophisticated scaling */}
            <div className="absolute inset-0 h-full w-full transition-transform duration-[1.2s] cubic-bezier(0.22, 1, 0.36, 1) group-hover:scale-110">
                <Image
                    src={item.src}
                    alt={item.category}
                    fill
                    className="object-cover"
                    priority={priority}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>

            {/* Premium Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 transition-all duration-500 group-hover:opacity-100" />

            {/* Corner Decorative Accent */}
            <div className="absolute top-6 right-6 p-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md opacity-0 transition-all duration-500 transform translate-x-4 -translate-y-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0">
                <ArrowUpRight className="w-4 h-4 text-white" />
            </div>

            {/* Content Container */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-10">
                <div className="space-y-4">
                    {/* Glassmorphism Tag */}
                    <div className="flex items-center gap-2 transform transition-transform duration-500 group-hover:-translate-y-2">
                        <span className="inline-flex rounded-full bg-primary/20 backdrop-blur-xl px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary-foreground border border-primary/30">
                            {item.category}
                        </span>
                    </div>

                </div>
            </div>
        </motion.div>
    )
}

