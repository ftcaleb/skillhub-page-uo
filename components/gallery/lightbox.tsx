"use client"

import * as React from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
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
            <DialogContent className="max-w-7xl w-full h-[90vh] p-0 bg-black/95 border-none shadow-none z-50 flex items-center justify-center overflow-hidden">
                <DialogTitle className="sr-only">Viewing {item.title}</DialogTitle>

                <div className="relative w-full h-full flex items-center justify-center">
                    {/* Close Button */}
                    <DialogClose asChild>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="absolute top-4 right-4 z-50 text-white/70 hover:text-white hover:bg-white/10"
                            onClick={onClose}
                        >
                            <X className="h-6 w-6" />
                            <span className="sr-only">Close</span>
                        </Button>
                    </DialogClose>

                    {/* Navigation Buttons */}
                    {hasPrev && (
                        <Button
                            variant="ghost"
                            size="icon"
                            className="absolute left-4 z-50 text-white/70 hover:text-white hover:bg-white/10 h-12 w-12 rounded-full hidden md:flex"
                            onClick={(e) => {
                                e.stopPropagation()
                                onPrev()
                            }}
                        >
                            <ChevronLeft className="h-8 w-8" />
                            <span className="sr-only">Previous</span>
                        </Button>
                    )}

                    {hasNext && (
                        <Button
                            variant="ghost"
                            size="icon"
                            className="absolute right-4 z-50 text-white/70 hover:text-white hover:bg-white/10 h-12 w-12 rounded-full hidden md:flex"
                            onClick={(e) => {
                                e.stopPropagation()
                                onNext()
                            }}
                        >
                            <ChevronRight className="h-8 w-8" />
                            <span className="sr-only">Next</span>
                        </Button>
                    )}

                    {/* Image Container */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.2 }}
                            className="relative w-full h-full p-4 md:p-12 flex flex-col items-center justify-center"
                        >
                            <div className="relative max-w-full max-h-[85vh] overflow-hidden rounded-md">
                                <img
                                    src={item.src}
                                    alt={item.title}
                                    className="max-w-full max-h-[85vh] object-contain shadow-2xl"
                                />
                            </div>

                            <div className="absolute bottom-8 left-0 right-0 text-center text-white px-4">
                                <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                                <div className="flex items-center justify-center gap-2 text-sm text-white/70">
                                    <span>{item.category}</span>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </DialogContent>
        </Dialog>
    )
}
