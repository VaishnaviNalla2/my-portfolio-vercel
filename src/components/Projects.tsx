"use client"

import { useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const projects = [
  {
    title: "AI-Driven Profile Optimizer Metrics Dashboard",
    date: "Jan 2024 – Present",
    tech: ["React", "JavaScript", "REST APIs", "Vercel", "Agile"],
    description: `Developed a 9-page React dashboard to visualize AI analysis of user dating profiles (images, bios, prompts).
Integrated RESTful APIs to display real-time structured scores and improvement suggestions.
Built responsive, modular components based on Figma designs.
Wrote Jest unit tests reducing UI errors by 25%.
Collaborated with backend, UI/UX, and PM teams using Agile and Git.
Deployed to Vercel and currently enhancing visualizations using Plotly.`,
    link: "https://bestyou-three.vercel.app",
    video: "/videos/AIPMBootcampDemo.mov"
  },
  {
    title: "Ethos: Small Business Platform",
    date: "Nov – Dec 2024",
    tech: ["React", "React Native", "Firebase", "REST APIs"],
    description: `Built frontend using React and Figma designs; integrated Firebase and Google Places API.
Collaborated via Agile with backend, designers, and PMs using Monday.com.
Created scalable backend modules and optimized database access.
Tested across devices, resolved API/UI bugs, and ran internal A/B testing.`,
    screenshots: ["/images/ethos-1.png", "/images/ethos-2.png"]
  },
  {
    title: "Real-Time Weather Application",
    date: "Nov 2024",
    tech: ["HTML5", "CSS3", "JavaScript", "OpenWeather API"],
    description: `Developed a responsive weather web app using OpenWeather API.
Implemented geolocation support and real-time weather display with clean UI.`
  },
  {
    title: "E-Commerce Trust Analytics web app",
    date: "Mar 2023",
    tech: ["Python", "Java", "Node.js", "React", "AWS"],
    description: `Created a full-stack platform with sentiment analysis of customer reviews.
Built REST APIs deployed on AWS; used PostgreSQL for efficient storage.
Implemented CI/CD pipelines and tested thoroughly with Jest & Mocha.`,
    screenshots: ["/images/ethos-1.png", "/images/ethos-2.png"]
  },
  {
    title: "Multifunctional Text & Speech Converter",
    date: "Dec 2022",
    tech: ["Python", "NLP", "PyTorch"],
    description: `Developed a Windows app for speech-to-text and text-to-speech using PyTorch and NLTK.
Implemented real-time audio processing with 95% accuracy and a 4.6/5 usability score.`
  }
]

export default function ProjectsScrollReveal() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref })
  const y = useTransform(scrollYProgress, [0, 1], [0, -300])

  const [openModal, setOpenModal] = useState<number | null>(null)
  const [openVideoModal, setOpenVideoModal] = useState<number | null>(null)

  return (
    <section id="projects" ref={ref} className="flex flex-col md:flex-row py-32 px-6 gap-16 bg-white">
      {/* Left Side: Fixed Heading */}
      <div className="md:w-1/2 md:sticky md:top-1/2 transform md:-translate-y-1/2 self-start flex flex-col items-center text-center relative z-0 px-4">
        <h2 className="text-5xl md:text-6xl font-bold text-[#1E1B2E] mb-4">My Projects</h2>
        <div className="w-20 h-1 bg-[#006A71] mb-6 rounded-full"></div>
        <p className="text-gray-700 text-lg md:text-xl max-w-md leading-relaxed">
          Explore my recent work — projects built using modern stacks and collaborative development approaches.
        </p>
      </div>

      {/* Right Side: Project Blocks */}
      <div className="md:w-1/2 space-y-24 z-10">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-[#2B174C] p-6 rounded-xl shadow-md text-white"
          >
            <div className="flex justify-between items-start mb-2 flex-wrap">
              <h3 className="text-xl font-semibold max-w-[70%]">{project.title}</h3>
              <span className="text-sm text-[#F47174]">{project.date}</span>
            </div>
            <div className="flex flex-wrap gap-2 mb-3">
              {project.tech.map((tag, i) => (
                <span
                  key={i}
                  className="bg-white/10 text-white text-xs px-3 py-1 rounded-md font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-sm text-white/90 whitespace-pre-line leading-relaxed mb-3">
              {project.description}
            </p>

            {idx === 0 && (
              <div className="flex gap-4 mt-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#F47174] text-white text-sm rounded-full font-medium hover:bg-[#e05a5f] transition"
                >
                  View Work ↗
                </a>
                <button
                  onClick={() => setOpenVideoModal(idx)}
                  className="px-4 py-2 bg-[#F47174] text-white text-sm rounded-full font-medium hover:bg-[#e05a5f] transition"
                >
                  View Demo Video 🎥
                </button>
              </div>
            )}

            {project.screenshots && idx !== 0 && (
              <button
                onClick={() => setOpenModal(idx)}
                className="mt-4 px-4 py-2 bg-[#F47174] text-white text-sm rounded-full font-medium hover:bg-[#e05a5f] transition"
              >
                View Work ↗
              </button>
            )}
          </motion.div>
        ))}
      </div>

      {/* Screenshot Modal */}
      {openModal !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-2xl w-full relative">
            <button
              className="absolute top-3 right-3 text-black text-2xl font-bold hover:text-red-600 transition"
              onClick={() => setOpenModal(null)}
            >
              ✖
            </button>
            <h3 className="text-xl font-semibold mb-4 text-center">Project Screenshots</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projects[openModal]?.screenshots?.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Screenshot ${i + 1}`}
                  className="rounded-lg border"
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Video Modal */}
      {openVideoModal !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-2xl w-full relative">
            <button
              className="absolute top-3 right-3 text-black text-2xl font-bold hover:text-red-600 transition"
              onClick={() => setOpenVideoModal(null)}
            >
              ×
            </button>
            <h3 className="text-xl font-semibold mb-4 text-center">Demo Video</h3>
            <video
              controls
              autoPlay
              className="w-full rounded-lg"
              src={projects[openVideoModal].video}
            />
          </div>
        </div>
      )}
    </section>
  )
}
