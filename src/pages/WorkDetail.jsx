import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../api/axios';

const WorkDetail = () => {
  const { id } = useParams();
  const [work, setWork] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWork = async () => {
      try {
        const response = await api.get(`/works/${id}`);
        setWork(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch work details');
        setLoading(false);
      }
    };

    fetchWork();
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

  if (!work) return null;

  return (
    <div className="pt-20 py-12 min-h-screen bg-gradient-to-br from-blue-900 to-gray-900 text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          to="/works"
          className="inline-block mb-8 text-blue-300 hover:text-blue-500 transition-all"
        >
          ← Back to Works
        </Link>
        <div className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-xl shadow-lg border border-white/20">
          {/* Image Section */}
          {work.image && (
            <img 
              src={work.image} 
              alt="Work" 
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
          )}
          <h1 className="text-3xl font-bold text-white mb-3">{work.title}</h1>
          <p className="text-gray-300 text-sm mb-4">
            Published: {new Date(work.createdAt).toLocaleDateString()}
          </p>
          <div className="prose max-w-none text-gray-100">
            <p className="text-white mb-6">{work.content}</p>
            <div className="border-t border-gray-500 pt-6"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkDetail;
