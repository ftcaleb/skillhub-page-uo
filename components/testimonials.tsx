"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { MotionSection, MotionDiv, fadeInUp } from "@/components/motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Dr. Sarah Chen",
    role: "Chief Innovation Officer at Meridian Tech",
    image: "/images/testimonial-1.jpg",
    quote: "The Executive Leadership Program transformed how I approach complex organizational challenges. The faculty's real-world experience and the peer network I built have been invaluable to my career trajectory.",
    cohort: "Class of 2018",
  },
  {
    name: "James Whitfield",
    role: "Managing Partner at Atlas Consulting",
    image: "/images/testimonial-2.jpg",
    quote: "Ascend Institute doesn't just teach theory. They create environments where you solve real problems with brilliant people from around the world. That experience changed my career fundamentally.",
    cohort: "Class of 2015",
  },
  {
    name: "Priya Venkatesh",
    role: "VP of Product at Nomad Health",
    image: "/images/testimonial-3.jpg",
    quote: "The global perspective I gained at Ascend is something I carry into every boardroom. The connections I made here span six continents and have opened doors I never imagined possible.",
    cohort: "Class of 2020",
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))

  return (
    <MotionSection id="testimonials" className="py-24 lg:py-36 bg-primary overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Text side */}
          <div>
            <MotionDiv variants={fadeInUp}>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Alumni Stories
              </span>
            </MotionDiv>
            <MotionDiv variants={fadeInUp}>
              <h2 className="mt-4 font-serif text-3xl font-bold text-primary-foreground md:text-4xl lg:text-[2.75rem] lg:leading-tight text-balance">
                Voices of Excellence
              </h2>
            </MotionDiv>

            <MotionDiv variants={fadeInUp}>
              <div className="mt-10 relative min-h-[280px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Quote className="h-8 w-8 text-accent/40 mb-6" />
                    <blockquote className="text-lg leading-relaxed text-primary-foreground/80 lg:text-xl lg:leading-relaxed">
                      {testimonials[current].quote}
                    </blockquote>
                    <div className="mt-8 flex items-center gap-4">
                      <div className="relative h-12 w-12 rounded-full overflow-hidden ring-2 ring-accent/30">
                        <Image
                          src={testimonials[current].image || "/placeholder.svg"}
                          alt={testimonials[current].name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-primary-foreground">
                          {testimonials[current].name}
                        </p>
                        <p className="text-xs text-primary-foreground/50">
                          {testimonials[current].role}
                        </p>
                        <p className="text-[10px] font-medium uppercase tracking-wider text-accent/70 mt-0.5">
                          {testimonials[current].cohort}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </MotionDiv>

            <MotionDiv variants={fadeInUp}>
              <div className="mt-8 flex items-center gap-4">
                <button
                  type="button"
                  onClick={prev}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/20 text-primary-foreground/60 transition-all hover:border-primary-foreground/40 hover:text-primary-foreground"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <div className="flex items-center gap-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={`testimonial-dot-${i}`}
                      type="button"
                      onClick={() => setCurrent(i)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? "w-8 bg-accent" : "w-1.5 bg-primary-foreground/20"
                        }`}
                      aria-label={`Go to testimonial ${i + 1}`}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  onClick={next}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/20 text-primary-foreground/60 transition-all hover:border-primary-foreground/40 hover:text-primary-foreground"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </MotionDiv>
          </div>

          {/* Image side with stacked photos */}
          <MotionDiv variants={fadeInUp} className="relative hidden lg:block">
            <div className="relative h-[500px]">
              {testimonials.map((t, i) => {
                const isCurrent = i === current
                const offset = i - current
                return (
                  <motion.div
                    key={t.name}
                    className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl"
                    animate={{
                      scale: isCurrent ? 1 : 0.9 - Math.abs(offset) * 0.05,
                      x: offset * 30,
                      y: offset * 15,
                      opacity: isCurrent ? 1 : 0.4,
                      zIndex: testimonials.length - Math.abs(offset),
                      rotateY: offset * 3,
                    }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Image
                      src={t.image || "/placeholder.svg"}
                      alt={t.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[hsl(222,47%,11%)]/60 to-transparent" />
                  </motion.div>
                )
              })}
            </div>
          </MotionDiv>
        </div>
      </div>
    </MotionSection>
  )
}
