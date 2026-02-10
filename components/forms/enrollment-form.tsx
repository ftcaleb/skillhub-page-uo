"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Loader2, CheckCircle2, AlertCircle, CalendarIcon } from "lucide-react"
import { format } from "date-fns"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "motion/react"
import { fadeInUp } from "@/components/motion"

const formSchema = z.object({
    firstName: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    lastName: z.string().min(2, {
        message: "Surname must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    phone: z.string().min(5, {
        message: "Please enter a valid phone number.",
    }),
    country: z.string().min(2, {
        message: "Country is required.",
    }),
    city: z.string().min(2, {
        message: "City is required.",
    }),
    companyName: z.string().min(2, {
        message: "Company name is required.",
    }),
    startDate: z.date({
        required_error: "Please select a start date.",
    }),
    message: z.string().min(10, {
        message: "Message must be at least 10 characters.",
    }),
})

interface EnrollmentFormProps {
    courseTitle: string
}

export function EnrollmentForm({ courseTitle }: EnrollmentFormProps) {
    const [isSubmitting, setIsSubmitting] = React.useState(false)
    const [isSuccess, setIsSuccess] = React.useState(false)
    const [isError, setIsError] = React.useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            country: "",
            city: "",
            companyName: "",
            message: "",
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true)
        setIsError(false)

        try {
            const response = await fetch("/api/enroll", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    firstName: values.firstName,
                    lastName: values.lastName,
                    email: values.email,
                    number: values.phone,
                    country: values.country,
                    city: values.city,
                    companyName: values.companyName,
                    startDate: format(values.startDate, "PPP"),
                    message: values.message,
                    courseOrEventName: courseTitle,
                    type: "course_enrollment",
                }),
            })

            if (!response.ok) {
                const errorData = await response.json()
                throw new Error(errorData.error || "Failed to submit enrollment")
            }

            setIsSuccess(true)
            form.reset()
        } catch (error) {
            console.error("Enrollment Error:", error)
            setIsError(true)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <motion.div variants={fadeInUp}>
            <Card className="rounded-3xl border border-border/50 bg-card shadow-lg shadow-primary/5">
                <CardHeader className="p-8 pb-4">
                    <CardTitle className="text-3xl font-bold tracking-tight">
                        Enroll in <span className="text-accent">{courseTitle}</span>
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        Fill out the form below to secure your spot. Our team will contact you shortly.
                    </CardDescription>
                </CardHeader>
                <CardContent className="p-8 pt-4">
                    <AnimatePresence mode="wait">
                        {isSuccess ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex flex-col items-center justify-center py-12 text-center"
                            >
                                <div className="h-20 w-20 rounded-full bg-green-100 flex items-center justify-center mb-6">
                                    <CheckCircle2 className="h-10 w-10 text-green-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-foreground">Enrollment Submitted!</h3>
                                <p className="text-muted-foreground mt-2 max-w-sm">
                                    Thank you for your interest. We've received your enrollment request for {courseTitle} and will get back to you shortly.
                                </p>
                                <Button
                                    variant="outline"
                                    className="mt-8 rounded-xl px-8"
                                    onClick={() => setIsSuccess(false)}
                                >
                                    Back to Form
                                </Button>
                            </motion.div>
                        ) : (
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                    <div className="grid gap-6 sm:grid-cols-2">
                                        <FormField
                                            control={form.control}
                                            name="firstName"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Name</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Enter your name" {...field} className="h-12 rounded-xl border-border/60 bg-muted/30 focus-visible:ring-accent/30" />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="lastName"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Surname</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Enter your surname" {...field} className="h-12 rounded-xl border-border/60 bg-muted/30 focus-visible:ring-accent/30" />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>

                                    <div className="grid gap-6 sm:grid-cols-2">
                                        <FormField
                                            control={form.control}
                                            name="email"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Email Address</FormLabel>
                                                    <FormControl>
                                                        <Input type="email" placeholder="Enter your email" {...field} className="h-12 rounded-xl border-border/60 bg-muted/30 focus-visible:ring-accent/30" />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="phone"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Phone Number</FormLabel>
                                                    <FormControl>
                                                        <Input type="tel" placeholder="Enter your phone" {...field} className="h-12 rounded-xl border-border/60 bg-muted/30 focus-visible:ring-accent/30" />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>

                                    <div className="grid gap-6 sm:grid-cols-2">
                                        <FormField
                                            control={form.control}
                                            name="country"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Country</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Enter your country" {...field} className="h-12 rounded-xl border-border/60 bg-muted/30 focus-visible:ring-accent/30" />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="city"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>City</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Enter your city" {...field} className="h-12 rounded-xl border-border/60 bg-muted/30 focus-visible:ring-accent/30" />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>

                                    <div className="grid gap-6 sm:grid-cols-2">
                                        <FormField
                                            control={form.control}
                                            name="companyName"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Company Name</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Enter company name" {...field} className="h-12 rounded-xl border-border/60 bg-muted/30 focus-visible:ring-accent/30" />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="startDate"
                                            render={({ field }) => (
                                                <FormItem className="flex flex-col">
                                                    <FormLabel className="mb-2">When do you want to start?</FormLabel>
                                                    <Popover>
                                                        <PopoverTrigger asChild>
                                                            <FormControl>
                                                                <Button
                                                                    variant={"outline"}
                                                                    className={cn(
                                                                        "h-12 px-4 rounded-xl border-border/60 bg-muted/30 text-left font-normal",
                                                                        !field.value && "text-muted-foreground"
                                                                    )}
                                                                >
                                                                    {field.value ? (
                                                                        format(field.value, "PPP")
                                                                    ) : (
                                                                        <span>Pick a date</span>
                                                                    )}
                                                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                                </Button>
                                                            </FormControl>
                                                        </PopoverTrigger>
                                                        <PopoverContent className="w-auto p-0" align="start">
                                                            <Calendar
                                                                mode="single"
                                                                selected={field.value}
                                                                onSelect={field.onChange}
                                                                disabled={(date) =>
                                                                    date < new Date() || date < new Date("1900-01-01")
                                                                }
                                                                initialFocus
                                                            />
                                                        </PopoverContent>
                                                    </Popover>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>

                                    <FormField
                                        control={form.control}
                                        name="message"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Message</FormLabel>
                                                <FormControl>
                                                    <Textarea
                                                        placeholder="Write your message here"
                                                        {...field}
                                                        className="min-h-[120px] rounded-2xl border-border/60 bg-muted/30 focus-visible:ring-accent/30 resize-none p-4"
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    {isError && (
                                        <div className="p-4 rounded-xl bg-destructive/10 text-destructive text-sm flex items-center gap-3">
                                            <AlertCircle className="h-5 w-5 shrink-0" />
                                            <p>Something went wrong. Please try again later.</p>
                                        </div>
                                    )}

                                    <Button
                                        type="submit"
                                        className="w-full h-14 text-base font-semibold rounded-2xl bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg shadow-accent/20 transition-all duration-300 active:scale-[0.98]"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? (
                                            <span className="flex items-center gap-2">
                                                <Loader2 className="h-5 w-5 animate-spin" />
                                                Submitting...
                                            </span>
                                        ) : (
                                            "Submit Enrollment"
                                        )}
                                    </Button>
                                </form>
                            </Form>
                        )}
                    </AnimatePresence>
                </CardContent>
            </Card>
        </motion.div>
    )
}
