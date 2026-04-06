"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { cn } from "@/lib/utils"

import { DiJava, DiGit, DiGithubBadge } from "react-icons/di"
import {
  SiSpringboot,
  SiReact,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiPostman,
  SiTailwindcss,
  SiJavascript,
  SiHibernate,
  SiAngular,
  SiRedis
} from "react-icons/si"
import { TbApi } from "react-icons/tb"

const techGroups = [
  {
    id: "backend",
    items: [
      { name: "Java", icon: DiJava },
      { name: "Spring Boot", icon: SiSpringboot },
      { name: "REST APIs", icon: TbApi },
      { name: "Hibernate / JPA", icon: SiHibernate },
    ],
  },
  {
    id: "databases",
    items: [
      { name: "MySQL", icon: SiMysql },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Redis", icon: SiRedis },
    ],
  },
  {
    id: "tools",
    items: [
      { name: "Git", icon: DiGit },
      { name: "GitHub", icon: DiGithubBadge },
      { name: "Postman", icon: SiPostman },
      { name: "Docker", icon: SiDocker },
    ],
  },
  {
    id: "frontend",
    items: [
      { name: "React", icon: SiReact },
      { name: "Angular", icon: SiAngular },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "JavaScript", icon: SiJavascript },
    ],
  },
]

export function SkillsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-background">
      <div 
        ref={ref} 
        className="relative max-w-5xl mx-auto px-5 sm:px-6 lg:px-8"
        data-visible={isInView}
      >
        <div className="text-center mb-16 fade-up-el delay-0">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            Technologies I Work With
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-500 dark:text-gray-400">
            Focused on backend systems & scalable APIs
          </p>
        </div>

        <div className="flex flex-col gap-8 sm:gap-10">
          {techGroups.map((group, groupIndex) => (
            <div 
              key={group.id} 
              className={cn(
                "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 fade-up-el",
                group.id === "frontend" && "opacity-80 hover:opacity-100 transition-opacity"
              )}
              style={isInView ? { animationDelay: `${(groupIndex + 1) * 100}ms` } : undefined}
            >
              {group.items.map((tech) => (
                <div
                  key={tech.name}
                  className={cn(
                    "group flex flex-col items-center justify-center p-4 sm:p-5 rounded-xl border transition-all duration-300",
                    "bg-white/40 dark:bg-white/[0.02] backdrop-blur-sm",
                    "border-black/5 dark:border-white/10",
                    "hover:border-[#00d47a]/50 dark:hover:border-[#00ff9f]/50",
                    "hover:shadow-[0_0_20px_rgba(0,212,122,0.15)] dark:hover:shadow-[0_0_20px_rgba(0,255,159,0.15)]",
                    "hover:-translate-y-1 transform-gpu",
                    group.id === "backend" ? "py-6 sm:py-7" : ""
                  )}
                >
                  <tech.icon
                    className={cn(
                      "mb-3 transition-colors duration-300",
                      group.id === "backend" ? "w-10 h-10" : "w-8 h-8",
                      "text-gray-500/80 dark:text-white/60",
                      "group-hover:text-[#00d47a] dark:group-hover:text-[#00ff9f]"
                    )}
                  />
                  <span
                    className={cn(
                      "font-medium text-center transition-colors duration-300",
                      group.id === "backend" ? "text-[15px]" : "text-[13px]",
                      "text-gray-600 dark:text-gray-400",
                      "group-hover:text-gray-900 dark:group-hover:text-white"
                    )}
                  >
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .fade-up-el {
          opacity: 0;
          transform: translateY(20px);
        }
        [data-visible="true"] .fade-up-el {
          animation: fadeUp 0.5s ease-out forwards;
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
