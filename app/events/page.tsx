import { EventsContent } from "@/components/events-content"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function EventsPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-background">
                <EventsContent />
            </main>
            <Footer />
        </>
    )
}
