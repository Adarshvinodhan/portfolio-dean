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
        setResearch(response.data.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch research details');
        setLoading(false);
      }
    };

    fetchResearch();
  }, [id]);

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

  if (!research) return null;

  return (
    <div className="pt-20 py-12 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          to="/research"
          className="inline-block mb-8 text-blue-600 hover:text-blue-800"
        >
          ← Back to Research Papers
        </Link>
        <div className="glass-effect p-8 rounded-xl">
          <h1 className="text-3xl font-bold text-blue-900 mb-4">{research.title}</h1>
          <div className="flex flex-wrap gap-2 mb-4">
            {research.keywords?.map((keyword, index) => (
              <span 
                key={index}
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full"
              >
                {keyword}
              </span>
            ))}
          </div>
          <p className="text-blue-600 mb-6">
            Published: {new Date(research.publicationDate).toLocaleDateString()}
          </p>
          <div className="prose max-w-none">
            <h2 className="text-xl font-semibold text-blue-900 mb-4">Abstract</h2>
            <p className="text-gray-700 mb-6">{research.abstract}</p>
            {research.doi && (
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-blue-900 mb-2">DOI</h2>
                <a 
                  href={`https://doi.org/${research.doi}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  {research.doi}
                </a>
              </div>
            )}
            {research.authors && (
              <div className="border-t border-gray-200 pt-6">
                <h2 className="text-xl font-semibold text-blue-900 mb-2">Authors</h2>
                <p className="text-gray-700">{research.authors.join(', ')}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchDetail;