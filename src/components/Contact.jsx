import React from 'react';
import { FaEnvelope, FaPhone, FaBook, FaChartLine, FaUsers } from 'react-icons/fa';

const Contact = () => {
  const stats = [
    { icon: FaChartLine, value: '15+', label: 'Years Experience' },
    { icon: FaBook, value: '25+', label: 'Research Papers' },
    { icon: FaUsers, value: '50+', label: 'Projects Guided' }
  ];

  return (
    <div id="contact" className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Academic Excellence</h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Leading cutting-edge research in computer science with a focus on practical applications 
            of AI and machine learning in networking and data science.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className=" rounded-xl p-8 text-center transform hover:-translate-y-1 transition-all duration-300"
            >
              <stat.icon className="text-4xl mx-auto mb-4 text-blue-300" />
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-blue-200">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-8 text-center">Get in Touch</h3>
          <div className="space-y-6">
            <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-colors">
              <FaEnvelope className="text-2xl text-blue-300" />
              <div>
                <h4 className="font-semibold text-blue-200">Email</h4>
                <a 
                  href="mailto:rsaravanamoorthy_cs@kongunaducollege.ac.in" 
                  className="text-white hover:text-blue-200 transition-colors"
                >
                  rsaravanamoorthy_cs@kongunaducollege.ac.in
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-colors">
              <FaPhone className="text-2xl text-blue-300" />
              <div>
                <h4 className="font-semibold text-blue-200">Phone</h4>
                <a 
                  href="tel:+919894420002" 
                  className="text-white hover:text-blue-200 transition-colors"
                >
                  +91 989-442-0002
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;