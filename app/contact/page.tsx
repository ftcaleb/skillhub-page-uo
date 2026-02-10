import { Navbar } from "@/components/navbar"
import { PageHeader } from "@/components/page-header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Contact Us | SkillHub International",
    description: "Get in touch with our team for inquiries about our courses, events, and training programs.",
}

export default function ContactPage() {
    return (
        <main>
            <Navbar />
            <PageHeader
                title="Contact Us"
                description="Get in touch with our team. We're here to answer your questions and help you find the right training solution."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Contact", href: "/contact" },
                ]}
            />

            <section className="py-16 lg:py-24 bg-background">
                <div className="container px-4 md:px-6">
                    <div className="grid gap-12 lg:grid-cols-2">
                        <ContactInfo />
                        <ContactForm />
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
