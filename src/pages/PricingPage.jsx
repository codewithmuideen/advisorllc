import React, { useState } from 'react';

// Chevron Icon for accordion toggle
const ChevronDownIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={3}
    stroke="currentColor"
    className={className}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
  </svg>
);

// Pricing packages data
const packagesData = [
  {
    title: 'Career Boost Starter',
    price: 497,
    description: 'Perfect for job seekers ready to make a strong first impression.',
    features: [
      {
        title: 'Professional Resume Rewrite & Optimization',
        text: 'Transform your resume into a compelling, ATS-friendly document that stands out.',
      },
      {
        title: '30-Minute Career Strategy Session with Arthur Gluzman',
        text: 'Gain expert insights and actionable advice tailored to your career goals.',
      },
    ],
    value: 'Enhance your professional presence and increase your visibility in your industry.',
    isHighlighted: false,
  },
  {
    title: 'Career Accelerator',
    price: 697,
    description: 'Ideal for professionals seeking personalized guidance and a competitive advantage.',
    features: [
      {
        title: 'Up to 3 Professional Resumes',
        text: 'Custom-crafted for specific roles and industries.',
      },
      {
        title: 'LinkedIn Profile Optimization',
        text: 'Ensure your online presence aligns with your personal brand.',
      },
      {
        title: 'Custom LinkedIn Banner',
        text: 'Create a visually striking profile that commands attention.',
      },
      {
        title: '1-Hour Career Coaching Session',
        text: 'Develop a strategic career roadmap with Arthur Gluzman.',
      },
    ],
    value: 'Equip yourself with the tools and confidence to dominate your job search.',
    isHighlighted: true,
  },
  {
    title: 'Elite Career Transformation',
    price: 997,
    description: 'Designed for ambitious professionals committed to a complete career overhaul.',
    features: [
      {
        title: 'Three Custom ATS-Friendly Resumes',
        text: 'Showcase your skills and accomplishments for your target roles.',
      },
      {
        title: 'LinkedIn Profile Optimization & Custom Banner',
        text: 'Attract decision-makers and stand out from the competition.',
      },
      {
        title: '10 Targeted Companies with Decision-Maker Contacts',
        text: 'Jumpstart your job search with a focused approach.',
      },
      {
        title: 'GCA Promotion of Your LinkedIn Profile',
        text: 'Gain direct exposure to hiring managers.',
      },
      {
        title: '1-Hour 1:1 Coaching Session with Arthur Gluzman',
        text: 'Refine your strategy and overcome challenges.',
      },
      {
        title: 'YouMap Assessment',
        text: 'Discover your strengths, values, and passions for long-term career success.',
      },
    ],
    value: 'A full career transformation that positions you as the top candidate.',
    isHighlighted: false,
  },
];

const PricingCard = ({ pkg, isExpanded, onToggle }) => (
  <div
    className={`relative flex flex-col rounded-3xl p-8 transition-all duration-300 ${
      pkg.isHighlighted
        ? 'bg-white shadow-2xl border-2 border-blue-500 lg:scale-105'
        : 'bg-white shadow-lg border-2 border-transparent'
    }`}
  >
    <div className="flex-grow">
      <h3 className="text-2xl font-bold text-blue-600">{pkg.title}</h3>
      <p className="my-4">
        <span className="text-5xl font-extrabold text-gray-800">${pkg.price}</span>
      </p>
      <p className="text-gray-600 h-16">{pkg.description}</p>

      <button
        onClick={onToggle}
        className="mt-6 flex items-center justify-center w-full font-semibold text-gray-700 hover:text-blue-600 transition-colors"
        aria-expanded={isExpanded}
      >
        <ChevronDownIcon
          className={`w-4 h-4 mr-2 transition-transform duration-300 ${
            isExpanded ? 'rotate-180' : ''
          }`}
        />
        {isExpanded ? 'Show Less' : 'View Details'}
      </button>
    </div>

    <div
      className={`transition-all duration-500 ease-in-out overflow-hidden ${
        isExpanded ? 'max-h-[1000px] opacity-100 mt-6' : 'max-h-0 opacity-0'
      }`}
    >
      <div className="border-t pt-6 text-left">
        <ul className="space-y-4">
          {pkg.features.map((feature) => (
            <li key={feature.title} className="flex items-start">
              <span className="text-blue-500 font-bold mr-2 mt-1">✓</span>
              <div>
                <strong className="block text-gray-800">{feature.title}</strong>
                <p className="text-gray-600">{feature.text}</p>
              </div>
            </li>
          ))}
        </ul>
        <p className="italic text-gray-600 mt-6">{pkg.value}</p>
      </div>
    </div>
  </div>
);

const PricingPage = () => {
  const [expandedIndex, setExpandedIndex] = useState(1); // Default: highlighted card open

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50 font-sans antialiased">
      {/* Header */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
          Our <span className="text-blue-600">Pricing</span> Plans
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Choose the package that matches your career goals. Whether you’re just starting out
          or ready for a complete transformation, we have the perfect plan for you.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8 items-start text-center">
          {packagesData.map((pkg, index) => (
            <PricingCard
              key={pkg.title}
              pkg={pkg}
              isExpanded={expandedIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <a
            href="/contact"
            className="inline-block bg-yellow-400 text-gray-900 font-bold text-sm sm:text-lg py-3 px-6 sm:py-4 sm:px-10 rounded-full shadow-lg hover:bg-yellow-500 transform hover:scale-105 transition-all duration-300 whitespace-nowrap"
          >
            Book Your FREE Career Session Today
          </a>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
