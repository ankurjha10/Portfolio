"use client"

import { useRef } from "react"
import { ExternalLink, Github, Terminal, CheckCircle2, LayoutTemplate } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, useInView } from "framer-motion"
import { cn } from "@/lib/utils"

const projects = [
  {
    title: "Shortify — High Performance URL Shortener",
    description:
      "Engineered a scalable, highly available URL shortening service. Focused heavily on backend performance, utilizing caching mechanisms to ensure millisecond-level redirect resolution under concurrent loads.",
    features: [
      "Sub-50ms redirect resolution via optimized indexing",
      "Stateless token-based rate limiting",
      "Real-time click tracking & analytics dashboard",
    ],
    tech: ["Java 25", "Spring Boot", "MySQL", "REST APIs"],
    github: "https://github.com/ankurjha10/Shortify-A-URL-Shortener.git",
    demo: "https://shorttify.netlify.app/",
    image: "/url-shortener-dashboard-with-analytics.jpg",
    featured: true,
  },
  {
    title: "Gigzy Marketplace",
    description:
      "Developed a full-stack dual-sided freelance marketplace. Implemented secure session management, robust transactional order models, and complex state filtering.",
    features: [
      "Role-Based Access Control (RBAC)",
      "Transactional gig ordering system",
      "Dynamic state filtering",
    ],
    tech: ["Node.js", "Express", "MongoDB", "React", "JWT Auth"],
    github: "https://github.com/ankurjha10/GigzyFreelancingPlatform.git",
    demo: "https://gigzy-freelancing-platform.vercel.app/",
    image: "/freelance-marketplace-platform-interface.jpg",
  },
  {
    title: "Real-time Face Recognition",
    description:
      "Built a browser-first detection engine utilizing WebRTC and machine learning. Offloaded heavy vector calculations to browser WebGL to ensure zero-latency client processing.",
    features: [
      "Multi-face landmark recognition",
      "Live expression & age analytics",
      "Zero-latency WebRTC streams",
    ],
    tech: ["JavaScript", "React", "face-api.js", "WebRTC"],
    github: "https://github.com/ankurjha10/Advance-Face-Recognition.git",
    demo: "https://advance-face-recognition.vercel.app/",
    image: "/face-recognition-system-with-detection-boxes.jpg",
  },
  {
    title: "Currently Building",
    description:
      "Architecting a distributed messaging queue system in Java designed for high-throughput, fault-tolerant microservice communication.",
    features: [
      "Eventual consistency patterns",
      "Broker node replication",
      "Dead-letter queues",
    ],
    tech: ["Java", "Docker", "Microservices", "Kafka"],
    github: null,
    demo: null,
    image: null,
    placeholder: true,
  },
]

export function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-background">
      <div
        ref={ref}
        className="relative max-w-6xl mx-auto px-5 sm:px-6 lg:px-8"
        data-visible={isInView}
      >
        <div className="text-center mb-16 fade-up-el delay-0">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            Featured Projects
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-[#00d47a] to-transparent dark:from-[#00ff9f] mx-auto rounded-full" />
          <p className="mt-4 text-sm sm:text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            A selection of production-grade systems showcasing my backend architecture, system design, and full-stack capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const isFeatured = project.featured;

            return (
              <div
                key={project.title}
                className={cn(
                  "fade-up-el group flex flex-col rounded-2xl overflow-hidden border transition-all duration-500",
                  "bg-white/40 dark:bg-white/[0.02] backdrop-blur-sm",
                  "border-black/5 dark:border-white/10",
                  "hover:border-[#00d47a]/50 dark:hover:border-[#00ff9f]/50",
                  "hover:shadow-[0_0_30px_rgba(0,212,122,0.1)] dark:hover:shadow-[0_0_30px_rgba(0,255,159,0.1)]",
                  "hover:-translate-y-1 transform-gpu",
                  isFeatured ? "lg:col-span-2 lg:flex-row" : "col-span-1",
                  project.placeholder && "border-dashed bg-transparent shadow-none hover:shadow-none"
                )}
                style={isInView ? { animationDelay: `${(index + 1) * 150}ms` } : undefined}
              >

                {project.placeholder ? (
                  <div className="w-full relative min-h-[350px] flex flex-col items-center justify-center p-10 text-center bg-gray-50/50 dark:bg-[#0c1018]/50">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_40%,rgba(0,255,159,0.05),transparent)] pointer-events-none" />
                    <Terminal className="h-12 w-12 text-[#00d47a] dark:text-[#00ff9f] mb-4 opacity-80" />
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto mb-6">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center mb-6">
                      {project.tech.map((t) => (
                        <span key={t} className="px-3 py-1 text-xs font-semibold bg-black/5 dark:bg-white/10 text-gray-700 dark:text-gray-300 rounded-md">
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-col items-start gap-2 text-sm text-gray-500 dark:text-gray-400 text-left">
                      {project.features.map(f => (
                        <div key={f} className="flex items-center gap-2">
                          <LayoutTemplate className="w-3.5 h-3.5 text-[#00d47a]/50 dark:text-[#00ff9f]/50" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <>
                    <div className={cn(
                      "relative overflow-hidden bg-muted",
                      isFeatured ? "lg:w-[50%] lg:min-h-[400px] h-64" : "h-56 w-full"
                    )}>
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500" />
                    </div>

                    <div className={cn(
                      "flex flex-col p-6 sm:p-8 flex-1",
                      isFeatured ? "lg:w-[50%] lg:justify-center" : ""
                    )}>
                      <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-[#00d47a] dark:group-hover:text-[#00ff9f] transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed mb-5">
                        {project.description}
                      </p>

                      <ul className="mb-6 space-y-2">
                        {project.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                            <CheckCircle2 className="w-4 h-4 mt-0.5 text-[#00d47a] dark:text-[#00ff9f] flex-shrink-0" />
                            <span className="leading-tight">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-1 text-[11px] uppercase tracking-wider font-semibold bg-[#00d47a]/10 dark:bg-[#00ff9f]/10 text-[#00b368] dark:text-[#00ff9f] rounded-md border border-[#00d47a]/20 dark:border-[#00ff9f]/20"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-3">
                        <Button
                          variant="outline"
                          size="sm"
                          asChild
                          className="bg-transparent border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white transition-colors"
                        >
                          <a href={project.github!} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2" />
                            View Code
                          </a>
                        </Button>
                        <Button
                          size="sm"
                          asChild
                          className="bg-[#00d47a] hover:bg-[#00b368] dark:bg-[#00ff9f] dark:hover:bg-[#00d47a] text-black font-semibold transition-colors shadow-none"
                        >
                          <a href={project.demo!} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live App
                          </a>
                        </Button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            )
          })}
        </div>
      </div>

      <style>{`
        .fade-up-el {
          opacity: 0;
          transform: translateY(20px);
        }
        [data-visible="true"] .fade-up-el {
          animation: fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}
