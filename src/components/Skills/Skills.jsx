import React from 'react';
import { SkillsInfo as skills } from '../../constants';

const Skills = () => {

  return (
    <section className="bg-black min-h-screen px-4 md:px-0 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <div className="mb-12">
          <h1 className="text-[10vw] max-sm:text-[15vw] font-[font2] leading-[10vw] px-5 max-sm:px-2 capitalize text-white mb-4">
            skills
          </h1>
          <div className="w-full h-1 bg-white mb-8"></div>
          <div className="text-end py-4 px-4 max-sm:py-2">
            <h2 className="text-[3vw] max-sm:text-[4vw] font-[font2] leading-[3vw] max-sm:leading-[4vw] text-white">
              TECHNOLOGIES I WORK WITH
            </h2>
            <h2 className="text-[3vw] max-sm:text-[4vw] font-[font2] leading-[3vw] max-sm:leading-[4vw] text-white">
              TOOLS THAT POWER MY CODE
            </h2>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-5">
          {skills.map((skillCategory, index) => (
            <div
              key={index}
              className="group bg-zinc-900 border border-zinc-800 rounded-lg p-6 hover:border-white transition-all duration-300 cursor-pointer"
            >
              {/* Category Header */}
              <div className="flex justify-between items-center mb-4 pb-4 border-b border-zinc-800">
                <h3 className="text-xl font-[font2] text-white uppercase tracking-wider">
                  {skillCategory.title}
                </h3>
                <div className="text-zinc-400 text-sm">
                  <span className="group-hover:text-white transition-colors duration-300">
                    [{skillCategory.skills.length}]
                  </span>
                </div>
              </div>
              
              {/* Technologies Drawer */}
              <div className="max-h-0 opacity-0 overflow-hidden group-hover:max-h-96 group-hover:opacity-100 transition-all duration-500 ease-out">
                <div className="space-y-3 pt-2">
                  {skillCategory.skills.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="flex items-center gap-4 p-3 rounded-md bg-black/50 border border-zinc-800 hover:border-zinc-600 hover:bg-zinc-800/50 transition-all duration-300 group/tech"
                    >
                      <div className="w-10 h-10 flex items-center justify-center p-2 bg-white rounded-md group-hover/tech:scale-110 transition-transform duration-300">
                        <img 
                          src={tech.logo} 
                          alt={tech.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="flex-1">
                        <span className="text-white font-medium text-sm tracking-wide">
                          {tech.name}
                        </span>
                      </div>
                      <div className="text-zinc-500 text-xs font-mono">
                        ./
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Collapsed State Indicator */}
              <div className="group-hover:hidden pt-4">
                <div className="flex items-center justify-center text-zinc-600 text-sm">
                  <span className="font-mono">hover to expand</span>
                  <span className="ml-2 animate-pulse">_</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Terminal-like Section */}
        <div className="mt-16 px-5">
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="ml-4 text-zinc-400 text-sm font-mono">skills.terminal</span>
            </div>
            <div className="font-mono text-sm text-zinc-300">
              <div className="text-green-400">$ whoami</div>
              <div className="ml-4 text-white">Full-Stack Developer</div>
              <div className="text-green-400 mt-2">$ skills --list</div>
              <div className="ml-4 text-zinc-400">
                Frontend: HTML, CSS, JavaScript, React JS, Next JS, Tailwind CSS<br/>
                Backend: Node JS, Express JS, MongoDB, MySQL, PostgreSQL<br/>
                Languages: JavaScript, Python, Java, C, C++, C#
              </div>
              <div className="text-green-400 mt-2">$ status</div>
              <div className="ml-4 text-white">Ready to build amazing things <span className="animate-pulse">|</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
