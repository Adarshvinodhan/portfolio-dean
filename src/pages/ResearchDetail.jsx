import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../api/axios';

const ResearchDetail = () => {
  const { id } = useParams();
  const [research, setResearch] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchResearch = async () => {
      try {
        const response = await api.get(`/researches/${id}`);
        setResearch(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch research details');
        setLoading(false);
      }
    };

    fetchResearch();
  }, [id]);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-gray-900">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
    </div>
  );

  if (error) return (
    <div className="min-h-screen flex items-center justify-center text-red-500 text-lg">
      {error}
    </div>
  );

  if (!research) return null;

  return (
    <div className="pt-20 py-12 min-h-screen bg-gradient-to-br from-blue-900 to-gray-900 text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          to="/research"
          className="inline-block mb-8 text-blue-300 hover:text-blue-500 transition-all"
        >
          ← Back to Research Papers
        </Link>
        <div className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-xl shadow-lg border border-white/20">
          <h1 className="text-3xl font-bold text-white mb-3">{research.title}</h1>
          <div className="flex flex-wrap gap-2 mb-4">
            {research.keywords?.map((keyword, index) => (
              <span 
                key={index}
                className="bg-blue-100 text-white text-sm px-3 py-1 rounded-full"
              >
                {keyword}
              </span>
            ))}
          </div>
          <p className="text-gray-300 text-sm mb-6">
            Published: {new Date(research.createdAt).toLocaleDateString()}
          </p>
          <div className="prose max-w-none text-gray-100">
            <h2 className="text-xl font-semibold text-white mb-4">Abstract</h2>
            <p className="text-white mb-6">{research.content}</p>
            {research.authors && (
              <div className="border-t border-gray-500 pt-6">
                <h2 className="text-xl font-semibold text-white mb-2">Authors</h2>
                <p className="text-white">{research.authors}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchDetail;
