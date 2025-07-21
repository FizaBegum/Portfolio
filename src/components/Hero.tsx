import React, { useState, useEffect } from 'react';
import { Download, Mail, Github, MapPin } from 'lucide-react';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = ['Full-Stack Developer', 'UI/UX Designer', 'AWS Certified'];

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = texts[currentIndex];
      
      if (isDeleting) {
        setCurrentText(current.substring(0, currentText.length - 1));
      } else {
        setCurrentText(current.substring(0, currentText.length + 1));
      }

      if (!isDeleting && currentText === current) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentIndex((currentIndex + 1) % texts.length);
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, texts]);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className={`min-h-screen flex items-center justify-center relative overflow-hidden ${
      darkMode ? 'bg-gradient-to-br from-gray-900 to-gray-800' : 'bg-gradient-to-br from-blue-50 to-indigo-100'
    }`}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-20 animate-pulse ${
          darkMode ? 'bg-blue-500' : 'bg-blue-300'
        }`}></div>
        <div className={`absolute -bottom-40 -left-40 w-80 h-80 rounded-full opacity-20 animate-pulse delay-1000 ${
          darkMode ? 'bg-purple-500' : 'bg-purple-300'
        }`}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8 animate-fadeInUp">
          {/* Profile Image */}
          <div className="relative inline-block">
            <div className={`w-32 h-32 rounded-full mx-auto mb-6 bg-gradient-to-r from-blue-500 to-purple-600 p-1 shadow-2xl`}>
              <div className={`w-full h-full rounded-full flex items-center justify-center text-4xl font-bold text-white ${
                darkMode ? 'bg-gray-800' : 'bg-white text-gray-800'
              }`}>
                FB
              </div>
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white animate-pulse"></div>
          </div>

          {/* Main Heading */}
          <div>
            <h1 className={`text-5xl md:text-7xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Fiza Begum
              </span>
            </h1>
            
            <div className={`text-2xl md:text-3xl mb-6 h-12 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              I'm a{' '}
              <span className="text-blue-600 font-semibold">
                {currentText}
                <span className="animate-blink">|</span>
              </span>
            </div>
          </div>

          {/* Description */}
          <p className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Highly motivated Computer Science student with experience in full-stack development and automation. 
            Skilled in writing clean, testable code and eager to contribute to high performance software while 
            learning advanced technologies.
          </p>

          {/* Location */}
          <div className={`flex items-center justify-center space-x-2 ${
            darkMode ? 'text-gray-400' : 'text-gray-500'
          }`}>
            <MapPin size={16} />
            <span>Trichy, Tamil Nadu, India</span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 pt-8">
            <button
              onClick={scrollToContact}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
            >
              <Mail size={20} />
              <span>Get In Touch</span>
            </button>
            
            <a
              href="mailto:mkfizakhan@gmail.com"
              className={`px-8 py-4 rounded-full font-semibold text-lg border-2 transition-all duration-300 flex items-center space-x-2 ${
                darkMode
                  ? 'border-gray-600 text-gray-300 hover:border-gray-400 hover:text-white'
                  : 'border-gray-300 text-gray-700 hover:border-gray-500 hover:text-gray-900'
              }`}
            >
              <Download size={20} />
              <span>Download CV</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center space-x-6 pt-8">
            <a
              href="https://github.com/FizaBegum"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                darkMode
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-gray-900 shadow-lg'
              }`}
            >
              <Github size={24} />
            </a>
            
            <a
              href="mailto:mkfizakhan@gmail.com"
              className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                darkMode
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-gray-900 shadow-lg'
              }`}
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;