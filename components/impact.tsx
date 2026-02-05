"use client"

import React from "react"

import { useEffect, useRef, useState } from "react"
import { motion } from "motion/react"
import { MotionSection, MotionDiv, fadeInUp } from "@/components/motion"
import { GraduationCap, Globe, Briefcase, Users } from "lucide-react"

const metrics = [
  {
    icon: GraduationCap,
    target: 15000,
    suffix: "+",
    label: "Graduates Worldwide",
    description: "Alumni making impact across every major industry",
  },
  {
    icon: Globe,
    target: 50,
    suffix: "+",
    label: "Countries Represented",
    description: "A truly global and diverse learning community",
  },
  {
    icon: Briefcase,
    target: 94,
    suffix: "%",
    label: "Employment Rate",
    description: "Graduates employed within six months",
  },
  {
    icon: Users,
    target: 200,
    suffix: "+",
    label: "Expert Faculty",
    description: "Industry leaders and world-class academics",
  },
]

function useCountUp(target: number, isVisible: boolean) {
  const [count, setCount] = useState(0)
  const hasRun = useRef(false)

  useEffect(() => {
    if (!isVisible || hasRun.current) return
    hasRun.current = true

    const duration = 2000
    const startTime = performance.now()
    const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4)

    let frameId: number
    function animate(now: number) {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      setCount(Math.floor(easeOutQuart(progress) * target))
      if (progress < 1) {
        frameId = requestAnimationFrame(animate)
      } else {
        setCount(target)
      }
    }

    frameId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frameId)
  }, [target, isVisible])

  return count
}

function MetricCard({
  icon: Icon,
  target,
  suffix,
  label,
  description,
  isVisible,
  index,
}: (typeof metrics)[0] & { isVisible: boolean; index: number }) {
  const count = useCountUp(target, isVisible)

  return (
    <motion.div
      variants={fadeInUp}
      className="group relative"
    >
      <div className="relative overflow-hidden rounded-2xl bg-card border border-border/50 p-8 transition-all duration-500 hover:shadow-xl hover:shadow-primary/[0.04] hover:border-border">
        {/* Spotlight effect on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-accent/[0.03] via-transparent to-transparent" />

        <div className="relative">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 ring-1 ring-primary/10 transition-all duration-300 group-hover:bg-accent/10 group-hover:ring-accent/20">
            <Icon className="h-6 w-6 text-primary transition-colors duration-300 group-hover:text-accent" />
          </div>

          <div className="mt-6">
            <p className="text-4xl font-bold tracking-tight text-foreground lg:text-5xl">
              {count.toLocaleString()}
              <span className="text-accent">{suffix}</span>
            </p>
          </div>

          <h3 className="mt-2 text-base font-semibold text-foreground">{label}</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{description}</p>
        </div>
      </div>
    </motion.div>
  )
}

export function Impact() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <MotionSection id="impact" className="py-24 lg:py-36 bg-muted/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8" ref={sectionRef as unknown as React.RefObject<HTMLDivElement>}>
        <div className="mx-auto max-w-2xl text-center">
          <MotionDiv variants={fadeInUp}>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Our Impact
            </span>
          </MotionDiv>
          <MotionDiv variants={fadeInUp}>
            <h2 className="mt-4 font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-[2.75rem] text-balance">
              Numbers That Define Excellence
            </h2>
          </MotionDiv>
          <MotionDiv variants={fadeInUp}>
            <p className="mt-4 text-muted-foreground leading-relaxed lg:text-lg">
              Four decades of unwavering commitment to educational excellence, producing leaders who shape the world.
            </p>
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
              transition: { staggerChildren: 0.1, delayChildren: 0.2 },
            },
          }}
        >
          {metrics.map((metric, i) => (
            <MetricCard key={metric.label} {...metric} isVisible={isVisible} index={i} />
          ))}
        </motion.div>
      </div>
    </MotionSection>
  )
}
