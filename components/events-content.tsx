"use client"

import { motion } from "motion/react"
import { ArrowRight, Calendar, MapPin, ExternalLink } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { fadeInUp, staggerContainer } from "@/components/motion"

const events = [
    {
        id: "transport-fleet-management",
        title: "Transport & Fleet Management",
        location: "Sandton, South Africa",
        date: "17 – 21 Nov 2026",
        description:
            "A high-impact training designed to help professionals optimise transport resources, manage fleets effectively, and ensure compliance for strategic gains.",
        link: "/event/transport-and-fleet-management",
        category: "Logistics",
    },
    {
        id: "supply-chain-analytics",
        title: "AI-Driven Supply Chain Analytics",
        location: "Online / Virtual",
        date: "05 – 07 Dec 2026",
        description:
            "Master the art of using artificial intelligence to forecast demand, optimize inventory, and streamline supply chain operations for maximum efficiency.",
        link: "/event/supply-chain-analytics",
        category: "AI & Analytics",
    },
    {
        id: "operational-leadership",
        title: "Operational Leadership Summit",
        location: "Cape Town, South Africa",
        date: "15 – 18 Jan 2027",
        description:
            "Join top industry leaders for a transformative summit focused on strategic decision-making, team empowerment, and organizational excellence.",
        link: "/event/operational-leadership",
        category: "Leadership",
    },
]

export function EventsContent() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section (Aceternity Style) */}
            <section className="relative px-8 py-32 md:py-48 bg-gradient-to-br from-indigo-900 via-purple-800 to-indigo-900 text-white text-center overflow-hidden">
                {/* Background Beams/Texture Effect */}
                <div className="absolute inset-0 w-full h-full bg-[url('/images/grid-pattern.svg')] opacity-10" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-purple-500/30 blur-[100px] rounded-full pointer-events-none" />

                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={staggerContainer}
                    className="relative z-10 max-w-4xl mx-auto space-y-6"
                >
                    <motion.h1
                        variants={fadeInUp}
                        className="text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70"
                    >
                        Events & Training Programs
                    </motion.h1>
                    <motion.p
                        variants={fadeInUp}
                        className="mt-4 text-xl md:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed"
                    >
                        Expand your expertise. Connect with professionals. Build real-world skills.
                    </motion.p>
                    <motion.p
                        variants={fadeInUp}
                        className="mt-2 text-md md:text-lg text-white/60"
                    >
                        Hosted by Trajlon Group — world-class operational leadership, logistics & AI training
                        events.
                    </motion.p>
                </motion.div>
            </section>

            {/* Mission & Goal Section */}
            <section className="px-8 py-20 bg-background text-foreground">
                <motion.div
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="max-w-3xl mx-auto space-y-8"
                >
                    <motion.div variants={fadeInUp} className="text-center">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Our Purpose</h2>
                        <div className="mt-4 h-1 w-20 bg-accent mx-auto rounded-full" />
                    </motion.div>

                    <motion.p variants={fadeInUp} className="text-lg text-muted-foreground leading-relaxed">
                        Trajlon Group delivers expert-led events and training that help professionals and
                        organizations unlock business operations excellence through supply chain management,
                        AI-driven analytics, leadership, transport & logistics mastery, and real-world practical
                        skills.
                    </motion.p>

                    <motion.ul variants={fadeInUp} className="grid sm:grid-cols-2 gap-4">
                        {[
                            "Empower decision-making with advanced operational knowledge.",
                            "Build practical skills grounded in real industry scenarios.",
                            "Connect professionals with global experts and peers.",
                            "Support career growth and organisational transformation.",
                        ].map((item, index) => (
                            <li key={index} className="flex items-start gap-3 p-4 rounded-lg bg-secondary/30 border border-border/50">
                                <div className="h-2 w-2 mt-2 rounded-full bg-accent shrink-0" />
                                <span className="text-sm font-medium">{item}</span>
                            </li>
                        ))}
                    </motion.ul>
                </motion.div>
            </section>

            {/* Upcoming Events Grid */}
            <section id="events-grid" className="px-8 py-20 bg-secondary/20">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Upcoming Events</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Discover our latest workshops, seminars, and training sessions designed to elevate your
                            career.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {events.map((event, index) => (
                            <motion.div
                                key={event.id}
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.35, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                                className="group"
                            >
                                <div className="relative h-full overflow-hidden rounded-2xl border border-border/50 bg-card transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/[0.04] hover:border-border">
                                    {/* Spotlight gradient on hover */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-[radial-gradient(600px_circle_at_var(--mouse-x,50%)_var(--mouse-y,0%),hsl(var(--accent)/0.04),transparent_40%)]" />

                                    <div className="relative p-6 lg:p-7">
                                        <div className="flex justify-between items-start">
                                            <span className="inline-flex items-center rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent ring-1 ring-inset ring-accent/20">
                                                {event.category}
                                            </span>
                                        </div>

                                        <div className="mt-5">
                                            <h3 className="text-lg font-semibold leading-snug text-foreground">
                                                {event.title}
                                            </h3>
                                        </div>

                                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                                            {event.description}
                                        </p>

                                        <div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                                            <span className="flex items-center gap-1.5">
                                                <Calendar className="h-3.5 w-3.5" />
                                                {event.date}
                                            </span>
                                            <span className="flex items-center gap-1.5">
                                                <MapPin className="h-3.5 w-3.5" />
                                                {event.location}
                                            </span>
                                        </div>

                                        <div className="mt-6 pt-5 border-t border-border/50 flex items-center justify-between">
                                            <span className="text-sm font-medium text-foreground">
                                                Learn More & Register
                                            </span>
                                            <Link href={event.link}>
                                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary transition-all duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
                                                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer CTA Section */}
            <section className="px-8 py-24 bg-gradient-to-br from-indigo-900 to-purple-800 text-white text-center relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-accent/20 blur-[100px] rounded-full pointer-events-none" />
                <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-indigo-500/20 blur-[100px] rounded-full pointer-events-none" />

                <div className="relative z-10 max-w-3xl mx-auto space-y-8">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                        Ready to Advance Your Skills?
                    </h2>
                    <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                        Join a Trajlon event in your city or online and transform your professional journey with
                        industry-leading expertise.
                    </p>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-block"
                    >
                        <Button
                            size="lg"
                            className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-8 h-14 shadow-lg shadow-accent/20"
                            asChild
                        >
                            <Link href="#events-grid">
                                Explore All Events
                                <ExternalLink className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
