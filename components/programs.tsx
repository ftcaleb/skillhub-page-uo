"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { MotionSection, MotionDiv, fadeInUp } from "@/components/motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Clock, BarChart3, Users, Sparkles, Cpu, TrendingUp, Globe } from "lucide-react"

const categories = ["All", "Executive", "Professional", "Technology", "Finance"]

const programs = [
  {
    category: "Executive",
    name: "Executive Leadership Program",
    description: "Develop transformational leadership skills for the modern business landscape through immersive case studies and global simulations.",
    duration: "12 Weeks",
    level: "Advanced",
    enrolled: "2,500",
    icon: Sparkles,
    featured: true,
  },
  {
    category: "Professional",
    name: "Strategic Business Management",
    description: "Master strategic thinking and decision-making frameworks used by Fortune 500 executives worldwide.",
    duration: "8 Weeks",
    level: "Intermediate",
    enrolled: "3,200",
    icon: TrendingUp,
    featured: false,
  },
  {
    category: "Technology",
    name: "Digital Innovation & AI",
    description: "Navigate the digital transformation journey with confidence. From machine learning to product strategy.",
    duration: "10 Weeks",
    level: "Intermediate",
    enrolled: "1,800",
    icon: Cpu,
    featured: false,
  },
  {
    category: "Finance",
    name: "Global Finance & Economics",
    description: "Understand global financial markets, investment strategies, and economic principles that drive growth.",
    duration: "6 Weeks",
    level: "Advanced",
    enrolled: "2,100",
    icon: Globe,
    featured: false,
  },
]

export function Programs() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filtered =
    activeCategory === "All"
      ? programs
      : programs.filter((p) => p.category === activeCategory)

  return (
    <MotionSection id="programs" className="py-24 lg:py-36 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <MotionDiv variants={fadeInUp}>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Featured Programs
              </span>
            </MotionDiv>
            <MotionDiv variants={fadeInUp}>
              <h2 className="mt-4 font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-[2.75rem] text-balance">
                Discover World-Class Courses
              </h2>
            </MotionDiv>
            <MotionDiv variants={fadeInUp}>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Each program is meticulously designed with industry leaders to deliver real-world competencies.
              </p>
            </MotionDiv>
          </div>

          <MotionDiv variants={fadeInUp}>
            <Button variant="outline" className="shrink-0 bg-transparent group" asChild>
              <a href="#programs">
                View All Courses
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </MotionDiv>
        </div>

        {/* Category filters */}
        <MotionDiv variants={fadeInUp} className="mt-10">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                  activeCategory === cat
                    ? "text-accent-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {activeCategory === cat && (
                  <motion.span
                    layoutId="program-filter"
                    className="absolute inset-0 rounded-full bg-accent"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </div>
        </MotionDiv>

        <motion.div
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((program) => (
              <motion.div
                key={program.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="group"
              >
                <div className={`relative h-full overflow-hidden rounded-2xl border transition-all duration-500 ${
                  program.featured
                    ? "border-accent/30 bg-card shadow-lg shadow-accent/[0.06]"
                    : "border-border/50 bg-card hover:shadow-xl hover:shadow-primary/[0.04] hover:border-border"
                }`}>
                  {program.featured && (
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
                  )}

                  <div className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/5 ring-1 ring-primary/10 transition-all duration-300 group-hover:bg-accent/10 group-hover:ring-accent/20">
                        <program.icon className="h-5 w-5 text-primary transition-colors duration-300 group-hover:text-accent" />
                      </div>
                      {program.featured && (
                        <Badge className="bg-accent/10 text-accent border-accent/20 text-[10px]">
                          Popular
                        </Badge>
                      )}
                    </div>

                    <div className="mt-5">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                        {program.category}
                      </p>
                      <h3 className="mt-1.5 text-base font-semibold leading-snug text-foreground">
                        {program.name}
                      </h3>
                    </div>

                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                      {program.description}
                    </p>

                    <div className="mt-5 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {program.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <BarChart3 className="h-3.5 w-3.5" />
                        {program.level}
                      </span>
                    </div>

                    <div className="mt-5 pt-5 border-t border-border/50 flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Users className="h-3.5 w-3.5" />
                        <span className="font-semibold text-foreground">{program.enrolled}</span>
                        {" enrolled"}
                      </span>
                      <span className="text-xs font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1">
                        Learn more
                        <ArrowRight className="h-3 w-3" />
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </MotionSection>
  )
}
