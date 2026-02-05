"use client"

import { GraduationCap, ArrowUpRight } from "lucide-react"
import { motion } from "motion/react"

const footerLinks = {
  "Quick Links": [
    { label: "About Us", href: "#about" },
    { label: "Programs", href: "#programs" },
    { label: "Admissions", href: "#cta" },
    { label: "Events", href: "#events" },
    { label: "Campus Life", href: "#" },
  ],
  Resources: [
    { label: "Student Portal", href: "#" },
    { label: "Library", href: "#" },
    { label: "Research", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Alumni Network", href: "#" },
  ],
  Support: [
    { label: "FAQs", href: "#" },
    { label: "Contact Us", href: "#contact" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Accessibility", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-20 pb-12">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <a href="#home" className="inline-flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent">
                <GraduationCap className="h-5 w-5 text-accent-foreground" />
              </div>
              <span className="text-lg font-semibold tracking-tight">
                Ascend Institute
              </span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-primary-foreground/50">
              A premier global institution dedicated to fostering innovation, critical
              thinking, and academic excellence since 1985.
            </p>

            {/* Newsletter hint */}
            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary-foreground/40 mb-3">
                Stay Connected
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="h-10 flex-1 rounded-lg border border-primary-foreground/10 bg-primary-foreground/5 px-4 text-sm text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:ring-1 focus:ring-accent/50"
                />
                <button
                  type="button"
                  className="flex h-10 items-center justify-center rounded-lg bg-accent px-4 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90"
                >
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-8 grid grid-cols-2 gap-8 sm:grid-cols-3">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-primary-foreground/40">
                  {title}
                </h4>
                <ul className="mt-4 flex flex-col gap-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-primary-foreground/50 transition-colors hover:text-primary-foreground"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-primary-foreground/30">
            {"© 2026 Ascend Institute. All rights reserved."}
          </p>
          <div className="flex items-center gap-5">
            <a
              href="#"
              aria-label="Twitter"
              className="text-primary-foreground/30 transition-colors hover:text-primary-foreground/60"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-primary-foreground/30 transition-colors hover:text-primary-foreground/60"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-primary-foreground/30 transition-colors hover:text-primary-foreground/60"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="text-primary-foreground/30 transition-colors hover:text-primary-foreground/60"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.418-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
