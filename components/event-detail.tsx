"use client"

import { Event } from "@/lib/events-data"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Calendar, MapPin, Clock, Users, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "motion/react"
import { fadeInUp, staggerContainer } from "@/components/motion"

interface EventDetailProps {
    event: Event
}

export function EventDetail({ event }: EventDetailProps) {
    return (
        <section className="py-16 lg:py-24 bg-background">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid gap-12 lg:grid-cols-3">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Hero / Header Section within content */}
                        <div>
                            <div className="flex flex-wrap gap-2 mb-6">
                                <Badge variant="secondary" className="text-sm font-medium">
                                    {event.skillLevel}
                                </Badge>
                                <Badge variant="outline" className="text-sm font-medium">
                                    {event.participants} Participants
                                </Badge>
                            </div>

                            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
                                {event.title}
                            </h1>

                            <div className="relative aspect-video w-full overflow-hidden rounded-2xl mb-8">
                                <Image
                                    src={event.imgSrc || "/placeholder-event.jpg"}
                                    alt={event.title}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>

                            <div className="prose prose-lg dark:prose-invert max-w-none">
                                <h3>About This Event</h3>
                                <p>{event.seo.seoDescription}</p>
                                {/* Note: The provided data doesn't have a long description field, using SEO desc or we could add one later. 
                                    For now, we display the seoDescription as the main summary. 
                                */}
                            </div>
                        </div>

                        {/* YouTube Video if available */}
                        {event.youtubeUrl && (
                            <div className="rounded-2xl overflow-hidden border border-border/50 bg-card p-2">
                                <div className="aspect-video w-full rounded-xl overflow-hidden bg-muted">
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src={event.youtubeUrl}
                                        title={event.title}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        <div className="rounded-2xl border border-border/50 bg-card p-8 sticky top-24 shadow-sm">
                            <h3 className="text-xl font-semibold mb-6">Event Details</h3>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                        <Calendar className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-muted-foreground">Date</p>
                                        <p className="text-base font-semibold text-foreground">{event.dayDate} {event.monthYear}</p>
                                        <p className="text-xs text-muted-foreground mt-1">Reg. ends: {event.regEndDate}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                        <Clock className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-muted-foreground">Time</p>
                                        <p className="text-base font-semibold text-foreground">{event.startTime} - {event.endTime}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                        <MapPin className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-muted-foreground">Location</p>
                                        <p className="text-base font-semibold text-foreground">{event.location}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                        <Users className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-muted-foreground">Capacity</p>
                                        <p className="text-base font-semibold text-foreground">{event.participants} Seats</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-border/50">
                                <Button className="w-full h-12 text-base" size="lg" asChild>
                                    <Link href={`/events/${event.slug}/register`}>
                                        Register Now
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                                <p className="mt-4 text-xs text-center text-muted-foreground">
                                    Limited seats available. Secure your spot today.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
