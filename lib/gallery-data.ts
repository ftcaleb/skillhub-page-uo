export interface GalleryItem {
    id: string
    src: string
    category: string
    title: string
    location?: string
    year?: string
    span?: "small" | "medium" | "large"
}

export const galleryCategories = ["All", "Events", "Training", "Facilities", "Community"]

export const galleryItems: GalleryItem[] = [
    {
        id: "1",
        src: "/asset/bgimg2.jpeg",
        category: "Events",
        title: "Annual Procurement Summit",
        location: "Sandton, South Africa",
        year: "2025",
        span: "large"
    },
    {
        id: "2",
        src: "/asset/img1.jpeg",
        category: "Training",
        title: "Executive Leadership Workshop",
        location: "Dubai, UAE",
        year: "2025",
        span: "medium"
    },
    {
        id: "3",
        src: "/asset/img2.jpeg",
        category: "Community",
        title: "Graduation Ceremony",
        location: "Cape Town",
        year: "2024",
        span: "small"
    },
    {
        id: "4",
        src: "/asset/img3.jpeg",
        category: "Facilities",
        title: "Modern Training Center",
        location: "Johannesburg",
        year: "2024",
        span: "small"
    },
    {
        id: "5",
        src: "/asset/img4.jpeg",
        category: "Training",
        title: "Supply Chain Simulation",
        location: "Durban",
        year: "2025",
        span: "medium"
    },
    {
        id: "6",
        src: "/asset/img5.jpeg",
        category: "Events",
        title: "Global Logistics Conference",
        location: "London, UK",
        year: "2025",
        span: "large"
    },
    {
        id: "7",
        src: "/asset/img6.jpeg",
        category: "Community",
        title: "Alumni Networking Night",
        location: "Sandton",
        year: "2024",
        span: "small"
    },
    {
        id: "8",
        src: "/asset/img7.jpeg",
        category: "Facilities",
        title: "Interactive Lecture Hall",
        location: "Sandton",
        year: "2024",
        span: "medium"
    }
]
