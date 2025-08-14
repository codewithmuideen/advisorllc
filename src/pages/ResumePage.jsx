// src/pages/ResumePage.js

import React from 'react';
import { FaArrowRight, FaCheckCircle, FaStar } from 'react-icons/fa';
// Make sure this path is correct for your project
import images from '../constants/images';

// --- Data for easy management ---

const targetedResumeFeatures = [
  { title: 'Relevance', text: 'Tailoring your resume to a specific job posting ensures that your skills and experiences directly align with the position’s requirements, increasing the chance of grabbing the recruiter’s attention.' },
  { title: 'Higher Chances', text: 'By showcasing your qualifications aligned with the job description, you enhance the likelihood of getting shortlisted for interviews.' },
  { title: 'Visibility', text: 'A targeted resume emphasizes the most critical attributes sought by the employer, making it stand out amidst a pile of generic applications.' },
  { title: 'Applicant Tracking System (ATS) Friendly', text: 'These tailored resumes are well-suited for ATS, ensuring they pass through automated screening processes, enabling your application to reach human eyes.' },
];

const resumeTypes = [
  { title: 'Entry-Level', text: 'Are you just starting? A professionally written resume sets you apart from the crowd, tailored to your potential, not churned out by a machine.' },
  { title: 'Experienced Professional', text: 'Are you navigating the competitive landscape of your industry? Our resumes are strategic tools that thrust your experience and expertise into the spotlight, making you the undeniable top choice.' },
  { title: 'C-Suite', text: 'Are you looking for an executive position? Let us make your application shine. Contact us for your next career move.' },
  { title: 'Executive', text: 'Highlight your achievements with a spotlight on your skills. Elevate your executive resume with us.' },
];

const packages = [
  { title: 'Basic', description: 'Elevate your resume for success.', features: ['1 Targeted Resume'] },
  { title: 'Digital Presence', description: 'Amplify your online professional presence.', features: ['1 Targeted Resume', 'LinkedIn Optimization'] },
  { title: 'Smart Resume Package', description: 'The complete toolkit for job search mastery.', features: ['1 Targeted Resume', 'Cover Letter', 'LinkedIn Optimization', '45 min of 1:1 Coaching'] },
];

// --- The Main Resume Page Component ---

const ResumePage = () => {
  return (
    <main className="font-sans bg-white">
      {/* 1. Hero Section */}
      <section className="bg-yellow-400 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side: Text Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
                Need Expert Help With Your Resume?
              </h1>
              <p className="mt-6 text-lg text-gray-800">
                Still struggling to create that perfect resume after reading <a href="/resources" className="font-bold underline">our guide</a>? Our professional resume writers are ready to help you stand out from the competition and land your dream job in 2025's competitive market.
              </p>
              <div className="mt-8">
                <a
  href="/contact"
  className="inline-flex items-center gap-3 bg-gray-900 text-white font-bold py-4 px-8 rounded-full hover:bg-gray-800 transition-transform hover:scale-105 text-sm sm:text-base"
>
  Schedule Your Resume Revision 
  <FaArrowRight className="hidden sm:inline" />
</a>

              </div>
            </div>
            {/* Right Side: Image */}
            <div className="relative">
              <img src={images.resume} alt="Professionally written resume example" className="rounded-lg shadow-2xl" />
              <FaCheckCircle className="absolute -top-8 -right-8 w-24 h-24 text-green-500 bg-white rounded-full" />
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

      {/* 3. "What is a targeted resume?" Section */}
      <section className="bg-gray-900 text-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            What is a <span className="text-yellow-400">targeted resume?</span>
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-300">
            Targeted resumes are crafted to pass Applicant Tracking Systems and match specific roles, increasing your chances of landing an interview.
          </p>
          <div className="mt-16 grid sm:grid-cols-2 gap-10 text-left">
            {targetedResumeFeatures.map(feature => (
              <div key={feature.title}>
                <h3 className="text-2xl font-bold">{feature.title}</h3>
                <p className="mt-2 text-gray-400">{feature.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 border-t border-gray-700 pt-8">
            <h3 className="text-2xl font-semibold">No More mismatch, oversight, and rejections!!!</h3>
            <div className="mt-6">
              <a href="/contact" className="inline-block bg-yellow-400 text-gray-900 font-bold py-4 px-10 rounded-full hover:bg-yellow-500 transition-transform hover:scale-105">
                Hire Now
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* 4. "Stand out with a powerful resume" Section */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">
                Stand out with a powerful Resume
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Level up your resume at the same unbeatable price, no matter your professional stage!
              </p>
              <div className="mt-8">
                <a href="/contact" className="inline-block bg-yellow-400 text-gray-900 font-bold py-4 px-10 rounded-full hover:bg-yellow-500 transition-transform hover:scale-105">
                  Let's Go Write My Resume
                </a>
              </div>
            </div>
            <div className="space-y-8">
              {resumeTypes.map(type => (
                <div key={type.title}>
                  <h3 className="text-2xl font-bold text-blue-600">{type.title}</h3>
                  <p className="mt-2 text-gray-600">{type.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Packages Section */}
      <section className="bg-gray-900 text-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            <span className="text-yellow-400">Packages</span>
          </h2>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div key={pkg.title} className="border-2 border-gray-700 rounded-2xl p-8 text-left flex flex-col">
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold">{pkg.title}</h3>
                  <p className="mt-2 text-gray-400">{pkg.description}</p>
                  <ul className="mt-6 space-y-3">
                    {pkg.features.map(feature => (
                      <li key={feature} className="flex items-center gap-3">
                        <FaStar className="text-yellow-400" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16">
            <a href="/contact" className="inline-block bg-yellow-400 text-gray-900 font-bold py-4 px-10 rounded-full hover:bg-yellow-500 transition-transform hover:scale-105">
              Let's Go Write My Resume
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ResumePage;