import React from 'react';
import { Download } from 'lucide-react';
import work_station from '../assets/images/work_station.jpg'
import resumePDF from '../assets/Siddhartha_Resume.pdf';

const skills = [
  'React', 'TypeScript', 'Node.js', 'Next.js',
  'Tailwind CSS', 'Supabase', 'PostgreSQL', 'AWS',
  'Flask', 'MongoDB', 'OpenAI', 'Llama 3.1',
  'Unity', 'Android Studio', 'iOS'
];

export default function About() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'Siddhartha_Upase_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            I have a <strong>5-year track record</strong> in spearheading mobile app and game innovation, solidifying a robust presence in the software development landscape. 
            I possess advanced proficiency with full-stack technologies such as <strong>React, MongoDB, PostgreSQL, Flask, and OpenAI integration</strong>. 
            I have successfully engineered several LLM applications, leveraging <strong>OpenAI and Llama 3.1</strong>, to amplify product functionality and enhance the end-user experience. 
            Additionally, I have published <strong>2 mobile games and 1 dairy inventory app</strong> on both the Play Store and iOS.
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              <strong>I am currently pursuing my Masters at Illinois Institute of Technology, Chicago</strong> and am looking for full-time or internship opportunities as a full stack web and mobile developer. 
              I specialize in <strong>React, Node.js, Flask, and Next.js frameworks</strong>, with a strong emphasis on building performant applications that provide exceptional user experiences.
            </p>

            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
            <button 
              onClick={handleDownload}
              className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-medium transition-colors"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </button>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src={work_station}
                alt="About Me"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-transparent rounded-2xl"></div>
            <p className="absolute bottom-2 left-2 text-white text-sm bg-black bg-opacity-50 px-2 py-1 rounded">
              this is where the magic happens 🪄
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}