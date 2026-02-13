"use client"

import { motion } from "motion/react"
import { MotionSection, MotionDiv, fadeInUp, slideInLeft, slideInRight } from "@/components/motion"
import {
  Target,
  Eye,
  Heart,
  Lightbulb,
  Users,
  Globe,
  GraduationCap,
  Briefcase,
} from "lucide-react"
import Image from "next/image"

/* ─── Mission, Vision & Voice ─── */
function MissionVisionVoice() {
  return (
    <MotionSection className="py-20 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-20">
          {/* Mission */}
          <MotionDiv variants={slideInLeft}>
            <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-card p-8 lg:p-10 h-full transition-all duration-500 hover:shadow-xl hover:shadow-primary/[0.03] hover:border-border group">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-accent/[0.03] via-transparent to-transparent" />
              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 ring-1 ring-accent/20">
                  <Target className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mt-6 font-serif text-2xl font-bold text-foreground lg:text-3xl">
                  Our Mission
                </h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground lg:text-lg lg:leading-relaxed">
                  Deliver world-class, borderless education that empowers real-world success.
                </p>
              </div>
            </div>
          </MotionDiv>

          {/* Vision */}
          <MotionDiv variants={slideInRight}>
            <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-card p-8 lg:p-10 h-full transition-all duration-500 hover:shadow-xl hover:shadow-primary/[0.03] hover:border-border group">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-accent/[0.03] via-transparent to-transparent" />
              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/20">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-6 font-serif text-2xl font-bold text-foreground lg:text-3xl">
                  Our Vision
                </h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground lg:text-lg lg:leading-relaxed">
                  Lead global skill transformation by unlocking talent everywhere.
                </p>
              </div>
            </div>
          </MotionDiv>

          {/* Voice */}
          <MotionDiv variants={slideInLeft}>
            <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-card p-8 lg:p-10 h-full transition-all duration-500 hover:shadow-xl hover:shadow-primary/[0.03] hover:border-border group">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-accent/[0.03] via-transparent to-transparent" />
              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 ring-1 ring-accent/20">
                  <Target className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mt-6 font-serif text-2xl font-bold text-foreground lg:text-3xl">
                  Our Voice
                </h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground lg:text-lg lg:leading-relaxed">
                  Professional, inspiring, and empowering—clear, inclusive, and purpose-driven.
                </p>
              </div>
            </div>
          </MotionDiv>
        </div>
      </div>
    </MotionSection>
  )
}

/* ─── Story with Image ─── */
function OurStory() {
  return (
    <MotionSection className="py-20 lg:py-32 bg-muted/50 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <MotionDiv variants={slideInLeft} className="relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
              <Image
                src="/asset/img1.jpg"
                alt="Students collaborating in a modern study space"
                fill
                className="object-cover"
                quality={85}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[hsl(222,47%,11%)]/20 to-transparent" />
            </div>
            <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl border-2 border-accent/20 -z-10" />
          </MotionDiv>

          <div>
            <MotionDiv variants={fadeInUp}>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Learn with us
              </span>
            </MotionDiv>
            <MotionDiv variants={fadeInUp}>
              <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-[2.75rem] lg:leading-tight text-balance">
                Why Choose SkillHub International?
              </h2>
            </MotionDiv>
            <MotionDiv variants={fadeInUp}>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground lg:text-lg lg:leading-relaxed">
                At SkillHub International, we are passionate about providing an exceptional learning experience.
                Guided by expert instructors and enriched with cutting-edge materials, our mission is
                to equip you with the vital knowledge and skills to excel in today's dynamic business landscape.
              </p>
            </MotionDiv>
            <MotionDiv variants={fadeInUp}>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground lg:text-lg lg:leading-relaxed">
                Whether you're an individual eager to elevate your career or an organization focused on enhancing
                performance, SkillHub International offers tailored learning experiences to meet your specific
                objectives. We are driven by a commitment to provide efficient, effective, and insightful education
                that equips you for a successful future in business management.
              </p>
            </MotionDiv>
          </div>
        </div>
      </div>
    </MotionSection>
  )
}

/* ─── Core Values ─── */
const values = [
  {
    icon: Heart,
    title: "Integrity",
    description:
      "We uphold the highest ethical standards in teaching, research, and institutional governance.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We embrace creative thinking and disruptive approaches to solve the world's most complex challenges.",
  },
  {
    icon: Users,
    title: "Inclusivity",
    description:
      "We celebrate diversity of thought, culture, and background as the foundation of great learning.",
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description:
      "We prepare graduates to lead across borders, cultures, and industries with confidence.",
  },
]

