import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import Testimonials from './components/Testimonials';
import ResearchArea from './components/ResearchArea';
import Contact from './components/Contact';
import WorksPage from './pages/WorksPage';
import WorkDetail from './pages/WorkDetail';
import AnnouncementsPage from './pages/AnnouncementsPage';
import AnnouncementDetail from './pages/AnnouncementDetail';
import ResearchPage from './pages/ResearchPage';
import ResearchDetail from './pages/ResearchDetail';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <ResearchArea />
              <Education />
              <Testimonials />
              <Contact />
            </>
          } />
          <Route path="/works" element={<WorksPage />} />
          <Route path="/works/:id" element={<WorkDetail />} />
          <Route path="/announcements" element={<AnnouncementsPage />} />
          <Route path="/announcements/:id" element={<AnnouncementDetail />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/research/:id" element={<ResearchDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;