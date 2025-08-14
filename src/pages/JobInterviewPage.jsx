// src/pages/JobInterviewPage.js

import React from 'react';
import { FaArrowRight, FaStar, FaQuoteLeft } from 'react-icons/fa';
// Make sure this path is correct for your project
import images from '../constants/images';

// --- Data for easy management ---
const packages = [
  {
    title: 'Career Boost Starter',
    price: 497,
    description: 'Perfect for job seekers eager to make a lasting impression.',
    isHighlighted: false,
  },
  {
    title: 'Career Accelerator',
    price: 697,
    description: 'Ideal for professionals seeking personalized guidance and a competitive edge.',
    isHighlighted: true,
  },
  {
    title: 'Elite Career Transformation',
    price: 997,
    description: 'Designed for ambitious professionals ready to overhaul their careers.',
    isHighlighted: false,
  },
];

// --- Sub-component for a pricing card ---
const PackageCard = ({ pkg }) => (
  <div className={`flex flex-col text-center rounded-3xl p-8 transition-all duration-300 ${pkg.isHighlighted ? 'bg-white shadow-2xl border-2 border-blue-500 lg:scale-105' : 'bg-white shadow-lg border-2 border-transparent'}`}>
    <h3 className="text-2xl font-bold text-blue-600">{pkg.title}</h3>
    <p className="my-4">
      <span className="text-5xl font-extrabold text-gray-800">${pkg.price}</span>
    </p>
    <p className="text-gray-600 h-16">{pkg.description}</p>
    <a href="/contact" className="mt-6 font-semibold text-gray-700 hover:text-blue-600 transition-colors">
      More...
    </a>
  </div>
);

// --- Main Job Interview Page Component ---
const JobInterviewPage = () => {
  return (
    <main className="font-sans bg-white">
      {/* 1. Hero Section */}
      <section className="bg-yellow-400 py-20 lg:py-28 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
            JOB INTERVIEW PREPARATION
          </h1>
          <p className="mt-6 text-lg text-gray-800 max-w-2xl mx-auto">
            A good interview strategy is the key to success. Our “Ace the Interview” formula ensures you practice and perform perfectly! Job Interview Preparation is one of the most critical steps to landing a dream role. Get your coaching session now!
          </p>
          <div className="mt-10">
            <a href="/contact" className="inline-flex items-center gap-3 border-2 border-gray-900 text-gray-900 font-bold py-3 px-8 rounded-lg hover:bg-gray-900 hover:text-white transition">
              BOOK A FREE CALL NOW <FaArrowRight />
            </a>
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

      {/* 3. "Afraid of Interview" Section */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <img src={images.interview} alt="Woman in a job interview" className="rounded-lg shadow-xl" />
          </div>
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-bold text-gray-900">
              HAVE YOU EVER FELT AFRAID OF A JOB INTERVIEW?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Building confidence and practicing are the primary keys to interview success. Our <strong className="text-gray-800">Ace the Interview formula</strong> will help you perfect this valuable skill until you feel confident in your responses to the interviewers.
            </p>
          </div>
        </div>
      </section>

      {/* 4. "Feel More Confident" Section */}
      <section className="bg-gray-900 py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white rounded-t-[60px] rounded-b-[60px]">
          <p className="inline-block bg-yellow-400 text-gray-900 text-sm font-bold tracking-widest uppercase rounded-full px-4 py-1">
            HOW WILL YOU IMPROVE?
          </p>
          <h2 className="mt-6 text-4xl md:text-5xl font-extrabold tracking-tight">
            FEEL MORE CONFIDENT DURING THE JOB INTERVIEWS
          </h2>
          <div className="mt-12 relative bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
            <FaQuoteLeft className="absolute -top-4 -left-4 text-5xl text-white/10" />
            <div className="flex justify-center text-yellow-400 text-2xl mb-4">
              {[...Array(5)].map((_, i) => <FaStar key={i} />)}
            </div>
            <blockquote className="text-xl italic text-gray-200">
              "Once again, I am very grateful to Arthur (Global Career Advisors) and <span className="bg-yellow-400 text-gray-900 px-1 font-semibold">my experience only solidified how effective his strategy can be</span> and how important it is to have a perfect resume, a well written LinkedIn profile, and <span className="bg-yellow-400 text-gray-900 px-1 font-semibold">be prepared and confident during interviews</span>"
            </blockquote>
            <div className="mt-8 flex items-center justify-center gap-4">
              <img src={images.team2} alt="Mateo Burbano" className="w-16 h-16 rounded-full object-cover shadow-md border-2 border-yellow-400" />
              <div>
                <p className="font-bold text-white text-lg">Mateo Burbano</p>
                <p className="text-gray-300">Land Development Manager</p>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <a href="/contact" className="inline-flex items-center gap-3 bg-yellow-400 text-gray-900 font-bold py-4 px-10 rounded-lg hover:bg-yellow-500 transition-transform hover:scale-105">
              SEND US A MESSAGE <FaArrowRight />
            </a>
          </div>
        </div>
      </section>

      {/* 5. Packages Section */}
      <section className="bg-gray-50 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
              OUR <span className="text-blue-600">POWERFUL</span> PACKAGES
            </h2>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8 items-start">
            {packages.map((pkg) => <PackageCard key={pkg.title} pkg={pkg} />)}
          </div>
        </div>
      </section>

      {/* 6. Final CTA Section */}
      <section className="bg-white py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <a href="/contact" className="block w-full text-center bg-yellow-400 text-gray-900 font-bold text-xl py-6 rounded-2xl shadow-lg hover:bg-yellow-500 transition-transform hover:scale-105">
            Book a FREE career session today!
          </a>
        </div>
      </section>
    </main>
  );
};

export default JobInterviewPage;