"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/how-we-work", label: "Process" },
  { href: "/contact", label: "Contact" },
]

export function Header() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full glass"
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center">
          <span className="text-xl font-bold text-foreground tracking-tighter">
            Core<span className="text-muted-foreground">Plex</span><span className="text-foreground/40">.</span>ai
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-[13px] font-medium tracking-wide uppercase transition-colors duration-200 relative",
                pathname === item.href
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {item.label}
              {pathname === item.href && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute -bottom-1 left-0 right-0 h-px bg-foreground/50"
                  initial={false}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button
            asChild
            size="sm"
            className="hidden md:inline-flex bg-foreground text-background hover:bg-foreground/90 text-xs font-semibold tracking-wide uppercase px-6 h-9 rounded-md transition-all duration-200"
          >
            <Link href="/book-demo">Book a Call</Link>
          </Button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden border-t border-border"
          >
            <nav className="container py-6 flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "text-sm font-medium tracking-wide uppercase py-2 transition-colors",
                    pathname === item.href ? "text-foreground" : "text-muted-foreground"
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <Button
                asChild
                size="sm"
                className="bg-foreground text-background hover:bg-foreground/90 text-xs font-semibold tracking-wide uppercase w-full mt-2"
              >
                <Link href="/book-demo" onClick={() => setMobileOpen(false)}>
                  Book a Call
                </Link>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
