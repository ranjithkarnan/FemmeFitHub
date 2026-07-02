import React, { lazy, Suspense, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Outlet, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import TopAnnouncementBar from './components/TopAnnouncementBar.jsx';
import FloatingActions from './components/FloatingActions.jsx';
import BottomNav from './components/BottomNav.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import PageLoader from './components/PageLoader.jsx';
import Home from './pages/Home.jsx';
import ProtectedAdminRoute from './admin/ProtectedAdminRoute.jsx';

const Footer = lazy(() => import('./components/Footer.jsx'));
const BookingPopup = lazy(() => import('./components/BookingPopup.jsx'));
const ChallengeNotification = lazy(() => import('./components/ChallengeNotification.jsx'));
const ExitPopup = lazy(() => import('./components/ExitPopup.jsx'));
const About = lazy(() => import('./pages/About.jsx'));
const ProgramsPage = lazy(() => import('./pages/ProgramsPage.jsx'));
const WhyChooseUsPage = lazy(() => import('./pages/WhyChooseUs.jsx'));
const TrainersPage = lazy(() => import('./pages/TrainersPage.jsx'));
const MembershipPage = lazy(() => import('./pages/MembershipPage.jsx'));
const StoriesPage = lazy(() => import('./pages/StoriesPage.jsx'));
const CalculatorPage = lazy(() => import('./pages/CalculatorPage.jsx'));
const SchedulePage = lazy(() => import('./pages/SchedulePage.jsx'));
const ChallengesPage = lazy(() => import('./pages/ChallengesPage.jsx'));
const ContactPage = lazy(() => import('./pages/ContactPage.jsx'));
const LadiesGymValasaravakkamPage = lazy(() => import('./pages/LadiesGymValasaravakkamPage.jsx'));
const WeightLossTrainingValasaravakkamPage = lazy(() => import('./pages/WeightLossTrainingValasaravakkamPage.jsx'));
const WomenOnlyGymChennaiPage = lazy(() => import('./pages/WomenOnlyGymChennaiPage.jsx'));
const GymMembershipFeesValasaravakkamPage = lazy(() => import('./pages/GymMembershipFeesValasaravakkamPage.jsx'));
const FaqPage = lazy(() => import('./pages/FaqPage.jsx'));
const AdminLogin = lazy(() => import('./admin/AdminLogin.jsx'));
const AdminDashboard = lazy(() => import('./admin/AdminDashboard.jsx'));

function PublicLayout() {
  const [loading, setLoading] = useState(true);
  const [showFooter, setShowFooter] = useState(false);
  const [enableMarketingPopups, setEnableMarketingPopups] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (loading) return undefined;

    const scheduleIdle = window.requestIdleCallback || ((callback, options) => window.setTimeout(callback, options?.timeout || 1500));
    const cancelIdle = window.cancelIdleCallback || window.clearTimeout;
    const idleId = scheduleIdle(() => setShowFooter(true), { timeout: 2500 });

    return () => cancelIdle(idleId);
  }, [loading]);

  useEffect(() => {
    if (loading) return undefined;

    const scheduleIdle = window.requestIdleCallback || ((callback, options) => window.setTimeout(callback, options?.timeout || 4000));
    const cancelIdle = window.cancelIdleCallback || window.clearTimeout;
    let idleId;

    const startMarketingUi = () => {
      idleId = scheduleIdle(() => setEnableMarketingPopups(true), { timeout: 4000 });
    };

    if (document.readyState === 'complete') {
      startMarketingUi();
    } else {
      window.addEventListener('load', startMarketingUi, { once: true });
    }

    return () => {
      window.removeEventListener('load', startMarketingUi);
      if (idleId) {
        cancelIdle(idleId);
      }
    };
  }, [loading]);

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
          <Suspense fallback={<div className="route-loading" role="status" aria-label="Loading page" />}>
            <Outlet />
          </Suspense>
        </motion.main>
      </AnimatePresence>
      {showFooter && (
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      )}
      <FloatingActions />
      <BottomNav />
      <ScrollToTop />
      {enableMarketingPopups && (
        <Suspense fallback={null}>
          <ChallengeNotification />
          <BookingPopup />
          <ExitPopup />
        </Suspense>
      )}
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/admin/login" element={<Suspense fallback={<div className="route-loading" />}><AdminLogin /></Suspense>} />
      <Route
        path="/admin/dashboard"
        element={(
          <Suspense fallback={<div className="route-loading" />}>
            <ProtectedAdminRoute>
              <AdminDashboard />
            </ProtectedAdminRoute>
          </Suspense>
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

