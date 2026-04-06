import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { Footer } from "@/components/footer"
import { ParticlesBackground } from "@/components/particles-background"
import dynamic from "next/dynamic"

const SkillsSection = dynamic(() => import("@/components/skills-section").then(mod => mod.SkillsSection))
const ProjectsSection = dynamic(() => import("@/components/projects-section").then(mod => mod.ProjectsSection))
const ContactSection = dynamic(() => import("@/components/contact-section").then(mod => mod.ContactSection))

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <ParticlesBackground />
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}