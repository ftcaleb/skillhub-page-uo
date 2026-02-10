"use client"

import * as React from "react"
import { X, ChevronLeft, ChevronRight, MapPin, Calendar } from "lucide-react"
import { motion, AnimatePresence } from "motion/react"
import { Dialog, DialogContent, DialogClose, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { GalleryItem } from "@/lib/gallery-data"

interface LightboxProps {
    item: GalleryItem | null
    isOpen: boolean
    onClose: () => void
    onNext: () => void
    onPrev: () => void
    hasNext: boolean
    hasPrev: boolean
}

export function Lightbox({
    item,
    isOpen,
    onClose,
    onNext,
    onPrev,
    hasNext,
    hasPrev
}: LightboxProps) {
    // Handle keyboard navigation
    React.useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isOpen) return
            if (e.key === "ArrowRight" && hasNext) onNext()
            if (e.key === "ArrowLeft" && hasPrev) onPrev()
        }

        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [isOpen, hasNext, hasPrev, onNext, onPrev])

    if (!item) return null

    return (
        <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
            <DialogContent className="max-w-[100vw] w-full h-[100vh] p-0 bg-black/40 backdrop-blur-2xl border-none shadow-none z-50 flex items-center justify-center overflow-hidden">
                <DialogTitle className="sr-only">Viewing {item.category}</DialogTitle>

                <div className="relative w-full h-full flex flex-col items-center justify-center p-4 md:p-8">
                    {/* Top Bar */}
                    <div className="absolute top-0 left-0 right-0 h-24 px-6 md:px-10 flex items-center justify-between z-50">
                        <div className="flex flex-col">
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-1">
                                {item.category}
                            </span>
                        </div>

                        <DialogClose asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="h-12 w-12 rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-colors"
                                onClick={onClose}
                            >
                                <X className="h-6 w-6" />
                                <span className="sr-only">Close</span>
                            </Button>
                        </DialogClose>
                    </div>

                    {/* Navigation Buttons */}
                    {hasPrev && (
                        <Button
                            variant="ghost"
                            size="icon"
                            className="absolute left-6 z-50 text-white/40 hover:text-white hover:bg-white/10 h-16 w-16 rounded-full hidden md:flex transition-all"
                            onClick={(e) => {
                                e.stopPropagation()
                                onPrev()
                            }}
                        >
                            <ChevronLeft className="h-10 w-10" />
                            <span className="sr-only">Previous</span>
                        </Button>
                    )}

                    {hasNext && (
                        <Button
                            variant="ghost"
                            size="icon"
                            className="absolute right-6 z-50 text-white/40 hover:text-white hover:bg-white/10 h-16 w-16 rounded-full hidden md:flex transition-all"
                            onClick={(e) => {
                                e.stopPropagation()
                                onNext()
                            }}
                        >
                            <ChevronRight className="h-10 w-10" />
                            <span className="sr-only">Next</span>
                        </Button>
                    )}

                    {/* Image & Description Container */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 1.05, y: -20 }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            className="relative w-full max-w-5xl flex flex-col items-center gap-8"
                        >
                            <div className="relative w-full aspect-[4/3] md:aspect-[16/10] max-h-[65vh] overflow-hidden rounded-[2.5rem] shadow-[0_40px_100px_rgba(0,0,0,0.8)] border border-white/10 bg-muted/20">
                                <img
                                    src={item.src}
                                    alt={item.category}
                                    className="w-full h-full object-contain md:object-cover"
                                />
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </DialogContent>
        </Dialog>
    )
}

