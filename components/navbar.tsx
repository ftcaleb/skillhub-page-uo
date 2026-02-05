"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Button } from "@/components/ui/button"
import { GraduationCap, Menu, X, ChevronRight } from "lucide-react"

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Events", href: "#events" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("#home")

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`)
          }
        }
      },
      { threshold: 0.3, rootMargin: "-80px 0px -40% 0px" }
    )

    const ids = navLinks.map((l) => l.href.replace("#", ""))
    for (const id of ids) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl shadow-[0_1px_0_0_hsl(var(--border)/0.5)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
        <a href="#home" className="group flex items-center gap-2.5">
          <div className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors duration-300 ${
            scrolled ? "bg-primary" : "bg-white/10 backdrop-blur-sm"
          }`}>
            <GraduationCap className={`h-5 w-5 transition-colors duration-300 ${
              scrolled ? "text-primary-foreground" : "text-white"
            }`} />
          </div>
          <span className={`text-lg font-semibold tracking-tight transition-colors duration-300 ${
            scrolled ? "text-foreground" : "text-white"
          }`}>
            Ascend Institute
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`relative px-3.5 py-2 text-[13px] font-medium tracking-wide transition-colors duration-300 rounded-md ${
                  activeSection === link.href
                    ? scrolled
                      ? "text-foreground"
                      : "text-white"
                    : scrolled
                      ? "text-muted-foreground hover:text-foreground"
                      : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
                {activeSection === link.href && (
                  <motion.span
                    layoutId="nav-active"
                    className={`absolute inset-0 rounded-md -z-10 ${
                      scrolled ? "bg-secondary" : "bg-white/10"
                    }`}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <Button
            variant="ghost"
            className={`text-[13px] font-medium bg-transparent ${
              scrolled
                ? "text-muted-foreground hover:text-foreground hover:bg-secondary"
                : "text-white/70 hover:text-white hover:bg-white/10"
            }`}
            asChild
          >
            <a href="#contact">Contact</a>
          </Button>
          <Button
            className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg shadow-accent/25 text-[13px] font-medium h-9 px-5"
            asChild
          >
            <a href="#cta">
              Apply Now
              <ChevronRight className="ml-1 h-3.5 w-3.5" />
            </a>
          </Button>
        </div>

        <button
          type="button"
          className={`lg:hidden transition-colors ${
            scrolled ? "text-foreground" : "text-white"
          }`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-border/50 bg-background/95 backdrop-blur-xl lg:hidden"
          >
            <div className="mx-auto max-w-7xl px-6 py-6">
              <ul className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <a
                      href={link.href}
                      className={`block rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                        activeSection === link.href
                          ? "bg-secondary text-foreground"
                          : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                      }`}
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-4 pt-4 border-t border-border">
                <Button
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg shadow-accent/25"
                  asChild
                >
                  <a href="#cta" onClick={() => setMobileOpen(false)}>
                    Apply Now
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
