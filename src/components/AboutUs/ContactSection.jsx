import React from 'react';
import { FiMail, FiMapPin, FiSend } from 'react-icons/fi';

const ContactSection = () => {
  return (
    <section className="bg-black min-h-screen px-4 md:px-0 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <div className="mb-12">
          <h1 className="text-[10vw] max-sm:text-[15vw] font-[font2] leading-[10vw] px-5 max-sm:px-2 capitalize text-white mb-4">
            contact
          </h1>
          <div className="w-full h-1 bg-white mb-8"></div>
          <div className="text-end py-4 px-4 max-sm:py-2">
            <h2 className="text-[3vw] max-sm:text-[4vw] font-[font2] leading-[3vw] max-sm:leading-[4vw] text-white">
              LET'S BUILD SOMETHING TOGETHER
            </h2>
            <h2 className="text-[3vw] max-sm:text-[4vw] font-[font2] leading-[3vw] max-sm:leading-[4vw] text-white">
              READY TO TURN IDEAS INTO CODE
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-5">
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
              <h3 className="text-xl font-[font2] text-white uppercase tracking-wider mb-6 border-b border-zinc-800 pb-4">
                Get In Touch
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-black/50 border border-zinc-800 rounded-md hover:border-zinc-600 transition-colors duration-300">
                  <div className="w-10 h-10 bg-white rounded-md flex items-center justify-center">
                    <FiMail className="text-black text-lg" />
                  </div>
                  <div>
                    <div className="text-zinc-400 text-sm font-mono">email</div>
                    <div className="text-white font-medium">yourmail@example.com</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-black/50 border border-zinc-800 rounded-md hover:border-zinc-600 transition-colors duration-300">
                  <div className="w-10 h-10 bg-white rounded-md flex items-center justify-center">
                    <FiMapPin className="text-black text-lg" />
                  </div>
                  <div>
                    <div className="text-zinc-400 text-sm font-mono">location</div>
                    <div className="text-white font-medium">Hyderabad, India</div>
                  </div>
                </div>
              </div>

              {/* Terminal-like status */}
              <div className="mt-8 bg-black border border-zinc-800 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-zinc-400 text-xs font-mono">status: available</span>
                </div>
                <div className="font-mono text-xs text-zinc-300">
                  <div className="text-green-400">$ availability --check</div>
                  <div className="ml-4 text-white">Open for new opportunities</div>
                  <div className="text-green-400 mt-1">$ response_time</div>
                  <div className="ml-4 text-zinc-400">Usually within 24 hours</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
            <h3 className="text-xl font-[font2] text-white uppercase tracking-wider mb-6 border-b border-zinc-800 pb-4">
              Send Message
            </h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-zinc-400 text-sm font-mono mb-2">name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full bg-black border border-zinc-800 text-white placeholder-zinc-500 px-4 py-3 rounded-md focus:outline-none focus:border-white transition-colors duration-300 font-mono text-sm"
                  />
                </div>
                <div>
                  <label className="block text-zinc-400 text-sm font-mono mb-2">email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full bg-black border border-zinc-800 text-white placeholder-zinc-500 px-4 py-3 rounded-md focus:outline-none focus:border-white transition-colors duration-300 font-mono text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-zinc-400 text-sm font-mono mb-2">message</label>
                <textarea
                  rows="6"
                  placeholder="Let's discuss your project..."
                  className="w-full bg-black border border-zinc-800 text-white placeholder-zinc-500 px-4 py-3 rounded-md focus:outline-none focus:border-white transition-colors duration-300 font-mono text-sm resize-none"
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="group flex items-center gap-3 bg-white text-black px-6 py-3 rounded-md font-medium hover:bg-zinc-200 transition-colors duration-300"
                >
                  <span>Send Message</span>
                  <FiSend className="text-sm group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Terminal Section */}
        <div className="mt-16 px-5">
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="ml-4 text-zinc-400 text-sm font-mono">contact.terminal</span>
            </div>
            <div className="font-mono text-sm text-zinc-300">
              <div className="text-green-400">$ connect --with-me</div>
              <div className="ml-4 text-white">Establishing connection...</div>
              <div className="text-green-400 mt-2">$ collaboration --mode</div>
              <div className="ml-4 text-zinc-400">Ready to collaborate on your next project</div>
              <div className="text-green-400 mt-2">$ echo "Let's build something amazing"</div>
              <div className="ml-4 text-white">Let's build something amazing <span className="animate-pulse">|</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
