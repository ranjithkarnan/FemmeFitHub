import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import FloatingActions from './components/FloatingActions.jsx';
import BottomNav from './components/BottomNav.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import BookingPopup from './components/BookingPopup.jsx';
import PageLoader from './components/PageLoader.jsx';
import ChallengeNotification from './components/ChallengeNotification.jsx';
import ExitPopup from './components/ExitPopup.jsx';
import Home from './pages/Home.jsx';
import AdminLogin from './admin/AdminLogin.jsx';
import AdminDashboard from './admin/AdminDashboard.jsx';
import ProtectedAdminRoute from './admin/ProtectedAdminRoute.jsx';

function PublicSite() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = 'Femme Fit Hub | Women Only Fitness Studio';

    if (window.location.hash) {
      window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}`);
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }
  }, []);

  return (
    <>
      {loading && <PageLoader onFinish={() => setLoading(false)} />}

      <Navbar />
      <main>
        <Home />
      </main>
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
    <BrowserRouter>
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
        <Route path="*" element={<PublicSite />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
