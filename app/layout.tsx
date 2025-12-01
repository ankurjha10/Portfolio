import type React from "react"
import type { Metadata, Viewport } from "next"
import {
  Inter,
  JetBrains_Mono,
  Noto_Sans,
} from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { SplashScreen } from "@/components/splash-screen"
import { SplashScreenProvider } from "@/providers/splash-screen-provider"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})
const noto = Noto_Sans({ subsets: ["latin"], variable: "--font-noto" })

export const metadata: Metadata = {
  title: "Ankur Jha — Full Stack Java Developer Portfolio",
  description:
    "Portfolio website of Ankur Jha, a Full Stack Java Developer specializing in Java, Spring Boot, REST APIs, and modern web development.",
  keywords: [
    "Java Developer",
    "Spring Boot",
    "Backend Engineer",
    "REST APIs",
    "Portfolio",
    "Ankur Jha",
    "Full Stack Developer",
  ],

  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1a1a" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preload" href="/fonts/Samarkan.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <style>{`
          body.splash-active > *:not([data-splash]) {
            opacity: 0;
            pointer-events: none;
          }
        `}</style>
      </head>
      <body suppressHydrationWarning className={`${inter.variable} ${noto.variable} ${jetbrainsMono.variable} font-sans antialiased transition-opacity duration-700`}>
        <div data-splash>
          <SplashScreen />
        </div>
        <SplashScreenProvider>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
            {children}
          </ThemeProvider>
        </SplashScreenProvider>
        <Analytics />
      </body>
    </html>
  )
}
