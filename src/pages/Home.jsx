import React from 'react';
import Hero from '../components/Hero.jsx';
import AboutPreview from '../components/AboutPreview.jsx';
import Programs from '../components/Programs.jsx';
import Trainers from '../components/Trainers.jsx';
import MembershipPlans from '../components/MembershipPlans.jsx';
import Gallery from '../components/Gallery.jsx';
import Testimonials from '../components/Testimonials.jsx';
import Schedule from '../components/Schedule.jsx';
import BMICalculator from '../components/BMICalculator.jsx';
import FAQ from '../components/FAQ.jsx';
import Contact from '../components/Contact.jsx';

function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <Programs limit={4} />
      <BMICalculator />
      <Trainers />
      <MembershipPlans />
      <Gallery transformationsOnly />
      <Testimonials />
      <Schedule />
      <FAQ />
      <Contact />
    </>
  );
}

export default Home;
