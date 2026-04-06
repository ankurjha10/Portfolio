"use client"

import { useState, useEffect } from "react"

interface Greeting {
  text: string
  fontClass: string
  scale?: string
}

const greetings: Greeting[] = [
  { text: "Hello", fontClass: "font-inter font-normal antialiased", scale: "scale-100" },
  { text: "Bonjour", fontClass: "font-inter font-normal antialiased", scale: "scale-100" },
  { text: "Hola", fontClass: "font-inter font-normal antialiased", scale: "scale-100" },
  { text: "Namaste", fontClass: "font-[family-name:var(--font-samarkan)] font-normal antialiased", scale: "scale-[0.94]" },
  { text: "নমস্কার", fontClass: "font-noto font-normal antialiased", scale: "scale-[0.94]" },
  { text: "こんにちは", fontClass: "font-noto font-normal antialiased", scale: "scale-[0.96]" },
  { text: "你好", fontClass: "font-noto font-normal antialiased", scale: "scale-[0.96]" },
  { text: "안녕하세요", fontClass: "font-noto font-normal antialiased", scale: "scale-[0.96]" },
]

export function SplashScreen() {
  const [index, setIndex] = useState(0)
  const [fade, setFade] = useState(true)
  const [visible, setVisible] = useState(true)

  const displayDuration = 250
  const fadeDuration = 100

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
      setTimeout(() => setVisible(false), 350)
    }
  }, [index])

  if (!visible) return null

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-background backdrop-blur-md transition-opacity duration-500 ${
        index >= greetings.length ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-12 px-4 w-full">

        <div
          className={`text-center text-6xl sm:text-7xl font-normal antialiased transition-all duration-[300ms] ease-in-out
            ${greetings[index]?.fontClass}
            ${greetings[index]?.scale}
            ${fade ? "opacity-100 scale-100" : "opacity-0 scale-95"}
          `}
        >
          {greetings[index]?.text}
        </div>

        <div className="w-40 h-1 bg-muted-foreground/20 rounded-full overflow-hidden">
          <div
            className="h-full bg-primary rounded-full transition-all ease-linear"
            style={{
              width: `${Math.min(((index + 1) / greetings.length) * 100, 100)}%`,
              transitionDuration: `${displayDuration}ms`,
            }}
          />
        </div>

      </div>
    </div>
  )
}
