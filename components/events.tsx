import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react"

const events = [
  {
    type: "Conference",
    title: "Global Leadership Summit 2026",
    date: "March 15-17, 2026",
    time: "9:00 AM - 5:00 PM",
    location: "Main Campus Auditorium",
  },
  {
    type: "Workshop",
    title: "Innovation & Entrepreneurship Workshop",
    date: "March 22, 2026",
    time: "2:00 PM - 6:00 PM",
    location: "Innovation Hub",
  },
  {
    type: "Networking",
    title: "Executive Networking Evening",
    date: "April 5, 2026",
    time: "6:00 PM - 9:00 PM",
    location: "The Grand Hall",
  },
]

export function Events() {
  return (
    <section id="events" className="bg-muted py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Upcoming Events
            </p>
            <h2 className="mt-3 text-balance font-serif text-3xl font-bold text-foreground md:text-4xl">
              Connect, Learn, Grow
            </h2>
          </div>
          <Button variant="outline" className="shrink-0 bg-transparent" asChild>
            <a href="#events">
              View All Events
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {events.map((event) => (
            <Card
              key={event.title}
              className="group border-border/50 bg-card transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <Badge variant="secondary" className="mb-4 text-xs font-medium">
                  {event.type}
                </Badge>
                <h3 className="text-lg font-semibold text-foreground">{event.title}</h3>
                <div className="mt-4 flex flex-col gap-2.5">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 shrink-0 text-primary" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 shrink-0 text-primary" />
                    {event.time}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 shrink-0 text-primary" />
                    {event.location}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
