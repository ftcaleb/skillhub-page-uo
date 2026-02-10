import { ShieldCheck, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface SupportCTAProps {
    title: string
    description: string
    buttonLabel: string
    phoneHref: string
}

export function SupportCTA({ title, description, buttonLabel, phoneHref }: SupportCTAProps) {
    return (
        <Card className="rounded-3xl bg-primary overflow-hidden relative border-none shadow-2xl shadow-primary/20 group">
            <CardContent className="p-8 relative z-10 flex flex-col gap-6">
                <div className="flex items-center gap-5">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md transition-transform duration-500 group-hover:scale-110">
                        <ShieldCheck className="h-8 w-8 text-accent" aria-hidden="true" />
                    </div>
                    <div className="space-y-1">
                        <h3 className="text-2xl font-bold text-primary-foreground leading-tight">{title}</h3>
                    </div>
                </div>

                <p className="text-primary-foreground/70 text-sm md:text-base leading-relaxed">
                    {description}
                </p>

                <Button
                    size="lg"
                    className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-2xl h-14 px-8 font-bold shadow-xl shadow-accent/20 transition-all duration-300 active:scale-[0.97] group w-full"
                    asChild
                >
                    <a href={phoneHref}>
                        {buttonLabel}
                        <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </a>
                </Button>
            </CardContent>

            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-accent/20 rounded-full translate-x-1/4 -translate-y-1/4 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full -translate-x-1/4 translate-y-1/4 blur-2xl pointer-events-none" />
        </Card>
    )
}
