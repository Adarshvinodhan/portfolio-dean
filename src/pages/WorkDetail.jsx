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
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-900"></div>
    </div>
  );

  if (error) return (
    <div className="min-h-screen flex items-center justify-center text-red-600">
      {error}
    </div>
  );

  if (!work) return null;

  return (
    <div className="pt-20 py-12 bg-blue-800 text-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          to="/works"
          className="inline-block mb-8 text-white"
        >
          ← Back to Works
        </Link>
        <div className="p-8 rounded-xl">
          <h1 className="text-3xl font-bold text-white mb-4">{work.title}</h1>
          <p className="text-white mb-4">{work.date}</p>
          <div className="prose max-w-none">
            <p className="text-white mb-6">{work.content}</p>
            <div className="border-t border-gray-200 pt-6">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkDetail;