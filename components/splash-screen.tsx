"use client"

import { useState, useEffect } from "react"

interface Greeting {
  text: string
  fontClass: string
  scale?: string
}

const greetings: Greeting[] = [
  { text: "Hello", fontClass: "font-inter font-normal antialiased", scale: "scale-100" },
  { text: "Hi", fontClass: "font-inter font-normal antialiased", scale: "scale-100" },
  { text: "Bonjour", fontClass: "font-inter font-normal antialiased", scale: "scale-100" },
  { text: "Ciao", fontClass: "font-inter font-normal antialiased", scale: "scale-100" },
  { text: "Hola", fontClass: "font-inter font-normal antialiased", scale: "scale-100" },
  { text: "Olá", fontClass: "font-inter font-normal antialiased", scale: "scale-[0.98]" },
  { text: "Guten Tag", fontClass: "font-inter font-normal antialiased", scale: "scale-[0.95]" },

  { text: "привет", fontClass: "font-inter font-normal antialiased", scale: "scale-[0.95]" },

  { text: "Namaste", fontClass: "font-[family-name:var(--font-samarkan)] font-normal antialiased", scale: "scale-[0.94]" }, // Hindi
  { text: "नमस्कार", fontClass: "font-noto font-normal antialiased", scale: "scale-[0.94]" }, // Marathi / Nepali
  { text: "নমস্কার", fontClass: "font-noto font-normal antialiased", scale: "scale-[0.94]" }, // Bengali
  { text: "வணக்கம்", fontClass: "font-noto font-normal antialiased", scale: "scale-[0.92]" }, // Tamil
  { text: "నమస్కారం", fontClass: "font-noto font-normal antialiased", scale: "scale-[0.92]" }, // Telugu
  { text: "നമസ്കാരം", fontClass: "font-noto font-normal antialiased", scale: "scale-[0.92]" }, // Malayalam
  { text: "ನಮಸ್ಕಾರ", fontClass: "font-noto font-normal antialiased", scale: "scale-[0.92]" }, // Kannada
  { text: "નમસ્તે", fontClass: "font-noto font-normal antialiased", scale: "scale-[0.94]" }, // Gujarati
  { text: "ਸਤ ਸ੍ਰੀ ਅਕਾਲ", fontClass: "font-noto font-normal antialiased", scale: "scale-[0.92]" }, // Punjabi

  // Arabic / Urdu
  { text: "السلام علیکم", fontClass: "font-noto font-normal antialiased", scale: "scale-[0.90]" },
  { text: "مرحبا", fontClass: "font-noto font-normal antialiased", scale: "scale-[0.95]" },

  // East Asia (use Noto Sans)
  { text: "こんにちは", fontClass: "font-noto font-normal antialiased", scale: "scale-[0.96]" }, // Japanese
  { text: "你好", fontClass: "font-noto font-normal antialiased", scale: "scale-[0.96]" }, // Chinese
  { text: "안녕하세요", fontClass: "font-noto font-normal antialiased", scale: "scale-[0.96]" }, // Korean
]


export function SplashScreen() {
  const [index, setIndex] = useState(0)
  const [fade, setFade] = useState(true)
  const [visible, setVisible] = useState(true)

  // TIMING
  const displayDuration = 350
  const fadeDuration = 150

  // Control body overflow and content visibility when splash is active
  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden"
      document.body.classList.add("splash-active")
    } else {
      document.body.style.overflow = ""
      document.body.classList.remove("splash-active")
    }
    return () => {
      document.body.style.overflow = ""
      document.body.classList.remove("splash-active")
    }
  }, [visible])

  // Ensure browser font loading has started before showing splash content
  // (next/font will handle loading of Inter/Noto; keeping a safe ready check)
  useEffect(() => {
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.catch(() => {}).then(() => {})
    }
  }, [])

  useEffect(() => {
    if (index < greetings.length) {
      const fadeOutTimeout = setTimeout(() => setFade(false), displayDuration - fadeDuration)
      const nextWordTimeout = setTimeout(() => {
        setFade(true)
        setIndex(index + 1)
      }, displayDuration)

      return () => {
        clearTimeout(fadeOutTimeout)
        clearTimeout(nextWordTimeout)
      }
    } else {
      setTimeout(() => setVisible(false), 500)
    }
  }, [index])

  if (!visible) return null

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-background backdrop-blur-md transition-opacity duration-700 ${
        index >= greetings.length ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-12 px-4 w-full">

        <div
          className={`text-center text-6xl sm:text-7xl font-normal antialiased transition-all duration-[450ms] ease-in-out
            ${greetings[index]?.fontClass}
            ${greetings[index]?.scale}
            ${fade ? "opacity-100 scale-100" : "opacity-0 scale-95"}
          `}
        >
          {greetings[index]?.text}
        </div>

        <div className="w-40 h-1 bg-muted-foreground/20 rounded-full overflow-hidden">
          <div
            className="h-full bg-primary rounded-full"
            style={{
              width: "100%",
              animation: `loader ${(greetings.length * displayDuration) / 1000}s linear forwards`,
            }}
          />
        </div>

        <style>{`
          @keyframes loader {
            from { transform: translateX(-100%); }
            to { transform: translateX(0%); }
          }
        `}</style>

      </div>
    </div>
  )
}
