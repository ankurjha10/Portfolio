"use client"

import { useRef, useState } from "react"
import { useInView } from "framer-motion"
import { Send, Download, Mail, Github, Linkedin as LinkedinIcon, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [copied, setCopied] = useState(false)

  const handleDownload = () => {
    const a = document.createElement("a")
    a.href = "/resume.pdf"
    a.download = "Ankur_Jha_Resume.pdf"
    document.body.appendChild(a)
    document.body.removeChild(a)
  }

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault()
    navigator.clipboard.writeText("jhaankur33@gmail.com")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
    window.location.href = "mailto:jhaankur33@gmail.com"
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-background">
      <div 
        ref={ref} 
        className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10"
        data-visible={isInView}
      >
        <div className="text-center mb-16 fade-up-el delay-0">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            Let&apos;s Build Something Impactful
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-[#00d47a] to-transparent dark:from-[#00ff9f] mx-auto rounded-full" />
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            Focused on backend systems, scalable APIs, and real-world applications.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-10 items-center">
          
          <div className="md:col-span-3 flex flex-col gap-5 sm:px-4 fade-up-el delay-1">
            <button 
              onClick={handleEmailClick}
              className="group w-full flex items-center justify-between p-5 sm:p-6 rounded-2xl border border-black/5 dark:border-white/10 bg-white/40 dark:bg-white/[0.02] backdrop-blur-sm hover:border-[#00d47a]/50 dark:hover:border-[#00ff9f]/50 hover:shadow-[0_0_30px_rgba(0,212,122,0.1)] dark:hover:shadow-[0_0_30px_rgba(0,255,159,0.1)] hover:-translate-y-1 transition-all duration-300 transform-gpu cursor-pointer text-left"
            >
              <div className="flex items-center gap-4 text-gray-800 dark:text-gray-200 group-hover:text-[#00d47a] dark:group-hover:text-[#00ff9f] transition-colors">
                <div className="p-3 rounded-full bg-black/5 dark:bg-white/5 group-hover:bg-[#00d47a]/10 dark:group-hover:bg-[#00ff9f]/10 transition-colors">
                  {copied ? <CheckCircle2 className="w-6 h-6 text-[#00d47a] dark:text-[#00ff9f]" /> : <Mail className="w-6 h-6" />}
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-semibold">{copied ? "Email Copied!" : "Email Me"}</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                    {copied ? "Ready to paste!" : "Directly to my inbox"}
                  </span>
                </div>
              </div>
              <Send className="w-5 h-5 text-gray-400 group-hover:text-[#00d47a] dark:group-hover:text-[#00ff9f] transition-colors -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100" />
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <a 
                href="https://www.linkedin.com/in/ankurjha01/"
                target="_blank" rel="noopener noreferrer"
                className="group flex items-center gap-4 p-5 rounded-2xl border border-black/5 dark:border-white/10 bg-white/40 dark:bg-white/[0.02] backdrop-blur-sm hover:border-[#00d47a]/50 dark:hover:border-[#00ff9f]/50 hover:shadow-[0_0_20px_rgba(0,212,122,0.1)] dark:hover:shadow-[0_0_20px_rgba(0,255,159,0.1)] hover:-translate-y-1 transition-all duration-300 transform-gpu"
              >
                <div className="p-2.5 rounded-full bg-black/5 dark:bg-white/5 group-hover:bg-[#00b368]/10 dark:group-hover:bg-[#00ff9f]/10 transition-colors">
                  <LinkedinIcon className="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-[#00b368] dark:group-hover:text-[#00ff9f] transition-colors" />
                </div>
                <span className="font-semibold text-gray-800 dark:text-gray-200 group-hover:text-[#00b368] dark:group-hover:text-[#00ff9f] transition-colors">LinkedIn</span>
              </a>

              <a 
                href="https://github.com/ankurjha10"
                target="_blank" rel="noopener noreferrer"
                className="group flex items-center gap-4 p-5 rounded-2xl border border-black/5 dark:border-white/10 bg-white/40 dark:bg-white/[0.02] backdrop-blur-sm hover:border-[#00d47a]/50 dark:hover:border-[#00ff9f]/50 hover:shadow-[0_0_20px_rgba(0,212,122,0.1)] dark:hover:shadow-[0_0_20px_rgba(0,255,159,0.1)] hover:-translate-y-1 transition-all duration-300 transform-gpu"
              >
                 <div className="p-2.5 rounded-full bg-black/5 dark:bg-white/5 group-hover:bg-gray-200 dark:group-hover:bg-white/10 transition-colors">
                  <Github className="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors" />
                </div>
                <span className="font-semibold text-gray-800 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">GitHub</span>
              </a>
            </div>

            <div className="mt-2 flex items-center justify-center sm:justify-start pl-2">
              <Button 
                variant="ghost" 
                onClick={handleDownload} 
                className="text-gray-500 dark:text-gray-400 hover:text-[#00b368] dark:hover:text-[#00ff9f] hover:-translate-y-0.5 transition-all outline-none"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </div>
          </div>

          <div className="md:col-span-2 fade-up-el delay-2 h-full">
            <div className="relative p-8 rounded-3xl border border-black/5 dark:border-white/10 bg-gradient-to-br from-black/[0.03] to-transparent dark:from-white/[0.03] dark:bg-[#080b11] h-full flex flex-col justify-center overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00d47a]/10 dark:bg-[#00ff9f]/10 blur-[50px] -mr-10 -mt-10 pointer-events-none" />
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Let&apos;s Build Something
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                I specialize in crafting robust backend architectures, distributed systems, and clean RESTful APIs that scale efficiently. If your team needs a dedicated Java/Spring Boot developer to solve complex engineering challenges, I&apos;m ready to contribute.
              </p>
              
              <div className="mt-auto space-y-4">
                <div className="p-3 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 inline-block">
                  <p className="text-[#00b368] dark:text-[#00ff9f] font-mono text-sm tracking-wide font-medium">
                    jhaankur33@gmail.com
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Usually responds within 24 hours
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-20 pt-8 border-t border-black/5 dark:border-white/10 text-center fade-up-el delay-3">
          <p className="text-gray-500 dark:text-gray-400 font-medium text-sm sm:text-base">
            Open to internships, freelance, and backend-focused opportunities.
          </p>
        </div>
      </div>

      <style>{`
        .fade-up-el {
          opacity: 0;
          transform: translateY(20px);
        }
        [data-visible="true"] .delay-0 { animation: fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        [data-visible="true"] .delay-1 { animation: fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards; }
        [data-visible="true"] .delay-2 { animation: fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards; }
        [data-visible="true"] .delay-3 { animation: fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards; }
        
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}
