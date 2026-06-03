import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import FloatingActions from './components/FloatingActions.jsx';
import BottomNav from './components/BottomNav.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import BookingPopup from './components/BookingPopup.jsx';
import PageLoader from './components/PageLoader.jsx';
import ChallengeNotification from './components/ChallengeNotification.jsx';
import Home from './pages/Home.jsx';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = 'Femme Fit Hub | Empowering Women Through Fitness';

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
    </>
  );
}

export default App;
