import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqData = [
  {
    id: 1,
    question: 'What is career coaching, and how can it help me?',
    answer: (
      <p>
        Career coaching is a professional service that helps individuals identify their strengths,
        clarify career goals, and develop strategies to advance in their careers. It provides
        personalized guidance on job searching, resume writing, networking, interview preparation,
        and career transitions.
      </p>
    ),
  },
  {
    id: 2,
    question: 'What services do Global Career Advisors offer?',
    answer: (
      <p>
        We offer services to help entry-level, mid-level, and C-level professionals, from 1:1 career
        coaching, resume writing, LinkedIn optimization, and Mock interviews.
      </p>
    ),
  },
  {
    id: 3,
    question: "Can Global Career Advisors help if I'm unsure about my career path?",
    answer: (
      <p>
        Yes! If you're feeling uncertain about your next career move, we help you identify your most
        valuable skills, strengths, and interests to explore career options that align with your
        professional and personal aspirations.
      </p>
    ),
  },
  {
    id: 4,
    question: 'What can I expect from a career coaching session?',
    answer: (
      <p>
        A career coaching session typically includes goal setting, resume and LinkedIn optimization,
        interview preparation, personal branding strategies, networking tips, and customized action
        plans to achieve career success.
      </p>
    ),
  },
  {
    id: 5,
    question: 'Why should I choose Global Career Advisors?',
    answer: (
      <p>
        With over 20 years of experience in career coaching and executive recruiting, we have a
        proven track record of helping professionals at all levels land high-paying roles. Our
        insider knowledge and results-driven strategies give you a competitive edge in today's job
        market.
      </p>
    ),
  },
  {
    id: 6,
    question: 'What does the career coaching process look like?',
    answer: (
      <div className="space-y-4">
        <p>
          According to LinkedIn, the average job search takes six months, but with our 95% success
          rate, we help our clients secure a job offer in less than 90 days. We customize our
          coaching based on your career goals and timeline to maximize results.
        </p>
        <ol className="space-y-2 list-decimal list-inside">
          <li>
            <strong>Initial Consultation:</strong> We begin with a detailed assessment of your career
            goals, skills, and challenges.
          </li>
          <li>
            <strong>Tailored Job Search Plan:</strong> Based on your profile, we develop a custom
            strategy to target your ideal roles and industries.
          </li>
          <li>
            <strong>Implementation & Support:</strong> We guide you through resume optimization,
            LinkedIn branding, networking tactics, and interview preparation to help you secure
            interviews with top companies.
          </li>
          <li>
            <strong>Final Steps & Offer Negotiation:</strong> When you receive job offers, we equip
            you with expert negotiation strategies to secure the best salary and benefits package.
          </li>
        </ol>
      </div>
    ),
  },
];

const FaqSection = () => {
  // ✅ Set initial state to 1 so first FAQ is open by default
  const [activeId, setActiveId] = useState(1);

  const toggleFaq = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="bg-gray-50 font-sans py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Disclaimer Section */}
        <div className="text-center text-xs text-gray-500 space-y-4">
          <p className="font-bold text-gray-700">Disclaimer</p>
          <p>
            All sales are final. Should a client (purchaser of Global Career Advisors Services) decide
            at any time during their job search, that the services they paid for, regardless of what
            has been completed, are no longer of interest to them, no refunds will be provided.
          </p>
          <p>
            We reserve the right to terminate working relationships with any client and provide no
            refund. If a client causes any liability, all legal remedies will be applied.
          </p>
          <a href="/terms" className="text-yellow-500 font-semibold hover:underline">
            Read more about our Terms And Conditions.
          </a>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 sm:mt-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
              Frequently Asked <span className="text-blue-600">Questions</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-12">
            {faqData.map(item => (
              <div key={item.id} className="py-4">
                <button
                  onClick={() => toggleFaq(item.id)}
                  className="w-full text-left group"
                  aria-expanded={activeId === item.id}
                  aria-controls={`faq-answer-${item.id}`}
                >
                  <span className="font-bold text-lg text-gray-800 group-hover:text-blue-600 transition-colors">
                    {item.question}
                  </span>
                  <div 
                    className={`mt-2 h-1 transition-all duration-300 ${activeId === item.id ? 'bg-blue-600' : 'bg-gray-200'}`} 
                  />
                </button>
                <AnimatePresence>
                  {activeId === item.id && (
                    <motion.div
                      id={`faq-answer-${item.id}`}
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: 'auto', marginTop: '16px' }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      transition={{ duration: 0.4, ease: 'easeInOut' }}
                      className="overflow-hidden text-gray-600"
                    >
                      {item.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
