"use client"

import { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaPaperPlane, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "emailjs-com";

export default function ContactSection() {
  const [isClient, setIsClient] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");

  useEffect(() => {
    setIsClient(true); // Make sure this is only triggered once, after the component mounts
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("Sending...");
  
    emailjs
      .sendForm(
        "service_osnghot", // ✅ Service ID
        "template_fupqx8d", // ✅ Replace with your actual Template ID
        e.target as HTMLFormElement, // ✅ This is the correct form reference
        "TOymL2ckZOQme5a99" // ✅ Your public key
      )
      .then(
        (result) => {
          setIsSubmitting(false);
          setStatus("Message sent successfully!");
        },
        (error) => {
          console.error("EmailJS error:", error);
          setIsSubmitting(false);
          setStatus("Failed to send message, try again later.");
        }
      );
  };
  

  if (!isClient) return null; // Prevent form rendering until it's mounted on the client side

  return (
    <section
      id="contact"
      className="bg-[#9B1978] text-white px-6 py-24 flex flex-col items-center"
    >
      <div className="max-w-6xl w-full rounded-3xl overflow-hidden flex flex-col md:flex-row bg-[#1F103F]">
        {/* Left Side */}
        <div className="w-full md:w-1/2 px-10 py-12 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold leading-tight mb-6">
              Let’s connect on <span className="text-[#FF2D95]">something cool</span>
            </h2>

            <div className="flex items-center gap-3 mb-4 text-sm">
              <FaEnvelope className="text-[#FF2D95]" />
              <span>Vaishnavinalla223@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 mb-4 text-sm">
              <FaPhoneAlt className="text-[#FF2D95]" />
              <span>+1 9375163320</span>
            </div>
            <div className="flex items-center gap-3 mb-4 text-sm">
              <FaMapMarkerAlt className="text-[#FF2D95]" />
              <span>United States</span>
            </div>
          </div>

          {/* Social Buttons */}
          <div className="flex gap-4 mt-10">
            <a
              href="https://www.linkedin.com/in/vaishnavinalla"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-[#FF2D95] text-white text-sm font-medium hover:bg-pink-500"
            >
              <FaLinkedin className="inline mr-2" /> LinkedIn
            </a>
            <a
              href="https://github.com/VaishnaviNalla2"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-[#FF2D95] text-white text-sm font-medium hover:bg-pink-500"
            >
              <FaGithub className="inline mr-2" /> GitHub
            </a>
          </div>
        </div>

        {/* Right Side Form */}
        <div className="w-full md:w-1/2 bg-white text-[#1F103F] px-10 py-12">
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium mb-1">Your name</label>
              <input
                type="text"
                name="name"
                className="w-full border-b-2 border-[#9B1978] py-2 outline-none"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Your email</label>
              <input
                type="email"
                name="email"
                className="w-full border-b-2 border-gray-300 py-2 outline-none"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Your message</label>
              <textarea
                name="message"
                rows={4}
                className="w-full border-b-2 border-gray-300 py-2 outline-none resize-none"
                placeholder="Enter your message"
                required
              />
            </div>
            <button
              type="submit"
              className="mt-2 px-6 py-3 bg-[#9B1978] text-white rounded-lg text-sm font-semibold flex items-center justify-center gap-2 hover:bg-[#81125f] transition"
              disabled={isSubmitting}
            >
              <FaPaperPlane className="text-white" /> {isSubmitting ? "Sending..." : "Send Message"}
            </button>
            {status && <p className="mt-2 text-sm text-center">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
