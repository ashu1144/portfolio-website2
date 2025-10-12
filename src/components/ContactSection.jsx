import React from 'react'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'

const ContactSection = () => {
  return (
    <div className="contactSection bg-black py-20 px-4 md:px-8 relative">
      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-[8vw] max-sm:text-[12vw] font-[font2] leading-[8vw] max-sm:leading-[12vw] text-white uppercase">
          Contact Me
        </h2>
        <p className="text-gray-400 mt-4 text-lg max-w-xl mx-auto">
          Have a project in mind or just want to say hi? Connect with me below!
        </p>
      </div>

      {/* Contact Card */}
      <div className="max-w-4xl mx-auto bg-gray-900 rounded-2xl p-8 shadow-2xl relative overflow-hidden hover:shadow-[0_0_50px_rgba(59,130,246,0.5)] transition-shadow duration-500">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Side - Form */}
          <div className="flex-1">
            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="bg-gray-800 text-white p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="bg-gray-800 text-white p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              />
              <textarea
                placeholder="Your Message"
                rows={6}
                className="bg-gray-800 text-white p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 resize-none"
              />
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-xl transition-all duration-300">
                Send Message
              </button>
            </div>
          </div>

          {/* Right Side - Social / Info */}
          <div className="flex-1 flex flex-col justify-center items-center md:items-start gap-6 text-center md:text-left">
            <h3 className="text-2xl text-white font-semibold">Let's Connect</h3>
            <p className="text-gray-400">
              Feel free to reach out via email or connect with me on social platforms.
            </p>
            <div className="flex gap-4 mt-2">
              <a href="#" className="text-white hover:text-blue-500 transition-colors duration-300">
                <FaLinkedin size={28} />
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors duration-300">
                <FaGithub size={28} />
              </a>
              <a href="#" className="text-white hover:text-red-500 transition-colors duration-300">
                <FaEnvelope size={28} />
              </a>
            </div>
          </div>
        </div>

        {/* Floating Circle Decoration */}
        <div className="absolute -top-16 -right-16 w-40 h-40 bg-blue-500 opacity-20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-16 -left-16 w-60 h-60 bg-purple-500 opacity-20 rounded-full blur-3xl pointer-events-none"></div>
      </div>
    </div>
  )
}

export default ContactSection
