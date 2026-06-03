import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import FloatingActions from './components/FloatingActions.jsx';
import BottomNav from './components/BottomNav.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import BookingPopup from './components/BookingPopup.jsx';
import PageLoader from './components/PageLoader.jsx';
import Home from './pages/Home.jsx';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = 'Femme Fit Hub | Empowering Women Through Fitness';
  }, []);

  return (
    <>
      {loading && <PageLoader onFinish={() => setLoading(false)} />}

      {!loading && (
        <>
          <Navbar />
          <main>
            <Home />
          </main>
          <FloatingActions />
          <BottomNav />
          <ScrollToTop />
          <BookingPopup />
        </>
      )}
    </>
  );
}

export default App;
