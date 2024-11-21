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
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Education
          </span>
        </h2>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {edu.school}
                  </h3>
                  <p className="text-purple-600 dark:text-purple-400 font-medium">
                    {edu.degree}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    {edu.location}
                  </p>
                </div>
                <div className="mt-2 md:mt-0 text-right">
                  <p className="text-gray-500 dark:text-gray-400">
                    {edu.duration}
                  </p>
                  <p className="text-purple-600 dark:text-purple-400 font-medium">
                    GPA: {edu.gpa}
                  </p>
                </div>
              </div>

              <div className="mt-4">
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Relevant Coursework
                </h4>
                <div className="flex flex-wrap gap-2">
                  {edu.coursework.map((course, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-sm bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full"
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
