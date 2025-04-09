"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"

const experiences = [
  {
    title: "Frontend Engineer Intern",
    org: "PM Accelerator – Florida, USA",
    date: "Nov 2024 – Apr 2025",
    points: [
      "Built React dashboards with real-time data from REST APIs.",
      "Collaborated cross-functionally to improve model evaluation workflows.",
      "Used JIRA, Git, and Agile practices."
    ]
  },
  {
    title: "Cybersecurity Intern",
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
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-[#27374D] mb-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Experience
        </motion.h2>

        <div
          ref={ref}
          className="mt-16 w-full max-w-2xl mx-auto"
        >
          <motion.div
            className="bg-[#27374D] rounded-2xl px-6 py-10 shadow-xl text-white relative overflow-hidden"
            initial={{ scale: 0.6, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="space-y-12">
              {experiences.map((exp, i) => (
                <div key={i} className="text-left">
                  <div className="mb-1 text-sm text-[#9DB2BF] font-medium">{exp.date}</div>
                  <h3 className="text-lg font-semibold text-[#9DB2BF]">{exp.title}</h3>
                  <p className="text-sm text-[#526D82] italic mb-3">{exp.org}</p>
                  <ul className="list-disc text-sm text-white/90 pl-5 space-y-1">
                    {exp.points.map((p, idx) => (
                      <li key={idx}>{p}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
