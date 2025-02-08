import React, { useState } from 'react';

const works = [
  {
    id: 1,
    title: "Network Security Enhancement Framework",
    year: "2023",
    description: "Developed a comprehensive framework for enhancing network security using AI-driven threat detection.",
    impact: "Implemented in 3 educational institutions",
    collaborators: "Dr. K. Kumar, Dr. S. Venkat"
  },
  {
    id: 2,
    title: "Machine Learning in Educational Analytics",
    year: "2022",
    description: "Created predictive models for student performance analysis using advanced ML algorithms.",
    impact: "Improved student success rates by 25%",
    collaborators: "Dr. P. Rajesh"
  },
  {
    id: 3,
    title: "Deep Learning for Pattern Recognition",
    year: "2021",
    description: "Innovative approach to pattern recognition using deep neural networks.",
    impact: "Published in International Journal of Computer Science",
    collaborators: "Dr. M. Singh, Dr. R. Patel"
  }
];

const WorkItem = ({ work, onSelect }) => (
  <div 
    onClick={() => onSelect(work)}
    className="glass-effect p-6 rounded-xl cursor-pointer hover:shadow-xl transition-all duration-300"
  >
    <h3 className="text-xl font-bold text-blue-900 mb-2">{work.title}</h3>
    <p className="text-blue-600 mb-2">Year: {work.year}</p>
    <p className="text-gray-700 line-clamp-2">{work.description}</p>
  </div>
);

const WorkDetail = ({ work, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
    <div className="glass-effect rounded-xl p-8 max-w-2xl w-full">
      <h2 className="text-2xl font-bold text-blue-900 mb-4">{work.title}</h2>
      <p className="text-blue-600 mb-2">Year: {work.year}</p>
      <p className="text-gray-700 mb-4">{work.description}</p>
      <p className="text-gray-700 mb-2"><strong>Impact:</strong> {work.impact}</p>
      <p className="text-gray-700 mb-4"><strong>Collaborators:</strong> {work.collaborators}</p>
      <button 
        onClick={onClose}
        className="bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors"
      >
        Close
      </button>
    </div>
  </div>
);

const Works = () => {
  const [selectedWork, setSelectedWork] = useState(null);

  return (
    <div id="works" className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">Notable Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work) => (
            <WorkItem key={work.id} work={work} onSelect={setSelectedWork} />
          ))}
        </div>
        {selectedWork && (
          <WorkDetail work={selectedWork} onClose={() => setSelectedWork(null)} />
        )}
      </div>
    </div>
  );
};

export default Works;