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
        setAnnouncement(response.data.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch announcement details');
        setLoading(false);
      }
    };

    fetchAnnouncement();
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

  if (!announcement) return null;

  return (
    <div className="pt-20 py-12 bg-blue-800 text-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          to="/announcements"
          className="inline-block mb-8 text-white"
        >
          ← Back to Announcements
        </Link>
        <div className="p-8 rounded-xl">
          <div className="flex justify-between items-start mb-4">
            <h1 className="text-3xl font-bold text-white">{announcement.title}</h1>
          </div>
          <p className="text-white mb-6">
            {new Date(announcement.date).toLocaleDateString()}
          </p>
          <div className="prose max-w-none">
            <div className="border-t border-gray-200 pt-6">
              {/* Render markdown content */}
              <ReactMarkdown className="text-white">{announcement.content}</ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementDetail;
