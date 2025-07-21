import React from 'react';
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';

interface EducationProps {
  darkMode: boolean;
}

const Education: React.FC<EducationProps> = ({ darkMode }) => {
  const education = [
    {
      degree: 'Bachelor of Engineering in Computer Science',
      institution: 'K. Ramakrishnan College of Engineering',
      period: '2022 - 2026',
      cgpa: '7.51 CGPA (Till 5th Semester)',
      description: 'Currently pursuing B.E. in Computer Science Engineering with focus on software development, algorithms, and modern technologies.',
      highlights: [
        'Strong academic performance with 7.51 CGPA',
        'Active participation in technical workshops',
        'Completed multiple programming projects',
        'Member of technical societies'
      ]
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'Samadh Senior Secondary School',
      period: '2021 - 2022',
      cgpa: 'Completed',
      description: 'Completed higher secondary education with focus on science subjects.',
      highlights: [
        'Science stream with Mathematics',
        'Strong foundation in analytical thinking',
        'Participated in academic competitions',
        'Developed interest in technology'
      ]
    },
    {
      degree: 'Secondary School Leaving Certificate (SSLC)',
      institution: 'Samadh Senior Secondary School',
      period: '2019 - 2020',
      cgpa: 'Completed',
      description: 'Completed secondary education with excellent academic performance.',
      highlights: [
        'Well-rounded academic performance',
        'Active in extracurricular activities',
        'Developed leadership skills',
        'Foundation for technical interest'
      ]
    }
  ];

  return (
    <section id="education" className={`py-20 ${
      darkMode ? 'bg-gray-800' : 'bg-white'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Education & <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Learning</span>
          </h2>
          <p className={`text-lg max-w-3xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            My academic journey and continuous learning path
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className={`absolute left-8 md:left-1/2 transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 ${
            darkMode ? 'bg-gray-600' : 'bg-gray-300'
          }`}></div>

          <div className="space-y-12">
            {education.map((edu, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Node */}
                <div className={`absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 ${
                  darkMode 
                    ? 'bg-gray-800 border-blue-600' 
                    : 'bg-white border-blue-600'
                } shadow-lg z-10`}></div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <div className={`p-6 rounded-lg transition-all duration-300 hover:scale-105 ${
                    darkMode
                      ? 'bg-gray-700 hover:bg-gray-650'
                      : 'bg-gray-50 hover:bg-gray-100 shadow-lg hover:shadow-xl'
                  }`}>
                    {/* Institution Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <GraduationCap className="text-blue-600 mr-2" size={20} />
                          <span className={`text-sm font-medium ${
                            darkMode ? 'text-gray-300' : 'text-gray-600'
                          }`}>
                            {edu.institution}
                          </span>
                        </div>
                        <h3 className={`text-xl font-semibold mb-2 ${
                          darkMode ? 'text-white' : 'text-gray-900'
                        }`}>
                          {edu.degree}
                        </h3>
                      </div>
                      <div className={`text-right ${
                        darkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        <div className="flex items-center text-sm mb-1">
                          <Calendar size={16} className="mr-1" />
                          {edu.period}
                        </div>
                        {edu.cgpa && (
                          <div className="flex items-center text-sm">
                            <Award size={16} className="mr-1 text-yellow-500" />
                            {edu.cgpa}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    <p className={`mb-4 ${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {edu.description}
                    </p>

                    {/* Highlights */}
                    <div>
                      <h4 className={`text-sm font-semibold mb-3 flex items-center ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        <BookOpen size={16} className="mr-2 text-blue-600" />
                        Key Highlights
                      </h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {edu.highlights.map((highlight, highlightIndex) => (
                          <li
                            key={highlightIndex}
                            className={`flex items-start text-sm ${
                              darkMode ? 'text-gray-300' : 'text-gray-600'
                            }`}
                          >
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className={`text-center p-6 rounded-lg ${
            darkMode ? 'bg-gray-700' : 'bg-gray-50'
          }`}>
            <div className="text-3xl font-bold text-blue-600 mb-2">7.51</div>
            <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Current CGPA
            </div>
          </div>
          <div className={`text-center p-6 rounded-lg ${
            darkMode ? 'bg-gray-700' : 'bg-gray-50'
          }`}>
            <div className="text-3xl font-bold text-purple-600 mb-2">2026</div>
            <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Expected Graduation
            </div>
          </div>
          <div className={`text-center p-6 rounded-lg ${
            darkMode ? 'bg-gray-700' : 'bg-gray-50'
          }`}>
            <div className="text-3xl font-bold text-indigo-600 mb-2">5</div>
            <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Completed Semesters
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;