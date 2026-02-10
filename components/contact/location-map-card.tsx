import { MapPin, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface LocationMapCardProps {
    title: string
    addressLine1: string
    addressLine2: string
    mapEmbedUrl: string
    googleMapsUrl: string
}

export function LocationMapCard({
    title,
    addressLine1,
    addressLine2,
    mapEmbedUrl,
    googleMapsUrl
}: LocationMapCardProps) {
    return (
        <Card className="rounded-3xl border border-border/50 bg-card overflow-hidden shadow-lg shadow-primary/5 group">
            <CardContent className="p-0">
                <div className="grid grid-cols-1">
                    {/* Branded Map Embed */}
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-muted">
                        <iframe
                            title="Office Location"
                            src={mapEmbedUrl}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            className="w-full h-full grayscale-[0.3] contrast-[1.1] brightness-[0.95]"
                        />
                        {/* Subtle Branded Overlay at bottom for label */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/90 to-transparent backdrop-blur-[2px]">
                            <div className="flex items-center gap-3">
                                <div className="h-8 w-8 rounded-lg bg-accent flex items-center justify-center text-accent-foreground shadow-lg">
                                    <MapPin className="h-4 w-4" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-foreground leading-tight">{title}</p>
                                    <p className="text-[10px] text-muted-foreground leading-tight">{addressLine1}, {addressLine2}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card Footer Actions */}
                    <div className="p-4 bg-muted/20 flex items-center justify-between">
                        <span className="text-xs font-medium text-muted-foreground">Sandton, Johannesburg</span>
                        <Button variant="link" className="h-auto p-0 text-accent font-bold text-xs group/link" asChild>
                            <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                                Get Directions
                                <ArrowRight className="ml-1.5 h-3 w-3 transition-transform group-hover/link:translate-x-1" />
                            </a>
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
