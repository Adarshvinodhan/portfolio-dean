import { useEffect, useState } from "react";
import api from "../../api/axios";
import { motion, AnimatePresence } from "framer-motion";

const ResearchCards = () => {
  const [researches, setResearches] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchResearches = async () => {
      try {
        const response = await api.get("/researches");
        if (response.data) {
          setResearches(response.data);
        }
      } catch (error) {
        console.error("Error fetching researches:", error);
      }
    };

    fetchResearches();
  }, []);

  useEffect(() => {
    if (researches.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % researches.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [researches]);

  return (
    <div id="researches" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">
          Latest Researches
        </h2>
        <div className="flex justify-center">
          <AnimatePresence mode="wait">
            {researches.length > 0 && (
              <motion.div
                key={researches[currentIndex].id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="relative flex flex-col items-center p-6 rounded-xl w-80 h-[420px] overflow-hidden shadow-lg bg-white 
                border border-gray-200 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                {/* Background Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-300/10 to-transparent rounded-xl pointer-events-none"></div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2 text-center">
                  {researches[currentIndex].title}
                </h3>

                {/* Content Preview */}
                <p className="text-gray-600 text-sm text-center overflow-hidden text-ellipsis line-clamp-3">
                  {researches[currentIndex].content.substring(0, 100)}...
                </p>

                {/* Authors */}
                <p className="text-gray-500 text-sm mt-2">Authors: {researches[currentIndex].authors}</p>

                {/* Subtle Border Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default ResearchCards;