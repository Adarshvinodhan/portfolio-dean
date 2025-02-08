import React from 'react';

const Hero = () => {
  return (
    <div id="home" className="pt-16 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0 slide-in">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-blue-300 rounded-lg blur opacity-25"></div>
              <img
                src="https://kongunaducollege.ac.in/sites/kongunaducollege.ac.in/files/styles/user_profile/public/pictures/user-profiles/Dr.R.Saravana%20Moorthy.jpg?h=9b93ffa5&itok=3ln-1PLC"
                alt="Dr. R. Saravana Moorthy"
                className="relative rounded-lg shadow-2xl max-w-sm mx-auto transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          <div className="md:w-1/2 md:pl-8 fade-in">
            <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-100 to-white">
              Dr. R. Saravana Moorthy
            </h1>
            <h2 className="text-2xl mb-4 text-blue-200">Dean and Head of Computer Science Department</h2>
            <p className="text-lg mb-6 text-blue-100">Kongunadu College of Arts and Science</p>
            <div className="space-y-4">
              <p className="flex items-center bg-blue-800/30 p-3 rounded-lg backdrop-blur-sm">
                <span className="font-semibold mr-2">Email:</span>
                <a href="mailto:rsaravanamoorthy_cs@kongunaducollege.ac.in" className="hover:text-blue-200 transition-colors">
                  rsaravanamoorthy_cs@kongunaducollege.ac.in
                </a>
              </p>
              <p className="flex items-center bg-blue-800/30 p-3 rounded-lg backdrop-blur-sm">
                <span className="font-semibold mr-2">Phone:</span>
                <a href="tel:+919894420002" className="hover:text-blue-200 transition-colors">+91 989-442-0002</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero