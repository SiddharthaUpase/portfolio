import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import your Funzy images
import image1 from '../assets/images/Funzy/1.png';
import image2 from '../assets/images/Funzy/2.png';
import image3 from '../assets/images/Funzy/3.png';
import image4 from '../assets/images/Funzy/4.png';
import image5 from '../assets/images/Funzy/5.png';

const experiences = [
  {
    title: 'Founder',
    company: 'Funzy',
    location: 'Chicago, IL, USA',
    duration: 'Jan 2023 - Mar 2024',
    images: [image1, image2, image3, image4, image5],
    responsibilities: [
      'Successfully launched Funzy, a <strong>Kids Educational app</strong>, achieving over <strong>7000+ organic users</strong> by conceptualizing, designing, and developing the app, which fosters <strong>problem-solving skills</strong> among children aged 3-5.',
      'Received the prestigious <strong>Teacher\'s Approval Badge</strong> on the Play Store from Google, recognizing the app\'s <strong>educational value</strong> and adherence to <strong>quality standards</strong>.',
      'Developed over <strong>15 engaging games</strong> from scratch using the <strong>Unity game engine</strong> and <strong>C#</strong>, implementing various <strong>gameplay mechanics</strong> and <strong>interactive features</strong>.',
      'The success and market potential of Funzy were underscored by its <strong>acquisition</strong> by a prominent gaming studio in India in May 2024.',
      'Implemented <strong>AWS cloud services</strong> for seamless hosting of app updates, ensuring uptime and facilitating a <strong>20% faster release cycle</strong> for new features.'
    ],
    technologies: ['Unity', 'C#', 'AWS', 'Game Development'],
    link: 'https://linktr.ee/supase.funzy'
  },
  {
    title: 'Software Developer',
    company: 'Iconsense Lab',
    location: 'Chicago, IL',
    duration: 'Jan 2023 - Jun 2024',
    responsibilities: [
      '<strong>Successfully developed</strong> a Mixed Reality application for Microsoft\'s Hololens, aimed at assisting construction supervisors in navigating complex sites from confined spaces.',
      '<strong>Enhanced efficiency</strong> for construction supervisors by designing and implementing an innovative navigation solution within the application, significantly improving spatial awareness through advanced spatial mapping algorithms.',
      'Utilized the <strong>Mixed Reality Toolkit</strong> in the Unity development environment with a high level of proficiency, creating a highly interactive and user-friendly application interface.'
    ],
    technologies: ['Unity', 'Mixed Reality', 'HoloLens', 'MRTK', 'C#']
  }
];

const ImageCarousel = ({ images }: { images?: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full h-64 group">
      <img
        src={images[currentIndex]}
        alt={`Screenshot ${currentIndex + 1}`}
        className="w-full h-full object-contain bg-white border-2 border-black"
      />
      
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-[#FF90E8] text-black p-2 border-2 border-black transform hover:-rotate-2 transition-transform opacity-0 group-hover:opacity-100"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#FF90E8] text-black p-2 border-2 border-black transform hover:rotate-2 transition-transform opacity-0 group-hover:opacity-100"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 border-2 border-black transition-colors ${
              idx === currentIndex ? 'bg-[#FFE600]' : 'bg-white'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="flex justify-center mb-16">
          <h2 className="text-6xl font-bold font-['Space_Grotesk'] relative inline-block">
            <span className="relative z-10 text-black">Work Experience</span>
            <div className="absolute inset-0 bg-[#FF6B6B] -z-10 transform rotate-1"></div>
          </h2>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white border-4 border-black transform hover:-rotate-1 transition-transform shadow-brutal"
            >
              {exp.images && (
                <div className="border-b-4 border-black mb-6">
                  <div className="p-4">
                    <ImageCarousel images={exp.images} />
                  </div>
                </div>
              )}
              
              <div className="p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold bg-[#FFE600] inline-block px-4 py-2 border-2 border-black transform -rotate-1">
                      <span className="text-black">{exp.title}</span>
                    </h3>
                    <p className="text-xl font-bold bg-[#7DF9FF] inline-block px-4 py-2 border-2 border-black transform rotate-1">
                      <span className="text-black">{exp.company}</span>
                    </p>
                    <p className="text-lg font-bold text-black">
                      {exp.location}
                    </p>
                  </div>
                  <p className="mt-2 md:mt-0 bg-[#FF90E8] px-4 py-2 border-2 border-black transform rotate-1">
                    <span className="text-black font-bold">{exp.duration}</span>
                  </p>
                </div>

                <ul className="space-y-4 mb-6">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start border-l-4 border-black pl-4">
                      <span 
                        className="text-lg text-black"
                        dangerouslySetInnerHTML={{ 
                          __html: resp.replace(
                            /<strong>(.*?)<\/strong>/g, 
                            '<span class="bg-[#FFE600] px-2 border-2 border-black inline-block transform rotate-1">$1</span>'
                          ) 
                        }}
                      />
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-3">
                  {exp.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-[#6FFF7D] text-black font-bold border-2 border-black transform hover:rotate-2 transition-transform"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {exp.link && (
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#FFB800] text-black px-6 py-3 border-4 border-black inline-flex items-center gap-2 transform hover:-rotate-2 transition-transform shadow-brutal font-bold mt-6"
                  >
                    Link to the app →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}