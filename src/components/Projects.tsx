import React from 'react';
import { ExternalLink } from 'lucide-react';
import YouTube from 'react-youtube';

const projects = [
  {
    name: 'ResumeGenie',
    description: 'Developed and shipped an AI-driven resume generator utilizing React, Tailwind CSS, and Flask for the backend, demonstrating a comprehensive skill set in full-stack development and AI integration.',
    achievements: [
      'Successfully deployed the MVP within a week and achieved rapid user acquisition, with over 70+ users from the university engaging with the tool in the initial week, showcasing significant market validation and user interest.',
      'Fine-tuned OpenAI models to compose professional resume content, emphasizing proficiency in AI integrations and adaptive technology utilization.'
    ],
    technologies: ['React', 'Tailwind CSS', 'Flask', 'OpenAI'],
    demo: 'https://www.resumegenie.tech/',
    videoId: '830kF3HCtoM',
    duration: 'Sep 2024 - Present'
  },
  {
    name: 'Tero AI',
    description: 'Engineered a Minimum Viable Product (MVP) utilizing Flutter, MongoDB, and Flask, which substantially heightened productivity for SDRs and email marketers by delivering hyper personalized outbound emails at scale.',
    achievements: [
      'Implemented comprehensive user research, executing 7 meticulous interviews with Sales Development Representatives to glean critical insights.',
      'Incorporated cutting-edge Large Language Models such as OpenAI models and Llama 3.1 into our MVP.',
      'Presented the product at the prestigious DevFest Conference at the Google HQ Chicago'
    ],
    technologies: ['Flutter', 'MongoDB', 'Flask', 'OpenAI', 'Llama 3.1'],
    demo: 'http://teroai.tech/',
    videoId: 'rvHO3NSTr0g',
    duration: 'Jan 2024 - Jul 2024'
  }
];

export default function Projects() {
  const opts = {
    height: '350',
    width: '100%',
    playerVars: {
      modestbranding: 1,
      controls: 1,
    },
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="flex justify-center mb-16">
          <h2 className="text-6xl font-bold font-['Space_Grotesk'] relative inline-block">
            <span className="relative z-10 text-black">Featured Projects</span>
            <div className="absolute inset-0 bg-[#7DF9FF] -z-10 transform rotate-1"></div>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white border-4 border-black transform hover:rotate-1 transition-transform shadow-brutal"
            >
              <div className="border-b-4 border-black">
                <YouTube 
                  videoId={project.videoId} 
                  opts={opts} 
                  className="w-full"
                  iframeClassName="w-full"
                />
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold bg-[#FFE600] px-4 py-2 border-2 border-black transform -rotate-1">
                    <span className="text-black">{project.name}</span>
                  </h3>
                  <span className="bg-[#FF90E8] px-4 py-2 border-2 border-black transform rotate-1">
                    <span className="text-black">{project.duration}</span>
                  </span>
                </div>

                <p className="text-lg text-black mb-4 border-l-4 border-black pl-4">
                  {project.description}
                </p>

                <ul className="space-y-4 mb-6">
                  {project.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="mr-2 text-2xl text-black">→</span>
                      <span className="text-black">{achievement}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-3 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-[#6FFF7D] text-black font-bold border-2 border-black transform hover:rotate-2 transition-transform"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#FFB800] text-black px-6 py-3 border-4 border-black inline-flex items-center gap-2 transform hover:-rotate-2 transition-transform shadow-brutal font-bold"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}