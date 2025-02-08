import React, { useState, useEffect } from 'react';

const Education = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const education = [
    {
      degree: 'Ph.D (Computer Science Engineering)',
      subject: 'Computer Science',
      institution: 'Bundalkhand University',
      year: '2012'
    },
    {
      degree: 'M.Phil (Computer Science)',
      subject: 'Computer Science',
      institution: 'Bharathiar University',
      year: '2004'
    },
    {
      degree: 'M.Sc (Software Engineering)',
      subject: 'Computer Science',
      institution: 'V.L.B Janaki Ammal College Of Engineering',
      year: '2006'
    },
    {
      degree: 'MCA',
      subject: 'Computer Science',
      institution: 'Bharathiar University',
      year: '2014'
    },
    {
      degree: 'MBA(IT)',
      subject: 'Computer Science',
      institution: 'Bharathiar University',
      year: '2013'
    },
    {
      degree: 'OCP',
      subject: 'Computer Science',
      institution: 'Oracle University',
      year: '2016'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % education.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div id="education" className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">Education</h2>
        <div className="relative max-w-2xl mx-auto">
          <div className="glass-effect rounded-xl p-8 transition-all duration-500 transform hover:shadow-2xl">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-blue-300 rounded-xl blur opacity-25"></div>
            <div className="relative">
              <h3 className="text-3xl font-bold text-blue-900 mb-6">{education[activeIndex].degree}</h3>
              <div className="space-y-4">
                <p className="flex items-center bg-blue-50/50 p-3 rounded-lg">
                  <span className="font-semibold text-blue-900 mr-2">Subject:</span>
                  <span className="text-blue-800">{education[activeIndex].subject}</span>
                </p>
                <p className="flex items-center bg-blue-50/50 p-3 rounded-lg">
                  <span className="font-semibold text-blue-900 mr-2">Institution:</span>
                  <span className="text-blue-800">{education[activeIndex].institution}</span>
                </p>
                <p className="flex items-center bg-blue-50/50 p-3 rounded-lg">
                  <span className="font-semibold text-blue-900 mr-2">Year:</span>
                  <span className="text-blue-800">{education[activeIndex].year}</span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-8 space-x-2">
            {education.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-2 rounded-full transition-all duration-300 cursor-pointer ${
                  index === activeIndex ? 'bg-blue-900 w-6' : 'bg-blue-200 hover:bg-blue-300'
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education