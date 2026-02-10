"use client"

import { MotionSection, MotionDiv, fadeInUp } from "@/components/motion"

const partners = [
  "QCTO",
  "SAPICS",
  "APICS",
  "T.E.T.A",
  "merSETA",
  "VSCP Consulting",
  "QCTO",
  "SAPICS",
  "APICS",
  "T.E.T.A",
  "merSETA",
  "VSCP Consulting",
  "QCTO",
  "SAPICS",
  "APICS",
  "T.E.T.A",
  "merSETA",
  "VSCP Consulting",

]

function MarqueeRow({ reverse = false }: { reverse?: boolean }) {
  return (
    <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div
        className={`flex shrink-0 items-center gap-12 ${reverse ? "animate-[scroll_20s_linear_infinite_reverse]" : "animate-[scroll_20s_linear_infinite]"
          }`}
      >
        {[...partners, ...partners].map((name, i) => (
          <span
            key={`${name}-${i}`}
            className="whitespace-nowrap text-sm font-medium text-muted-foreground/40 transition-colors hover:text-muted-foreground/70 tracking-wide"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  )
}

export function Partners() {
  return (
    <MotionSection className="py-20 lg:py-24 bg-background border-t border-border/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <MotionDiv variants={fadeInUp} className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground/60">
            Trusted by Leading Organizations Worldwide
          </p>
        </MotionDiv>
      </div>

      <div className="mt-12 flex flex-col gap-6">
        <MarqueeRow />
        <MarqueeRow reverse />
      </div>
    </MotionSection>
  )
}
