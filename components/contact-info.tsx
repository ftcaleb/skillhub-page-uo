"use client"

import { MapPin, Phone, Mail } from "lucide-react"
import { motion } from "motion/react"
import { fadeInUp, staggerContainer } from "@/components/motion"

export function ContactInfo() {
    return (
        <motion.div variants={staggerContainer} initial="hidden" animate="show" className="space-y-8">
            <motion.div variants={fadeInUp}>
                <h2 className="text-3xl font-bold tracking-tight mb-4">Get in Touch</h2>
                <p className="text-muted-foreground text-lg">
                    Have a question about our courses or events? Fill out the form and our team will get back to you within 24 hours.
                </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid gap-6">
                <div className="flex items-start gap-4 p-6 rounded-2xl bg-muted/50 border border-border/50">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                        <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-1">Our Location</h3>
                        <p className="text-muted-foreground">
                            42 6th Street Wynberg<br />
                            Sandton, 2090<br />
                            South Africa
                        </p>
                    </div>
                </div>

                <div className="flex items-start gap-4 p-6 rounded-2xl bg-muted/50 border border-border/50">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                        <Phone className="h-6 w-6" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-1">Phone Number</h3>
                        <p className="text-muted-foreground mb-1">Mon-Fri from 8am to 5pm.</p>
                        <a href="tel:+27645158024" className="text-foreground hover:text-accent font-medium transition-colors">
                            +27 64 515 8024
                        </a>
                    </div>
                </div>

                <div className="flex items-start gap-4 p-6 rounded-2xl bg-muted/50 border border-border/50">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                        <Mail className="h-6 w-6" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-1">Email Address</h3>
                        <p className="text-muted-foreground mb-1">For general inquiries and support.</p>
                        <a href="mailto:hello@skillhub.africa" className="text-foreground hover:text-accent font-medium transition-colors">
                            hello@skillhub.africa
                        </a>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}
