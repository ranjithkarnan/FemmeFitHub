import React from 'react';
import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import FloatingWhatsApp from './components/FloatingWhatsApp.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import ProgramsPage from './pages/ProgramsPage.jsx';
import TrainersPage from './pages/TrainersPage.jsx';
import MembershipPage from './pages/MembershipPage.jsx';
import GalleryPage from './pages/GalleryPage.jsx';
import BlogPage from './pages/BlogPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import SchedulePage from './pages/SchedulePage.jsx';
import TestimonialsPage from './pages/TestimonialsPage.jsx';

const pageTitles = {
  '/': 'Femme Fit Hub | Empowering Women Through Fitness',
  '/about': 'About Us | Femme Fit Hub',
  '/programs': 'Programs & Classes | Femme Fit Hub',
  '/trainers': 'Certified Trainers | Femme Fit Hub',
  '/membership': 'Membership Plans | Femme Fit Hub',
  '/gallery': 'Transformation Gallery | Femme Fit Hub',
  '/testimonials': 'Testimonials | Femme Fit Hub',
  '/schedule': 'Schedule | Femme Fit Hub',
  '/blog': 'Fitness Tips Blog | Femme Fit Hub',
  '/contact': 'Contact Us | Femme Fit Hub'
};

function App() {
  const location = useLocation();

  useEffect(() => {
    document.title = pageTitles[location.pathname] || pageTitles['/'];
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/trainers" element={<TrainersPage />} />
          <Route path="/membership" element={<MembershipPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
      <FloatingWhatsApp />
      <ScrollToTop />
    </>
  );
}

export default App;
