import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfoStack } from "@/components/contact/contact-info"
import { ChevronRight } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Contact Us | SkillHub International",
    description: "Get in touch with SkillHub International. We are here to help you with your inquiries about courses, corporate training, and partnerships.",
}

export default function ContactPage() {
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

                <div className="container relative ml-10 z-10 px-6 lg:px-8">
                    <div className="max-w-4xl">
                        {/* Breadcrumb Navigation */}
                        <nav className="flex items-center gap-2 text-sm font-semibold text-primary-foreground/50 mb-10 animate-in fade-in slide-in-from-left-4 duration-700">
                            <Link href="/" className="hover:text-primary-foreground transition-colors">Home</Link>
                            <ChevronRight className="h-4 w-4 opacity-30" />
                            <span className="text-primary-foreground/90">Contact Us</span>
                        </nav>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white mb-8 leading-[0.95] animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
                            <span className="text-accent underline decoration-accent/20 underline-offset-[12px]">Contact</span> Our Team.
                        </h1>
                        <p className="text-xl md:text-2xl text-primary-foreground/70 leading-relaxed max-w-2xl animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 font-medium">
                            We're dedicated to helping you achieve your goals. Reach out to discuss your training needs, career path, or partnership opportunities.
                        </p>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent pointer-events-none" />
            </section>

            {/* Main Content Composition - Updated for 7:5 Ratio and Proper Stacking */}
            <section className="relative z-20 -mt-16 lg:-mt-20 pb-24 lg:pb-32 px-6 lg:px-8">
                <div className="container p-0">
                    <div className="grid gap-12 lg:grid-cols-12 items-start">
                        {/* Left Column: Contact Form (7/12) */}
                        <div className="w-full lg:col-span-7 animate-in fade-in slide-in-from-left-8 duration-700 delay-300">
                            <ContactForm />
                        </div>

                        {/* Right Column: Contact info Stack (5/12) */}
                        <div className="w-full lg:col-span-5 animate-in fade-in slide-in-from-right-8 duration-700 delay-400">
                            <ContactInfoStack />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
