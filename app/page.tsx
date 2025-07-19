import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Internship } from "@/components/internship"
import { Contact } from "@/components/contact"
import { SocialLinks } from "@/components/social-links"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Internship />
      <Contact />
      <SocialLinks />
    </main>
  )
}
