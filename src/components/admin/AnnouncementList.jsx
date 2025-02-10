import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PlusCircle } from 'lucide-react';
import api from '../../api/axios';

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

  const handleDelete = async (id) => {
    try {
      await api.delete(`/announcements/${id}`);
      setAnnouncements(announcements.filter(announcement => announcement._id !== id));
    } catch (err) {
      console.error('Failed to delete announcement', err);
    }
  };

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
    <div className="pt-20 py-12 bg-blue-800 text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-white">Announcements</h1>
          <Link 
            to="/admin/dashboard/announcements/add" 
            className="bg-white text-blue-800 p-2 rounded-full hover:bg-gray-200 transition-all duration-300"
          >
            <PlusCircle size={32} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {announcements.map((announcement) => (
            <div key={announcement._id} className="p-6 rounded-xl bg-white text-blue-800 hover:shadow-xl transition-all duration-300">
              <h2 className="text-xl font-bold mb-2">{announcement.title}</h2>
              <p>{announcement.description}</p>
              <p className="mb-2">{announcement.createdAt}</p>
              {announcement.image && <img src={announcement.image} alt="Announcement" className="w-full h-40 object-cover rounded-lg mt-4" />}
              <div className="flex justify-between mt-4">
                <Link to={`/admin/dashboard/announcements/edit/${announcement._id}`} className="bg-blue-600 text-white px-4 py-2 rounded-lg">Edit</Link>
                <button 
                  onClick={() => handleDelete(announcement._id)} 
                  className="bg-red-600 text-white px-4 py-2 rounded-lg"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnnouncementsPage;
