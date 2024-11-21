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
    <div className="relative w-50 h-64 mb-6 group">
      <img
        src={images[currentIndex]}
        alt={`Screenshot ${currentIndex + 1}`}
        className="w-full h-full object-contain rounded-lg bg-gray-100 dark:bg-gray-700"
      />
      
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2 h-2 rounded-full transition-colors ${
              idx === currentIndex ? 'bg-purple-600' : 'bg-purple-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Work Experience
          </span>
        </h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              {exp.images && <ImageCarousel images={exp.images} />}
              
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-purple-600 dark:text-purple-400 font-medium">
                    {exp.company}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    {exp.location}
                  </p>
                </div>
                <p className="text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
                  {exp.duration}
                </p>
              </div>

              <ul className="space-y-3 mb-6">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-600 dark:bg-purple-400"></span>
                    <span 
                      className="text-gray-600 dark:text-gray-300"
                      dangerouslySetInnerHTML={{ __html: resp }}
                    />
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-sm bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full"
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
                  className="inline-block mt-4 text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30 px-4 py-2 rounded-full hover:bg-purple-200 dark:hover:bg-purple-800 transition-colors"
                  style={{ backgroundColor: 'yellow' }}
                >
                  Link to the app →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}