"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Download, ArrowRight, Code2, Database, Server } from "lucide-react"

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0")
            entry.target.classList.remove("opacity-0", "translate-y-8")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = heroRef.current?.querySelectorAll(".fade-up")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  // Function to handle resume download
  const handleDownloadResume = () => {
    // Create a link element
    const link = document.createElement('a')
    // Set the href to your resume file path
    // Option 1: If resume is in public folder (e.g., public/resume.pdf)
    link.href = '/resume.pdf'
    // Set the download attribute with desired filename
    link.download = 'Ankur_Jha_Resume.pdf'
    // Append to body, click, and remove
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--muted))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--muted))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="fade-up opacity-0 translate-y-8 transition-all duration-700 delay-100">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Open to opportunities
              </span>
            </div>

            <h1 className="fade-up opacity-0 translate-y-8 transition-all duration-700 delay-200 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
              Hi, I'm <span className="text-primary">Ankur Jha</span>
            </h1>

            <p className="fade-up opacity-0 translate-y-8 transition-all duration-700 delay-300 text-xl sm:text-2xl font-semibold text-foreground">
              Full Stack Java Developer
            </p>

            <p className="fade-up opacity-0 translate-y-8 transition-all duration-700 delay-[350ms] text-lg text-muted-foreground max-w-xl text-pretty">
              Building clean backend systems and modern web applications.
            </p>

            <div className="fade-up opacity-0 translate-y-8 transition-all duration-700 delay-[400ms] flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="group hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
                onClick={handleDownloadResume}
              >
                <Download className="mr-2 h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
                Download Resume
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="group bg-transparent hover:bg-muted transition-all duration-300"
                asChild
              >
                <a href="#projects">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>

            <div className="fade-up opacity-0 translate-y-8 transition-all duration-700 delay-500 flex flex-wrap items-center gap-4 sm:gap-6 pt-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Code2 className="h-4 w-4 text-primary" />
                <span>Java & Spring Boot</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Database className="h-4 w-4 text-primary" />
                <span>SQL Databases</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Server className="h-4 w-4 text-primary" />
                <span>REST APIs</span>
              </div>
            </div>
          </div>

          {/* Developer Illustration - Code Window */}
          <div className="fade-up opacity-0 translate-y-8 transition-all duration-700 delay-300 hidden lg:flex items-center justify-center">
            <div className="relative">
              <div className="relative bg-card border border-border rounded-xl shadow-2xl overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 bg-muted border-b border-border">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="text-xs text-muted-foreground ml-2 font-mono">Application.java</span>
                </div>
                <div className="p-6 font-mono text-sm space-y-2 bg-background">
                  <div className="text-muted-foreground">
                    <span className="text-primary">@RestController</span>
                  </div>
                  <div className="text-muted-foreground">
                    <span className="text-primary">@RequestMapping</span>
                    <span className="text-foreground">(</span>
                    <span className="text-emerald-500">
                      {'"'}/api{'"'}
                    </span>
                    <span className="text-foreground">)</span>
                  </div>
                  <div>
                    <span className="text-primary">public class</span>{" "}
                    <span className="text-amber-500">ApiController</span> <span className="text-foreground">{"{"}</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-primary">@GetMapping</span>
                    <span className="text-foreground">(</span>
                    <span className="text-emerald-500">
                      {'"'}/hello{'"'}
                    </span>
                    <span className="text-foreground">)</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-primary">public</span> <span className="text-amber-500">String</span>{" "}
                    <span className="text-cyan-400">hello</span>
                    <span className="text-foreground">() {"{"}</span>
                  </div>
                  <div className="pl-8">
                    <span className="text-primary">return</span>{" "}
                    <span className="text-emerald-500">
                      {'"'}Hello, World!{'"'}
                    </span>
                    ;
                  </div>
                  <div className="pl-4 text-foreground">{"}"}</div>
                  <div className="text-foreground">{"}"}</div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 px-3 py-1.5 bg-primary text-primary-foreground rounded-lg text-sm font-medium shadow-lg">
                Spring Boot
              </div>
              <div className="absolute -bottom-4 -left-4 px-3 py-1.5 bg-card border border-border text-foreground rounded-lg text-sm font-medium shadow-lg">
                Java 17+
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}