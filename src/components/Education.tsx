import React from 'react';

const education = [
  {
    school: 'Illinois Institute of Technology',
    location: 'Chicago, IL',
    degree: 'Masters of Science in Computer Science',
    duration: 'Jan 2023 - Jan 2025',
    gpa: '4.0',
    coursework: [
      'Advanced Artificial Intelligence',
      'Design and Analysis of Algorithms',
      'Software Engineering'
    ]
  },
  {
    school: 'Maharashtra Institute of Technology WPU',
    location: 'Pune, India',
    degree: 'Bachelor of Technology in Robotics Engineering',
    duration: 'July 2018 - June 2022',
    gpa: '3.73/4',
    coursework: [
      'Data Structures',
      'Algorithms',
      'Database Management System',
      'Artificial Intelligence',
      'Pattern Recognition',
      'Machine Learning'
    ]
  }
];

export default function Education() {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-16 font-['Space_Grotesk'] relative inline-block">
          <span className="relative z-10">Education</span>
          <div className="absolute inset-0 bg-[#7DF9FF] -z-10 transform -rotate-1"></div>
        </h2>

        <div className="space-y-12">
          {education.map((edu, index) => (
            <div
              key={index}
              className="neo-brutal-box bg-white dark:bg-gray-900 transform hover:rotate-1 transition-transform"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold bg-[#FFE600] inline-block px-2 transform -rotate-1 border border-black">
                    {edu.school}
                  </h3>
                  <p className="text-xl font-bold mt-2 bg-[#FF90E8] inline-block px-2 border border-black">
                    {edu.degree}
                  </p>
                  <p className="mt-1 font-bold">
                    {edu.location}
                  </p>
                </div>
                <div className="mt-4 md:mt-0">
                  <p className="bg-[#6FFF7D] px-2 inline-block transform rotate-1 border border-black">
                    {edu.duration}
                  </p>
                  <p className="mt-2 font-bold bg-[#FFB800] px-2 inline-block border border-black">
                    GPA: {edu.gpa}
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="text-xl font-bold mb-4 border-l-4 border-black dark:border-white pl-4">
                  Relevant Coursework
                </h4>
                <div className="flex flex-wrap gap-3">
                  {edu.coursework.map((course, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-[#FF6B6B] text-black font-bold border-2 border-black transform hover:-rotate-2 transition-transform"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
