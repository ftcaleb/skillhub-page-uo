"use client"

import { motion } from "motion/react"
import { MotionSection, MotionDiv, fadeInUp, slideInLeft } from "@/components/motion"
import { CheckCircle } from "lucide-react"
import Image from "next/image"

const pillars = [
  "World-class research facilities and partnerships",
  "Internationally recognized facilities and mentors",
  "Industry-aligned curriculum with hands-on learning",
  "Vibrant multicultural campus community",
]

export function About() {
  return (
    <MotionSection id="about" className="py-24 lg:py-36 bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Image side */}
          <MotionDiv variants={slideInLeft} className="relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
              <Image
                src="/asset/img1.webp"
                alt="Students collaborating in a modern study space"
                fill
                className="object-cover"
                quality={85}
              />
              {/* Overlay accent */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[hsl(222,47%,11%)]/20 to-transparent" />
            </div>

            {/* Floating card */}
            <motion.div
              className="absolute -bottom-6 -right-4 lg:-right-8 bg-card rounded-xl p-5 shadow-xl border border-border/50 max-w-[220px]"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="h-8 w-8 rounded-full border-2 border-card bg-secondary"
                    />
                  ))}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">3450+</p>
                  <p className="text-xs text-muted-foreground">Professionals Trained</p>
                </div>
              </div>
            </motion.div>

            {/* Decorative border element */}
            <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl border-2 border-accent/20 -z-10" />
          </MotionDiv>

          {/* Text side */}
          <div className="flex flex-col">
            <MotionDiv variants={fadeInUp}>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                About SkillHub International
              </span>
            </MotionDiv>

            <MotionDiv variants={fadeInUp}>
              <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-[2.75rem] lg:leading-tight text-balance">
                Two Decades of Academic Excellence and Innovation
              </h2>
            </MotionDiv>

            <MotionDiv variants={fadeInUp}>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground lg:text-lg lg:leading-relaxed">
                Based in South Africa and operating internationally, we design and deliver high-impact short courses, executive programmes, learnerships, and professional certifications that are practical, relevant, and aligned with modern organisational needs. Our programmes are delivered online, in-house at client premises, or at neutral training venues in major cities worldwide.
              </p>
            </MotionDiv>

            <MotionDiv variants={fadeInUp}>
              <ul className="mt-8 flex flex-col gap-4">
                {pillars.map((pillar) => (
                  <li key={pillar} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 mt-0.5 text-accent shrink-0" />
                    <span className="text-sm font-medium text-foreground">{pillar}</span>
                  </li>
                ))}
              </ul>
            </MotionDiv>

            <MotionDiv variants={fadeInUp}>
              <div className="mt-10 flex items-center gap-8">
                <div>
                  <p className="text-3xl font-bold text-foreground">98%</p>
                  <p className="text-xs text-muted-foreground font-medium mt-0.5">
                    Satisfied Learners
                  </p>
                </div>
                <div className="h-12 w-px bg-border" />
                <div>
                  <p className="text-3xl font-bold text-foreground">50+</p>
                  <p className="text-xs text-muted-foreground font-medium mt-0.5">
                    Countries Reached
                  </p>
                </div>
                <div className="h-12 w-px bg-border" />
                <div>
                  <p className="text-3xl font-bold text-foreground">3450+</p>
                  <p className="text-xs text-muted-foreground font-medium mt-0.5">
                    Professionals Trained
                  </p>
                </div>
              </div>
            </MotionDiv>
          </div>
        </div>
      </div>
    </MotionSection>
  )
}
