import React from 'react';
import Hero from '../components/Home/Hero';
import Services from '../components/Home/Services';
import WhyChooseUs from '../components/Home/WhyChooseUs';
import PortfolioPreview from '../components/Home/PortfolioPreview';
import Testimonials from '../components/Home/Testimonials';
import CTA from '../components/Home/CTA';

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <WhyChooseUs />
      <PortfolioPreview />
      <Testimonials />
      <CTA />
    </>
  );
};

export default Home;