import { Building2, Landmark, GraduationCap, Factory, Briefcase, Globe } from "lucide-react"

const partners = [
  { name: "Fortune 500", icon: Building2 },
  { name: "Global Leaders", icon: Globe },
  { name: "Top Universities", icon: GraduationCap },
  { name: "Industry Partners", icon: Factory },
  { name: "Consulting Firms", icon: Briefcase },
  { name: "Government Bodies", icon: Landmark },
]

export function Partners() {
  return (
    <section id="partners" className="bg-background py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-sm font-medium text-muted-foreground">
          Trusted by leading organizations worldwide
        </p>
        <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex flex-col items-center gap-3 text-muted-foreground/50 transition-colors hover:text-muted-foreground"
            >
              <partner.icon className="h-10 w-10" />
              <span className="text-xs font-medium tracking-wide uppercase">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
