"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"

interface SplashScreenContextType {
  isSplashVisible: boolean
}

const SplashScreenContext = createContext<SplashScreenContextType | undefined>(
  undefined,
)

export function SplashScreenProvider({ children }: { children: ReactNode }) {
  const [isSplashVisible, setIsSplashVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplashVisible(false)
    }, 5700)

    return () => clearTimeout(timer)
  }, [])

  return (
    <SplashScreenContext.Provider value={{ isSplashVisible }}>
      {children}
    </SplashScreenContext.Provider>
  )
}

export function useSplashScreen() {
  const context = useContext(SplashScreenContext)
  if (context === undefined) {
    throw new Error("useSplashScreen must be used within SplashScreenProvider")
  }
  return context
}
