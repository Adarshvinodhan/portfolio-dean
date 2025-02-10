import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../api/axios';

const ResearchPage = () => {
  const [researches, setResearches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchResearches = async () => {
      try {
        const response = await api.get('/researches');
        setResearches(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch research papers');
        setLoading(false);
      }
    };

    fetchResearches();
  }, []);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-900"></div>
    </div>
  );

  if (error) return (
    <div className="min-h-screen flex items-center justify-center text-red-600">
      {error}
    </div>
  );

  return (
    <div className="pt-20 py-12 bg-blue-800 text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-8">Research Papers</h1>
        <div className="grid grid-cols-1 gap-6">
          {researches.map((research) => (
            <Link 
              key={research._id}
              to={`/research/${research._id}`}
              className="block p-6 rounded-xl hover:shadow-xl transition-all duration-300"
            >
              <h2 className="text-xl font-bold text-white mb-2">{research.title}</h2>
              <div className="flex flex-wrap gap-2 mb-3">
                {research.keywords?.map((keyword, index) => (
                  <span 
                    key={index}
                    className="bg-blue-100 text-white text-sm px-3 py-1 rounded-full"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
              <p className="text-white text-sm mb-2">
                Authors: {research.authors}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResearchPage;