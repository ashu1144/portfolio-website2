import React from 'react';
import { SkillsInfo as skills } from '../../constants';

const Skills = () => {
  return (
    <section className="min-h-screen py-20 px-4 bg-black text-white font-inter start">
  <div className="max-w-[90vw] m-auto">

    {/* Header */}
     <div className="mb-16 text-left px-4 sm:px-6 space-y-3 animateLeft ">
            <p className="text-gray-400 text-lg sm:text-xl">Project</p>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-[font2] font-semibold text-zinc-400">
               The <span className="text-green-400">Learning</span> That Shaped Me
            </h2>

            <p className="text-gray-400 text-lg sm:text-xl max-w-3xl">
              Ideas turned into functional, fast, and beautiful web experiences.
            </p>
        </div>

    {/* Skills Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
  {skills.map((skillCategory, index) => (
    <div
      key={index}
      className="animate bg-[#0a0a0a] border border-zinc-800 rounded-xl p-6 shadow-2xl hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
    >
      {/* Floating Background Blur */}
      <div className="absolute w-40 h-40 bg-green-500/10 rounded-full blur-3xl -top-10 -right-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Category Title */}
      <div className="mb-5">
        <h3 className="text-2xl font-[font2] uppercase text-white tracking-wider mb-1">
          {skillCategory.title}
        </h3>
        <p className="text-sm text-gray-500 tracking-wide">
          {skillCategory.skills.length} tools & tech
        </p>
      </div>

      {/* Skills List - As Badges */}
      <div className="flex flex-wrap gap-3 mt-4">
        {skillCategory.skills.map((tech, techIndex) => (
          <div
            key={techIndex}
            className="flex items-center gap-2 px-3 py-2 bg-zinc-900 border border-zinc-700 rounded-full text-sm text-white font-[font2] hover:bg-zinc-800 transition"
          >
            <img
              src={tech.logo}
              alt={tech.name}
              className="w-5 h-5 object-contain"
            />
            <span>{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  ))}
</div>

    {/* Terminal Outro */}
    <div className="mt-20 bg-[#0f0f0f] border border-zinc-800 rounded-lg p-6 font-mono text-sm text-zinc-300">
      <div className="text-green-400 mb-2">$ whoami</div>
      <div className="ml-4 text-white">Full-Stack Developer with a passion for elegant code.</div>

      <div className="text-green-400 mt-4 mb-2">$ stack --list</div>
      <div className="ml-4 text-gray-400">
        • Frontend: React, Next.js, Tailwind CSS<br />
        • Backend: Node.js, Express, MongoDB, PostgreSQL<br />
        • Languages: JavaScript, Python, C++, Java<br />
        • DevOps & Tools: Git, Docker, Vercel, VSCode
      </div>

      <div className="text-green-400 mt-4 mb-2">$ status</div>
      <div className="ml-4 text-white">Ready for the next big challenge <span className="animate-pulse">|</span></div>
    </div>
  </div>
</section>

    )};

export default Skills;
