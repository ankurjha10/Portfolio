"use client"

import { useRef } from "react"
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, ArrowRight, Rocket, Shield, Briefcase, Mail, Github, Linkedin as LinkedinIcon } from "lucide-react"

const PARTICLES = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: `${(i * 37 + 13) % 100}%`,
  y: `${(i * 53 + 7) % 100}%`,
  size: (i % 3) + 1.5,
  alpha: 0.12 + (i % 5) * 0.06,
}))

function CodeCard() {
  const cardRef = useRef<HTMLDivElement>(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)

  const rotX = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), {
    stiffness: 120,
    damping: 18,
  })
  const rotY = useSpring(useTransform(mx, [-0.5, 0.5], [-6, 6]), {
    stiffness: 120,
    damping: 18,
  })

  function onMove(e: React.MouseEvent) {
    const r = cardRef.current?.getBoundingClientRect()
    if (!r) return
    mx.set((e.clientX - r.left) / r.width - 0.5)
    my.set((e.clientY - r.top) / r.height - 0.5)
  }
  function onLeave() {
    mx.set(0)
    my.set(0)
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rotX, rotateY: rotY, transformPerspective: 900 }}
      className="relative w-full max-w-md will-change-transform"
    >
      <div className="absolute -inset-[2px] rounded-2xl bg-gradient-to-br from-[#00d47a]/20 dark:from-[#00ff9f]/25 via-transparent to-[#00d47a]/10 dark:to-[#00ff9f]/10 blur-sm pointer-events-none" />

      <div className="relative rounded-2xl border border-black/[0.08] dark:border-white/[0.08] bg-white/85 dark:bg-[#0c1018]/85 backdrop-blur-2xl shadow-2xl shadow-black/10 dark:shadow-black/40 overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-black/[0.05] dark:border-white/[0.05] bg-black/[0.02] dark:bg-white/[0.02]">
          <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <span className="w-3 h-3 rounded-full bg-[#28c840]" />
          <span className="ml-2 text-[11px] text-gray-500 font-mono select-none tracking-wide">
            UserController.java
          </span>
        </div>

        <div className="p-5 font-mono text-[12.5px] leading-[1.7] select-none space-y-0">
          <L n={1}><K>@RestController</K></L>
          <L n={2}><K>@RequestMapping</K><G>(</G><S>&quot;/api/users&quot;</S><G>)</G></L>
          <L n={3}><K>public class </K><T>UserController</T><G>{" {"}</G></L>
          <L n={4} i={1}><C>{"// Inject service"}</C></L>
          <L n={5} i={1}><K>@Autowired</K></L>
          <L n={6} i={1}><K>private </K><T>UserService </T><G>userService;</G></L>
          <div className="h-1.5" />
          <L n={7} i={1}><K>@GetMapping</K><G>(</G><S>&quot;/&#123;id&#125;&quot;</S><G>)</G></L>
          <L n={8} i={1}>
            <K>public </K><T>ResponseEntity</T><G>{"<"}</G><T>User</T><G>{">"} </G>
            <F>getUser</F><G>(</G><K>@PathVariable </K><T>Long </T><G>id) {"{"}</G>
          </L>
          <L n={9} i={2}><K>return </K><G>ResponseEntity.</G><F>ok</F><G>(</G></L>
          <L n={10} i={3}><G>userService.</G><F>findById</F><G>(id));</G></L>
          <L n={11} i={1}><G>{"}"}</G></L>
          <L n={12}><G>{"}"}</G></L>
        </div>
      </div>

      <motion.span
        className="absolute -top-3 -right-3 px-3 py-1 rounded-lg text-[11px] font-bold bg-[#00d47a] dark:bg-[#00ff9f] text-white dark:text-[#080a0c] shadow-lg shadow-[#00d47a]/25 dark:shadow-[#00ff9f]/25"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      >
        Spring Boot
      </motion.span>
      <motion.span
        className="absolute -bottom-3 -left-3 px-3 py-1 rounded-lg text-[11px] font-semibold border border-black/10 dark:border-white/10 bg-white dark:bg-[#0c1018] text-gray-600 dark:text-gray-400 shadow-lg shadow-black/5 dark:shadow-none"
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
      >
        Java 17+
      </motion.span>
    </motion.div>
  )
}

