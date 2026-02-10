import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { RegistrationForm } from "@/components/forms/registration-form"
import { getEventBySlug } from "@/lib/events-data"
import { notFound } from "next/navigation"
import { ChevronRight } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

interface RegisterPageProps {
    params: Promise<{
        slug: string
    }>
}

export async function generateMetadata({
    params,
}: RegisterPageProps): Promise<Metadata> {
    const { slug } = await params
    const event = getEventBySlug(slug)

    if (!event) {
        return {
            title: "Event Not Found",
        }
    }

    return {
        title: `Register for ${event.title} | SkillHub International`,
        description: `Register for our ${event.title} event at SkillHub International.`,
    }
}

export default async function RegisterPage({ params }: RegisterPageProps) {
    const { slug } = await params
    const event = getEventBySlug(slug)

    if (!event) {
        notFound()
    }

    return (
        <main className="min-h-screen bg-background flex flex-col">
            <Navbar />

            {/* Premium Hero Header */}
            <section className="relative pt-32 pb-24 lg:pt-52 lg:pb-36 overflow-hidden bg-primary">
                {/* Abstract Background Decoration */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/10 rounded-full -translate-y-1/2 translate-x-1/4 blur-[120px] opacity-60" />
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/5 rounded-full translate-y-1/3 -translate-x-1/4 blur-[100px] opacity-30" />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(var(--accent-rgb),0.1),transparent_60%)]" />
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                        style={{ backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`, backgroundSize: '40px 40px' }}
                    />
                </div>

                <div className="container relative z-10 px-6 lg:px-8 mx-auto">
                    <div className="max-w-4xl">
                        {/* Breadcrumb Navigation */}
                        <nav className="flex items-center gap-2 text-sm font-semibold text-primary-foreground/50 mb-10">
                            <Link href="/" className="hover:text-primary-foreground transition-colors">Home</Link>
                            <ChevronRight className="h-4 w-4 opacity-30" />
                            <Link href="/events" className="hover:text-primary-foreground transition-colors">Events</Link>
                            <ChevronRight className="h-4 w-4 opacity-30" />
                            <Link href={`/events/${event.slug}`} className="hover:text-primary-foreground transition-colors">{event.title}</Link>
                            <ChevronRight className="h-4 w-4 opacity-30" />
                            <span className="text-primary-foreground/90">Registration</span>
                        </nav>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white mb-8 leading-[0.95]">
                            Event <span className="text-accent underline decoration-accent/20 underline-offset-[12px]">Registration</span>.
                        </h1>
                        <p className="text-xl md:text-2xl text-primary-foreground/70 leading-relaxed max-w-2xl font-medium">
                            Join us for {event.title}. Secure your spot today and connect with industry leaders and peers.
                        </p>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent pointer-events-none" />
            </section>

            {/* Main Content */}
            <section className="relative z-20 -mt-16 lg:-mt-20 pb-24 lg:pb-32 px-6 lg:px-8 flex-grow">
                <div className="container mx-auto max-w-4xl p-0">
                    <RegistrationForm eventTitle={event.title} />
                </div>
            </section>

            <Footer />
        </main>
    )
}
