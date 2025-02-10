import React, { useState } from 'react';
import api from '../../api/axios';
import { useNavigate } from 'react-router-dom';

const AddWork = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(''); // New state for image URL
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/works', { title, description, content, image });
      navigate('/admin/dashboard');
    } catch (err) {
      setError('Failed to add work');
    }
  };

  return (
    <div className="pt-20 py-12 min-h-screen flex items-center justify-center bg-blue-800 text-white">
      <div className="bg-white p-10 rounded-xl shadow-lg w-5/6 max-w-6xl text-blue-800">
        <h1 className="text-3xl font-bold mb-6 text-center">Add New Work</h1>
        {error && <p className="text-red-600 mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <input 
            type="text" 
            placeholder="Title" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            className="w-full p-3 text-lg border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
          <input 
            type="text" 
            placeholder="Image URL" 
            value={image} 
            onChange={(e) => setImage(e.target.value)} 
            className="w-full p-3 text-lg border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
          <textarea 
            placeholder="Short Description" 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            className="w-full h-32 p-3 text-lg border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          ></textarea>
          <textarea 
            placeholder="Detailed Content" 
            value={content} 
            onChange={(e) => setContent(e.target.value)} 
            className="w-full h-60 p-3 text-lg border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          ></textarea>
          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition text-lg"
          >
            Add Work
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddWork;
