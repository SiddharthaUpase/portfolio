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
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow flex flex-col h-full"
            >
              <div className="w-full bg-gray-900">
                <YouTube 
                  videoId={project.videoId} 
                  opts={opts} 
                  className="w-full"
                  iframeClassName="w-full"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">{project.name}</h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{project.duration}</span>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                  {project.description}
                </p>

                <ul className="list-disc list-inside space-y-2 mb-4 text-gray-600 dark:text-gray-300 text-sm">
                  {project.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-auto">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}