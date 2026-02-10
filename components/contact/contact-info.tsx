"use client"

import { motion } from "motion/react"
import { fadeInUp, staggerContainer } from "@/components/motion"
import { ContactInfoCard } from "./contact-info-card"
import { LocationMapCard } from "./location-map-card"
import { SupportCTA } from "./support-cta"
import { contactConfig } from "./contact-config"

export function ContactInfoStack() {
    return (
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
        >
            {/* Contact Method Cards */}
            <div className="space-y-4">
                {contactConfig.contactMethods.map((method, index) => (
                    <motion.div key={index} variants={fadeInUp}>
                        <ContactInfoCard
                            title={method.title}
                            icon={method.icon}
                            details={method.details}
                        />
                    </motion.div>
                ))}
            </div>

            {/* Branded Map Card */}
            <motion.div variants={fadeInUp}>
                <LocationMapCard
                    title={contactConfig.location.title}
                    addressLine1={contactConfig.location.addressLine1}
                    addressLine2={contactConfig.location.addressLine2}
                    mapEmbedUrl={contactConfig.location.mapEmbedUrl}
                    googleMapsUrl={contactConfig.location.googleMapsUrl}
                />
            </motion.div>

            {/* Support Callout */}
            <motion.div variants={fadeInUp}>
                <SupportCTA
                    title={contactConfig.support.title}
                    description={contactConfig.support.description}
                    buttonLabel={contactConfig.support.buttonLabel}
                    phoneHref={contactConfig.support.phoneHref}
                />
            </motion.div>
        </motion.div>
    )
}
