import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import api from "../../api/axios";

const EditResearch = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [authors, setAuthors] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [successMessage, setSuccessMessage] = useState("");

  // Fetch existing research details
  useEffect(() => {
    const fetchResearch = async () => {
      try {
        const response = await api.get(`/researches/${id}`);
        const { title, description, content, authors, image } = response.data;
        setTitle(title);
        setDescription(description);
        setContent(content);
        setAuthors(authors);
        setImage(image);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch research details.");
        setLoading(false);
      }
    };
    fetchResearch();
  }, [id]);

  // Handle form submission (Update research)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/researches/${id}`, { title, description, content, authors, image });
      setSuccessMessage("Research successfully updated! ✅");
      setTimeout(() => {
        setSuccessMessage("");
        navigate("/admin/dashboard");
      }, 2000);
    } catch (err) {
      setError("Failed to update research.");
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
      {/* Success Notification */}
      <AnimatePresence>
        {successMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50"
          >
            {successMessage}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="bg-white p-16 rounded-xl shadow-lg w-[90%] max-w-6xl text-blue-800">
        <h1 className="text-5xl font-bold mb-10 text-center">Edit Research</h1>
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
          <input
            type="text"
            placeholder="Authors (comma-separated)"
            value={authors}
            onChange={(e) => setAuthors(e.target.value)}
            className="w-full p-5 text-xl border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
          <input
            type="text" 
            placeholder="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="w-full p-5 text-xl border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-5 rounded-lg hover:bg-blue-700 transition text-2xl font-semibold"
          >
            Update Research
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditResearch;
