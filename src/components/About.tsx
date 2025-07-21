import React from 'react';
import { Code, Palette, Server, Cloud, Award, Languages } from 'lucide-react';

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  const highlights = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Experienced in building responsive web applications using modern technologies'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating intuitive and beautiful user interfaces with tools like Figma'
    },
    {
      icon: Server,
      title: 'Backend Development',
      description: 'Proficient in Python, Node.js, and database management'
    },
    {
      icon: Cloud,
      title: 'Cloud Technologies',
      description: 'AWS Certified Cloud Practitioner with hands-on experience'
    }
  ];

  const languages = ['English', 'Hindi', 'Urdu', 'Tamil'];

  return (
    <section id="about" className={`py-20 ${
      darkMode ? 'bg-gray-800' : 'bg-white'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className={`text-lg max-w-3xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Passionate about creating innovative solutions and constantly learning new technologies
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className={`text-2xl font-semibold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              My Journey
            </h3>
            
            <p className={`text-lg leading-relaxed ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              I'm a Computer Science student at K. Ramakrishnan College of Engineering with a passion for 
              technology and innovation. My journey began with curiosity about how software works and has 
              evolved into a deep commitment to creating meaningful digital experiences.
            </p>

            <p className={`text-lg leading-relaxed ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Through various internships and projects, I've gained hands-on experience in full-stack 
              development, automation, and cloud technologies. I believe in writing clean, maintainable 
              code and always strive to learn the latest industry best practices.
            </p>

            <div className={`p-6 rounded-lg ${
              darkMode ? 'bg-gray-700' : 'bg-gray-50'
            }`}>
              <div className="flex items-center space-x-2 mb-4">
                <Languages className="text-blue-600" size={24} />
                <h4 className={`text-lg font-semibold ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Languages
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {languages.map((language) => (
                  <span
                    key={language}
                    className={`px-3 py-1 rounded-full text-sm ${
                      darkMode
                        ? 'bg-gray-600 text-gray-300'
                        : 'bg-white text-gray-700 border border-gray-200'
                    }`}
                  >
                    {language}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg transition-all duration-300 hover:scale-105 ${
                  darkMode
                    ? 'bg-gray-700 hover:bg-gray-600'
                    : 'bg-gray-50 hover:bg-gray-100 shadow-lg hover:shadow-xl'
                }`}
              >
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <highlight.icon className="text-white" size={24} />
                  </div>
                  <h4 className={`text-lg font-semibold mb-2 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {highlight.title}
                  </h4>
                  <p className={`text-sm ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {highlight.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">7.51</div>
            <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              CGPA
            </div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">6+</div>
            <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Projects
            </div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">4+</div>
            <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Certifications
            </div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">2</div>
            <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Internships
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;