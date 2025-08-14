// src/pages/LinkedinOptimizationPage.js

import React from 'react';
import { FaCheckCircle, FaChevronRight } from 'react-icons/fa';
// Make sure this path is correct for your project
import images from '../constants/images';

// --- Data for easy management ---
const heroFeatures = [
  'Increase profile views by 300%',
  'Generate 5x more connection requests',
  'Attract direct messages from hiring managers',
];

const weHelpFeatures = [
  'Craft a compelling personal brand that highlights your unique strengths and positions you as an industry expert.',
  'Differentiate yourself from other candidates and make a lasting impression in the minds of employers.',
  'Open doors to exciting job offers, networking connections, and collaboration opportunities.',
  'Propel your career to new heights by leveraging the power of LinkedIn and establishing yourself as a thought leader.',
];

// --- Main LinkedIn Optimization Page Component ---

const LinkedinOptimizationPage = () => {
  return (
    <main className="font-sans bg-white">
      {/* 1. Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side: Text Content */}
            <div>
              <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
                Unlock the Power of LinkedIn
              </h1>
              <p className="mt-6 text-lg text-gray-600">
                In today's digital job market, your LinkedIn profile is often the first impression recruiters have of you. Our LinkedIn optimization experts have helped professionals:
              </p>
              <ul className="mt-6 space-y-4">
                {heroFeatures.map(feature => (
                  <li key={feature} className="flex items-center gap-3">
                    <FaCheckCircle className="w-6 h-6 text-green-500" />
                    <span className="text-lg text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a href="/contact" className="inline-block bg-gray-900 text-white font-bold py-3 px-8 rounded-lg hover:bg-gray-800 transition text-center">
                  Maximize Your LinkedIn Presence &rarr;
                </a>
                <a href="/contact" className="inline-block border-2 border-gray-900 text-gray-900 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition text-center">
                  Learn More
                </a>
              </div>
            </div>
            {/* Right Side: Image */}
            <div>
              <img src={images.profile} alt="Optimized LinkedIn profile screenshot" className="rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Client Logo Bar */}
      <section className="bg-gray-900 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center lg:justify-start gap-4 sm:gap-8 flex-wrap">
          <p className="text-white font-bold text-lg text-center lg:text-left">Our clients have secured positions at industry leaders:</p>
          <div className="hidden sm:block w-px h-6 bg-gray-600"></div>
          <img src={images.clients} alt="Logos of client companies" className="h-10 object-contain" />
        </div>
      </section>

      {/* 3. "Imagine" Section */}
      <section className="bg-gray-50 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img src={images.hand} alt="Hand building a structure with wooden blocks" className="rounded-lg shadow-lg" />
            </div>
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold text-gray-900">
                Imagine having a LinkedIn profile that attracts recruiters, showcases your skills and expertise, and opens the doors to your dream job. This is possible thanks to LinkedIn Optimization.
              </h2>
              <p className="mt-6 text-6xl font-extrabold text-gray-900">+200 million</p>
              <p className="text-lg text-gray-600">Job applications are submitted every month on LinkedIn</p>
              <div className="mt-8">
                <a href="/contact" className="inline-block bg-yellow-400 text-gray-900 font-bold py-4 px-12 rounded-lg hover:bg-yellow-500 transition-transform hover:scale-105">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Before & After Comparison */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-gray-500">Non-Optimize LinkedIn Profile</h3>
              <img src={images.no_optimized} alt="Example of a non-optimized LinkedIn profile" className="mt-6 rounded-lg shadow-xl border" />
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-gray-900">Optimize LinkedIn Profile</h3>
              <img src={images.optimized} alt="Example of a fully optimized LinkedIn profile" className="mt-6 rounded-lg shadow-xl border" />
            </div>
          </div>
        </div>
      </section>
      
      {/* 5. "We help professionals" Section */}
      <section className="bg-gray-50 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                We help professionals like you build a robust LinkedIn Profile
              </h2>
              <p className="mt-6 text-lg text-gray-700 font-semibold">
                Our proven strategies will position you in professional search results, ensuring you're visible to the right people.
              </p>
              <ul className="mt-8 space-y-4">
                {weHelpFeatures.map(feature => (
                  <li key={feature} className="flex items-start gap-3">
                    <FaChevronRight className="w-5 h-5 text-blue-600 mt-1 shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <a href="/contact" className="inline-block bg-yellow-400 text-gray-900 font-bold py-4 px-12 rounded-lg hover:bg-yellow-500 transition-transform hover:scale-105">
                  Start Now
                </a>
              </div>
            </div>
            <div>
              <img src={images.professional} alt="Professional man with a network graphic" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* 6. Final CTA Section */}
      <section className="py-20 sm:py-28 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Don't get lost in a sea of professionals
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            Do you struggle to capture the attention of recruiters and decision-makers? In today's digital age, having a strong online presence is essential for career success. <strong className="text-gray-800">Enhance your LinkedIn Profile</strong> and stand out from the competition with our LinkedIn Optimization Service.
          </p>
          <div className="mt-10">
            <a href="/contact" className="inline-block bg-gray-900 text-white font-bold py-4 px-10 rounded-lg hover:bg-gray-800 transition-transform hover:scale-105">
              Optimize my profile
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LinkedinOptimizationPage;