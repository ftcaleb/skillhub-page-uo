"use client"

import { MotionSection, MotionDiv, fadeInUp } from "@/components/motion"
import Image from "next/image"

// Using placeholder logos for now. Ideally these should be SVGs for best results.
const partners = [
  { name: "QCTO", logo: "/asset/qcto.webp" },
  { name: "SAPICS", logo: "/asset/sapics.webp" },
  { name: "APICS", logo: "/asset/apics.webp" },
  { name: "T.E.T.A", logo: "/asset/teta.webp" },
  { name: "merSETA", logo: "/asset/merseta.webp" },
  { name: "VSCP Consulting", logo: "/asset/vscp.webp" },
  { name: "BEE", logo: "/asset/bee.webp" },
]

function MarqueeRow({ reverse = false }: { reverse?: boolean }) {
  return (
    <div className="group flex overflow-hidden p-2 [--gap:3rem] [gap:var(--gap)]">
      <div
        className={`flex shrink-0 items-center justify-around [gap:var(--gap)] ${reverse
          ? "animate-[scroll-reverse_40s_linear_infinite]"
          : "animate-[scroll_40s_linear_infinite]"
          } group-hover:[animation-play-state:paused]`}
      >
        {[...partners, ...partners, ...partners].map((partner, i) => (
          <div
            key={`${partner.name}-${i}`}
            className="flex items-center justify-center grayscale transition-all duration-500 hover:grayscale-0 hover:scale-105 hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.3)] opacity-60 hover:opacity-100"
          >
            <div className="relative h-16 w-32 flex items-center justify-center">
              <Image
                src={partner.logo}
                alt={partner.name}
                width={140}
                height={60}
                className="object-contain h-12 w-auto"
              />
            </div>
          </div>
        ))}
      </div>
      <div
        className={`flex shrink-0 items-center justify-around [gap:var(--gap)] ${reverse
          ? "animate-[scroll-reverse_40s_linear_infinite]"
          : "animate-[scroll_40s_linear_infinite]"
          } group-hover:[animation-play-state:paused]`}
      >
        {[...partners, ...partners, ...partners].map((partner, i) => (
          <div
            key={`${partner.name}-duplicate-${i}`}
            className="flex items-center justify-center grayscale transition-all duration-500 hover:grayscale-0 hover:scale-105 hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.3)] opacity-60 hover:opacity-100"
          >
            <div className="relative h-16 w-32 flex items-center justify-center">
              <Image
                src={partner.logo}
                alt={partner.name}
                width={140}
                height={60}
                className="object-contain h-12 w-auto"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function Partners() {
  return (
    <MotionSection id="partners" className="relative py-20 lg:py-32 bg-background overflow-hidden border-t border-border/40">

      {/* Ambient Background - Radial Gradient & Noise */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.03),transparent_70%)]" />
        {/* Subtle noise texture overlay */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 z-10">
        <MotionDiv variants={fadeInUp} className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground/80">
            Trusted by Industry Leaders
          </p>
        </MotionDiv>
      </div>

      <div className="relative flex flex-col gap-10">
        {/* Edge Fade Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 lg:w-48 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 lg:w-48 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none" />

        <MarqueeRow />
        <MarqueeRow reverse />
      </div>
    </MotionSection>
  )
}
