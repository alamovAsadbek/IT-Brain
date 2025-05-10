"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Brain } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden'
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.body.style.overflow = 'auto'
    }
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Only prevent default for hash links
    if (href.startsWith('#')) {
      e.preventDefault()

      // Close menu first
      setIsMenuOpen(false)
      document.body.style.overflow = 'auto'

      // Wait for menu to close before scrolling
      setTimeout(() => {
        const element = document.querySelector(href)
        if (element) {
          const headerOffset = 100
          const elementPosition = element.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.scrollY - headerOffset

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          })
        }
      }, 300) // Match this with your animation duration
    }
  }

  const navItems = [
    { href: "/", label: "Bosh sahifa" },
    { href: "#features", label: "Xususiyatlar" },
    { href: "#courses", label: "Kurslar" },
    { href: "#contact", label: "Bog'lanish" },
  ]

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-md" : "bg-white/80  backdrop-blur-md",
      )}
    >
      <div className="container flex h-16 md:h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>

            <img src="/Logo.png" className="w-[100px] md:w-[150px]" alt="IT Brain" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 lg:gap-8">
          {navItems.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.2 }}
            >
              <Link
                href={item.href}
                className={cn(
                  "text-base font-bold transition-colors hover:text-[#0e5c2a]",
                  item.href === "/" ? "text-[#0e5c2a]" : "text-gray-600"
                )}
                onClick={(e) => item.href.startsWith("#") && handleNavClick(e, item.href)}
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </nav>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-[#0e5c2a]"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden w-full bg-white shadow-lg overflow-hidden"
          >
            <nav className="flex flex-col gap-1 p-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "block px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                      item.href === "/"
                        ? "bg-[#e6f7e9] text-[#0e5c2a]"
                        : "text-gray-600 hover:bg-gray-50"
                    )}
                    onClick={(e) => handleNavClick(e, item.href)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}