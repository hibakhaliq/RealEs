import React from 'react';
import Navbar from '@/components/ui/Navbar';
import Hero from '@/components/ui/Hero';
import HowItWorks from '@/components/ui/HowItWorks';
import FeaturedProperties from '@/components/ui/FeaturedProperties';
import Services from '@/components/ui/Services';
import AboutUs from '@/components/ui/AboutUs';
import Testimonials from '@/components/ui/Testimonials';
import Faq from '@/components/ui/Faq';
import Footer from '@/components/ui/Footer';

const Home = () => {
  return (
  <>
  <Navbar/>
  <Hero/>
  <HowItWorks/>
  <FeaturedProperties/>
  <Services />
  <AboutUs />
  <Testimonials />
  <Faq />
  <Footer />
  </>
  )
};

export default Home