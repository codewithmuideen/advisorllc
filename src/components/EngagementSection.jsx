import React from 'react';
// As requested, this component assumes you have an 'images' constant
// that exports the client logos.
import images from '../constants/images';

// --- DUMMY DATA FOR DEMONSTRATION ---
// Replace this with your actual import. The component now expects a single
// composite image for all the client logos.

// --- END OF DUMMY DATA ---

const statsData = [
  {
    statistic: '500+',
    title: 'Companies',
    description: 'We have helped hundreds of companies find the perfect candidates.',
  },
  {
    statistic: '95%',
    title: 'Success Rate',
    description: 'Know our record. Our services will make a real difference in your life.',
  },
  {
    statistic: '25+',
    title: 'Years of experience',
    description: 'With a deep understanding of the industry, we deliver the highest quality.',
  },
  {
    statistic: '+30K',
    title: 'Avg. Salary Increase',
    description: 'Clients have seen base salary increases of over +$30k.',
  },
];

const StatCard = ({ statistic, title, description }) => (
  <div className="bg-white rounded-3xl shadow-xl p-8 text-center flex flex-col">
    <p className="text-5xl lg:text-6xl font-bold text-sky-500">{statistic}</p>
    <div className="my-4 border-b border-gray-200 inline-block self-center">
      <h3 className="font-bold text-gray-900 pb-2 px-4">{title}</h3>
    </div>
    <p className="text-gray-600 flex-grow">{description}</p>
    <div className="w-full mt-8">
      <div className="h-1 bg-gray-900 w-full"></div>
    </div>
  </div>
);

const EngagementSection = () => {
  return (
    <section className="bg-white font-sans py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Heading */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
            Engage with <span className="text-sky-500">TOP</span> companies<br />
            that <span className="text-sky-500">MATCH</span> you
          </h2>
        </div>

        {/* Company Logos (Using a single composite image) */}
        <div className="mt-12 sm:mt-16">
          <img
            src={images.clients}
            alt="Logos of top companies including KPMG, Riot Games, Google, Amazon, Tesla, and Microsoft"
            className="w-full max-w-5xl mx-auto object-contain"
          />
        </div>

        {/* Stats Section */}
        <div className="mt-20 sm:mt-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {statsData.map((stat) => (
              <StatCard
                key={stat.title}
                statistic={stat.statistic}
                title={stat.title}
                description={stat.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngagementSection;