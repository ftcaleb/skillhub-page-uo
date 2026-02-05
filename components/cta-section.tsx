import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CtaSection() {
  return (
    <section id="cta" className="relative overflow-hidden bg-primary py-20 lg:py-28">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute -right-32 -top-32 h-[400px] w-[400px] rounded-full border border-primary-foreground/30" />
        <div className="absolute -bottom-20 left-10 h-80 w-80 rounded-full border border-primary-foreground/30" />
      </div>

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">
          Start Your Journey Today
        </p>
        <h2 className="mt-4 text-balance font-serif text-3xl font-bold text-primary-foreground md:text-4xl lg:text-5xl">
          Ready to Transform Your Future?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/70 md:text-lg">
          Join thousands of professionals who have advanced their careers through our world-class programs. Take the first step toward excellence.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
            <a href="#cta">
              Apply Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="border-primary-foreground/20 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground" asChild>
            <a href="#programs">Browse Programs</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
