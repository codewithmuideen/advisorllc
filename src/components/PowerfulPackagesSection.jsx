import React, { useState } from 'react';

// A simple chevron icon for the accordion toggle.
const ChevronDownIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>
);

// Data for the pricing packages. Easy to update.
const packagesData = [
    {
        title: 'Career Boost Starter',
        price: 497,
        description: 'Perfect for job seekers eager to make a lasting impression.',
        features: [
            {
                title: 'Professional Resume Rewrite & Optimization:',
                text: 'Transform your resume into a compelling, ATS-friendly document that gets noticed.',
            },
            {
                title: '30-Minute Career Strategy Session with Arthur Gluzman:',
                text: 'Gain expert insights and actionable advice tailored to your unique goals.',
            },
        ],
        value: 'Elevate your professional presence and increase your visibility in your industry!',
        isHighlighted: false,
    },
    {
        title: 'Career Accelerator',
        price: 697,
        description: 'Ideal for professionals seeking personalized guidance and a competitive edge.',
        features: [
            {
                title: 'Up to 3 Professional Resumes:',
                text: 'Tailored for specific roles and industries.',
            },
            {
                title: 'LinkedIn Profile Optimization:',
                text: 'Ensure your online presence matches your professional brand.',
            },
            {
                title: 'Custom LinkedIn Banner:',
                text: 'Create a visually striking profile that commands attention.',
            },
            {
                title: '1-Hour Career Coaching Session:',
                text: 'Develop a strategic roadmap with Arthur Gluzman.',
            },
        ],
        value: 'Equip yourself with the tools and confidence to dominate your job search!',
        isHighlighted: true,
    },
    {
        title: 'Elite Career Transformation',
        price: 997,
        description: 'Designed for ambitious professionals ready to overhaul their careers.',
        features: [
            {
                title: 'Three Custom ATS-Friendly Resumes:',
                text: 'Highlight your skills and accomplishments for your dream roles.',
            },
            {
                title: 'LinkedIn Profile Optimization & Custom Banner:',
                text: 'Attract decision-makers and stand out.',
            },
            {
                title: '10 Targeted Companies Identified with Decision-Makers:',
                text: 'Jumpstart your job search with a focused list.',
            },
            {
                title: 'GCA will promote your LinkedIn Profile:',
                text: 'Gain direct exposure to hiring managers.',
            },
             {
                title: '1-Hour 1:1 Coaching Session with Arthur Gluzman:',
                text: 'Refine your strategy and overcome challenges.',
            },
            {
                title: 'YouMap Assessment:',
                text: 'Clarify your strengths, values, and passions for long-term career fulfillment.',
            }
        ],
        value: 'A complete career transformation that positions you as the top candidate!',
        isHighlighted: false,
    },
];

const PricingCard = ({ pkg, isExpanded, onToggle }) => {
    return (
        <div className={`relative flex flex-col rounded-3xl p-8 transition-all duration-300 ${pkg.isHighlighted ? 'bg-white shadow-2xl border-2 border-blue-500 lg:scale-105' : 'bg-white shadow-lg border-2 border-transparent'}`}>
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
                    <ChevronDownIcon className={`w-4 h-4 mr-2 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                    More...
                </button>
            </div>

            <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isExpanded ? 'max-h-[1000px] opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
                <div className="border-t pt-6 text-left">
                    <ul className="space-y-4">
                        {pkg.features.map(feature => (
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
};

const PowerfulPackagesSection = () => {
    const [expandedIndex, setExpandedIndex] = useState(1); // Default to the highlighted card being open

    const handleToggle = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div className="bg-gray-50 font-sans antialiased">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
                        OUR <span className="text-blue-600">POWERFUL</span> PACKAGES
                    </h2>
                </div>

                <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8 items-start text-center">
                    {packagesData.map((pkg, index) => (
                        <PricingCard 
                            key={pkg.title}
                            pkg={pkg}
                            isExpanded={expandedIndex === index}
                            onToggle={() => handleToggle(index)}
                        />
                    ))}
                </div>

                <div className="mt-20 text-center">
                  <a
  href="/contact"
  className="inline-block bg-yellow-400 text-gray-900 font-bold text-sm sm:text-lg py-3 px-6 sm:py-4 sm:px-10 rounded-full shadow-lg hover:bg-yellow-500 transform hover:scale-105 transition-all duration-300 whitespace-nowrap"
>
  Book a FREE career session today!
</a>

                </div>
            </div>
        </div>
    );
};

export default PowerfulPackagesSection;