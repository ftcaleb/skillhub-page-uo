export interface GalleryItem {
    id: string
    src: string
    category: string
    span?: "small" | "medium" | "large"
}

export const galleryCategories = ["All", "Community", "Certified", "Workshops",]

export const galleryItems: GalleryItem[] = [
    {
        id: "1",
        src: "/asset/bgimg2.jpeg",
        category: "Events",
        span: "large"
    },
    {
        id: "2",
        src: "/asset/img1.jpeg",
        category: "Certified",
        span: "medium"
    },
    {
        id: "3",
        src: "/asset/img9.jpeg",
        category: "Workshops",
        span: "small"
    },
    {
        id: "4",
        src: "/asset/img11.jpeg",
        category: "Certified",
        span: "small"
    },
    {
        id: "5",
        src: "/asset/img15.jpeg",
        category: "Workshops",
        span: "medium"
    },
    {
        id: "6",
        src: "/asset/img5.jpeg",
        category: "Community",
        span: "large"
    },
    {
        id: "7",
        src: "/asset/img16.jpeg",
        category: "Community",
        span: "small"
    },
    {
        id: "9",
        src: "/asset/img17.jpeg",
        category: "Certified",
        span: "small"
    },
    {
        id: "8",
        src: "/asset/img7.jpeg",
        category: "Facilities",
        span: "medium"
    }
]
