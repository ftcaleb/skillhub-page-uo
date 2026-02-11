import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
    try {
        const body = await req.json()
        const {
            email,
            number,
            country,
            type,
            firstName,
            lastName,
            name,
            message,
            city,
            companyName,
            startDate,
            attendees,
            courseOrEventName,
        } = body

        // Validation based on requirements
        if (!email || !number || !country || !type) {
            return NextResponse.json(
                { error: "Missing required common fields (email, number, country, type)" },
                { status: 400 }
            )
        }

        // Conditional requirements
        if (type !== "qctoRequest" && type !== "proc-landing") {
            if (!firstName || !lastName) {
                return NextResponse.json(
                    { error: "Missing required fields for this request type (firstName, lastName)" },
                    { status: 400 }
                )
            }
        } else {
            if (!name) {
                return NextResponse.json(
                    { error: "Missing required field: name" },
                    { status: 400 }
                )
            }
        }

        // Create transporter using environment variables provided by user
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: 587,
            secure: false, // Use STARTTLS
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            },
        })

        // Determine a friendly display name for the product/event
        const displayProduct = courseOrEventName || (type === "request" ? "General Inquiry" : type)

        // Construct email content
        const mailOptions = {
            from: process.env.SMTP_USER,
            to: process.env.RECEIVER_EMAIL || "caleb19scott@gmail.com",
            replyTo: email,
            subject: `Enrollment Request: ${displayProduct}`,
            text: `
                New enrollment/contact request received:
                
                Source/Product: ${displayProduct}
                Name: ${name || `${firstName} ${lastName}`}
                Email: ${email}
                Phone: ${number}
                Country: ${country}
                ${city ? `City: ${city}` : ""}
                ${companyName ? `Company: ${companyName}` : ""}
                ${startDate ? `Requested Start Date: ${startDate}` : ""}
                ${attendees ? `Number of Attendees: ${attendees}` : ""}
                Type: ${type}
                Message: ${message || "No message provided"}
            `,
            html: `
                <h2>New Enrollment/Contact Request</h2>
                <p><strong>Source/Product:</strong> ${displayProduct}</p>
                <p><strong>Name:</strong> ${name || `${firstName} ${lastName}`}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${number}</p>
                <p><strong>Country:</strong> ${country}</p>
                ${city ? `<p><strong>City:</strong> ${city}</p>` : ""}
                ${companyName ? `<p><strong>Company:</strong> ${companyName}</p>` : ""}
                ${startDate ? `<p><strong>Requested Start Date:</strong> ${startDate}</p>` : ""}
                ${attendees ? `<p><strong>Number of Attendees:</strong> ${attendees}</p>` : ""}
                <p><strong>Type:</strong> ${type}</p>
                <p><strong>Message:</strong></p>
                <p>${message || "No message provided"}</p>
            `,
        }


        // Send email
        await transporter.sendMail(mailOptions)

        return NextResponse.json({ success: true, message: "Request received successfully" }, { status: 200 })

    } catch (error: any) {
        console.error("Enrollment API Error:", error)
        return NextResponse.json(
            { error: error.message || "Internal Server Error" },
            { status: 500 }
        )
    }
}
