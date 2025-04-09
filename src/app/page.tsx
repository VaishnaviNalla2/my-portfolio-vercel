import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'

import EducationExperienceReveal from "@/components/EducationExperienceReveal";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";


export default function Home() {
  return (
    <main>
      <Hero />
      <Skills />
      <Projects />
     
      <EducationExperienceReveal />
      <EducationSection />
      <ContactSection />
    </main>
  )
}
