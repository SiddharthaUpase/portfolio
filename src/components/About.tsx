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
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        {/* Title */}
        <div className="flex justify-center mb-16">
          <h2 className="text-6xl font-bold font-['Space_Grotesk'] relative inline-block">
            <span className="relative z-10 text-black">About Me</span>
            <div className="absolute inset-0 bg-[#FF90E8] -z-10 transform rotate-1"></div>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {/* First Text Box */}
            <div className="bg-white border-4 border-black p-6 transform -rotate-1 shadow-brutal">
              <p className="text-xl text-black leading-relaxed">
                I have a <span className="bg-[#FFE600] px-2 py-1 border-2 border-black inline-block transform rotate-1">
                  5-year track record
                </span> in spearheading mobile app and game innovation, solidifying a robust presence in the software development landscape.
              </p>
            </div>
            
            {/* Second Text Box */}
            <div className="bg-white border-4 border-black p-6 transform rotate-1 shadow-brutal">
              <p className="text-xl text-black leading-relaxed">
                I possess advanced proficiency with full-stack technologies such as <span className="bg-[#7DF9FF] px-2 py-1 border-2 border-black inline-block transform -rotate-1">
                  React, MongoDB, PostgreSQL, Flask, and OpenAI integration
                </span>.
              </p>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-3 mt-8">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-[#6FFF7D] text-black font-bold border-2 border-black transform hover:rotate-2 transition-transform shadow-brutal"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Download Button */}
            <button 
              onClick={handleDownload}
              className="bg-[#FFB800] text-black px-8 py-4 text-xl font-bold flex items-center gap-2 border-4 border-black transform hover:-rotate-2 transition-transform shadow-brutal"
            >
              <Download className="w-6 h-6" />
              Download Resume
            </button>
          </div>

          {/* Image Section */}
          <div className="relative">
            <div className="border-4 border-black bg-[#FF6B6B] p-4 transform rotate-2 shadow-brutal">
              <img
                src={work_station}
                alt="About Me"
                className="w-full border-2 border-black"
              />
              <div className="absolute bottom-8 left-8">
                <p className="bg-black text-white px-4 py-2 text-lg font-bold border-2 border-white transform -rotate-2">
                  this is where the magic happens 🪄
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}