function CoreValues() {
  return (
    <MotionSection className="py-20 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <MotionDiv variants={fadeInUp}>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              What Guides Us
            </span>
          </MotionDiv>
          <MotionDiv variants={fadeInUp}>
            <h2 className="mt-4 font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-[2.75rem] text-balance">
              Our Core Values
            </h2>
          </MotionDiv>
        </div>

        <motion.div
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {values.map((value) => (
            <motion.div key={value.title} variants={fadeInUp} className="group">
              <div className="relative h-full overflow-hidden rounded-2xl border border-border/50 bg-card p-7 text-center transition-all duration-500 hover:shadow-xl hover:shadow-primary/[0.04] hover:border-border hover:-translate-y-1">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-accent/[0.03] via-transparent to-transparent" />
                <div className="relative">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 ring-1 ring-primary/10 transition-all duration-300 group-hover:bg-accent/10 group-hover:ring-accent/20">
                    <value.icon className="h-6 w-6 text-primary transition-colors duration-300 group-hover:text-accent" />
                  </div>
                  <h3 className="mt-5 text-base font-semibold text-foreground">
                    {value.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </MotionSection>
  )
}

/* ─── Timeline ─── */
const milestones = [
  {
    year: "1999",
    title: "Larreth Investments",
    description: "Founded in Zimbabwe.",
  },
  {
    year: "2018",
    title: "Larreth Group",
    description: "Launched in South Africa.",
  },
  {
    year: "2020",
    title: "Larreth Group Eswatini",
    description: "Launched a new branch in Swaziland.",
  },
  {
    year: "2022",
    title: "Larreth Group The Gambia",
    description: "Launched a new branch in The Gambia.",
  },
  {
    year: "2025",
    title: "Skillhub International",
    description: "Larreth Group changed to SkillHub International Pty Ltd.",
  },
]

function Timeline() {
  return (
    <MotionSection id="milestones" className="py-20 lg:py-32 bg-muted/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <MotionDiv variants={fadeInUp}>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Our Journey
            </span>
          </MotionDiv>
          <MotionDiv variants={fadeInUp}>
            <h2 className="mt-4 font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-[2.75rem] text-balance">
              Milestones That Define Us
            </h2>
          </MotionDiv>
        </div>

        <div className="relative mt-16 max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border lg:left-1/2 lg:-translate-x-px" />

          {milestones.map((item, i) => (
            <motion.div
              key={item.year}
              className={`relative flex items-start gap-8 pb-14 last:pb-0 ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* Dot */}
              <div className="absolute left-6 lg:left-1/2 -translate-x-1/2 flex h-3 w-3 items-center justify-center">
                <span className="h-3 w-3 rounded-full bg-accent ring-4 ring-background" />
              </div>

              {/* Content */}
              <div
                className={`ml-14 lg:ml-0 lg:w-[calc(50%-2rem)] ${i % 2 === 0
                  ? "lg:text-right lg:pr-8"
                  : "lg:text-left lg:pl-8 lg:ml-auto"
                  }`}
              >
                <span className="text-sm font-bold text-accent">{item.year}</span>
                <h3 className="mt-1 text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </MotionSection>
  )
}

/* ─── Impact Stats ─── */
const stats = [
  { icon: GraduationCap, value: "20+", label: "Years of Experience" },
  { icon: Globe, value: "3450+", label: "Professionals trained" },
  { icon: Briefcase, value: "98%", label: "Satisfied Learners" },
  { icon: Users, value: "200+", label: "Expert Faculty" },
]

function ImpactStats() {
  return (
    <MotionSection className="py-20 lg:py-32 bg-primary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <MotionDiv variants={fadeInUp}>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              By The Numbers
            </span>
          </MotionDiv>
          <MotionDiv variants={fadeInUp}>
            <h2 className="mt-4 font-serif text-3xl font-bold text-primary-foreground md:text-4xl lg:text-[2.75rem] text-balance">
              Our Impact in Numbers
            </h2>
          </MotionDiv>
        </div>

        <motion.div
          className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              className="text-center group"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-primary-foreground/5 ring-1 ring-primary-foreground/10 transition-all duration-300 group-hover:bg-accent/20 group-hover:ring-accent/30">
                <stat.icon className="h-7 w-7 text-primary-foreground/70 transition-colors duration-300 group-hover:text-accent" />
              </div>
              <p className="mt-5 text-4xl font-bold tracking-tight text-primary-foreground">
                {stat.value}
              </p>
              <p className="mt-1.5 text-sm text-primary-foreground/50 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </MotionSection>
  )
}

/* ─── Composed About Content ─── */
export function AboutContent() {
  return (
    <>
      <MissionVisionVoice />
      <OurStory />
      <CoreValues />
      <Timeline />
      <ImpactStats />
    </>
  )
}
