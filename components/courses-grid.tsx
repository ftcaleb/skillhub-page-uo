"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "motion/react"
import { MotionSection, MotionDiv, fadeInUp } from "@/components/motion"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Search,
  Clock,
  BarChart3,
  Users,
  ArrowRight,
  Sparkles,
  Cpu,
  TrendingUp,
  Globe,
  BookOpen,
  Lightbulb,
  Shield,
  Briefcase,
} from "lucide-react"

const allCourses = [
  {
    category: "Executive",
    type: "Certificate",
    name: "Executive Leadership Program",
    description:
      "Develop transformational leadership skills for the modern business landscape through immersive case studies and global simulations.",
    duration: "12 Weeks",
    level: "Advanced",
    enrolled: "2,500",
    icon: Sparkles,
    featured: true,
  },
  {
    category: "Professional",
    type: "Diploma",
    name: "Strategic Business Management",
    description:
      "Master strategic thinking and decision-making frameworks used by Fortune 500 executives worldwide.",
    duration: "8 Weeks",
    level: "Intermediate",
    enrolled: "3,200",
    icon: TrendingUp,
    featured: false,
  },
  {
    category: "Technology",
    type: "Certificate",
    name: "Digital Innovation & AI",
    description:
      "Navigate the digital transformation journey with confidence. From machine learning to product strategy.",
    duration: "10 Weeks",
    level: "Intermediate",
    enrolled: "1,800",
    icon: Cpu,
    featured: false,
  },
  {
    category: "Finance",
    type: "Diploma",
    name: "Global Finance & Economics",
    description:
      "Understand global financial markets, investment strategies, and economic principles that drive growth.",
    duration: "6 Weeks",
    level: "Advanced",
    enrolled: "2,100",
    icon: Globe,
    featured: false,
  },
  {
    category: "Technology",
    type: "Certificate",
    name: "Data Science & Analytics",
    description:
      "Build expertise in data analysis, statistical modelling, and visualization to drive data-informed decisions.",
    duration: "10 Weeks",
    level: "Intermediate",
    enrolled: "1,450",
    icon: BookOpen,
    featured: false,
  },
  {
    category: "Executive",
    type: "Diploma",
    name: "Change Management & Innovation",
    description:
      "Lead organizational change with confidence. Learn frameworks for innovation at scale in complex environments.",
    duration: "8 Weeks",
    level: "Advanced",
    enrolled: "1,900",
    icon: Lightbulb,
    featured: true,
  },
  {
    category: "Professional",
    type: "Certificate",
    name: "Risk Management & Compliance",
    description:
      "Master risk identification, mitigation strategies, and global compliance frameworks for modern enterprises.",
    duration: "6 Weeks",
    level: "Intermediate",
    enrolled: "980",
    icon: Shield,
    featured: false,
  },
  {
    category: "Finance",
    type: "Certificate",
    name: "Investment Banking Foundations",
    description:
      "Gain a thorough grounding in capital markets, M&A processes, valuation methodologies, and deal structuring.",
    duration: "12 Weeks",
    level: "Advanced",
    enrolled: "1,650",
    icon: Briefcase,
    featured: false,
  },
]

const categories = ["All", "Executive", "Professional", "Technology", "Finance"]
const types = ["All Types", "Certificate", "Diploma"]
const durations = ["Any Duration", "6 Weeks", "8 Weeks", "10 Weeks", "12 Weeks"]

