import React, { useState } from 'react';
import { Award, Calendar, ExternalLink, CheckCircle, Star } from 'lucide-react';

interface CertificationsProps {
  darkMode: boolean;
}

const Certifications: React.FC<CertificationsProps> = ({ darkMode }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const certifications = [
    {
      title: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services (AWS)',
      year: '2025',
      category: 'cloud',
      description: 'Foundational AWS cloud knowledge including core services, security, and pricing models.',
      skills: ['Cloud Computing', 'AWS Services', 'Cloud Security', 'Cost Management'],
      featured: true,
      status: 'active'
    },
    {
      title: 'Java Development',
      issuer: 'Udemy',
      year: '2024',
      category: 'programming',
      description: 'Comprehensive Java programming course covering OOP principles and application development.',
      skills: ['Java Programming', 'Object-Oriented Programming', 'Data Structures', 'Algorithms'],
      featured: false,
      status: 'completed'
    },
    {
      title: 'Internet of Things',
      issuer: 'NPTEL',
      year: '2024',
      category: 'technology',
      description: 'Understanding IoT concepts, sensors, connectivity, and smart device development.',
      skills: ['IoT Concepts', 'Sensor Networks', 'Embedded Systems', 'Smart Devices'],
      featured: false,
      status: 'completed'
    },
    {
      title: 'Cloud Computing',
      issuer: 'NPTEL',
      year: '2024',
      category: 'cloud',
      description: 'Comprehensive understanding of cloud computing models, services, and deployment strategies.',
      skills: ['Cloud Models', 'Virtualization', 'Cloud Services', 'Deployment Strategies'],
      featured: false,
      status: 'completed'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Certifications' },
    { id: 'cloud', label: 'Cloud Computing' },
    { id: 'programming', label: 'Programming' },
    { id: 'technology', label: 'Technology' }
  ];

  const filteredCertifications = selectedCategory === 'all' 
    ? certifications 
    : certifications.filter(cert => cert.category === selectedCategory);

  return (
    <section id="certifications" className={`py-20 ${
      darkMode ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Certifications & <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Achievements</span>
          </h2>
          <p className={`text-lg max-w-3xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Professional certifications that validate my technical expertise
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
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  : 'bg-white text-gray-600 hover:bg-gray-100 shadow-md'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCertifications.map((cert, index) => (
            <div
              key={index}
              className={`relative p-6 rounded-lg transition-all duration-300 hover:scale-105 ${
                darkMode
                  ? 'bg-gray-800 hover:bg-gray-750'
                  : 'bg-white hover:bg-gray-50 shadow-lg hover:shadow-xl'
              } ${cert.featured ? 'ring-2 ring-blue-500' : ''}`}
            >
              {/* Featured Badge */}
              {cert.featured && (
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white p-2 rounded-full">
                  <Star size={16} />
                </div>
              )}

              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <Award className="text-blue-600 mr-2" size={20} />
                    <span className={`text-sm font-medium ${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {cert.issuer}
                    </span>
                  </div>
                  <h3 className={`text-xl font-semibold mb-2 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {cert.title}
                  </h3>
                </div>
                
                <div className="text-right">
                  <div className="flex items-center text-sm mb-2">
                    <Calendar size={16} className="mr-1" />
                    <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                      {cert.year}
                    </span>
                  </div>
                  <div className={`flex items-center text-xs ${
                    cert.status === 'active' ? 'text-green-500' : 'text-blue-500'
                  }`}>
                    <CheckCircle size={14} className="mr-1" />
                    {cert.status === 'active' ? 'Active' : 'Completed'}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className={`mb-4 text-sm ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {cert.description}
              </p>

              {/* Skills */}
              <div className="mb-6">
                <h4 className={`text-sm font-semibold mb-3 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Skills Acquired:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-3 py-1 rounded-full text-xs ${
                        darkMode
                          ? 'bg-gray-700 text-gray-300'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button className={`w-full py-2 px-4 rounded-lg font-medium text-sm transition-all duration-300 flex items-center justify-center ${
                cert.featured
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg'
                  : darkMode
                  ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}>
                <ExternalLink size={16} className="mr-2" />
                View Certificate
              </button>
            </div>
          ))}
        </div>

        {/* Certification Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className={`text-center p-6 rounded-lg ${
            darkMode ? 'bg-gray-800' : 'bg-white shadow-lg'
          }`}>
            <div className="text-3xl font-bold text-blue-600 mb-2">4</div>
            <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Total Certifications
            </div>
          </div>
          <div className={`text-center p-6 rounded-lg ${
            darkMode ? 'bg-gray-800' : 'bg-white shadow-lg'
          }`}>
            <div className="text-3xl font-bold text-green-600 mb-2">1</div>
            <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Active Certifications
            </div>
          </div>
          <div className={`text-center p-6 rounded-lg ${
            darkMode ? 'bg-gray-800' : 'bg-white shadow-lg'
          }`}>
            <div className="text-3xl font-bold text-purple-600 mb-2">2024</div>
            <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Most Recent Year
            </div>
          </div>
          <div className={`text-center p-6 rounded-lg ${
            darkMode ? 'bg-gray-800' : 'bg-white shadow-lg'
          }`}>
            <div className="text-3xl font-bold text-indigo-600 mb-2">3</div>
            <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Skill Areas
            </div>
          </div>
        </div>

        {filteredCertifications.length === 0 && (
          <div className="text-center py-12">
            <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              No certifications found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certifications;