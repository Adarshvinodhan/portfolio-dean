import { useEffect, useState } from "react";
import api from "../../api/axios";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const SlidingCards = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const response = await api.get("/announcements");
        if (response.data) {
          setAnnouncements(response.data);
        }
      } catch (error) {
        console.error("Error fetching announcements:", error);
      }
    };

    fetchAnnouncements();
  }, []);

  useEffect(() => {
    if (announcements.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % announcements.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [announcements]);

  return (
    <div id="announcements" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">
          Announcements
        </h2>
        <div className="flex justify-center">
          <AnimatePresence mode="wait">
            {announcements.length > 0 && (
              <motion.div
                key={announcements[currentIndex].id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="relative flex flex-col items-center p-6 rounded-xl w-80 h-[420px] overflow-hidden shadow-lg bg-white 
                border border-gray-200 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-300/10 to-transparent rounded-xl pointer-events-none"></div>

                {/* Image */}
                <img
                  src={announcements[currentIndex].image}
                  alt={announcements[currentIndex].title}
                  className="w-full h-40 object-cover rounded-lg shadow-md"
                  onError={(e) => (e.target.style.display = "none")}
                />

                <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2 text-center">
                  {announcements[currentIndex].title}
                </h3>

                <p className="text-gray-600 text-md text-center overflow-hidden text-ellipsis line-clamp-3">
                  {announcements[currentIndex].content}
                </p>

                <Link
                  to={`/announcements/${announcements[currentIndex]._id}`}
                  className="absolute bottom-4 right-4 text-blue-600 font-semibold hover:underline"
                >
                  Read More →
                </Link>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default SlidingCards;