function L({ n, i = 0, children }: { n: number; i?: number; children: React.ReactNode }) {
  return (
    <div className="flex">
      <span className="w-7 text-right pr-3 text-gray-400 dark:text-gray-600/70 select-none text-[11px]">{n}</span>
      <span style={{ paddingLeft: i * 14 }}>{children}</span>
    </div>
  )
}
const K = ({ children }: { children: React.ReactNode }) => <span className="text-[#d73a49] dark:text-[#ff7b72]">{children}</span>
const T = ({ children }: { children: React.ReactNode }) => <span className="text-[#005cc5] dark:text-[#ffa657]">{children}</span>
const S = ({ children }: { children: React.ReactNode }) => <span className="text-[#032f62] dark:text-[#a5d6ff]">{children}</span>
const F = ({ children }: { children: React.ReactNode }) => <span className="text-[#6f42c1] dark:text-[#d2a8ff]">{children}</span>
const G = ({ children }: { children: React.ReactNode }) => <span className="text-[#24292e] dark:text-gray-400">{children}</span>
const C = ({ children }: { children: React.ReactNode }) => <span className="text-[#6a737d] dark:text-gray-600 italic">{children}</span>

const TRUST = [
  { icon: Rocket, label: "5+ API-based projects" },
  { icon: Shield, label: "Focused on performance & security" },
  { icon: Briefcase, label: "Open to internship / freelance" },
]

