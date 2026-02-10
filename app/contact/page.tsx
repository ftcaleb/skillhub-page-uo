import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"
import { ChevronRight } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Contact Us | SkillHub International",
    description: "Get in touch with our team for inquiries about our courses, events, and training programs.",
}

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-background flex flex-col">
            <Navbar />

            {/* V0-style Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-primary">
                {/* Background decorative elements */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-50" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl opacity-20" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(var(--accent-rgb),0.05),transparent_50%)]" />
                </div>

                <div className="container relative z-10 px-6 lg:px-8">
                    <div className="max-w-3xl">
                        {/* Breadcrumbs */}
                        <nav className="flex items-center gap-2 text-sm font-medium text-primary-foreground/60 mb-8">
                            <Link href="/" className="hover:text-primary-foreground transition-colors">Home</Link>
                            <ChevronRight className="h-4 w-4 opacity-40" />
                            <span className="text-primary-foreground">Contact Us</span>
                        </nav>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
                            Get in <span className="text-accent underline decoration-accent/30 underline-offset-8">Touch</span>
                        </h1>
                        <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
                            Have questions about our programs or partnership opportunities? We're here to help you navigate your professional journey.
                        </p>
                    </div>
                </div>

                {/* Visual anchor/divider */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-foreground/20 to-transparent" />
            </section>

            {/* Main Content Sections */}
            <section className="flex-1 py-16 lg:py-24 relative bg-slate-50/30">
                <div className="container px-6 lg:px-8">
                    <div className="grid gap-12 lg:grid-cols-12">
                        {/* Left Column - Contact Form */}
                        <div className="lg:col-span-7">
                            <ContactForm />
                        </div>

                        {/* Right Column - Contact Info Cards */}
                        <div className="lg:col-span-5">
                            <ContactInfo />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
