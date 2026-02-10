"use client"

import { motion } from "motion/react"
import { MotionSection, MotionDiv, fadeInUp } from "@/components/motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CtaSection() {
  return (
    <MotionSection id="cta" className="py-24 lg:py-36 bg-background relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.015]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-primary p-10 md:p-16 lg:p-20">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
          <motion.div
            className="absolute -top-40 -right-40 h-80 w-80 rounded-full border border-white/5"
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full border border-white/[0.03]"
            animate={{ rotate: -360 }}
            transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          />

          <div className="relative mx-auto max-w-2xl text-center">
            <MotionDiv variants={fadeInUp}>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Start Your Journey
              </span>
            </MotionDiv>

            <MotionDiv variants={fadeInUp}>
              <h2 className="mt-4 font-serif text-3xl font-bold text-primary-foreground md:text-4xl lg:text-5xl text-balance">
                Ready to Transform Your Future?
              </h2>
            </MotionDiv>

            <MotionDiv variants={fadeInUp}>
              <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-primary-foreground/60 lg:text-lg">
                Join thousands of professionals who have accelerated their careers through our world-class programs. Take the first step toward excellence.
              </p>
            </MotionDiv>

            <MotionDiv variants={fadeInUp}>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-xl shadow-accent/25 h-12 px-8 text-sm font-medium"
                  asChild
                >
                  <a href="/contact">
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="ghost"
                  className="bg-transparent border border-primary-foreground/15 text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10 h-12 px-8 text-sm font-medium"
                  asChild
                >
                  <a href="/courses">Browse Programs</a>
                </Button>
              </div>
            </MotionDiv>

            <MotionDiv variants={fadeInUp}>
              <p className="mt-6 text-xs text-primary-foreground/40">
                Applications for 2026 are now open. Limited seats available.
              </p>
            </MotionDiv>
          </div>
        </div>
      </div>
    </MotionSection>
  )
}
