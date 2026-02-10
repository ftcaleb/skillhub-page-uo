import { Mail, Phone, MapPin, Clock } from "lucide-react"

export const contactConfig = {
    contactMethods: [
        {
            title: "Email Us",
            icon: Mail,
            details: [
                { label: "General Inquiries", value: "hello@skillhub.africa", href: "mailto:hello@skillhub.africa" },
                { label: "Corporate Training", value: "partners@skillhub.africa", href: "mailto:partners@skillhub.africa", isSecondary: true },
            ],
        },
        {
            title: "Call Us",
            icon: Phone,
            details: [
                { label: "Main Office", value: "+27 64 515 8024", href: "tel:+27645158024" },
                { label: "Direct Support", value: "+27 11 555 0123", href: "tel:+27115550123", isSecondary: true },
            ],
        },
        {
            title: "Visit Us",
            icon: MapPin,
            details: [
                { label: "Street Address", value: "42 6th Street Wynberg" },
                { label: "Area & Code", value: "Sandton, Johannesburg, 2090", isSecondary: true },
            ],
        },
        {
            title: "Office Hours",
            icon: Clock,
            details: [
                { label: "Weekdays", value: "Monday – Friday: 08:00 – 17:00" },
                { label: "Weekends", value: "Saturday – Sunday: Closed", isSecondary: true },
            ],
        },
    ],
    location: {
        title: "Spaces Atrium on 5th",
        addressLine1: "5th Street, Sandton",
        addressLine2: "Johannesburg, 2196",
        mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.4924749454173!2d28.054125!3d-26.108425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95733979401fdf%3A0x6e788c1c5e1c51c!2sSpaces%20-%20Johannesburg%2C%20Atrium%20on%205th!5e0!3m2!1sen!2sza!4v1710000000000!5m2!1sen!2sza",
        googleMapsUrl: "https://maps.google.com?q=Spaces+Atrium+on+5th+Sandton",
    },
    support: {
        title: "Need Immediate Assistance?",
        description: "Our priority support team is active for urgent student and partner inquiries. Call us direct for instant help.",
        buttonLabel: "Call Our Support Line",
        phoneHref: "tel:+27645158024",
    }
}
