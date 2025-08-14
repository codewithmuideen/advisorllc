// src/pages/LandingPage.js

import React, { useState } from 'react';
// I've added FaMinus for the accordion and framer-motion for animations
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheckSquare, FaStar, FaPlus, FaMinus, FaBookOpen, FaBullseye, FaDownload } from 'react-icons/fa';
import images from '../constants/images';

// --- Data Arrays for easy management ---
const testimonials = [
  { img: images.user1, name: 'Brian Cord', quote: 'Arthur helped me land my first full-time role, doubling my income and changing my life. I struggled with hundreds of applications before his 8 Step Program gave me the strategy I needed. Don’t just apply and wait—reach out to Arthur!', },
  { img: images.user2, name: 'Dontell Jefferson', quote: 'Arthur transformed my job search strategy, increasing my LinkedIn engagement and connections in weeks. His expertise in resumes, LinkedIn, networking, and interviews made the process effective. If you need a career coach, Arthur’s the one!', },
  { img: images.user3, name: 'Negah McKevitt', quote: 'Arthur listens, understands your skills, and is always available. His wisdom and availability make him an invaluable career coach.', },
];

// --- UPDATED: New data structure for the interactive accordion ---
const accordionData = [
  { title: 'Career Physical: Discover Your True Potential', content: 'Gain clarity on your professional goals by uncovering your marketable skills, strengths, and passions. Align your career aspirations with what truly drives you.' },
  { title: 'Resume Optimization: Make an Instant Impact', content: 'Your resume is your first impression. Learn how to:', points: ['Write an ATS-friendly resume that ranks high in recruiter searches', 'Showcase your achievements instead of just listing duties', 'Craft a powerful summary that makes hiring managers take notice'] },
  { title: 'LinkedIn & Personal Branding: Stand Out Online', content: 'Recruiters search LinkedIn before reviewing resumes. Make sure your profile is:', points: ['Optimized with relevant keywords for visibility', 'Visually compelling with a custom LinkedIn banner', 'Designed to position you as an expert in your field'] },
  { title: 'Targeted Job Hunting: Apply Smarter, Not Harder', content: 'Identify 3-5 industries that align with your goals and create a strategic job search plan. Learn how to:', points: ['Find the right decision-makers in your target companies', 'Use data-driven job search techniques to increase interview calls', 'Leverage social platforms to connect with hiring managers directly'] },
  { title: 'Mastering Professional Networking: The H2H Approach', content: '80% of jobs are filled through networking, not job boards! Learn how to:', points: ['Identify key networking events in your industry', 'Build relationships that open doors to new opportunities', 'Position yourself as a valuable connection in your field'] },
  { title: 'Position Yourself to Be Seen & Remembered', content: 'Forget generic cover letters! Instead, send a tailored Value Proposition Summary to decision-makers. This game-changing approach ensures hiring managers take you seriously.' },
  { title: 'Interview Like a Pro: Win the Job Offer', content: 'Confidence is key. In this guide, you’ll discover:', points: ['The top interview questions you must prepare for', 'How to align your answers with the company’s mission and culture', 'Proven storytelling techniques to demonstrate your impact'] },
  { title: 'Salary Negotiation: Secure the Best Offer', content: 'Most professionals leave money on the table when negotiating their salary. Learn:', points: ['How to confidently ask for more without fear', 'The psychological tactics top negotiators use', 'How to understand your market value and maximize your earnings'] },
];

