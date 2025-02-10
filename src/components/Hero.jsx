import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

const Hero = () => {
  // Animation variants
  const slideInVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.4 } },
  };

  return (
    <div id="home" className="pt-16 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Image Section with Slide-In Animation */}
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInVariants}
          >
            <div className="relative">
              <motion.img
                src="https://kongunaducollege.ac.in/sites/kongunaducollege.ac.in/files/styles/user_profile/public/pictures/user-profiles/Dr.R.Saravana%20Moorthy.jpg?h=9b93ffa5&itok=3ln-1PLC"
                alt="Dr. R. Saravana Moorthy"
                className="relative rounded-full shadow-lg max-w-sm mx-auto transform hover:scale-105 transition-transform duration-300"
                whileHover={{ scale: 1.05 }}
              />
            </div>
          </motion.div>

          {/* Text Section with Fade-In Animation */}
          <motion.div
            className="md:w-1/2 md:pl-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariants}
          >
            <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-100 to-white">
              Dr. R. Saravana Moorthy
            </h1>
            <h2 className="text-2xl mb-4 text-blue-200">Dean and Head of Computer Science Department</h2>
            <p className="text-lg mb-6 text-blue-100">Kongunadu College of Arts and Science</p>
            <div className="space-y-4">
              <p className="flex items-center p-3">
                <FaEnvelope className="text-blue-200 mr-2" />
                <a href="mailto:rsaravanamoorthy_cs@kongunaducollege.ac.in" className="hover:text-blue-200 transition-colors">
                  rsaravanamoorthy_cs@kongunaducollege.ac.in
                </a>
              </p>
              <p className="flex items-center p-3">
                <FaPhone className="text-blue-200 mr-2" />
                <a href="tel:+919894420002" className="hover:text-blue-200 transition-colors">+91 989-442-0002</a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
