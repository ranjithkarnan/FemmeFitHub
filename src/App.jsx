import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Outlet, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import TopAnnouncementBar from './components/TopAnnouncementBar.jsx';
import FloatingActions from './components/FloatingActions.jsx';
import BottomNav from './components/BottomNav.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import BookingPopup from './components/BookingPopup.jsx';
import PageLoader from './components/PageLoader.jsx';
import ChallengeNotification from './components/ChallengeNotification.jsx';
import ExitPopup from './components/ExitPopup.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import ProgramsPage from './pages/ProgramsPage.jsx';
import WhyChooseUsPage from './pages/WhyChooseUs.jsx';
import TrainersPage from './pages/TrainersPage.jsx';
import MembershipPage from './pages/MembershipPage.jsx';
// import GalleryPage from './pages/GalleryPage.jsx';
import StoriesPage from './pages/StoriesPage.jsx';
import CalculatorPage from './pages/CalculatorPage.jsx';
import SchedulePage from './pages/SchedulePage.jsx';
import ChallengesPage from './pages/ChallengesPage.jsx';
import CommunityPage from './pages/CommunityPage.jsx';
import FitnessTipsPage from './pages/FitnessTipsPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import LadiesGymValasaravakkamPage from './pages/LadiesGymValasaravakkamPage.jsx';
import WeightLossTrainingValasaravakkamPage from './pages/WeightLossTrainingValasaravakkamPage.jsx';
import WomenOnlyGymChennaiPage from './pages/WomenOnlyGymChennaiPage.jsx';
import GymMembershipFeesValasaravakkamPage from './pages/GymMembershipFeesValasaravakkamPage.jsx';
import FaqPage from './pages/FaqPage.jsx';
import AdminLogin from './admin/AdminLogin.jsx';
import AdminDashboard from './admin/AdminDashboard.jsx';
import ProtectedAdminRoute from './admin/ProtectedAdminRoute.jsx';

function PublicLayout() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  return (
    <>
      {loading && <PageLoader onFinish={() => setLoading(false)} />}

      <header className="site-sticky-header">
        <TopAnnouncementBar />
        <Navbar />
      </header>
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.28, ease: 'easeOut' }}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
      <FloatingActions />
      <BottomNav />
      <ScrollToTop />
      {!loading && <ChallengeNotification />}
      {!loading && <BookingPopup />}
      {!loading && <ExitPopup />}
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route
        path="/admin/dashboard"
        element={(
          <ProtectedAdminRoute>
            <AdminDashboard />
          </ProtectedAdminRoute>
        )}
      />

      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/why-choose-us" element={<WhyChooseUsPage />} />
        <Route path="/trainers" element={<TrainersPage />} />
        <Route path="/membership" element={<MembershipPage />} />
        {/* <Route path="/gallery" element={<GalleryPage />} /> */}
        <Route path="/stories" element={<StoriesPage />} />
        <Route path="/calculator" element={<CalculatorPage />} />
        <Route path="/schedule" element={<SchedulePage />} />
        <Route path="/challenges" element={<ChallengesPage />} />
        {/* <Route path="/community" element={<CommunityPage />} />
        <Route path="/fitness-tips" element={<FitnessTipsPage />} /> */}
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/ladies-gym-valasaravakkam" element={<LadiesGymValasaravakkamPage />} />
        <Route path="/weight-loss-training-valasaravakkam" element={<WeightLossTrainingValasaravakkamPage />} />
        <Route path="/women-only-gym-chennai" element={<WomenOnlyGymChennaiPage />} />
        <Route path="/gym-membership-fees-valasaravakkam" element={<GymMembershipFeesValasaravakkamPage />} />
      </Route>
    </Routes>
  );
}

export default App;

