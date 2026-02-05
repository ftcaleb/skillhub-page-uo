"use client"

import { motion } from "motion/react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import Image from "next/image"

const stats = [
  { value: "40+", label: "Years of Excellence" },
  { value: "15K+", label: "Global Alumni" },
  { value: "200+", label: "Expert Faculty" },
  { value: "50+", label: "Countries" },
]

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-campus.jpg"
          alt="Ascend Institute campus aerial view"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Multi-layer overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(222,47%,11%)]/85 via-[hsl(222,47%,11%)]/70 to-[hsl(222,47%,11%)]/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(222,47%,11%)]/40 to-transparent" />
      </div>

      {/* Subtle grain texture */}
      <div className="absolute inset-0 z-[1] opacity-[0.03] mix-blend-overlay" style={{
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E\")",
      }} />

      {/* Floating geometric elements */}
      <motion.div
        className="absolute top-1/4 right-[15%] h-72 w-72 rounded-full border border-white/5 z-[1]"
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-1/3 left-[10%] h-48 w-48 rounded-full border border-white/[0.03] z-[1]"
        animate={{ rotate: -360 }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full py-32 lg:py-40">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm px-4 py-1.5 text-xs font-medium tracking-widest uppercase text-white/80">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              Excellence in Education Since 1985
            </span>
          </motion.div>

          <motion.h1
            className="mt-8 font-serif text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-balance">
              {"Shaping Tomorrow's "}
              <span className="relative inline-block">
                Leaders
                <motion.span
                  className="absolute -bottom-1 left-0 h-[3px] bg-accent rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
                />
              </span>
              {" Today"}
            </span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-xl text-base leading-relaxed text-white/60 md:text-lg lg:text-xl lg:leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            A premier global institution dedicated to fostering innovation, critical thinking,
            and academic excellence for the next generation of changemakers.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-xl shadow-accent/20 h-12 px-8 text-sm font-medium"
              asChild
            >
              <a href="#programs">
                Explore Programs
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="bg-transparent text-white/80 hover:text-white hover:bg-white/10 h-12 px-6 text-sm font-medium group"
              asChild
            >
              <a href="#about">
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 mr-2 group-hover:border-white/40 transition-colors">
                  <Play className="h-3 w-3 ml-0.5" />
                </span>
                Watch Our Story
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          className="mt-20 lg:mt-28 grid grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center justify-center py-6 lg:py-8 ${
                i > 0 ? "border-l border-white/10" : ""
              } ${i >= 2 ? "border-t border-white/10 lg:border-t-0" : ""}`}
            >
              <span className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl tracking-tight">
                {stat.value}
              </span>
              <span className="mt-1 text-xs text-white/50 font-medium tracking-wide uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  )
}