export function CoursesGrid() {
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("All")
  const [type, setType] = useState("All Types")
  const [duration, setDuration] = useState("Any Duration")

  const filtered = useMemo(() => {
    return allCourses.filter((course) => {
      const matchSearch =
        !search ||
        course.name.toLowerCase().includes(search.toLowerCase()) ||
        course.description.toLowerCase().includes(search.toLowerCase())
      const matchCategory = category === "All" || course.category === category
      const matchType = type === "All Types" || course.type === type
      const matchDuration =
        duration === "Any Duration" || course.duration === duration
      return matchSearch && matchCategory && matchType && matchDuration
    })
  }, [search, category, type, duration])

  return (
    <MotionSection className="py-16 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Search and filters */}
        <MotionDiv variants={fadeInUp}>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            {/* Search */}
            <div className="relative max-w-md flex-1">
              <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search courses..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10 h-11 bg-card border-border/60 focus-visible:ring-accent/30"
              />
            </div>

            {/* Dropdown filters */}
            <div className="flex flex-wrap items-center gap-3">
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="h-10 rounded-lg border border-border/60 bg-card px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/30"
              >
                {types.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
              <select
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="h-10 rounded-lg border border-border/60 bg-card px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/30"
              >
                {durations.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </MotionDiv>

        {/* Category pills */}
        <MotionDiv variants={fadeInUp} className="mt-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setCategory(cat)}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                  category === cat
                    ? "text-accent-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {category === cat && (
                  <motion.span
                    layoutId="course-filter"
                    className="absolute inset-0 rounded-full bg-accent"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </div>
        </MotionDiv>

        {/* Results count */}
        <div className="mt-8 text-sm text-muted-foreground">
          Showing{" "}
          <span className="font-semibold text-foreground">{filtered.length}</span>{" "}
          {filtered.length === 1 ? "course" : "courses"}
        </div>

        {/* Grid */}
        <motion.div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" layout>
          <AnimatePresence mode="popLayout">
            {filtered.map((course) => (
              <motion.div
                key={course.name}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="group"
              >
                <div
                  className={`relative h-full overflow-hidden rounded-2xl border transition-all duration-500 hover:-translate-y-1 ${
                    course.featured
                      ? "border-accent/30 bg-card shadow-lg shadow-accent/[0.06]"
                      : "border-border/50 bg-card hover:shadow-xl hover:shadow-primary/[0.04] hover:border-border"
                  }`}
                >
                  {/* Spotlight gradient on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-[radial-gradient(600px_circle_at_var(--mouse-x,50%)_var(--mouse-y,0%),hsl(var(--accent)/0.04),transparent_40%)]" />

                  {course.featured && (
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
                  )}

                  <div className="relative p-6 lg:p-7">
                    <div className="flex items-start justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/5 ring-1 ring-primary/10 transition-all duration-300 group-hover:bg-accent/10 group-hover:ring-accent/20">
                        <course.icon className="h-5 w-5 text-primary transition-colors duration-300 group-hover:text-accent" />
                      </div>
                      <div className="flex items-center gap-2">
                        {course.featured && (
                          <Badge className="bg-accent/10 text-accent border-accent/20 text-[10px]">
                            Popular
                          </Badge>
                        )}
                        <Badge
                          variant="outline"
                          className="text-[10px] font-semibold"
                        >
                          {course.type}
                        </Badge>
                      </div>
                    </div>

                    <div className="mt-5">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                        {course.category}
                      </p>
                      <h3 className="mt-1.5 text-lg font-semibold leading-snug text-foreground">
                        {course.name}
                      </h3>
                    </div>

                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                      {course.description}
                    </p>

                    <div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5" />
                        {course.duration}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <BarChart3 className="h-3.5 w-3.5" />
                        {course.level}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Users className="h-3.5 w-3.5" />
                        {course.enrolled}
                      </span>
                    </div>

                    <div className="mt-6 pt-5 border-t border-border/50 flex items-center justify-between">
                      <span className="text-sm font-medium text-foreground">
                        Learn More
                      </span>
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary transition-all duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
                        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-16 text-center py-16"
          >
            <Search className="mx-auto h-10 w-10 text-muted-foreground/30" />
            <h3 className="mt-4 text-lg font-semibold text-foreground">
              No courses found
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Try adjusting your filters or search query.
            </p>
          </motion.div>
        )}
      </div>
    </MotionSection>
  )
}
