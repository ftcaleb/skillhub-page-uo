"use client"

import Link from "next/link"
import { usePathname, useSearchParams } from "next/navigation"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface PaginationProps {
    totalPages: number
    currentPage: number
    baseUrl: string
}

export function Pagination({ totalPages, currentPage, baseUrl }: PaginationProps) {
    // Generate page numbers to display
    // We want to show: 1 ... 4 5 [6] 7 8 ... 20
    const getPageNumbers = () => {
        const pages = []
        const showMax = 5

        if (totalPages <= showMax) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i)
            }
        } else {
            // Always show first and last
            // Show current, prev, next
            // Show ellipsis

            if (currentPage <= 3) {
                for (let i = 1; i <= 4; i++) pages.push(i)
                pages.push("...")
                pages.push(totalPages)
            } else if (currentPage >= totalPages - 2) {
                pages.push(1)
                pages.push("...")
                for (let i = totalPages - 3; i <= totalPages; i++) pages.push(i)
            } else {
                pages.push(1)
                pages.push("...")
                pages.push(currentPage - 1)
                pages.push(currentPage)
                pages.push(currentPage + 1)
                pages.push("...")
                pages.push(totalPages)
            }
        }
        return pages
    }

    const pages = getPageNumbers()

    return (
        <nav className="flex items-center justify-center space-x-2 mt-12" aria-label="Pagination">
            {/* Prev Button */}
            <Button
                variant="outline"
                size="icon"
                className="h-9 w-9"
                disabled={currentPage <= 1}
                asChild={currentPage > 1}
                aria-label="Go to previous page"
            >
                {currentPage > 1 ? (
                    <Link href={`${baseUrl}/page/${currentPage - 1}`}>
                        <ChevronLeft className="h-4 w-4" />
                    </Link>
                ) : (
                    <ChevronLeft className="h-4 w-4" />
                )}
            </Button>

            {/* Page Numbers */}
            <div className="flex items-center space-x-2">
                {pages.map((page, i) => (
                    <div key={i}>
                        {page === "..." ? (
                            <span className="text-muted-foreground px-2">...</span>
                        ) : (
                            <Button
                                variant={currentPage === page ? "default" : "outline"}
                                size="icon"
                                className={cn("h-9 w-9", currentPage === page && "pointer-events-none")}
                                asChild={currentPage !== page}
                                aria-current={currentPage === page ? "page" : undefined}
                                aria-label={`Go to page ${page}`}
                            >
                                {currentPage === page ? (
                                    page
                                ) : (
                                    <Link href={`${baseUrl}/page/${page}`}>
                                        {page}
                                    </Link>
                                )}
                            </Button>
                        )}
                    </div>
                ))}
            </div>

            {/* Next Button */}
            <Button
                variant="outline"
                size="icon"
                className="h-9 w-9"
                disabled={currentPage >= totalPages}
                asChild={currentPage < totalPages}
                aria-label="Go to next page"
            >
                {currentPage < totalPages ? (
                    <Link href={`${baseUrl}/page/${currentPage + 1}`}>
                        <ChevronRight className="h-4 w-4" />
                    </Link>
                ) : (
                    <ChevronRight className="h-4 w-4" />
                )}
            </Button>
        </nav>
    )
}
