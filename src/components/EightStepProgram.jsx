import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PlayIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
  </svg>
);

const programData = [
  { id: 1, title: 'Professional-Assessment', description: 'Take the time to identify your marketable strengths, passions, and career goals.' },
  { id: 2, title: 'Effective Resume', description: 'Next, craft a resume that captures attention, highlights your unique advantages and experience, and leverages storytelling effectively, making you memorable to potential employers.' },
  { id: 3, title: 'Job Search Strategy', description: 'Learn how to leverage online platforms, utilize job boards, and tap into the hidden job market. Approach each application strategically and purposefully.' },
  { id: 4, title: 'Job-Interview Mastery', description: 'When interview opportunities arise, be prepared. I will help you practice to hone your responses and build confidence.' },
  { id: 5, title: 'Personal Branding', description: 'Understand the importance of personal branding by showcasing your expertise across platforms like LinkedIn. Share insights and engage with others in your field to establish yourself as a knowledgeable professional.' },
  { id: 6, title: 'Networking Tactic', description: 'Expand your network by reaching out to former colleagues and industry leaders. Drive genuine conversations and connections, uncover hidden opportunities others might overlook.' },
  { id: 7, title: 'Negotiation Prowess', description: 'When job offers start coming in, be ready to negotiate. We will ensure you receive what you truly deserve. Discuss compensation and benefits confidently.' },
  { id: 8, title: 'Future Career Planning', description: 'You landed a new job! It\'s time to plan for ongoing success in your new role, setting future career goals that align with your vision and desires.' },
];

const EightStepProgramV2 = () => {
  const [activeTab, setActiveTab] = useState(1); // Step 1 open by default

  return (
    <section className="bg-white font-sans py-16 sm:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro */}
        <div className="mb-12 text-center">
          <a href="#reviews" className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors">
            <PlayIcon className="w-4 h-4 mr-2" />
            <span>Want to read more reviews? See what clients are saying about their journey with us</span>
          </a>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            The 8-step program is a <span className="text-blue-600">tailored strategy</span> designed <span className="text-blue-600">to achieve your</span> professional <span className="text-blue-600">goals</span> and find a desired job
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {programData.map((item) => (
            <div key={item.id}>
              <button
                onClick={() => setActiveTab(item.id)}
                className="w-full text-left group"
              >
                <span className="font-bold text-lg text-gray-800 group-hover:text-blue-600 transition-colors">
                  {item.id}. {item.title.replace(/-/g, ' ')}
                </span>
                <div className={`mt-2 h-1 transition-all duration-300 ${activeTab === item.id ? 'bg-blue-600' : 'bg-gray-200'}`} />
              </button>

              <AnimatePresence>
                {activeTab === item.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="pt-4 text-gray-600 text-lg">
                      {item.description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EightStepProgramV2;
