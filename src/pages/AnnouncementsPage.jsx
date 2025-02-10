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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-gray-900">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
    </div>
  );

  if (error) return (
    <div className="min-h-screen flex items-center justify-center text-red-500 text-lg">
      {error}
    </div>
  );

  return (
    <div className="pt-20 py-12 min-h-screen bg-gradient-to-br from-blue-900 to-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-center mb-12">Announcements</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {announcements.map((announcement) => (
            <Link 
              key={announcement._id}
              to={`/announcements/${announcement._id}`}
              className="block bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-lg hover:shadow-2xl transition-all duration-300 border border-white/20"
            >
                <h2 className="text-2xl font-semibold text-white mb-2">{announcement.title}</h2>
                <p className="text-gray-200 mb-2">{announcement.description}</p>
              <p className="text-gray-400 text-sm">
                {new Date(announcement.createdAt).toDateString()}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnnouncementsPage;
