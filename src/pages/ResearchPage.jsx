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
        setResearches(response.data.data);
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
    <div className="pt-20 py-12 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-blue-900 mb-8">Research Papers</h1>
        <div className="grid grid-cols-1 gap-6">
          {researches.map((research) => (
            <Link 
              key={research.id}
              to={`/research/${research.documentId}`}
              className="block glass-effect p-6 rounded-xl hover:shadow-xl transition-all duration-300"
            >
              <h2 className="text-xl font-bold text-blue-900 mb-2">{research.title}</h2>
              <div className="flex flex-wrap gap-2 mb-3">
                {research.keywords?.map((keyword, index) => (
                  <span 
                    key={index}
                    className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
              <p className="text-blue-600 text-sm mb-2">
                Published: {new Date(research.publicationDate).toLocaleDateString()}
              </p>
              <p className="text-gray-700 line-clamp-2">{research.abstract}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResearchPage;