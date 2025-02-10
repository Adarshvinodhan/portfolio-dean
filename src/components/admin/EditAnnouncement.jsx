import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../api/axios";

const EditAnnouncement = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch existing announcement details
  useEffect(() => {
    const fetchAnnouncement = async () => {
      try {
        const response = await api.get(`/announcements/${id}`);
        const { title, description, content, date } = response.data;
        setTitle(title);
        setDescription(description);
        setContent(content);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch announcement details.");
        setLoading(false);
      }
    };
    fetchAnnouncement();
  }, [id]);

  // Handle form submission (Update announcement)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/announcements/${id}`, { title, description, content, date });
      navigate("/admin/dashboard");
    } catch (err) {
      setError("Failed to update announcement.");
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
    <div className="min-h-screen pt-20 py-12 flex items-center justify-center bg-blue-800 text-white">
      <div className="bg-white p-16 rounded-xl shadow-lg w-[90%] max-w-6xl text-blue-800">
        <h1 className="text-5xl font-bold mb-10 text-center">Edit Announcement</h1>
        {error && <p className="text-red-600 mb-4 text-lg">{error}</p>}
        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-5 text-xl border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
          <textarea
            placeholder="Short Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full h-40 p-5 text-xl border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          ></textarea>
          <textarea
            placeholder="Detailed Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full h-80 p-5 text-xl border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-5 rounded-lg hover:bg-blue-700 transition text-2xl font-semibold"
          >
            Update Announcement
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditAnnouncement;
