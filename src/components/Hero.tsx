'use client'

import Link from 'next/link'
import { Mail, Folder, UserPlus } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-[90vh] flex flex-col justify-center items-center text-center px-4 bg-gradient-to-b from-white to-gray-50"
    >
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
        Hi, I’m <span className="text-blue-600">Vaishnavi Nalla</span>
      </h1>

      <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-2xl">
        I’m a Software Engineer and Developer with expertise in Java, Python, JavaScript, and cloud-based distributed systems.
        Currently pursuing my Master's at Wright State University (Expected April 2025), I have a proven track record in building scalable web applications.
        <br className="hidden md:block" />
        I’m actively looking for full-time and internship roles where I can contribute my skills. Feel free to connect with me! 🚀
      </p>

      <div className="mt-6 flex gap-4 flex-wrap justify-center">
      <Link
  href="#projects" // Link to the Projects section
  className="px-6 py-3 bg-blue-600 text-white rounded-full text-sm md:text-base hover:bg-blue-700 transition flex items-center gap-2"
>
  <Folder className="w-4 h-4" />
  View My Work
</Link>

        <Link
          href="#contact" // Scroll to Contact Section
          className="px-6 py-3 border border-blue-600 text-blue-600 rounded-full text-sm md:text-base hover:bg-blue-50 transition flex items-center gap-2"
        >
          <UserPlus className="w-4 h-4" />
          Let’s Connect
        </Link>
        <Link
          href="mailto:vaishnavinalla223@gmail.com" // Open Email Client
          className="px-6 py-3 bg-black text-white rounded-full text-sm md:text-base hover:bg-gray-800 transition flex items-center gap-2"
        >
          <Mail className="w-4 h-4" />
          Hire Me
        </Link>
      </div>
    </section>
  )
}
