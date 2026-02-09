"use client"

import { GraduationCap, MapPin, Phone, Mail, Facebook, Linkedin, Instagram, Youtube, Twitter } from "lucide-react"
import Link from "next/link"

const footerLinks = {
  "Quick Links": [
    { label: "About Us", href: "/about" },
    { label: "Courses", href: "/courses" },
    { label: "Events", href: "/events" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact Us", href: "/contact" },
  ],
  Courses: [
    { label: "Procurement", href: "/courses/category/Procurement" },
    { label: "Inventory", href: "/courses/category/Inventory" },
    { label: "Ports & Shipping", href: "/courses/category/Ports%20%26%20Shipping" },
    { label: "Production", href: "/courses/category/Production" },
    { label: "Transport", href: "/courses/category/Transport" },
    { label: "Airport & Rail", href: "/courses/category/Airport%20%26%20Rail" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-20 pb-12">
        <div className="flex flex-col lg:flex-row justify-between gap-12 text-center lg:text-left">

          {/* Brand & Contact */}
          <div className="lg:w-1/3 space-y-8 flex flex-col items-center lg:items-start">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
                <GraduationCap className="h-6 w-6 text-accent-foreground" />
              </div>
              <span className="text-xl font-bold tracking-tight">
                SkillHub International
              </span>
            </Link>

            {/* Contact Information */}
            <div className="space-y-6 flex flex-col items-center lg:items-start">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-accent shrink-0 mt-0.5" />
                <div className="text-base text-primary-foreground/80 leading-relaxed">
                  <p>42 6th Street Wynberg</p>
                  <p>Sandton, 2090</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="h-6 w-6 text-accent shrink-0" />
                <a href="tel:+27645158024" className="text-base text-primary-foreground/80 hover:text-white transition-colors">
                  +27 64 515 8024
                </a>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="h-6 w-6 text-accent shrink-0" />
                <a href="mailto:hello@skillhub.africa" className="text-base text-primary-foreground/80 hover:text-white transition-colors">
                  hello@skillhub.africa
                </a>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center lg:text-left">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title} className="flex flex-col items-center lg:items-start">
                <h4 className="text-sm font-bold uppercase tracking-wider text-primary-foreground/60 mb-6">
                  {title}
                </h4>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-base text-primary-foreground/70 transition-colors hover:text-primary-foreground hover:underline decoration-accent underline-offset-4"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-20 pt-8 border-t border-primary-foreground/10 flex flex-col items-center justify-center gap-6">
          <div className="flex items-center gap-8">
            <Link
              href="#"
              aria-label="Twitter"
              className="text-primary-foreground/50 transition-transform hover:text-primary-foreground hover:scale-110"
            >
              <Twitter className="h-6 w-6" />
            </Link>
            <Link
              href="#"
              aria-label="LinkedIn"
              className="text-primary-foreground/50 transition-transform hover:text-primary-foreground hover:scale-110"
            >
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link
              href="#"
              aria-label="Instagram"
              className="text-primary-foreground/50 transition-transform hover:text-primary-foreground hover:scale-110"
            >
              <Instagram className="h-6 w-6" />
            </Link>
            <Link
              href="#"
              aria-label="YouTube"
              className="text-primary-foreground/50 transition-transform hover:text-primary-foreground hover:scale-110"
            >
              <Youtube className="h-6 w-6" />
            </Link>
          </div>
          <p className="text-sm text-primary-foreground/40 text-center">
            © {new Date().getFullYear()} SkillHub International. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