export function HeroSection() {
  const wrapperRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end start"],
  })

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"])
  const bgOpacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 0.6, 0.15])

  const midY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])

  const textY = useTransform(scrollYProgress, [0, 0.5, 1], ["0%", "-8%", "-25%"])
  const textOpacity = useTransform(scrollYProgress, [0, 0.45, 0.75], [1, 1, 0])

  const cardY = useTransform(scrollYProgress, [0, 0.5, 1], ["0%", "-12%", "-40%"])
  const cardScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.03, 1.08])
  const cardOpacity = useTransform(scrollYProgress, [0, 0.55, 0.8], [1, 1, 0])

  const exitOpacity = useTransform(scrollYProgress, [0.65, 1], [0, 1])

  const socialOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0])
  const socialX = useTransform(scrollYProgress, [0, 0.15], ["0%", "-50%"])

  const handleDownload = () => {
    const a = document.createElement("a")
    a.href = "/resume.pdf"
    a.download = "Ankur_Jha_Resume.pdf"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }

  return (
    <section
      id="home"
      ref={wrapperRef}
      className="relative"
      style={{ height: "200vh" }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute left-4 sm:left-8 z-50 hidden md:flex flex-col items-center gap-5"
          style={{ 
             opacity: socialOpacity, 
             x: socialX,
             top: "50%",
             y: "-50%" 
          }}
        >
          <div className="w-[1px] h-20 bg-black/10 dark:bg-white/10" />
          <a href="https://github.com/ankurjha10" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00d47a] dark:hover:text-[#00ff9f] hover:-translate-y-1 hover:scale-110 transition-all duration-300">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/ankurjha01/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00d47a] dark:hover:text-[#00ff9f] hover:-translate-y-1 hover:scale-110 transition-all duration-300">
            <LinkedinIcon className="w-5 h-5" />
          </a>
          <a href="mailto:jhaankur33@gmail.com" className="text-gray-400 hover:text-[#00d47a] dark:hover:text-[#00ff9f] hover:-translate-y-1 hover:scale-110 transition-all duration-300">
            <Mail className="w-5 h-5" />
          </a>
          <div className="w-[1px] h-20 bg-black/10 dark:bg-white/10" />
        </motion.div>

        <motion.div
          className="absolute inset-0 -z-30"
          style={{ y: bgY, opacity: bgOpacity }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(0,255,159,0.15),transparent)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(0,255,159,0.10),transparent)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_70%_50%_at_50%_0%,#000_60%,transparent_100%)]" />
          <div className="absolute top-[15%] right-[-5%] w-[420px] h-[420px] rounded-full bg-[#00ff9f]/[0.1] dark:bg-[#00ff9f]/[0.06] blur-[120px]" />
          <div className="absolute bottom-[20%] left-[-8%] w-[350px] h-[350px] rounded-full bg-[#00ff9f]/[0.08] dark:bg-[#00ff9f]/[0.04] blur-[100px]" />
        </motion.div>

        <motion.div className="absolute inset-0 -z-20 pointer-events-none" style={{ y: midY }}>
          {PARTICLES.map((p) => (
            <div
              key={p.id}
              className="absolute rounded-full"
              style={{
                left: p.x,
                top: p.y,
                width: p.size,
                height: p.size,
                background: `rgba(0,255,159,${p.alpha})`,
              }}
            />
          ))}
        </motion.div>

        <div className="relative z-10 h-full flex items-center">
          <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
              <motion.div
                className="space-y-6"
                style={{ y: textY, opacity: textOpacity }}
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border border-[#00d47a]/20 dark:border-[#00ff9f]/20 bg-[#00d47a]/[0.05] dark:bg-[#00ff9f]/[0.05] text-[#00d47a] dark:text-[#00ff9f]">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute h-full w-full rounded-full bg-[#00d47a] dark:bg-[#00ff9f] opacity-75" />
                    <span className="relative rounded-full h-2 w-2 bg-[#00d47a] dark:bg-[#00ff9f]" />
                  </span>
                  Open to opportunities
                </span>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.2rem] font-bold tracking-tight leading-[1.08] text-gray-900 dark:text-white">
                  Hi, I&apos;m{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d47a] to-[#009b58] dark:from-[#00ff9f] dark:to-[#00d47a]">
                    Ankur Jha
                  </span>
                </h1>

                <p className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-200">
                  Backend-Focused Java Developer
                </p>

                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed">
                  Building scalable, high-performance systems with{" "}
                  <span className="text-gray-900 dark:text-gray-200 font-medium">Java</span> &amp;{" "}
                  <span className="text-gray-900 dark:text-gray-200 font-medium">Spring Boot</span>
                  &mdash;clean REST APIs, secure auth, and production-ready
                  architectures from day one.
                </p>

                <div className="flex flex-wrap gap-4 pt-1">
                  <Button
                    size="lg"
                    className="group bg-[#00ff9f] text-[#0a0a0c] font-semibold hover:bg-[#00e890] shadow-lg shadow-[#00ff9f]/20 hover:shadow-[#00ff9f]/30 transition-all duration-300 rounded-xl px-6"
                    asChild
                  >
                    <a href="#projects">
                      View Projects
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="group border-black/[0.12] dark:border-white/[0.12] bg-black/[0.04] dark:bg-white/[0.04] backdrop-blur-sm text-gray-800 dark:text-gray-200 hover:bg-black/[0.08] dark:hover:bg-white/[0.08] hover:border-[#00d47a]/50 dark:hover:border-[#00ff9f]/25 transition-all duration-300 rounded-xl px-6"
                    onClick={handleDownload}
                  >
                    <Download className="mr-2 h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
                    Download Resume
                  </Button>
                </div>

                <div className="flex flex-wrap gap-x-6 gap-y-3 pt-3">
                  {TRUST.map((t) => (
                    <div key={t.label} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-500">
                      <t.icon className="h-3.5 w-3.5 text-[#00d47a] dark:text-[#00ff9f]/60" />
                      <span>{t.label}</span>
                    </div>
                  ))}
                </div>

                <div className="flex md:hidden items-center gap-5 pt-2">
                  <a href="https://github.com/ankurjha10" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-black/5 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:text-[#00d47a] dark:hover:text-[#00ff9f] hover:-translate-y-1 transition-all">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href="https://www.linkedin.com/in/ankurjha01/" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-black/5 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:text-[#00d47a] dark:hover:text-[#00ff9f] hover:-translate-y-1 transition-all">
                    <LinkedinIcon className="w-5 h-5" />
                  </a>
                  <a href="mailto:jhaankur33@gmail.com" className="p-2.5 rounded-full bg-black/5 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:text-[#00d47a] dark:hover:text-[#00ff9f] hover:-translate-y-1 transition-all">
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="hidden lg:flex items-center justify-center"
                style={{ y: cardY, scale: cardScale, opacity: cardOpacity }}
              >
                <CodeCard />
              </motion.div>
            </div>
          </div>
        </div>

        <motion.div
          className="absolute inset-0 z-30 pointer-events-none bg-background"
          style={{ opacity: exitOpacity }}
        />
      </div>
    </section>
  )
}