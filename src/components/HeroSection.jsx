import React from 'react';
// Make sure this path is correct for your project
import images from '../constants/images';

const HeroSection = () => {
  return (
    <section className="bg-yellow-400 font-sans">
      {/* CORRECTED: Removed 'pb-16' to make the image flush with the bottom on mobile */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 lg:pt-16 lg:pb-0">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          
          {/* Left Side: Text Content */}
          <div className="text-center lg:text-left">
            <p className="font-bold text-gray-900">
              Career Coaching: Land your dream job in 90 days
            </p>
            <h1 className="text-5xl md:text-6xl font-extrabold text-black mt-4 leading-tight">
              BUILD THE <br />
              FUTURE YOU'VE <br />
              ALWAYS IMAGINED
            </h1>
            <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4 justify-center lg:justify-start">
              <a
                href="/contact"
                className="w-full sm:w-auto text-center bg-black text-white font-bold py-4 px-8 rounded-full hover:bg-gray-800 transition-transform hover:scale-105"
              >
                Test Your Career Readiness Now
              </a>
              <a
                href="/contact"
                className="w-full sm:w-auto text-center text-black font-bold py-4 px-8 rounded-full border-2 border-black hover:bg-black hover:text-white transition-all"
              >
                Book A Breakthrough Session Today
              </a>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="relative">
            <img
              src={images.hero}
              alt="Portrait of a career advisor"
              className="w-full max-w-md mx-auto lg:max-w-full"
            />
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;