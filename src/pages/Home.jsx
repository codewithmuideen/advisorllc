import React from 'react';
import HeroSection from '../components/HeroSection';
import ClientsBanner from '../components/ClientsBanner';
import ServicesGrid from '../components/ServicesGrid';
import YoutubeJobThumbnail from '../components/YoutubeJobThumbnail';
import EngagementSection from '../components/EngagementSection';
import PowerfulPackagesSection from '../components/PowerfulPackagesSection';
import BookPromoSection from '../components/BookPromoSection';
import EightStepProgram from '../components/EightStepProgram';
import FaqSection from '../components/FaqSection';
import BlogSection from '../components/BlogSection';
import Newsletter from '../components/Newsletter';

const Home = () => {
  return (
    <>
      <HeroSection />
      <ClientsBanner />
      <ServicesGrid />
      <YoutubeJobThumbnail />
      <EngagementSection />
      <PowerfulPackagesSection />
      <BookPromoSection />
      <EightStepProgram />
      <FaqSection />
      <BlogSection />
      <Newsletter />
    </>
  );
};

export default Home;
