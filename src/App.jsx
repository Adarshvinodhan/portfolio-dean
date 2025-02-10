import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Slider from "./components/SlideCards/Slider";
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
import Login from './components/admin/Login';
import Dashboard from './components/admin/Dashboard';
import WorkList from './components/admin/WorkList';
import AddWork from './components/admin/AddWork';
import EditWork from './components/admin/EditWork';
import AnnoucementList from './components/admin/AnnouncementList';
import AddAnnouncement from './components/admin/AddAnnouncement';
import EditAnnouncement from './components/admin/EditAnnouncement';
import ResearchList from './components/admin/ResearchList';
import AddResearch from './components/admin/AddResearch';
import EditResearch from './components/admin/EditResearch';
import AdminRoute from './routes/AdminRoutes';
function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Slider />
              <ResearchArea />
              <Education />
              <Testimonials />
              <Contact />
            </>
          } />
          <Route path="/admin" element={<Login />} />
          <Route path="/admin/dashboard" element={<AdminRoute><Dashboard /></AdminRoute>} />
          <Route path="/admin/dashboard/works" element={<AdminRoute><WorkList /></AdminRoute>} />
          <Route path="/admin/dashboard/works/add" element={<AdminRoute><AddWork /></AdminRoute>} />
          <Route path="/admin/dashboard/works/edit/:id" element={<AdminRoute><EditWork /></AdminRoute>} />
          <Route path="/admin/dashboard/announcements" element={<AdminRoute><AnnoucementList /></AdminRoute>} />
          <Route path="/admin/dashboard/announcements/add" element={<AdminRoute><AddAnnouncement /></AdminRoute>} />
          <Route path="/admin/dashboard/announcements/edit/:id" element={<AdminRoute><EditAnnouncement /></AdminRoute>} />
          <Route path="/admin/dashboard/research" element={<AdminRoute><ResearchList /></AdminRoute>} />
          <Route path="/admin/dashboard/research/add" element={<AdminRoute><AddResearch /></AdminRoute>} />
          <Route path="/admin/dashboard/research/edit/:id" element={<AdminRoute><EditResearch /></AdminRoute>} />

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