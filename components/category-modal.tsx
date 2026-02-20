"use client"

import { useEffect, useRef, useCallback } from "react"
import { createPortal } from "react-dom"
import { motion, AnimatePresence } from "motion/react"
import { X, SlidersHorizontal, Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { formatCategoryForDisplay } from "@/lib/formatters"

interface CategoryModalProps {
    /** Full list of categories, including "All" as the first item */
    categories: string[]
    /** Currently active/selected category */
    currentCategory: string
    /** Whether the modal is open */
    isOpen: boolean
    /** Called when the modal should be dismissed without a selection */
    onClose: () => void
    /** Called when the user taps a category item */
    onSelect: (category: string) => void
}

export function CategoryModal({
    categories,
    currentCategory,
    isOpen,
    onClose,
    onSelect,
}: CategoryModalProps) {
    const sheetRef = useRef<HTMLDivElement>(null)
    const closeButtonRef = useRef<HTMLButtonElement>(null)

    // ---------- Scroll lock ----------
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"
            // Focus the close button when the modal opens
            setTimeout(() => closeButtonRef.current?.focus(), 50)
        } else {
            document.body.style.overflow = ""
        }
        return () => {
            document.body.style.overflow = ""
        }
    }, [isOpen])

    // ---------- Escape key ----------
    const handleKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose()
            // Focus trap — keep Tab inside the sheet
            if (e.key === "Tab" && sheetRef.current) {
                const focusable = sheetRef.current.querySelectorAll<HTMLElement>(
                    "button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])"
                )
                if (!focusable.length) return
                const first = focusable[0]
                const last = focusable[focusable.length - 1]
                if (e.shiftKey) {
                    if (document.activeElement === first) {
                        e.preventDefault()
                        last.focus()
                    }
                } else {
                    if (document.activeElement === last) {
                        e.preventDefault()
                        first.focus()
                    }
                }
            }
        },
        [onClose]
    )

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown)
        return () => document.removeEventListener("keydown", handleKeyDown)
    }, [handleKeyDown])

    // ---------- Portal guard (SSR safe) ----------
    if (typeof window === "undefined") return null

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        key="backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-40 bg-black/50 backdrop-blur-[2px]"
                        onClick={onClose}
                        aria-hidden="true"
                    />

                    {/* Bottom sheet */}
                    <motion.div
                        key="sheet"
                        ref={sheetRef}
                        role="dialog"
                        aria-modal="true"
                        aria-label="Filter by category"
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "100%" }}
                        transition={{ type: "spring", stiffness: 380, damping: 40 }}
                        className="fixed bottom-0 left-0 right-0 z-50 flex max-h-[80vh] flex-col rounded-t-3xl border-t border-border/50 bg-card shadow-2xl shadow-black/20"
                    >
                        {/* Drag handle */}
                        <div className="mx-auto mt-3 h-1 w-10 flex-none rounded-full bg-border/70" />

                        {/* Header */}
                        <div className="flex items-center justify-between px-6 pb-4 pt-5 flex-none">
                            <div className="flex items-center gap-2.5">
                                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10">
                                    <SlidersHorizontal className="h-4 w-4 text-accent" />
                                </div>
                                <h2 className="text-base font-semibold text-foreground">
                                    Categories
                                </h2>
                            </div>
                            <button
                                ref={closeButtonRef}
                                onClick={onClose}
                                aria-label="Close category filter"
                                className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary transition-colors hover:bg-secondary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
                            >
                                <X className="h-4 w-4 text-foreground" />
                            </button>
                        </div>

                        {/* Divider */}
                        <div className="h-px w-full bg-border/40 flex-none" />

                        {/* Scrollable category list */}
                        <div className="overflow-y-auto overscroll-contain px-4 py-3 flex-1 pb-safe">
                            {categories.length === 0 ? (
                                <p className="py-8 text-center text-sm text-muted-foreground">
                                    No categories available.
                                </p>
                            ) : (
                                <ul role="listbox" aria-label="Category list" className="space-y-1">
                                    {categories.map((cat) => {
                                        const isActive = currentCategory === cat
                                        return (
                                            <li key={cat} role="option" aria-selected={isActive}>
                                                <button
                                                    onClick={() => onSelect(cat)}
                                                    className={cn(
                                                        "flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40",
                                                        isActive
                                                            ? "bg-accent text-accent-foreground shadow-sm"
                                                            : "text-foreground hover:bg-secondary active:bg-secondary/80"
                                                    )}
                                                >
                                                    <span>{formatCategoryForDisplay(cat)}</span>
                                                    {isActive && (
                                                        <Check className="h-4 w-4 shrink-0" aria-hidden="true" />
                                                    )}
                                                </button>
                                            </li>
                                        )
                                    })}
                                </ul>
                            )}
                        </div>

                        {/* Safe-area spacer for iOS home bar */}
                        <div className="h-5 flex-none" />
                    </motion.div>
                </>
            )}
        </AnimatePresence>,
        document.body
    )
}
