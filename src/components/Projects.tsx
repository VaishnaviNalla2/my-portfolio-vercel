"use client"

import { useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const projects = [
  {
    title: "Whisper AI – Privacy-First Emotional Support Chat Interface",
    date: "May 2025 – Present",
    tech: ["React", "JavaScript", "REST APIs", "Firebase", "Vercel", "Webpack", "OpenAI API", "Agile"],
    description: `Designed and built a responsive, multi-page chat interface in React for anonymous journaling and real-time AI-powered support.
    Integrated OpenAI's GPT-based LLM via RESTful APIs to detect emotional abuse patterns and provide empathetic guidance.
    Implemented anonymous session handling, emotion check logic, and a Safe Exit mechanism using Firebase Authentication and Firestore.
    Developed dynamic, accessible UI components including modal dialogs, alert banners, and emotion feedback prompts based on Figma designs.
    Collaborated in an Agile environment with UI/UX designers, backend developers, and AI engineers to iterate on features and improve user experience.
    Deployed the application to Vercel for internal testing and feedback, ensuring rapid iteration and fast feedback loops.
    Actively contributed to frontend performance improvements, accessibility compliance, and privacy-focused interactions throughout development.`,
    link: "https://drive.google.com/file/d/1qV5eRZXLbkEmRcONkMSo386Vz6hllyYJ/view?usp=sharing",
    video: null
  },
  {
    title: "AI-Driven Profile Optimizer Metrics Dashboard",
    date: "Jan 2025 – April 2025",
    tech: ["React", "JavaScript", "REST APIs", "Vercel", "Agile"],
    description: `Designed and developed responsive, multi-page web interfaces using React, based on Figma designs from the UI/UX team.
      Integrated real-time outputs from backend AI models via RESTful APIs to deliver structured insights and improvement suggestions.
      Implemented dynamic UI components such as progress bars, color-coded feedback indicators, and modal popups for interactive metric visualization.
      Collaborated in an Agile workflow, participating in daily stand-ups with cross-functional team members including backend developers, designers, and product managers.
      Managed project workflows, issue tracking, and sprint progress using JIRA and Git.
      Deployed the application on Vercel for internal testing, demo delivery, and feedback (bestyou-three.vercel.app).
      Continuously contributed to frontend performance improvements and actively resolved bugs leading up to the MVP launch.`,
    link: "https://bestyou-three.vercel.app",
    video: "/videos/AIPMBootcampDemo.mp4"
  },
  // other projects unchanged...
]

export default function ProjectsScrollReveal() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref })
  const y = useTransform(scrollYProgress, [0, 1], [0, -300])

  const [openModal, setOpenModal] = useState<number | null>(null)
  const [openVideoModal, setOpenVideoModal] = useState<number | null>(null)
  const [openPDFModal, setOpenPDFModal] = useState<number | null>(null);

  return (
    <section id="projects" ref={ref} className="flex flex-col md:flex-row py-32 px-6 gap-16 bg-white">
      <div className="md:w-1/2 md:sticky md:top-1/2 transform md:-translate-y-1/2 self-start flex flex-col items-center text-center relative z-0 px-4">
        <h2 className="text-5xl md:text-6xl font-bold text-[#1E1B2E] mb-4">My Projects</h2>
        <div className="w-20 h-1 bg-[#006A71] mb-6 rounded-full"></div>
        <p className="text-gray-700 text-lg md:text-xl max-w-md leading-relaxed">
          Explore my recent work — projects built using modern stacks and collaborative development approaches.
        </p>
      </div>

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

            <div className="flex flex-wrap gap-4 mt-4">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#F47174] text-white text-sm rounded-full font-medium hover:bg-[#e05a5f] transition"
                >
                  View Work ↗
                </a>
              )}

              {project.video && (
                <button
                  onClick={() => setOpenVideoModal(idx)}
                  className="px-4 py-2 bg-[#F47174] text-white text-sm rounded-full font-medium hover:bg-[#e05a5f] transition"
                >
                  View Demo Video 🎥
                </button>
              )}
            </div>

            {project.title === "Multifunctional Text & Speech Converter" && (
              <button
                onClick={() => setOpenPDFModal(idx)}
                className="px-4 py-2 bg-[#F47174] text-white text-sm rounded-full font-medium hover:bg-[#e05a5f] transition"
              >
                View Work ↗
              </button>
            )}

            {project.screenshots && (
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

      {openPDFModal !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-4xl w-full relative">
            <button
              className="absolute top-3 right-3 text-black text-2xl font-bold hover:text-red-600 transition"
              onClick={() => setOpenPDFModal(null)}
            >
              ×
            </button>
            <h3 className="text-xl font-semibold mb-4 text-center">Project Document</h3>
            <iframe
              src={projects[openPDFModal].pdf}
              className="w-full h-[80vh] rounded-lg"
              frameBorder="0"
            />
          </div>
        </div>
      )}

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
