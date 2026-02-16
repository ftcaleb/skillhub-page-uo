"use client"

import { motion } from "motion/react"
import { MotionSection, MotionDiv, fadeInUp } from "@/components/motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Clock,
    Users,
    BookOpen,
    Download,
    CheckCircle2,
    ChevronDown,
} from "lucide-react"
import { Course } from "@/lib/courses-data"
import { useState } from "react"
import Link from "next/link"

interface CourseDetailProps {
    course: Course
}

export function CourseDetail({ course }: CourseDetailProps) {
    const [activeTab, setActiveTab] = useState<"overview" | "curriculum" | "audience">("overview")
    const [expandedModules, setExpandedModules] = useState<Set<number>>(new Set([1]))

    const toggleModule = (moduleNum: number) => {
        const newExpanded = new Set(expandedModules)
        if (newExpanded.has(moduleNum)) {
            newExpanded.delete(moduleNum)
        } else {
            newExpanded.add(moduleNum)
        }
        setExpandedModules(newExpanded)
    }

    return (
        <MotionSection className="py-16 lg:py-24 bg-background">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Hero Section */}
                <MotionDiv variants={fadeInUp} className="relative overflow-hidden rounded-3xl border border-border/50 bg-card p-8 lg:p-12">
                    {/* Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 pointer-events-none" />

                    <div className="relative z-10">
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                            <Badge className="bg-accent/10 text-accent border-accent/20 text-xs">
                                {course.type}
                            </Badge>
                            {course.popular && (
                                <Badge className="bg-primary/10 text-primary border-primary/20 text-xs">
                                    Popular
                                </Badge>
                            )}
                        </div>

                        <h1 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
                            {course.title}
                        </h1>

                        {course.shortDesc && (
                            <p className="text-lg text-muted-foreground mb-6 max-w-3xl">
                                {course.shortDesc}
                            </p>
                        )}

                        <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                            <span className="flex items-center gap-2">
                                <Clock className="h-4 w-4" />
                                {course.duration}
                            </span>
                            <span className="flex items-center gap-2">
                                <BookOpen className="h-4 w-4" />
                                {course.content.length} Modules
                            </span>
                            <span className="flex items-center gap-2">
                                <Users className="h-4 w-4" />
                                Professional Development
                            </span>
                        </div>

                        <div className="mt-8 flex flex-wrap gap-4">
                            <Button size="lg" className="bg-accent hover:bg-accent/90" asChild>
                                <Link href={`/courses/${course.slg}/enroll`}>
                                    Enroll Now
                                </Link>
                            </Button>
                            {/* {course.brochure && (
                                <Button
                                    size="lg"
                                    variant="outline"
                                    asChild
                                >
                                    <a href={course.brochure} target="_blank" rel="noopener noreferrer">
                                        <Download className="h-4 w-4 mr-2" />
                                        Download Brochure
                                    </a>
                                </Button>
                            )} */}
                        </div>
                    </div>
                </MotionDiv>

                {/* Tabs */}
                <MotionDiv variants={fadeInUp} className="mt-12">
                    <div className="flex flex-wrap gap-2 border-b border-border/50">
                        {(["overview", "curriculum", "audience"] as const).map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`relative px-6 py-3 text-sm font-medium transition-colors capitalize ${activeTab === tab
                                    ? "text-accent"
                                    : "text-muted-foreground hover:text-foreground"
                                    }`}
                            >
                                {activeTab === tab && (
                                    <motion.span
                                        layoutId="activeTab"
                                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                                {tab}
                            </button>
                        ))}
                    </div>
                </MotionDiv>

                {/* Tab Content */}
                <div className="mt-8">
                    {activeTab === "overview" && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className="grid gap-8 lg:grid-cols-3"
                        >
                            <div className="lg:col-span-2">
                                <div className="rounded-2xl border border-border/50 bg-card p-8">
                                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                                        Course Overview
                                    </h2>
                                    <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                                        {course.overview}
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="rounded-2xl border border-border/50 bg-card p-6">
                                    <h3 className="text-lg font-semibold text-foreground mb-4">
                                        {course.objectives.title}
                                    </h3>
                                    <ul className="space-y-3">
                                        {course.objectives.data.map((objective, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                                                <span>{objective}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {activeTab === "curriculum" && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-4"
                        >
                            {course.content.map((module) => (
                                <div
                                    key={module.module}
                                    className="rounded-2xl border border-border/50 bg-card overflow-hidden"
                                >
                                    <button
                                        onClick={() => toggleModule(module.module)}
                                        className="w-full flex items-center justify-between p-6 text-left hover:bg-accent/5 transition-colors"
                                    >
                                        <div>
                                            <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                                                Module {module.module}
                                            </span>
                                            <h3 className="text-lg font-semibold text-foreground mt-1">
                                                {module.lessons.length} Lessons
                                            </h3>
                                        </div>
                                        <ChevronDown
                                            className={`h-5 w-5 text-muted-foreground transition-transform ${expandedModules.has(module.module) ? "rotate-180" : ""
                                                }`}
                                        />
                                    </button>

                                    {expandedModules.has(module.module) && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="border-t border-border/50"
                                        >
                                            <ul className="p-6 space-y-3">
                                                {module.lessons.map((lesson, idx) => (
                                                    <li
                                                        key={idx}
                                                        className="flex items-start gap-3 text-sm text-muted-foreground"
                                                    >
                                                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/10 text-accent text-xs font-medium flex-shrink-0">
                                                            {idx + 1}
                                                        </span>
                                                        <span className="pt-0.5">{lesson}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </motion.div>
                                    )}
                                </div>
                            ))}
                        </motion.div>
                    )}

                    {activeTab === "audience" && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className="rounded-2xl border border-border/50 bg-card p-8"
                        >
                            <h2 className="text-2xl font-semibold text-foreground mb-6">
                                Who Should Attend
                            </h2>
                            <ul className="grid gap-4 sm:grid-cols-2">
                                {course.audience.map((person, idx) => (
                                    <li
                                        key={idx}
                                        className="flex items-start gap-3 text-muted-foreground"
                                    >
                                        <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                                        <span>{person}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </div>

                {/* CTA Section */}
                <MotionDiv variants={fadeInUp} className="mt-16">
                    <div className="relative overflow-hidden rounded-3xl border border-accent/30 bg-gradient-to-br from-accent/10 via-card to-primary/10 p-8 lg:p-12 text-center">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,hsl(var(--accent)/0.1),transparent_50%)] pointer-events-none" />

                        <div className="relative z-10">
                            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                                Ready to Transform Your Career?
                            </h2>
                            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                                Join thousands of professionals who have advanced their careers with our world-class training programs.
                            </p>
                            <div className="flex flex-wrap gap-4 justify-center">
                                <Button size="lg" className="bg-accent hover:bg-accent/90" asChild>
                                    <Link href={`/courses/${course.slg}/enroll`}>
                                        Enroll Now
                                    </Link>
                                </Button>
                                <Button size="lg" variant="outline" asChild>
                                    <Link href="/courses">
                                        Browse All Courses
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </MotionDiv>
            </div>
        </MotionSection>
    )
}
