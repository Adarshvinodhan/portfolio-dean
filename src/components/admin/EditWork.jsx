import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../api/axios";

const EditWork = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);


  // Fetch existing work details
  useEffect(() => {
    const fetchWork = async () => {
      try {
        const response = await api.get(`/works/${id}`);
        setTitle(response.data.title);
        setDescription(response.data.description);
        setContent(response.data.content);
        setLoading(false);        
      } catch (err) {
        setError("Failed to fetch work details.");
        setLoading(false);
      }
    };
    fetchWork();
  }, [id]);

  // Handle form submission (Update work)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/works/${id}`, { title, description, content});
      navigate("/admin/dashboard");
    } catch (err) {
      setError("Failed to update work.");
    }
  };

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center text-white">
        <p>Loading...</p>
      </div>
    );
  }

  return (
<div className="min-h-screen pt-12 py-8 flex items-center justify-center bg-blue-800 text-white">
  <div className="bg-white p-8 rounded-xl shadow-lg w-[90%] max-w-6xl text-blue-800">
    <h1 className="text-4xl font-bold mb-6 text-center">Edit Work</h1>
    {error && <p className="text-red-600 mb-4 text-lg">{error}</p>}
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
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
        className="w-full h-64 p-3 text-lg border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 overflow-y-auto"
        required
      ></textarea>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition text-xl font-semibold"
      >
        Update Work
      </button>
    </form>
  </div>
</div>
  );
};

export default EditWork;
