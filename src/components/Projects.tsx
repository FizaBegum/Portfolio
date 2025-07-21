import React, { useState } from 'react';
import { ExternalLink, Github, Eye, Code, Palette, Gamepad2, GraduationCap, Brain, CheckSquare } from 'lucide-react';

interface ProjectsProps {
  darkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects = [
    {
      title: 'Task Management App',
      description: 'A comprehensive task management application built with ReactJS and Node.JS featuring CRUD functionality, task tracking, and deadline management.',
      image: '/api/placeholder/600/400',
      category: 'web',
      technologies: ['ReactJS', 'Node.JS', 'JavaScript', 'CSS'],
      features: [
        'CRUD functionality for task management',
        'Real-time task tracking and updates',
        'Deadline management with notifications',
        'Responsive design for all devices'
      ],
      icon: CheckSquare
    },
    {
      title: 'Gamified Learning Platform',
      description: 'An interactive learning platform developed using Python and Pygame to enhance education through engaging, practical experiences.',
      image: '/api/placeholder/600/400',
      category: 'python',
      technologies: ['Python', 'Pygame', 'Game Development'],
      features: [
        'Interactive learning modules',
        'Gamification elements for engagement',
        'Progress tracking system',
        'Multiple learning categories'
      ],
      icon: Gamepad2
    },
    {
      title: 'Quiz Game Application',
      description: 'An interactive quiz game designed using Python with dynamic questions, real-time scoring, and enhanced user participation features.',
      image: '/api/placeholder/600/400',
      category: 'python',
      technologies: ['Python', 'Tkinter', 'JSON'],
      features: [
        'Dynamic question generation',
        'Real-time scoring system',
        'Multiple quiz categories',
        'User-friendly interface'
      ],
      icon: Brain
    },
    {
      title: 'College Management System',
      description: 'A comprehensive web application using HTML and CSS that automates college administration tasks, improving efficiency and accessibility.',
      image: '/api/placeholder/600/400',
      category: 'web',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      features: [
        'Student information management',
        'Course registration system',
        'Faculty management portal',
        'Responsive web design'
      ],
      icon: GraduationCap
    },
    {
      title: 'Velvet Boutique - UI/UX Design',
      description: 'A responsive e-commerce UI design created using Figma with intuitive navigation and brand consistency for enhanced user experience.',
      image: '/api/placeholder/600/400',
      category: 'design',
      technologies: ['Figma', 'UI/UX Design', 'Prototyping'],
      features: [
        'Responsive e-commerce design',
        'Intuitive user navigation',
        'Brand consistency throughout',
        'Mobile-first approach'
      ],
      icon: Palette
    },
    {
      title: 'Netflix & Spotify Clone - UI/UX',
      description: 'High-fidelity streaming app prototypes using Figma with improved usability and visual appeal through strong UI/UX design practices.',
      image: '/api/placeholder/600/400',
      category: 'design',
      technologies: ['Figma', 'UI/UX Design', 'Prototyping'],
      features: [
        'High-fidelity prototypes',
        'Streaming app interface design',
        'Enhanced visual appeal',
        'User experience optimization'
      ],
      icon: Code
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'python', label: 'Python Projects' },
    { id: 'design', label: 'UI/UX Design' }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className={`py-20 ${
      darkMode ? 'bg-gray-800' : 'bg-white'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className={`text-lg max-w-3xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            A showcase of my technical projects and design work
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : darkMode
                  ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className={`rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 ${
                darkMode
                  ? 'bg-gray-700 hover:bg-gray-650'
                  : 'bg-white hover:bg-gray-50 shadow-lg hover:shadow-xl'
              }`}
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <project.icon className="text-white" size={48} />
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className={`text-xl font-semibold mb-3 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {project.title}
                </h3>
                
                <p className={`text-sm mb-4 line-clamp-3 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-3 py-1 rounded-full text-xs ${
                          darkMode
                            ? 'bg-gray-600 text-gray-300'
                            : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className={`text-sm font-semibold mb-2 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    Key Features:
                  </h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 2).map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className={`text-xs flex items-start ${
                          darkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}
                      >
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <button className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    darkMode
                      ? 'bg-gray-600 text-gray-300 hover:bg-gray-500'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}>
                    <Eye size={16} />
                    <span>View</span>
                  </button>
                  
                  <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg text-sm font-medium hover:shadow-lg transition-all">
                    <Github size={16} />
                    <span>Code</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;