"use client"

import { ArrowUpRight, Code2 } from "lucide-react"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative overflow-hidden border-t border-black/[0.05] dark:border-white/[0.05] bg-background pt-20 pb-10 sm:pt-24 sm:pb-12">

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[#00d47a] dark:bg-[#00ff9f] blur-[120px] rounded-full [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

          <div className="lg:col-span-5 flex flex-col items-start">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 group cursor-pointer outline-none"
            >
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 group-hover:border-[#00d47a]/50 dark:group-hover:border-[#00ff9f]/50 transition-colors overflow-hidden">
                <Code2 className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-[#00d47a] dark:group-hover:text-[#00ff9f] transition-colors relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#00d47a]/20 to-transparent dark:from-[#00ff9f]/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">Ankur Jha</span>
            </button>
            <p className="mt-6 text-gray-500 dark:text-gray-400 max-w-sm text-sm leading-relaxed">
              Crafting robust, high-performance backends and intuitive user experiences. Always learning, building, and seeking new challenges.
            </p>
            <div className="mt-6 flex flex-wrap gap-2 text-xs font-mono text-gray-400 dark:text-gray-500">
              <span className="px-2.5 py-1 rounded-md bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5">Java</span>
              <span className="px-2.5 py-1 rounded-md bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5">Spring Boot</span>
              <span className="px-2.5 py-1 rounded-md bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5">Next.js</span>
            </div>
          </div>

          <div className="lg:col-span-3 lg:col-start-7 text-sm">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-6 uppercase tracking-wider text-xs">Connect</h4>
            <ul className="space-y-4">
              <li>
                <a href="https://github.com/ankurjha10" target="_blank" rel="noopener noreferrer" className="group flex items-center text-gray-600 dark:text-gray-400 hover:text-[#00d47a] dark:hover:text-[#00ff9f] transition-colors w-fit outline-none">
                  GitHub
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/ankurjha01/" target="_blank" rel="noopener noreferrer" className="group flex items-center text-gray-600 dark:text-gray-400 hover:text-[#00d47a] dark:hover:text-[#00ff9f] transition-colors w-fit outline-none">
                  LinkedIn
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                </a>
              </li>
              <li>
                <a href="mailto:jhaankur33@gmail.com" className="group flex items-center text-gray-600 dark:text-gray-400 hover:text-[#00d47a] dark:hover:text-[#00ff9f] transition-colors w-fit outline-none">
                  Email
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3 text-sm">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-6 uppercase tracking-wider text-xs">Navigation</h4>
            <ul className="space-y-4">
              {["Home", "Skills", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      const el = document.getElementById(item.toLowerCase())
                      if (el) {
                        el.scrollIntoView({ behavior: 'smooth' })
                      } else if (item === "Home") {
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                      }
                    }}
                    className="text-gray-600 dark:text-gray-400 hover:text-[#00d47a] dark:hover:text-[#00ff9f] transition-colors outline-none"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-black/10 dark:border-white/10 flex justify-center items-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} Ankur Jha. All rights reserved.
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3 pointer-events-none select-none overflow-hidden w-full max-w-[100vw] text-center">
        <span className="text-[18vw] sm:text-[14vw] font-black leading-none text-transparent bg-clip-text bg-gradient-to-b from-black/[0.04] to-transparent dark:from-white/[0.03] tracking-tighter whitespace-nowrap">
          ANKUR JHA
        </span>
      </div>
    </footer>
  )
}
