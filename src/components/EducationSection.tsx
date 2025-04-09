"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"

const education = [
  {
    degree: "MS in Computer Science",
    school: "Wright State University",
    date: "Aug 2023 – April 2025",
    gpa: "GPA: 3.625/4.0",
    details: [
      "Coursework: Algorithm Design & Analysis, Distributed Computing, Quantum Algorithms, Quantum Computing, Information Retrieval, Reverse Engineering, Advanced Computer Network"
    ]
  },
  {
    degree: "Bachelors in Computer Science & Engineering",
    school: "AVN Institute of Eng & Technology",
    date: "July 2023",
    details: []
  }
]

export default function EducationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="education" className="relative py-32 px-6 bg-[#F9FAFB]">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-[#27374D] mb-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Education
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
              {education.map((edu, i) => (
                <div key={i} className="text-left">
                  <div className="mb-1 text-sm text-[#9DB2BF] font-medium">{edu.date}</div>
                  <h3 className="text-lg font-semibold text-[#9DB2BF]">{edu.school}</h3>
                  <p className="text-sm text-[#526D82] italic mb-1">{edu.degree}</p>
                  {edu.gpa && <p className="text-sm text-white/80 mb-2">{edu.gpa}</p>}
                  {edu.details.length > 0 && (
                    <ul className="list-disc text-sm text-white/90 pl-5 space-y-1">
                      {edu.details.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
