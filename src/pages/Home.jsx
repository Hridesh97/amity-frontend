import React from 'react';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import WhyChooseUs from '../components/home/WhyChooseUs';
import PortfolioPreview from '../components/home/PortfolioPreview';
import Testimonials from '../components/home/Testimonials';
import CTA from '../components/home/CTA';

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