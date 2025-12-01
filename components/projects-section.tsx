"use client"

import { useEffect, useRef } from "react"
import { ExternalLink, Github, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Shortify - A URL Shortener",
    description:
      "A simple and fast URL shortener built using Java and Spring Boot. Features include custom short codes, click analytics, and RESTful API endpoints.",
    tech: ["Java", "Spring Boot", "MySQL", "REST API"],
    github: "https://github.com/ankurjha10/Shortify-A-URL-Shortener.git",
    demo: "https://shorttify.netlify.app/",
    image: "/url-shortener-dashboard-with-analytics.jpg",
  },
  {
    title: "Gigzy Freelancing Platform",
    description:
      "A basic freelance marketplace prototype built with the MERN stack. Includes user authentication, gig posting, and a simple order system.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    github: "https://github.com/ankurjha10/GigzyFreelancingPlatform.git",
    demo: "https://gigzy-freelancing-platform.vercel.app/",
    image: "/freelance-marketplace-platform-interface.jpg",
  },
  {
    title: "Face Recognition System",
    description:
      "A browser-based face recognition tool using face-api.js. Supports real-time face detection, landmark recognition, and expression analysis.",
    tech: ["JavaScript", "React", "face-api.js", "WebRTC"],
    github: "https://github.com/ankurjha10/Advance-Face-Recognition.git",
    demo: "https://advance-face-recognition.vercel.app/",
    image: "/face-recognition-system-with-detection-boxes.jpg",
  },
  {
    title: "Coming Soon",
    description:
      "More exciting projects are in development. Stay tuned for updates on new backend systems and full-stack applications.",
    tech: [],
    github: null,
    demo: null,
    image: null,
    placeholder: true,
  },
]

export function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

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

    const elements = sectionRef.current?.querySelectorAll(".fade-up")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" ref={sectionRef} className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="fade-up opacity-0 translate-y-8 transition-all duration-700 text-3xl sm:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="fade-up opacity-0 translate-y-8 transition-all duration-700 text-muted-foreground max-w-2xl mx-auto">
            A selection of projects showcasing my skills in backend development and full-stack applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="fade-up opacity-0 translate-y-8 transition-all duration-700"
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <div
                className={`h-full rounded-xl border overflow-hidden transition-all duration-300 hover:shadow-xl group ${
                  project.placeholder
                    ? "border-dashed border-border/50 bg-muted/20"
                    : "border-border bg-card hover:border-primary/50 hover:shadow-primary/5"
                }`}
              >
                {project.placeholder ? (
                  <div className="h-full flex flex-col items-center justify-center p-12 text-center min-h-[300px]">
                    <Clock className="h-12 w-12 text-muted-foreground/50 mb-4" />
                    <h3 className="text-xl font-semibold text-muted-foreground mb-2">{project.title}</h3>
                    <p className="text-muted-foreground/70 text-sm">{project.description}</p>
                  </div>
                ) : (
                  <>
                    <div className="relative h-48 overflow-hidden bg-muted">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-5">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-1 text-xs font-medium bg-primary/10 text-primary rounded-md"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-3">
                        <Button variant="outline" size="sm" asChild>
                          <a href={project.github!} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2" />
                            GitHub
                          </a>
                        </Button>
                        <Button variant="ghost" size="sm" asChild>
                          <a href={project.demo!} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
