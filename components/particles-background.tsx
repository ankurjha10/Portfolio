"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import Particles, { initParticlesEngine } from "@tsparticles/react"
import { loadSnowPreset } from "@tsparticles/preset-snow"
import type { Engine } from "@tsparticles/engine"

export function ParticlesBackground() {
  const [init, setInit] = useState(false)
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    initParticlesEngine(async (engine: Engine) => {
      await loadSnowPreset(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  if (!init || !mounted) {
    return null
  }

  // Determine the actual theme being used
  const currentTheme = theme === "system" ? resolvedTheme : theme
  const particleColor = currentTheme === "dark" ? "#ffffff" : "#000000"

  return (
    <Particles
      id="tsparticles"
      className="absolute inset-0 -z-10"
      options={{
        preset: "snow",
        background: {
          color: {
            value: "transparent",
          },
        },
        particles: {
          color: {
            value: particleColor,
          },
          move: {
            direction: "bottom",
            enable: true,
            outModes: {
              default: "out",
            },
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
            },
            value: 80,
          },
          opacity: {
            value: { min: 0.3, max: 0.7 },
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }}
    />
  )
}