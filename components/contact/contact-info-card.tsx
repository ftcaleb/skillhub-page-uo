import { LucideIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface ContactInfoCardProps {
    title: string
    icon: LucideIcon
    details: {
        label: string
        value: string
        href?: string
        isSecondary?: boolean
    }[]
    className?: string
}

export function ContactInfoCard({ title, icon: Icon, details, className }: ContactInfoCardProps) {
    return (
        <Card className={cn("rounded-3xl border border-border/50 bg-card overflow-hidden transition-all duration-300 hover:shadow-lg group", className)}>
            <CardContent className="p-6">
                <div className="flex items-start gap-5">
                    {/* Icon Container with soft neutral background */}
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-muted/60 text-muted-foreground transition-transform duration-500 group-hover:scale-110">
                        <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>

                    <div className="space-y-2 flex-1">
                        <h3 className="text-xl font-bold text-foreground leading-none">{title}</h3>
                        <div className="space-y-1.5 pt-1">
                            {details.map((detail, index) => (
                                <div key={index} className="flex flex-col">
                                    {/* Label styled as secondary text */}
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/50">
                                        {detail.label}
                                    </span>

                                    {detail.href ? (
                                        <a
                                            href={detail.href}
                                            className={cn(
                                                "font-medium transition-colors break-all",
                                                detail.isSecondary ? "text-muted-foreground text-sm" : "text-foreground hover:text-accent"
                                            )}
                                        >
                                            {detail.value}
                                        </a>
                                    ) : (
                                        <span className={cn(
                                            "font-medium",
                                            detail.isSecondary ? "text-muted-foreground text-sm" : "text-foreground"
                                        )}>
                                            {detail.value}
                                        </span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