const LandingPage = () => {
  // Your existing form state - UNCHANGED
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [agree, setAgree] = useState(false);
  const [errors, setErrors] = useState({});

  // --- NEW: State for the accordion ---
  const [openAccordionIndex, setOpenAccordionIndex] = useState(null);

  // --- NEW: Handler to toggle accordion items ---
  const handleAccordionToggle = (index) => {
    setOpenAccordionIndex(openAccordionIndex === index ? null : index);
  };

  // Your existing form validation - UNCHANGED
  const validateForm = () => {
    const next = {};
    if (!firstName.trim()) next.firstName = 'First name is required.';
    if (!email.trim()) {
      next.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      next.email = 'Please enter a valid email.';
    }
    if (!agree) next.agree = 'You must agree to the terms.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  // Your existing form submission handler - UNCHANGED
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    alert('Success! Your free guide is on its way.');
    setFirstName('');
    setEmail('');
    setAgree(false);
    setErrors({});
  };

  return (
    <main className="font-sans bg-white">
      {/* 1) Hero + Form - UNCHANGED */}
      <section className="bg-yellow-400 pt-12 pb-24 hero-swoop">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-gray-900 text-yellow-400 text-sm font-bold tracking-widest uppercase rounded-full px-4 py-1">Expert Career Guide</span>
          <h1 className="mt-4 text-4xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 tracking-tight leading-tight">LAND YOUR DREAM ROLE<br />IN 8 STEPS</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg sm:text-xl text-gray-800">Discover proven strategies to land your dream role with expert job search tips, resume writing, LinkedIn optimization, and networking insights.</p>
          <div id="free-guide-form" className="mt-10 max-w-xl mx-auto bg-white rounded-2xl shadow-2xl p-8 text-left">
            <form onSubmit={handleSubmit} noValidate>
              <div className="space-y-6">
                <div>
                  <label htmlFor="firstName" className="sr-only">First Name</label>
                  <input id="firstName" type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="w-full p-3 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition" />
                  {errors.firstName && (<p className="text-red-600 text-sm mt-1">{errors.firstName}</p>)}
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">Email Address</label>
                  <input id="email" type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-3 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition" />
                  {errors.email && (<p className="text-red-600 text-sm mt-1">{errors.email}</p>)}
                </div>
              </div>
              <div className="mt-6 flex items-start">
                <input id="terms" type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} className="h-4 w-4 mt-1 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                <label htmlFor="terms" className="ml-3 text-sm text-gray-600">I agree to terms &amp; conditions. By providing my email, I agree to receive messages from the business.</label>
              </div>
              {errors.agree && (<p className="text-red-600 text-sm mt-1">{errors.agree}</p>)}
              <button type="submit" className="w-full mt-8 bg-gray-900 text-white font-bold py-4 px-6 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 transition-all duration-300">Get the FREE Guide Now!</button>
            </form>
          </div>
          <div className="mt-10 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-left">
            <div className="flex items-start gap-3"><FaCheckSquare className="text-green-500 w-5 h-5 mt-1 shrink-0" /><span><strong>Craft a standout resume</strong> that gets noticed</span></div>
            <div className="flex items-start gap-3"><FaCheckSquare className="text-green-500 w-5 h-5 mt-1 shrink-0" /><span><strong>Master networking techniques</strong> to connect with hiring managers</span></div>
            <div className="flex items-start gap-3"><FaCheckSquare className="text-green-500 w-5 h-5 mt-1 shrink-0" /><span><strong>Build a compelling LinkedIn profile</strong> to attract recruiters</span></div>
            <div className="flex items-start gap-3"><FaCheckSquare className="text-green-500 w-5 h-5 mt-1 shrink-0" /><span><strong>Ace interviews with confidence</strong> and land the perfect offer</span></div>
          </div>
        </div>
      </section>

      {/* 2) Testimonials - UNCHANGED */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                {testimonials.map((t) => (<div key={t.name}><img src={t.img} alt={t.name} className="w-28 h-28 mx-auto rounded-full object-cover shadow-lg" /><p className="mt-6 text-gray-600 italic">"{t.quote}"</p><p className="mt-4 font-bold text-gray-900 text-lg">{t.name}</p></div>))}
            </div>
        </div>
      </section>

      {/* 3) Why This Guide Works - UNCHANGED */}
      <section className="pb-20 sm:pb-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">Why This Guide <span className="text-blue-600">Works</span></h2>
            <p className="mt-4 text-lg text-gray-600">Our step-by-step approach has helped thousands of professionals secure high-paying and fulfilling roles across different industries.</p>
            <p className="mt-6 text-xl font-semibold text-gray-800">Learn insider strategies used by top recruiters to position yourself as the ideal candidate, no matter the state of the economy.</p>
            <div className="mt-12"><img src={images.clients} alt="Client logos" className="w-full h-auto object-contain" /></div>
        </div>
      </section>

      {/* --- 4) What's Inside - UPDATED to be an interactive accordion --- */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight flex items-center justify-center gap-4">What&apos;s inside? <FaBookOpen className="text-blue-600" /></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {accordionData.map((item, index) => (
              <div key={item.title} className="bg-white border rounded-lg shadow-sm overflow-hidden">
                <button onClick={() => handleAccordionToggle(index)} className="w-full flex justify-between items-center p-5 text-left font-bold" aria-expanded={openAccordionIndex === index}>
                  <span className={`text-lg ${openAccordionIndex === index ? 'text-yellow-500' : 'text-blue-600'}`}>{item.title}</span>
                  {openAccordionIndex === index ? <FaMinus className="text-yellow-500 w-5 h-5" /> : <FaPlus className="text-blue-600 w-5 h-5" />}
                </button>
                <AnimatePresence>
                  {openAccordionIndex === index && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: 'easeInOut' }} className="overflow-hidden">
                      <div className="p-5 border-t border-gray-200">
                        <p className="text-gray-600">{item.content}</p>
                        {item.points && (
                          <ul className="mt-4 space-y-2">
                            {item.points.map((point) => (<li key={point} className="flex items-start gap-3"><FaCheckSquare className="text-green-500 w-5 h-5 mt-1 shrink-0" /><span className="text-gray-700">{point}</span></li>))}
                          </ul>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5) Mid-page Testimonial - UNCHANGED */}
      <section className="bg-yellow-400 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex justify-center text-gray-900 text-2xl mb-4">{[...Array(5)].map((_, i) => <FaStar key={i} />)}</div>
            <blockquote className="text-2xl font-semibold italic text-gray-900">"I&apos;d like to give Arthur a big thank you for helping me land my first full-time role, doubling my income, and changing my life personally, professionally, and financially."</blockquote>
            <div className="mt-8 flex items-center justify-center gap-4">
                <img src={images.user1} alt="Brian Cord" className="w-16 h-16 rounded-full object-cover shadow-md" />
                <div><p className="font-bold text-gray-900 text-lg">Brian Cord</p><p className="text-gray-800">Accounting Clerk at Ladas &amp; Parry</p></div>
            </div>
        </div>
      </section>

      {/* 6) Final CTA - UNCHANGED */}
      <section className="bg-gray-900 text-white py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Take The First Step Towards<br /><span className="text-yellow-400">Your Dream Job</span></h2>
            <p className="mt-6 flex items-center justify-center gap-3 text-lg text-gray-300"><FaBullseye className="text-yellow-400 w-6 h-6 shrink-0" />Don&apos;t let the job market dictate your career path. Follow this proven roadmap and take control of your future!</p>
            <div className="mt-10"><a href="#free-guide-form" className="inline-flex items-center justify-center gap-3 bg-yellow-400 text-gray-900 font-bold text-lg py-4 px-10 rounded-full hover:bg-yellow-500 transition-transform hover:scale-105"><FaDownload />Download the Free Guide Now</a></div>
        </div>
      </section>
    </main>
  );
};

export default LandingPage;