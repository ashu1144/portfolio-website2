import React, { useRef } from 'react';
import emailjs from "@emailjs/browser";
import { FiMail, FiMapPin, FiSend } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const ContactSection = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_w0akbq2",
        "template_q1f1i4q",
        form.current,
        "Du2yYba9Zj2OKSKD0"
      )
      .then(
        () => {
          form.current.reset();
          alert("Message sent successfully! ✅");
        },
        (error) => {
          console.error("Error sending message:", error);
          alert("Failed to send message. Please try again.");
        }
      );
  };
  return (
    <section className="bg-black min-h-screen text-white py-20 px-4">
      <div className="max-w-[90vw] m-auto">

        {/* Header */}
        <div className="mb-16 text-left px-4 sm:px-6 space-y-3 animateLeft">
          <p className="text-gray-400 text-lg sm:text-xl">Get In Touch</p>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-[font2] font-semibold text-zinc-400">
            Let's <span className="text-green-400">Connect</span>
          </h2>

          <p className="text-gray-400 text-lg sm:text-xl max-w-3xl">
            Ready to turn your ideas into exceptional digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-[#0a0a0a] border border-zinc-800 rounded-lg p-6">
              <h3 className="text-2xl font-[font2] text-white uppercase border-b border-zinc-800 pb-4 mb-6">
                get in touch
              </h3>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-center gap-4 p-4 bg-black border border-zinc-800 rounded-md hover:border-green-400 transition">
                  <div className="w-10 h-10 bg-white rounded-md flex items-center justify-center">
                    <FiMail className="text-black text-lg" />
                  </div>
                  <div>
                    <div className="text-zinc-400 text-sm">email</div>
                    <div className="text-white font-semibold">yourmail@example.com</div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-4 p-4 bg-black border border-zinc-800 rounded-md hover:border-green-400 transition">
                  <div className="w-10 h-10 bg-white rounded-md flex items-center justify-center">
                    <FiMapPin className="text-black text-lg" />
                  </div>
                  <div>
                    <div className="text-zinc-400 text-sm">location</div>
                    <div className="text-white font-semibold">Hyderabad, India</div>
                  </div>
                </div>
              </div>

              {/* Terminal Status */}
              <div className="mt-8 bg-black border border-zinc-800 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span className="text-zinc-400 text-xs">status: available</span>
                </div>
                <div className="text-sm text-zinc-300 space-y-1">
                  <div className="text-green-400">$ availability --check</div>
                  <div className="ml-4 text-white">Open for new opportunities</div>
                  <div className="text-green-400">$ response_time</div>
                  <div className="ml-4 text-zinc-400">Typically replies within 24 hours</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#0a0a0a] border border-zinc-800 rounded-lg p-6">
            <h3 className="text-2xl font-[font2] text-white uppercase border-b border-zinc-800 pb-4 mb-6">
              send message
            </h3>

            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-zinc-400 text-sm mb-2">name</label>
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Your name"
                    required
                    className="w-full bg-black border border-zinc-800 text-white placeholder-zinc-500 px-4 py-3 rounded-md focus:outline-none focus:border-green-400 transition"
                  />
                </div>
                <div>
                  <label className="block text-zinc-400 text-sm mb-2">email</label>
                  <input
                    type="email"
                    name="user_email"
                    placeholder="you@example.com"
                    required
                    className="w-full bg-black border border-zinc-800 text-white placeholder-zinc-500 px-4 py-3 rounded-md focus:outline-none focus:border-green-400 transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-zinc-400 text-sm mb-2">subject</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="What's this about?"
                  required
                  className="w-full bg-black border border-zinc-800 text-white placeholder-zinc-500 px-4 py-3 rounded-md focus:outline-none focus:border-green-400 transition"
                />
              </div>

              <div>
                <label className="block text-zinc-400 text-sm mb-2">message</label>
                <textarea
                  name="message"
                  rows="6"
                  placeholder="Let's build something amazing..."
                  required
                  className="w-full bg-black border border-zinc-800 text-white placeholder-zinc-500 px-4 py-3 rounded-md focus:outline-none focus:border-green-400 transition resize-none"
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="group flex items-center gap-3 bg-green-400 text-black px-6 py-3 rounded-md font-semibold hover:bg-green-300 transition"
                >
                  <span>Send Message</span>
                  <FiSend className="text-sm group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Terminal Footer */}
        <div className="mt-16">
          <div className="bg-black border border-zinc-800 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="ml-4 text-zinc-400 text-sm">contact.terminal</span>
            </div>

            <div className="text-sm text-zinc-300 font-mono">
              <div className="text-green-400">$ connect --with-me</div>
              <div className="ml-4 text-white">Establishing secure connection...</div>
              <div className="text-green-400 mt-2">$ collaboration --mode</div>
              <div className="ml-4 text-zinc-400">Open for freelance or full-time roles</div>
              <div className="text-green-400 mt-2">$ echo "Let's build something amazing"</div>
              <div className="ml-4 text-white">
                Let's build something amazing <span className="animate-pulse">|</span>
              </div>

              {/* Social Icons */}
              <div className="mt-5 flex gap-6">
                <a
                  href="https://github.com/ashu1144"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-green-400 text-xl transition scale-150"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/shaik-mohammad-ashan-b7a864322/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-400 text-xl transition scale-150"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
