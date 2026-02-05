"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Globe, Briefcase, Users } from "lucide-react"

const metrics = [
  {
    icon: GraduationCap,
    target: 15000,
    suffix: "+",
    label: "Graduates Worldwide",
    description: "Alumni making an impact across industries",
  },
  {
    icon: Globe,
    target: 50,
    suffix: "+",
    label: "Countries Represented",
    description: "A truly global learning community",
  },
  {
    icon: Briefcase,
    target: 94,
    suffix: "%",
    label: "Employment Rate",
    description: "Graduates employed within 6 months",
  },
  {
    icon: Users,
    target: 200,
    suffix: "+",
    label: "Expert Faculty",
    description: "Industry leaders and academics",
  },
]

function useCountUp(target: number, isVisible: boolean) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return
    let current = 0
    const increment = target / 60
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, 20)
    return () => clearInterval(timer)
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
}: (typeof metrics)[0] & { isVisible: boolean }) {
  const count = useCountUp(target, isVisible)

  return (
    <Card className="border-border/50 bg-card transition-shadow hover:shadow-md">
      <CardContent className="flex flex-col items-center p-8 text-center">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
          <Icon className="h-7 w-7 text-primary" />
        </div>
        <p className="text-4xl font-bold text-foreground">
          {count.toLocaleString()}
          {suffix}
        </p>
        <h3 className="mt-2 text-lg font-semibold text-foreground">{label}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}

export function Impact() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }
    return () => observer.disconnect()
  }, [])

  return (
    <section id="impact" ref={sectionRef} className="bg-muted py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Our Impact
          </p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-bold text-foreground md:text-4xl">
            Numbers That Define Excellence
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Four decades of commitment to educational excellence, producing leaders who shape the world.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <MetricCard key={metric.label} {...metric} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}
