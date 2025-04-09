"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const projects = [
  {
    title: "AI-Driven Profile Optimizer Metrics Dashboard",
    date: "Jan 2024 – Present",
    tech: ["React", "JavaScript", "REST APIs", "Vercel", "Agile"],
    highlights: [
      "Developed a frontend metrics dashboard with 9 web pages in React to visualize AI analysis of users dating profile (images, bios, prompts).",
      "Integrated with backend AI models via RESTful APIs to display real-time, structured scores and improvement suggestions.",
      "Designed modular components to present photo quality, bio strength, and prompt impact using color-coded logic and progress bars.",
      "Collaborated with backend developers, UI/UX designers, and PMs to translate model outputs into interactive insights; Used Git for version control.",
      "Applied Figma designs to build pixel-perfect components across multi-device responsive layouts.",
      "Wrote unit tests using Jest to validate dashboard components, reduced UI errors by 25%",
      "Participated in daily Agile stand-ups; tracked development tasks and bugs using JIRA.",
      "Deployed and tested the application on Vercel for internal reviews and feedback (bestyou-three.vercel.app).",
      "Currently extending the dashboard using Plotly to enhance metric visualization and support better AI evaluation workflows."
    ],
    link: "https://bestyou-three.vercel.app"
  },
  {
    title: "Ethos: Small Business Platform",
    date: "Nov – Dec 2024",
    tech: ["React", "REST APIs", "Testing"],
    highlights: [
      "Developed web pages using React & React Native, following Figma designs provided by the designers. Integrated Google Places API and Firebase to fetch and display structured business data.",
      "Collaborated with the team on Monday.com and connected on daily standups with product managers and backend engineers, participating in Agile workflows. Used Git for code commits.",
      "Built scalable backend modules, including API endpoints and database optimizations, to support frontend features and improve integration with Firebase services.",
      "Conducted internal A/B testing for web components to evaluate user engagement and design preferences",
      "Tested components on both mobile and web for functionality and reliability. Validated API responses using Postman, automated tests. Identified and resolved UI and API integration issues."
    ]
  },
  {
    title: "Real-Time Weather Application",
    date: "Nov 2024",
    tech: ["HTML5", "CSS3", "JavaScript", "OpenWeather API"],
    highlights: [
      "Developed a dynamic weather app integrating RESTful APIs to fetch and display real-time meteorological data for global locations.",
      "Implemented a clean UI with geolocation support and responsive design, serving many active users during testing."
    ]
  },
  {
    title: "E-Commerce Trust Analytics web app",
    date: "Mar 2023",
    tech: ["Python", "Java", "Node.js", "React", "AWS"],
    highlights: [
      "Developed a full-stack e-commerce platform using React, Node.js, and Java to enhance trust analytics.",
      "Integrated NLP-based sentiment analysis to analyze customer reviews & derive trust metrics, improving engagement.",
      "Built and deployed scalable RESTful APIs on AWS to ensure low-latency responses.",
      "Utilized PostgreSQL for efficient data storage and retrieval.",
      "Implemented CI/CD pipelines for automated testing and deployment.",
      "Conducted unit testing (Jest, Mocha) and API testing to ensure reliability and accuracy."
    ]
  },
  {
    title: "Multifunctional Text & Speech Converter",
    date: "Dec 2022",
    tech: ["Python", "NLP", "PyTorch"],
    highlights: [
      "Developed a Windows application for text-to-speech and speech-to-text conversion using Python, NLP, and PyTorch.",
      "Achieved 95% accuracy in speech synthesis by leveraging NLTK and deep learning models.",
      "Designed an intuitive UI to enhance user experience, receiving a 4.6/5 usability rating in testing.",
      "Implemented real-time audio processing for seamless speech recognition.",
      "Conducted unit testing and debugging to ensure system reliability"
    ]
  }
]

export default function ProjectsScrollReveal() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref })
  const y = useTransform(scrollYProgress, [0, 1], [0, -300])

  return (
    <section ref={ref} className="flex flex-col md:flex-row py-32 px-6 gap-16 bg-white">
      {/* Left Side: Fixed Heading */}
      <div className="md:w-1/2 md:sticky md:top-32 self-start flex flex-col items-center text-center relative z-0">
        <h2 className="text-4xl font-bold text-[#1E1B2E]">My Projects</h2>
        <div className="w-16 h-1 bg-[#006A71] mt-2 mb-4 rounded-full"></div>
        <p className="text-gray-700 max-w-md leading-relaxed">
          Explore my recent work — projects built using modern stacks and collaborative development approaches.
        </p>
      </div>

      {/* Right Side: Scrollable Blocks */}
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
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-semibold">{project.title}</h3>
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
            <ul className="list-disc list-inside text-sm text-white/90 space-y-1">
              {project.highlights.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            {project.link && idx === 0 && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-4 py-2 bg-[#F47174] text-white text-sm rounded-full font-medium hover:bg-[#e05a5f] transition"
              >
                View Work ↗
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}