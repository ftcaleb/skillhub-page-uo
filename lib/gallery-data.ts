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
        src: "/asset/bgimg2.webp",
        category: "Events",
        span: "large"
    },
    {
        id: "2",
        src: "/asset/img1.webp",
        category: "Certified",
        span: "medium"
    },
    {
        id: "3",
        src: "/asset/img9.webp",
        category: "Workshops",
        span: "small"
    },
    {
        id: "4",
        src: "/asset/img11.webp",
        category: "Certified",
        span: "small"
    },
    {
        id: "5",
        src: "/asset/img15.webp",
        category: "Workshops",
        span: "small"
    },
    {
        id: "6",
        src: "/asset/img5.webp",
        category: "Community",
        span: "large"
    },
    {
        id: "7",
        src: "/asset/img16.webp",
        category: "Community",
        span: "small"
    },
    {
        id: "8",
        src: "/asset/img7.webp",
        category: "Facilities",
        span: "medium"
    },
    {
        id: "9",
        src: "/asset/img17.webp",
        category: "Certified",
        span: "small"
    },
    {
        id: "10",
        src: "/asset/img10.webp",
        category: "Workshops",
        span: "medium"
    },
    {
        id: "11",
        src: "/asset/img2.webp",
        category: "Certified",
        span: "small"
    },
    {
        id: "12",
        src: "/asset/img3.webp",
        category: "Certified",
        span: "small"
    },
    {
        id: "13",
        src: "/asset/img4.webp",
        category: "Community",
        span: "medium"
    },
    {
        id: "16",
        src: "/asset/img12.webp",
        category: "Community",
        span: "small"
    },
    {
        id: "17",
        src: "/asset/class.webp",
        category: "Workshops",
        span: "small"
    },
    {
        id: "18",
        src: "/asset/workshop-session.jpeg",
        category: "Workshops",
        span: "medium"
    },
    {
        id: "19",
        src: "/asset/dhl-cohort-group.jpeg",
        category: "Community",
        span: "large"
    },
    {
        id: "20",
        src: "/asset/workshop-discussion.jpeg",
        category: "Workshops",
        span: "medium"
    },
    {
        id: "21",
        src: "/asset/training-session-group.jpeg",
        category: "Community",
        span: "large"
    },
]
