import React from "react";
import { Link } from "react-router-dom";
export default function AdminDashboard() {
  return (
    <div className="pt-20 py-12 bg-blue-800 text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">Admin Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl text-center text-blue-800 hover:shadow-xl transition-all duration-300">
            <Link to="/admin/dashboard/works" className="text-xl font-bold">Works</Link>
          </div>
          <div className="bg-white p-6 rounded-xl text-center text-blue-800 hover:shadow-xl transition-all duration-300">
          <Link to="/admin/dashboard/announcements" className="text-xl font-bold">Announcements</Link>
          </div>
          <div className="bg-white p-6 rounded-xl text-center text-blue-800 hover:shadow-xl transition-all duration-300">
          <Link to="/admin/dashboard/research" className="text-xl font-bold">Research</Link>
          </div>
        </div>
      </div>
    </div>
  );
}