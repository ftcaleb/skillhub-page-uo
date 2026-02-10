"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { motion } from "motion/react"
import { fadeInUp } from "@/components/motion"

export function ContactForm() {
    return (
        <motion.div variants={fadeInUp} className="h-full">
            <div className="rounded-3xl border border-border/50 bg-card p-8 lg:p-10 shadow-sm h-full">
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-foreground">Send Us a Message</h2>
                    <p className="text-muted-foreground mt-2">
                        Fill out the form below and we'll get back to you as soon as possible.
                    </p>
                </div>

                <form className="space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                        <div className="space-y-2">
                            <Label htmlFor="first-name" className="text-sm font-medium">First name</Label>
                            <Input id="first-name" placeholder="John" className="h-12 rounded-xl border-border/60 bg-muted/30 focus-visible:ring-accent/30" required />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="last-name" className="text-sm font-medium">Last name</Label>
                            <Input id="last-name" placeholder="Doe" className="h-12 rounded-xl border-border/60 bg-muted/30 focus-visible:ring-accent/30" required />
                        </div>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-sm font-medium">Email address</Label>
                            <Input id="email" type="email" placeholder="john@example.com" className="h-12 rounded-xl border-border/60 bg-muted/30 focus-visible:ring-accent/30" required />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="phone" className="text-sm font-medium">Phone number</Label>
                            <Input id="phone" type="tel" placeholder="+27 64 515 8024" className="h-12 rounded-xl border-border/60 bg-muted/30 focus-visible:ring-accent/30" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="inquiry-type" className="text-sm font-medium">Inquiry Type</Label>
                        <Select>
                            <SelectTrigger id="inquiry-type" className="h-12 rounded-xl border-border/60 bg-muted/30 focus-visible:ring-accent/30 text-muted-foreground">
                                <SelectValue placeholder="Select an option" />
                            </SelectTrigger>
                            <SelectContent className="rounded-xl border-border shadow-lg">
                                <SelectItem value="general">General Inquiry</SelectItem>
                                <SelectItem value="admissions">Admissions</SelectItem>
                                <SelectItem value="courses">Course Information</SelectItem>
                                <SelectItem value="partnership">Industry Partnership</SelectItem>
                                <SelectItem value="support">Technical Support</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="message" className="text-sm font-medium">Message</Label>
                        <Textarea
                            id="message"
                            placeholder="How can we help you?"
                            className="min-h-[160px] rounded-2xl border-border/60 bg-muted/30 focus-visible:ring-accent/30 resize-none p-4"
                            required
                        />
                    </div>

                    <Button type="submit" className="w-full h-14 text-base font-semibold rounded-2xl bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg shadow-accent/20 transition-all duration-300">
                        Send Message
                    </Button>
                </form>
            </div>
        </motion.div>
    )
}
