import React from 'react';
import { FaNetworkWired, FaDatabase, FaBrain, FaRobot, FaChartLine } from 'react-icons/fa';

const ResearchArea = () => {
  const areas = [
    { title: 'Networking', icon: FaNetworkWired, delay: '0' },
    { title: 'Data Science', icon: FaDatabase, delay: '100' },
    { title: 'Artificial Intelligence', icon: FaBrain, delay: '200' },
    { title: 'Machine Learning', icon: FaChartLine, delay: '300' },
    { title: 'Deep Learning', icon: FaRobot, delay: '400' },
  ];

  return (
    <div id="research" className="py-20 bg-gradient-to-br from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">Research Areas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {areas.map((area, index) => (
            <div
              key={index}
              style={{ animationDelay: `${area.delay}ms` }}
              className="slide-in flex flex-col items-center p-8 glass-effect rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <area.icon className="text-5xl text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-blue-900">{area.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResearchArea