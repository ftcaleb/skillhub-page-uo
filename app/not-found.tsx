import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Home, Search } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "404 – Page Not Found | SkillHub International",
    description: "The page you're looking for doesn't exist or has been moved.",
}

export default function NotFound() {
    return (
        <main className="min-h-screen bg-background flex flex-col">
            <Navbar />

            {/* Hero band — matches bg-primary pattern used across the site */}
            <section className="relative overflow-hidden bg-primary pt-32 pb-20 lg:pt-40 lg:pb-32 flex-none">
                {/* Decorative background — identical to page-header.tsx */}
                <div
                    className="absolute inset-0 z-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
                    style={{
                        backgroundImage:
                            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E\")",
                    }}
                />
                <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full border border-primary-foreground/5 pointer-events-none" />
                <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full border border-primary-foreground/[0.03] pointer-events-none" />
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/4 blur-[100px] opacity-60 pointer-events-none" />

                <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
                    {/* Large 404 number */}
                    <p
                        className="text-[clamp(6rem,20vw,14rem)] font-black leading-none tracking-tighter text-primary-foreground/10 select-none"
                        aria-hidden="true"
                    >
                        404
                    </p>

                    {/* Offset real heading on top */}
                    <div className="-mt-[clamp(3rem,8vw,7rem)]">
                        <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-accent mb-6">
                            Page Not Found
                        </span>

                        <h1 className="font-serif text-4xl font-bold text-primary-foreground md:text-5xl lg:text-6xl tracking-tight text-balance">
                            Looks like you&apos;ve taken a{" "}
                            <span className="text-accent">wrong turn.</span>
                        </h1>

                        <p className="mt-6 max-w-xl mx-auto text-base leading-relaxed text-primary-foreground/60 lg:text-lg">
                            The page you&apos;re looking for doesn&apos;t exist or may have been moved. Let&apos;s get you back on track.
                        </p>

                        {/* CTAs */}
                        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button
                                asChild
                                size="lg"
                                className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90 rounded-xl px-8 h-12 text-base font-semibold"
                            >
                                <Link href="/">
                                    <Home className="mr-2 h-4 w-4" />
                                    Go Back Home
                                </Link>
                            </Button>

                            <Button
                                asChild
                                variant="outline"
                                size="lg"
                                className="w-full sm:w-auto rounded-xl px-8 h-12 text-base font-semibold border-primary-foreground/20 text-primary-foreground bg-transparent hover:bg-primary-foreground/10 hover:text-primary-foreground"
                            >
                                <Link href="/courses">
                                    <Search className="mr-2 h-4 w-4" />
                                    Browse Courses
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Bottom fade — identical to page-header.tsx */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent pointer-events-none" />
            </section>

            {/* Quick-links section */}
            <section className="flex-1 py-16 lg:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-10">
                        Where would you like to go?
                    </p>

                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-3xl mx-auto">
                        {[
                            { label: "Courses", description: "Explore our full course catalogue", href: "/courses" },
                            { label: "Events", description: "Upcoming workshops and programmes", href: "/events" },
                            { label: "About Us", description: "Learn more about SkillHub", href: "/about" },
                            { label: "Gallery", description: "See our training in action", href: "/gallery" },
                            { label: "Contact Us", description: "Get in touch with our team", href: "/contact" },
                        ].map(({ label, description, href }) => (
                            <Link
                                key={href}
                                href={href}
                                className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-border hover:shadow-lg hover:shadow-primary/[0.04]"
                            >
                                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="font-semibold text-foreground">{label}</p>
                                        <p className="mt-1 text-sm text-muted-foreground">{description}</p>
                                    </div>
                                    <ArrowLeft className="h-4 w-4 text-muted-foreground rotate-180 transition-transform duration-300 group-hover:translate-x-1" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
