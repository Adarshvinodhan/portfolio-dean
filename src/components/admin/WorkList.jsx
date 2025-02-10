import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PlusCircle } from 'lucide-react';
import api from '../../api/axios';

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

  const handleDelete = async (id) => {
    try {
      await api.delete(`/works/${id}`);
      setWorks(works.filter(work => work._id !== id));
    } catch (err) {
      console.error('Failed to delete work', err);
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
          <h1 className="text-4xl font-bold text-white">Recent Works</h1>
          <Link 
            to="/admin/dashboard/works/add" 
            className="bg-white text-blue-800 p-2 rounded-full hover:bg-gray-200 transition-all duration-300"
          >
            <PlusCircle size={32} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work) => (
            <div key={work._id} className="p-6 rounded-xl bg-white text-blue-800 hover:shadow-xl transition-all duration-300">
              <h2 className="text-xl font-bold mb-2">{work.title}</h2>
              <p>{work.description}</p>
              <p className="mb-2">{work.date}</p>
              <div className="flex justify-between mt-4">
                <Link to={`/admin/dashboard/works/edit/${work._id}`} className="bg-blue-600 text-white px-4 py-2 rounded-lg">Edit</Link>
                <button 
                  onClick={() => handleDelete(work._id)} 
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

export default WorksPage;
