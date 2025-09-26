"use client"

import { useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const projects = [
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
  {
    title: "Whisper AI – Privacy-First Emotional Support Chat Interface",
    date: "May 2025 – Present",
    tech: ["React", "JavaScript", "REST APIs", "Firebase", "Vercel",
    "Webpack", "OpenAI API", "Agile"],
    description: `Designed and built a responsive, multi-page chat interface in React for anonymous journaling and real-time AI-powered support.
    Integrated OpenAI's GPT-based LLM via RESTful APIs to detect emotional abuse patterns and provide empathetic guidance.
    Implemented anonymous session handling, emotion check logic, and a Safe Exit mechanism using Firebase Authentication and Firestore.
    Developed dynamic, accessible UI components including modal dialogs, alert banners, and emotion feedback prompts based on Figma designs.
    Collaborated in an Agile environment with UI/UX designers, backend developers, and AI engineers to iterate on features and improve user experience.
    Deployed the application to Vercel for internal testing and feedback, ensuring rapid iteration and fast feedback loops.
    Actively contributed to frontend performance improvements, accessibility compliance, and privacy-focused interactions throughout development.`,
    link: "https://kyrahai.onrender.com/whisper-ai/",
    video: "/videos/AIPMBootcampDemo.mp4"

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
    title: "Fault-Tolerant Distributed System",
    date: "Feb 2024",
    tech: ["Python", "Distributed Systems", "OS", "Algorithms"],
    description: `Designed and implemented a distributed fault-tolerant system using checkpoint/restart and data replication to enhance reliability in component tree computations.
Built Python modules to simulate system failures, store computation state periodically, and recover seamlessly using serialized checkpoints.
Developed a data redundancy mechanism to replicate critical computation data across nodes, enabling high availability and minimal downtime.
Validated system robustness through simulated node failures and recovery scenarios, reducing recovery time by 50% and increasing data recovery success rate from 85% to 99%.
Documented findings in an IEEE-style paper and delivered technical presentations covering architecture, algorithms, and performance analysis.`,
    link: "https://github.com/VaishnaviNalla2/Enhancing-Fault-Tolerance-in-Distributed-Systems-for-Component-Tree-Computations"
  },
  
  {
    title: "E-Commerce Trust Analytics web app",
    date: "Mar 2023",
    tech: ["Java", "JSP", "JDBC", "MySQL", "HTML", "CSS", "JFreeChart"],
    description: `Built a full-stack e-commerce web app using Java (Servlets, JSP), MySQL, HTML, CSS, deployed on Tomcat server.
Developed user and seller modules for product search, recommendations, and sentiment-based trust analytics.
Calculated direct and propagation trust scores between users based on review sentiment similarity.
Integrated JFreeChart to visualize trust graphs and product recommendation analytics.
Connected frontend to backend using JDBC for seamless data operations and dynamic content rendering.
Designed and optimized MySQL database for managing users, products, reviews, and trust relationships.
Performed unit, integration, and acceptance testing to ensure functionality, accuracy, and performance.`,
    link: "https://github.com/VaishnaviNalla2/Mining-Users-Trust-From-E-Commerce-Reviews-Based-on-Sentiment-Similarity-Analysis"
  },
  {
    title: "Multifunctional Text & Speech Converter",
    date: "Dec 2022",
    tech: ["Python", "NLP", "PyTorch"],
    description: `Developed a Windows application for text-to-speech and speech-to-text conversion using Python, NLP, and PyTorch.
    Achieved 95% accuracy in speech synthesis by leveraging NLTK and deep learning models.
    Designed an intuitive UI to enhance user experience, receiving a 4.6/5 usability rating in testing.
    Implemented real-time audio processing for seamless speech recognition.
    Conducted unit testing and debugging to ensure system reliability.`,
    pdf: "/pdfs/mini-project.pdf"
  }
  
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
                {project.title === "Multifunctional Text & Speech Converter" && (
  <button
    onClick={() => setOpenPDFModal(idx)}
    className="px-4 py-2 bg-[#F47174] text-white text-sm rounded-full font-medium hover:bg-[#e05a5f] transition"
  >
    View Work ↗
  </button>
)}

            {project.screenshots && idx !== 0 && (
              <button
                onClick={() => setOpenModal(idx)}
                className="mt-4 px-4 py-2 bg-[#F47174] text-white text-sm rounded-full font-medium hover:bg-[#e05a5f] transition"
              >
                View Work ↗
              </button>
            )}
            {/* For projects with only link (GitHub or demo) */}
            {idx !== 0 && project.link && (
          <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="px-4 py-2 bg-[#F47174] text-white text-sm rounded-full font-medium hover:bg-[#e05a5f] transition"
    >
      View Work ↗
    </a>
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
