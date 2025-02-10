import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../api/axios';

const AnnouncementsPage = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const response = await api.get('/announcements');
        setAnnouncements(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch announcements');
        setLoading(false);
      }
    };

    fetchAnnouncements();
  }, []);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-900"></div>
    </div>
  );

  if (error) return (
    <div className="min-h-screen flex items-center justify-center text-white">
      {error}
    </div>
  );

  return (
    <div className="pt-20 py-12 bg-blue-800 text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-8">Announcements</h1>
        <div className="space-y-6">
          {announcements.map((announcement) => (
            <Link 
              key={announcement._id}
              to={`/announcements/${announcement._id}`}
              className="block p-6 rounded-xl hover:shadow-xl transition-all duration-300"
            >
              <div className="flex justify-between items-start">
                <h2 className="text-xl font-bold text-white">{announcement.title}</h2>
              </div>
              <p className="text-white text-sm mt-2">
                {new Date(announcement.date).toLocaleDateString()}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnnouncementsPage;