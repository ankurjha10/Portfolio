"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Moon, Sun, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useSplashScreen } from "@/providers/splash-screen-provider"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [activeLink, setActiveLink] = useState("#home")
  const { isSplashVisible } = useSplashScreen()

  useEffect(() => {
    setMounted(true)

    const onScroll = () => {
      setIsScrolled(window.scrollY > 80)

      const sections = ["home", "skills", "projects", "contact"]
      for (const s of [...sections].reverse()) {
        const el = document.getElementById(s)
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveLink(`#${s}`)
          break
        }
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  if (isSplashVisible) return null

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <nav
        className={cn(
          "pointer-events-auto transition-all duration-700 ease-out",
          isScrolled
            ? "mt-3 w-[calc(100%-2rem)] md:w-full mx-auto max-w-[560px] rounded-[24px] md:rounded-full border border-black/[0.10] dark:border-white/[0.10] bg-white/75 dark:bg-[#0a0a0e]/75 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.35)]"
            : "mt-0 w-full max-w-[1200px] mx-auto rounded-none border border-transparent bg-transparent backdrop-blur-0 shadow-none"
        )}
      >
        <div className="flex items-center justify-center h-12 px-5 sm:px-6">
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setActiveLink(link.href)}
                className={cn(
                  "relative px-4 py-1.5 rounded-full text-[13px] font-medium transition-colors duration-200",
                  activeLink === link.href
                    ? "text-[#00d47a] dark:text-[#00ff9f]"
                    : "text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-gray-200",
                )}
              >
                {link.label}
                {activeLink === link.href && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-x-2 -bottom-[3px] h-[2px] rounded-full bg-[#00d47a] dark:bg-[#00ff9f] shadow-[0_0_8px_rgba(0,212,122,0.5)] dark:shadow-[0_0_8px_rgba(0,255,159,0.5)]"
                    transition={{ type: "spring", stiffness: 350, damping: 28 }}
                  />
                )}
              </Link>
            ))}

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="ml-3 h-8 w-8 rounded-full text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-gray-200 hover:bg-black/[0.06] dark:hover:bg-white/[0.06]"
            >
              {mounted && (theme === "dark" ? <Sun className="h-3.5 w-3.5" /> : <Moon className="h-3.5 w-3.5" />)}
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>

          <div className="flex md:hidden items-center justify-between w-full">
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Menu</span>
            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="h-8 w-8 rounded-full text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-gray-200 hover:bg-black/[0.06] dark:hover:bg-white/[0.06]"
              >
                {mounted && (theme === "dark" ? <Sun className="h-3.5 w-3.5" /> : <Moon className="h-3.5 w-3.5" />)}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="h-8 w-8 rounded-full text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-gray-200 hover:bg-black/[0.06] dark:hover:bg-white/[0.06]"
              >
                {isMobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="md:hidden overflow-hidden border-t border-black/[0.05] dark:border-white/[0.05]"
            >
              <div className="flex flex-col gap-1 p-3">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileOpen(false)}
                    className={cn(
                      "px-4 py-3 rounded-xl text-sm font-medium transition-colors duration-200",
                      activeLink === link.href
                        ? "text-[#00d47a] dark:text-[#00ff9f] bg-[#00d47a]/[0.06] dark:bg-[#00ff9f]/[0.06]"
                        : "text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-gray-200 hover:bg-black/[0.04] dark:hover:bg-white/[0.04]",
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}
