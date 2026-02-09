"use client"

import { motion } from "motion/react"
import { MotionSection, MotionDiv, fadeInUp } from "@/components/motion"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, ArrowRight, ArrowUpRight } from "lucide-react"

const events = [
  {
    type: "Procurement Management",
    title: "Advanced Supervisory Management Skills",
    date: "18 - 22 August 2026",
    time: "9:00 AM - 5:00 PM",
    location: "Sandton, South Africa",
    color: "bg-accent/10 text-accent border-accent/20",
  },
  {
    type: "Procurement Management",
    title: "Advanced Principles in Ports & Marine Terminals Management",
    date: "15 - 19 September, 2026",
    time: "2:00 PM - 6:00 PM",
    location: "Durban, South Africa",
    color: "bg-primary/10 text-primary border-primary/20",
  },
  {
    type: "Procurement Management",
    title: "AI and Data Analytics in Operations & International Conference on Global Logisics",
    date: "20 - 24 October, 2026",
    time: "6:00 PM - 9:00 PM",
    location: "Dubai, UAE",
    color: "bg-emerald-500/10 text-emerald-700 border-emerald-500/20",
  },

]

export function Events() {
  return (
    <MotionSection id="events" className="py-24 lg:py-36 bg-muted/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <MotionDiv variants={fadeInUp}>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Upcoming Events
              </span>
            </MotionDiv>
            <MotionDiv variants={fadeInUp}>
              <h2 className="mt-4 font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-[2.75rem] text-balance">
                Connect, Learn & Grow
              </h2>
            </MotionDiv>
          </div>
          <MotionDiv variants={fadeInUp}>
            <Button variant="outline" className="shrink-0 bg-transparent group" asChild>
              <a href="#events">
                All Events
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </MotionDiv>
        </div>

        <motion.div
          className="mt-12 grid gap-6 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.12 },
            },
          }}
        >
          {events.map((event, i) => (
            <motion.div
              key={event.title}
              variants={fadeInUp}
              className="group"
            >
              <div className="relative h-full overflow-hidden rounded-2xl border border-border/50 bg-card p-6 lg:p-8 transition-all duration-500 hover:shadow-xl hover:shadow-primary/[0.04] hover:border-border">
                {/* Top accent line */}
                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

                <div className="flex items-start justify-between">
                  <span className={`inline-flex rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-wide ${event.color}`}>
                    {event.type}
                  </span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-muted-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-semibold text-foreground leading-snug">
                  {event.title}
                </h3>

                <div className="mt-6 flex flex-col gap-3">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary shrink-0">
                      <Calendar className="h-4 w-4 text-foreground" />
                    </div>
                    {event.date}
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary shrink-0">
                      <Clock className="h-4 w-4 text-foreground" />
                    </div>
                    {event.time}
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary shrink-0">
                      <MapPin className="h-4 w-4 text-foreground" />
                    </div>
                    {event.location}
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-border/50">
                  <button
                    type="button"
                    className="text-sm font-medium text-accent flex items-center gap-1.5 hover:gap-2.5 transition-all duration-300"
                  >
                    Register Now
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </MotionSection>
  )
}
