import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../api/axios';

const WorksPage = () => {
  const [works, setWorks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWorks = async () => {
      try {
        const response = await api.get('/works');
        setWorks(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch works');
        setLoading(false);
      }
    };

    fetchWorks();
  }, []);

  if (loading) return (
    <div className="min-h-screen  flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2  border-blue-900"></div>
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
        <h1 className="text-4xl font-bold text-white mb-8">Recent Works</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work) => (
            <Link 
              key={work._id} 
              to={`/works/${work._id}`}
              className="p-6 rounded-xl hover:shadow-xl transition-all duration-300"
            >
              <h2 className="text-xl font-bold text-white mb-2">{work.title}</h2>
              <p>{work.description}</p>
              <p className="text-white mb-2">{work.date}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorksPage;