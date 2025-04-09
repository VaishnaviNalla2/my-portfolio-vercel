'use client'

import { motion } from 'framer-motion'

const skills = [
  {
    title: 'Frontend',
    items: ['React.js', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'HTML5', 'CSS3'],
  },
  {
    title: 'Backend & APIs',
    items: ['Node.js', 'Express.js', 'Java', 'Python', 'REST APIs'],
  },
  {
    title: 'Databases',
    items: ['PostgreSQL', 'MySQL', 'NoSQL', 'SQL'],
  },
  {
    title: 'Frameworks',
    items: ['Django', 'FastAPI', 'React Native', 'Angular', 'Vue'],
  },
  {
    title: 'Tools & Cloud',
    items: ['Docker', 'Kafka', 'Git', 'Jira', 'Vercel', 'Apache Spark'],
  },
  {
    title: 'Testing & Dev',
    items: ['CI/CD', 'Agile', 'Jest', 'Mocha', 'Selenium', 'Debugging'],
  },
]

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden py-24 px-6"
      style={{ backgroundColor: '#27374D' }} // Set background to Hero section color
    >
      {/* Parallax Glow Effect */}
      <div className="absolute top-[-200px] left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-[#48A6A7] opacity-20 rounded-full blur-3xl z-0"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Sticky Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center text-[#9DB2BF] sticky top-12 bg-[#27374D] py-4 z-10"
        >
          My Tech Stack
        </motion.h2>

        {/* Divider */}
        <motion.div
          className="w-24 h-1 bg-[#9DB2BF] mx-auto my-6 rounded-full"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          style={{ transformOrigin: 'left' }}
        />

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-10">
          {skills.map((group, idx) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.3 }}
              className="rounded-2xl p-6 shadow-md bg-white hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-4" style={{ color: '#48A6A7' }}>
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-1 rounded-full text-sm font-medium border transition"
                    style={{
                      backgroundColor: '#EAF6F6',
                      color: '#006A71',
                      borderColor: '#48A6A7',
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
