import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../api/axios';
import ReactMarkdown from 'react-markdown';

const AnnouncementDetail = () => {
  const { id } = useParams();
  const [announcement, setAnnouncement] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAnnouncement = async () => {
      try {
        const response = await api.get(`/announcements/${id}`);
        setAnnouncement(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch announcement details');
        setLoading(false);
      }
    };

    fetchAnnouncement();
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

  if (!announcement) return null;

  return (
    <div className="pt-20 py-12 min-h-screen bg-gradient-to-br from-blue-900 to-gray-900 text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          to="/announcements"
          className="inline-block mb-8 text-blue-300 hover:text-blue-500 transition-all"
        >
          ← Back to Announcements
        </Link>
        <div className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-xl shadow-lg border border-white/20">
          <h1 className="text-3xl font-bold text-white mb-3">{announcement.title}</h1>
          <p className="text-gray-300 text-sm mb-6">
            {new Date(announcement.createdAt).toLocaleDateString()}
          </p>
          <div className="border-t border-gray-500 pt-6">
            <ReactMarkdown className="prose max-w-none text-gray-100">{announcement.content}</ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementDetail;
