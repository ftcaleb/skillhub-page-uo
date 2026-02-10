"use client"

import { MapPin, Phone, Mail, Clock, ShieldCheck, ArrowRight } from "lucide-react"
import { motion } from "motion/react"
import { fadeInUp, staggerContainer } from "@/components/motion"
import { Button } from "@/components/ui/button"

export function ContactInfo() {
    return (
        <motion.div variants={staggerContainer} initial="hidden" animate="show" className="space-y-6">
            <div className="grid gap-6">
                {/* Email Us */}
                <motion.div variants={fadeInUp} className="group rounded-3xl border border-border/50 bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-border">
                    <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent transition-transform duration-300 group-hover:scale-110">
                            <Mail className="h-6 w-6" />
                        </div>
                        <div className="space-y-1">
                            <h3 className="font-bold text-lg text-foreground">Email Us</h3>
                            <div className="space-y-1">
                                <a href="mailto:hello@skillhub.africa" className="block text-muted-foreground hover:text-accent transition-colors font-medium">
                                    hello@skillhub.africa
                                </a>
                                <a href="mailto:support@skillhub.africa" className="block text-muted-foreground hover:text-accent transition-colors">
                                    support@skillhub.africa
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Call Us */}
                <motion.div variants={fadeInUp} className="group rounded-3xl border border-border/50 bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-border">
                    <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent transition-transform duration-300 group-hover:scale-110">
                            <Phone className="h-6 w-6" />
                        </div>
                        <div className="space-y-1">
                            <h3 className="font-bold text-lg text-foreground">Call Us</h3>
                            <div className="space-y-1">
                                <a href="tel:+27645158024" className="block text-muted-foreground hover:text-accent transition-colors font-medium">
                                    +27 64 515 8024
                                </a>
                                <p className="text-muted-foreground">Mon-Fri from 8am to 5pm.</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Visit Us */}
                <motion.div variants={fadeInUp} className="group rounded-3xl border border-border/50 bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-border">
                    <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent transition-transform duration-300 group-hover:scale-110">
                            <MapPin className="h-6 w-6" />
                        </div>
                        <div className="space-y-1">
                            <h3 className="font-bold text-lg text-foreground">Visit Us</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                42 6th Street Wynberg<br />
                                Sandton, 2090, South Africa
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Office Hours */}
                <motion.div variants={fadeInUp} className="group rounded-3xl border border-border/50 bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-border">
                    <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent transition-transform duration-300 group-hover:scale-110">
                            <Clock className="h-6 w-6" />
                        </div>
                        <div className="space-y-1">
                            <h3 className="font-bold text-lg text-foreground">Office Hours</h3>
                            <div className="grid grid-cols-2 gap-x-8 gap-y-1 text-muted-foreground">
                                <span>Mon - Fri</span>
                                <span className="text-foreground font-medium">8:00 - 17:00</span>
                                <span>Sat - Sun</span>
                                <span className="text-foreground font-medium">Closed</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Map Placeholder */}
            <motion.div variants={fadeInUp} className="relative aspect-[16/6] w-full overflow-hidden rounded-3xl border border-border/50 bg-muted/30">
                <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_center,rgba(var(--accent-rgb),0.05)_0%,transparent_70%)]">
                    <div className="text-center p-6">
                        <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent">
                            <MapPin className="h-5 w-5" />
                        </div>
                        <h4 className="font-bold text-foreground">Interactive Map</h4>
                        <p className="text-xs text-muted-foreground mt-1 max-w-[200px] mx-auto">
                            42 6th Street Wynberg, Sandton, 2090
                        </p>
                    </div>
                </div>
                {/* Decorative grid for "map" feel */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                    style={{ backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`, backgroundSize: '24px 24px' }}
                />
            </motion.div>

            {/* Support Callout */}
            <motion.div variants={fadeInUp} className="rounded-3xl bg-primary p-8 text-primary-foreground shadow-xl shadow-primary/10 overflow-hidden relative">
                <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-4 text-center sm:text-left">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm">
                            <ShieldCheck className="h-8 w-8 text-accent" />
                        </div>
                        <div className="space-y-1">
                            <h3 className="text-xl font-bold">Need Immediate Assistance?</h3>
                            <p className="text-primary-foreground/70 text-sm max-w-[240px]">
                                Our support team is available during office hours for urgent help.
                            </p>
                        </div>
                    </div>
                    <Button variant="secondary" className="bg-white text-primary hover:bg-white/90 rounded-xl h-12 px-6 font-bold shrink-0 transition-transform hover:scale-105 active:scale-95 group" asChild>
                        <a href="tel:+27645158024">
                            Call Support
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </a>
                    </Button>
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full -translate-y-16 translate-x-16 blur-2xl pointer-events-none" />
            </motion.div>
        </motion.div>
    )
}
