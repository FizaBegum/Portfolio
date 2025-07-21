import React, { useState } from 'react';
import { Calendar, MapPin, ChevronDown, ChevronUp, Briefcase } from 'lucide-react';

interface ExperienceProps {
  darkMode: boolean;
}

const Experience: React.FC<ExperienceProps> = ({ darkMode }) => {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const experiences = [
    {
      title: 'Python Development Intern',
      company: 'CODEBINDS TECHNOLOGY',
      period: 'July 2024',
      location: 'Remote',
      type: 'Internship',
      description: 'Focused on Python-based automation and problem-solving solutions',
      achievements: [
        'Created Python-based solutions to automate daily tasks and address real-world challenges',
        'Strengthened problem-solving abilities through scripting, debugging and optimization',
        'Developed efficient algorithms to improve workflow automation',
        'Collaborated with team members on code reviews and best practices'
      ]
    },
    {
      title: 'Web Development Intern',
      company: 'CODEBINDS TECHNOLOGY',
      period: 'January 2024',
      location: 'Remote',
      type: 'Internship',
      description: 'Focused on responsive web development and UI/UX enhancement',
      achievements: [
        'Developed responsive and user-friendly web pages with HTML and CSS',
        'Enhanced UI designs by collaborating with cross-functional teams, ensuring a seamless user experience',
        'Implemented modern CSS techniques for better visual appeal',
        'Participated in code reviews and learned industry best practices'
      ]
    }
  ];

  const activities = [
    {
      title: 'Workshop Participant',
      organization: 'National Institute of Technology',
      period: '2023-2024',
      description: 'Attended technical workshops on emerging technologies'
    },
    {
      title: 'Workshop Participant',
      organization: 'K. Ramakrishnan College of Engineering',
      period: '2023-2024',
      description: 'Participated in college-organized technical workshops'
    },
    {
      title: 'Hackathon Participant',
      organization: 'Bannari Amman Institute of Technology',
      period: '2023',
      description: 'Competed in coding challenges and innovation contests'
    },
    {
      title: 'Hackathon Participant',
      organization: 'Sastra Deemed University',
      period: '2023',
      description: 'Participated in problem-solving competitions'
    }
  ];

  const toggleExpand = (index: number) => {
    setExpandedItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="experience" className={`py-20 ${
      darkMode ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Experience & <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Activities</span>
          </h2>
          <p className={`text-lg max-w-3xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            My professional journey and involvement in technical activities
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Professional Experience */}
          <div>
            <h3 className={`text-2xl font-semibold mb-8 flex items-center ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              <Briefcase className="mr-3 text-blue-600" size={24} />
              Professional Experience
            </h3>
            
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`rounded-lg p-6 transition-all duration-300 hover:scale-[1.02] ${
                    darkMode
                      ? 'bg-gray-800 hover:bg-gray-750'
                      : 'bg-white hover:bg-gray-50 shadow-lg hover:shadow-xl'
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h4 className={`text-xl font-semibold mb-1 ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {exp.title}
                      </h4>
                      <p className="text-blue-600 font-medium mb-2">{exp.company}</p>
                      <div className={`flex flex-wrap items-center gap-4 text-sm ${
                        darkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        <div className="flex items-center">
                          <Calendar size={16} className="mr-1" />
                          {exp.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin size={16} className="mr-1" />
                          {exp.location}
                        </div>
                        <span className="px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                          {exp.type}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => toggleExpand(index)}
                      className={`p-2 rounded-lg transition-colors ${
                        darkMode
                          ? 'hover:bg-gray-700 text-gray-400'
                          : 'hover:bg-gray-100 text-gray-600'
                      }`}
                    >
                      {expandedItems.includes(index) ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </button>
                  </div>

                  <p className={`mb-4 ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {exp.description}
                  </p>

                  {expandedItems.includes(index) && (
                    <div className="space-y-2 animate-fadeInUp">
                      <h5 className={`font-medium mb-3 ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        Key Achievements:
                      </h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li
                            key={achIndex}
                            className={`flex items-start ${
                              darkMode ? 'text-gray-300' : 'text-gray-600'
                            }`}
                          >
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Co-curricular Activities */}
          <div>
            <h3 className={`text-2xl font-semibold mb-8 flex items-center ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              <Calendar className="mr-3 text-purple-600" size={24} />
              Co-curricular Activities
            </h3>
            
            <div className="space-y-4">
              {activities.map((activity, index) => (
                <div
                  key={index}
                  className={`rounded-lg p-6 transition-all duration-300 hover:scale-[1.02] ${
                    darkMode
                      ? 'bg-gray-800 hover:bg-gray-750'
                      : 'bg-white hover:bg-gray-50 shadow-lg hover:shadow-xl'
                  }`}
                >
                  <h4 className={`text-lg font-semibold mb-2 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {activity.title}
                  </h4>
                  <p className="text-purple-600 font-medium mb-2">{activity.organization}</p>
                  <div className={`text-sm mb-2 ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {activity.period}
                  </div>
                  <p className={`text-sm ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {activity.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;