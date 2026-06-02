import React, { useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import FloatingActions from './components/FloatingActions.jsx';
import BottomNav from './components/BottomNav.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import BookingPopup from './components/BookingPopup.jsx';
import Home from './pages/Home.jsx';

function App() {
  useEffect(() => {
    document.title = 'Femme Fit Hub | Empowering Women Through Fitness';
  }, []);

  return (
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
  );
}

export default App;
