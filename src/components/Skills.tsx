import React, { useState, useEffect } from 'react';
import { Code, Palette, Server, Cloud, Database, Wrench } from 'lucide-react';

interface SkillsProps {
  darkMode: boolean;
}

const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const [animatedBars, setAnimatedBars] = useState<boolean[]>([]);

  const skillCategories = [
    {
      icon: Code,
      title: 'Programming Languages',
      skills: [
        { name: 'JavaScript', level: 75 },
        { name: 'Java', level: 80 },
        { name: 'C', level: 75 }
      ]
    },
    {
      icon: Server,
      title: 'Web Technologies',
      skills: [
        { name: 'ReactJS', level: 85 },
        { name: 'HTML/CSS', level: 90 },
        { name: 'Node.JS', level: 80 },
        { name: 'Responsive Design', level: 88 }
      ]
    },
    {
      icon: Palette,
      title: 'Design & Tools',
      skills: [
        { name: 'Figma', level: 85 },
        { name: 'UI/UX Design', level: 82 },
        { name: 'Pygame', level: 50 },
        { name: 'Prototyping', level: 80 }
      ]
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      skills: [
        { name: 'AWS', level: 78 },
        { name: 'Cloud Computing', level: 75 },
        { name: 'SDLC', level: 80 },
        { name: 'Debugging', level: 85 }
      ]
    }
  ];

  const softSkills = [
    'Time Management',
    'Communication',
    'Leadership',
    'Team Collaboration',
    'Problem Solving',
    'Critical Thinking',
    'Adaptability',
    'Project Management'
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      const totalSkills = skillCategories.reduce((acc, category) => acc + category.skills.length, 0);
      setAnimatedBars(new Array(totalSkills).fill(true));
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="skills" className={`py-20 ${
      darkMode ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Skills & <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className={`text-lg max-w-3xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Technical skills and tools I use to bring ideas to life
          </p>
        </div>

        {/* Technical Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`p-6 rounded-lg ${
                darkMode
                  ? 'bg-gray-800'
                  : 'bg-white shadow-lg'
              }`}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                  <category.icon className="text-white" size={24} />
                </div>
                <h3 className={`text-xl font-semibold ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => {
                  const globalIndex = categoryIndex * 4 + skillIndex;
                  return (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className={`text-sm font-medium ${
                          darkMode ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          {skill.name}
                        </span>
                        <span className={`text-sm ${
                          darkMode ? 'text-gray-400' : 'text-gray-500'
                        }`}>
                          {skill.level}%
                        </span>
                      </div>
                      <div className={`w-full h-2 rounded-full ${
                        darkMode ? 'bg-gray-700' : 'bg-gray-200'
                      }`}>
                        <div
                          className="h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: animatedBars[globalIndex] ? `${skill.level}%` : '0%'
                          }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills */}
        <div className={`p-8 rounded-lg ${
          darkMode ? 'bg-gray-800' : 'bg-white shadow-lg'
        }`}>
          <div className="text-center mb-8">
            <h3 className={`text-2xl font-semibold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Soft Skills
            </h3>
            <p className={`${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Personal qualities that enhance my professional capabilities
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {softSkills.map((skill, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg text-center transition-all duration-300 hover:scale-105 ${
                  darkMode
                    ? 'bg-gray-700 hover:bg-gray-600'
                    : 'bg-gray-50 hover:bg-gray-100'
                }`}
              >
                <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-3"></div>
                <span className={`text-sm font-medium ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Summary */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`p-6 rounded-lg ${
              darkMode ? 'bg-gray-800' : 'bg-white shadow-lg'
            }`}>
              <div className="text-3xl font-bold text-blue-600 mb-2">8+</div>
              <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Programming Languages & Technologies
              </div>
            </div>
            <div className={`p-6 rounded-lg ${
              darkMode ? 'bg-gray-800' : 'bg-white shadow-lg'
            }`}>
              <div className="text-3xl font-bold text-purple-600 mb-2">5+</div>
              <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Development Tools & Frameworks
              </div>
            </div>
            <div className={`p-6 rounded-lg ${
              darkMode ? 'bg-gray-800' : 'bg-white shadow-lg'
            }`}>
              <div className="text-3xl font-bold text-indigo-600 mb-2">3+</div>
              <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Years of Learning & Development
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;