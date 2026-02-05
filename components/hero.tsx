"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Award, Users, BookOpen, Globe } from "lucide-react"

const stats = [
  { icon: Award, value: "40+", label: "Years of Excellence" },
  { icon: Users, value: "15K+", label: "Global Alumni" },
  { icon: BookOpen, value: "200+", label: "Expert Faculty" },
  { icon: Globe, value: "50+", label: "Countries Reached" },
]

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-primary">
      {/* Subtle decorative pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute -left-20 -top-20 h-96 w-96 rounded-full border border-primary-foreground/20" />
        <div className="absolute -bottom-32 right-10 h-[500px] w-[500px] rounded-full border border-primary-foreground/20" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-20 lg:pb-24 lg:pt-32">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">
            Excellence in Education Since 1985
          </p>
          <h1 className="text-balance font-serif text-4xl font-bold leading-tight tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
            {"Shaping Tomorrow's Leaders Today"}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/70 md:text-lg">
            A premier global institution dedicated to fostering innovation, critical thinking, and academic excellence for the next generation of changemakers.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
              <a href="#programs">
                Explore Programs
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/20 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground" asChild>
              <a href="#impact">
                <Play className="mr-2 h-4 w-4" />
                Watch Our Story
              </a>
            </Button>
          </div>
        </div>

        {/* Stats row */}
        <div className="mx-auto mt-20 grid max-w-4xl grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <stat.icon className="mx-auto mb-3 h-6 w-6 text-accent" />
              <p className="text-3xl font-bold text-primary-foreground">{stat.value}</p>
              <p className="mt-1 text-sm text-primary-foreground/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
