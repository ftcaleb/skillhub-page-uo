import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, BarChart3, Users, ArrowRight } from "lucide-react"

const programs = [
  {
    category: "Executive Education",
    name: "Executive Leadership Program",
    description:
      "Develop transformational leadership skills for the modern business landscape.",
    duration: "12 Weeks",
    level: "Advanced",
    enrolled: "2,500",
  },
  {
    category: "Professional Development",
    name: "Strategic Business Management",
    description:
      "Master strategic thinking and decision-making frameworks.",
    duration: "8 Weeks",
    level: "Intermediate",
    enrolled: "3,200",
  },
  {
    category: "Technology",
    name: "Digital Innovation & Technology",
    description:
      "Navigate the digital transformation journey with confidence.",
    duration: "10 Weeks",
    level: "Intermediate",
    enrolled: "1,800",
  },
  {
    category: "Finance",
    name: "Global Finance & Economics",
    description:
      "Understand global financial markets and economic principles.",
    duration: "6 Weeks",
    level: "Advanced",
    enrolled: "2,100",
  },
]

function getLevelColor(level: string) {
  switch (level) {
    case "Advanced":
      return "bg-primary/10 text-primary border-primary/20"
    case "Intermediate":
      return "bg-accent/10 text-accent-foreground border-accent/20"
    default:
      return "bg-secondary text-secondary-foreground border-border"
  }
}

export function Programs() {
  return (
    <section id="programs" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Featured Programs
            </p>
            <h2 className="mt-3 text-balance font-serif text-3xl font-bold text-foreground md:text-4xl">
              Discover Our World-Class Courses
            </h2>
          </div>
          <Button variant="outline" className="shrink-0 bg-transparent" asChild>
            <a href="#programs">
              View All Courses
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((program) => (
            <Card
              key={program.name}
              className="group border-border/50 bg-card transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <CardHeader className="pb-3">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {program.category}
                </p>
                <h3 className="mt-1 text-lg font-semibold leading-snug text-foreground">
                  {program.name}
                </h3>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {program.description}
                </p>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="outline" className="gap-1 font-normal">
                    <Clock className="h-3 w-3" />
                    {program.duration}
                  </Badge>
                  <Badge
                    variant="outline"
                    className={`gap-1 font-normal ${getLevelColor(program.level)}`}
                  >
                    <BarChart3 className="h-3 w-3" />
                    {program.level}
                  </Badge>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Users className="h-3.5 w-3.5" />
                  <span>
                    <span className="font-semibold text-foreground">{program.enrolled}</span>{" "}
                    enrolled
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
