"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"

const experiences = [
  {
    title: "Software Engineer Intern",
    org: "PM Accelerator – Florida, USA",
    date: "Nov 2024 – Present",
    points: [
      "Developed web pages using React and JavaScript based on Figma designs provided by the UI/UX team.",
      "Integrated RESTful APIs and connected frontend to backend databases for seamless data flow.",
      "Collaborated with cross-functional teams through Agile methodologies using JIRA and daily standups.",
      "Maintained code quality with Git version control and peer reviews.",
      "Conducted unit testing and ensured cross-browser UI consistency and functionality."
    ]
  },
  {
    title: "Software- Cybersecurity Intern",
    org: "AICTE, Palo Alto Academy – India",
    date: "July 2022 – Sep 2022",
    points: [
      "Worked on network security, threat detection, firewall management.",
      "Built foundations in digital security and asset protection."
    ]
  }
]

export default function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="experience" className="relative py-32 px-6 bg-[#F9FAFB]">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-[#27374D] mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Experience
        </motion.h2>

        <div ref={ref} className="space-y-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-3xl shadow-xl px-8 py-6 text-left relative border-l-4 border-[#27374D]"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="flex justify-between items-center mb-2 flex-wrap">
                <h3 className="text-xl font-semibold text-[#27374D]">{exp.title}</h3>
                <span className="text-sm text-gray-500">{exp.date}</span>
              </div>
              <p className="text-sm text-[#526D82] mb-4 italic">{exp.org}</p>
              <ul className="list-disc pl-5 space-y-1 text-sm text-[#1F1F1F]">
                {exp.points.map((p, idx) => (
                  <li key={idx}>{p}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
