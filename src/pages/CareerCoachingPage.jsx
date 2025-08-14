// src/pages/CareerCoachingPage.js

import React from 'react';
import {
  FaBriefcase, FaLightbulb, FaComments, FaHeart, FaCheckSquare,
  FaTimesCircle, FaKey, FaLinkedin, FaPlay
} from 'react-icons/fa';
// Make sure this path is correct for your project
import images from '../constants/images';

// --- Data for easy management ---
const whatYouGetItems = [
  { icon: <FaBriefcase />, text: 'A customized 90-day job search strategy that fits your life and goals.' },
  { icon: <FaLightbulb />, text: 'A powerful career narrative that communicates your leadership and impact.' },
  { icon: <FaComments />, text: 'LinkedIn and resume support to align with your target market' },
  { icon: <FaHeart />, text: 'Outreach and networking strategies that feel natural — and actually work' },
  { icon: <FaCheckSquare />, text: 'Interview coaching that turns “maybe” into “offer”' },
  { icon: <FaCheckSquare />, text: 'Support with evaluating and negotiating your offer (so you don’t leave money on the table)' },
  { icon: <FaHeart />, text: 'Real-time guidance — because career growth is personal, and I treat it that way' },
];

const oldWayItems = [
  'Blindly applying online',
  'Polishing your resume for the 10th time',
  '“Networking” without a plan',
  'Waiting, hoping, refreshing your inbox',
];

const imagineThisItems = [
  'A job search plan that doesn’t waste your time',
  'A personal brand that opens doors (even to unlisted roles)',
  'Messaging that sparks the interest of high-level decision-makers',
  'Expert coaching that keeps you accountable and supported every step of the way',
];

const finalTestimonials = [
  { img: images.user1, name: 'Brian Cord', quote: 'Arthur helped me land my first full-time role, doubling my income and changing my life. I needed. Don’t just apply and wait —reach out to Arthur!' },
  { img: images.user2, name: 'Dontell Jefferson', quote: 'Arthur transformed my job search strategy. His expertise in resumes, LinkedIn, and interviews made the process effective. If you need a career coach, Arthur’s the one!' },
  { img: images.user3, name: 'Negah McKevitt', quote: 'Arthur listens, understands your skills, and guides you toward success. His knowledge and availability make him an invaluable career coach.' },
];

const iHelpChecklist = [
    'Build a clear message that positions you as the perfect hire',
    'Get in front of decision-makers who are ready to hire',
    'Turn interviews into offers — and offers into leverage',
    'Secure roles that align with your values, vision, and worth',
];

// --- Main Career Coaching Page Component ---
const CareerCoachingPage = () => {
  return (
    <main className="font-sans bg-white">
      {/* 1. Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight">Land the Job You Actually Want</h1>
            <p className="mt-2 text-xl text-gray-600">— Without the Endless Guesswork —</p>
          </div>
          <div className="mt-12 grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold text-gray-900">Ready to attract premium job offers without relying on job boards or waiting around for a recruiter to “notice” you?</h2>
              <p className="mt-4 text-lg text-gray-600">Welcome! You're in the right place!</p>
              <div className="mt-8">
           <a 
  href="/contact" 
  className="inline-block bg-green-600 text-white font-bold text-sm sm:text-lg py-3 px-6 sm:py-4 sm:px-10 rounded-full hover:bg-green-700 transition-transform hover:scale-105 whitespace-nowrap"
>
  Schedule A Breakthrough Session
</a>


              </div>
            </div>
            <a href="https://youtu.be/42GTfnDMM78" target="_blank" rel="noopener noreferrer" className="relative block w-full aspect-video bg-black rounded-lg overflow-hidden group shadow-lg">
                <img src={`https://img.youtube.com/vi/42GTfnDMM78/hqdefault.jpg`} alt="8 Steps to Land Your Dream Job Video Thumbnail" className="w-full h-full object-cover"/>
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"><div className="w-16 h-16 bg-red-600/90 rounded-full flex items-center justify-center transition-transform group-hover:scale-110"><FaPlay className="w-8 h-8 text-white ml-1" /></div></div>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 rounded-full py-2 px-5 flex items-center gap-2"><FaPlay className="text-gray-800" /> <span className="font-semibold text-gray-800">WATCH THE VIDEO</span></div>
            </a>
          </div>
        </div>
      </section>

      {/* 2. Client Logo Bar */}
      <section className="bg-gray-900 py-4"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center lg:justify-start gap-4 sm:gap-8 flex-wrap"><p className="text-white font-bold text-lg text-center lg:text-left">Our clients have secured positions at industry leaders:</p><div className="hidden sm:block w-px h-6 bg-gray-600"></div><img src={images.clients} alt="Logos of client companies" className="h-10 object-contain" /></div></section>

      {/* 3. LinkedIn Testimonial */}
      <section className="py-20 sm:py-28 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white p-8 rounded-lg shadow-xl">
                <div className="flex items-start gap-4">
                    <img src={images.team1} alt="Jared Sennet" className="w-16 h-16 rounded-full object-cover"/>
                    <div>
                        <p className="font-bold text-lg text-gray-900">Jared Sennet <span className="text-xs font-normal text-gray-500 bg-yellow-200 px-1.5 py-0.5 rounded">2nd</span></p>
                        <p className="text-gray-600">Senior Vice President of Sales at City Mattress</p>
                    </div>
                </div>
                <div className="mt-4 space-y-4 text-gray-700 border-l-2 border-gray-200 pl-6 ml-8">
                    <p>Working with Arthur has been an invaluable experience in my job search journey.</p>
                    <p>Arthur has a keen eye for identifying my strengths and career aspirations... With their guidance and support, I was able to refine my resume and LinkedIn profile to effectively showcase my skills and achievements...</p>
                    <p>Thank you once again, Arthur, for being an exceptional mentor and helping me secure my next career.</p>
                </div>
            </div>
            <div className="mt-12 text-center lg:text-right">
                <h3 className="text-2xl font-bold text-gray-800">You've built an impressive career. You've got the experience, the track record, and the leadership chops.</h3>
                <p className="mt-4 text-lg text-gray-600">But <strong className="text-gray-900">when it comes to job searching</strong> at the executive or senior level? The rules are different, and outdated strategies just won’t cut it.</p>
                <p className="mt-4 text-xl font-bold text-gray-900">That's where I come in.</p>
            </div>
        </div>
      </section>
      
      {/* 4. What To Expect / The New Way */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16">
            <div>
                <h2 className="text-3xl font-extrabold text-gray-900 flex items-center gap-3"><FaBriefcase/> What You Can Expect When We Work Together:</h2>
                <ul className="mt-8 space-y-6">
                    {whatYouGetItems.map(item => (
                        <li key={item.text} className="flex items-start gap-4 text-lg">
                            <span className="text-blue-600 mt-1">{item.icon}</span>
                            <span>{item.text}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg">
                <h2 className="text-3xl font-extrabold text-gray-900 flex items-center gap-3"><FaKey/> The New Way to Land Executive & Senior-Level Roles</h2>
                <p className="mt-4 text-lg text-gray-700">Let's be honest: the old way is broken.</p>
                <ul className="mt-6 space-y-3">
                    {oldWayItems.map(item => (
                        <li key={item} className="flex items-center gap-3 text-lg"><FaTimesCircle className="text-red-500"/> {item}</li>
                    ))}
                </ul>
                <p className="mt-6 text-lg font-semibold text-gray-800">It's time for a more strategic, high-touch approach. One that reflects your level of experience and the value you bring.</p>
                <div className="mt-8">
                   <a 
  href="/contact" 
  className="inline-block bg-green-600 text-white font-bold text-sm sm:text-lg py-3 px-6 sm:py-4 sm:px-10 rounded-full hover:bg-green-700 transition-transform hover:scale-105 whitespace-nowrap"
>
  Schedule A Breakthrough Session
</a>
                    </div>
                <div className="mt-8 bg-white p-4 rounded-lg shadow-md flex items-center gap-4">
                    <img src={images.team2} alt="Daniel Chiat" className="w-16 h-16 rounded-full object-cover"/>
                    <div>
                        <p className="text-gray-600 italic">"After 10 years with one employer, Arthur's 8-Step Program helped me focus and land multiple offers. Highly recommend!"</p>
                        <p className="mt-2 font-bold text-gray-800">Daniel Chiat</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* 5. "I Help High-Level Professionals" Section */}
      <section className="relative bg-yellow-400 pt-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative z-10 text-center lg:text-left">
              <p className="font-bold text-gray-800 tracking-wider">I Help High-Level Professionals Navigate Career Transitions with Confidence, Strategy, and Results</p>
              <p className="mt-6 text-lg text-gray-800">After supporting thousands of professionals across a wide range of industries — including <strong className="text-gray-900">Directors, VPs, and C-level leaders</strong> — I know exactly what it takes to:</p>
              <ul className="mt-6 space-y-3">
                {iHelpChecklist.map(item => <li key={item} className="flex items-center gap-3 text-lg font-semibold"><FaCheckSquare className="text-green-600 w-6 h-6"/> {item}</li>)}
              </ul>
              <p className="mt-6 text-xl font-bold text-gray-900">No more applying blindly.</p>
              <p className="mt-2 text-xl font-bold text-gray-900">No more feeling stuck in limbo.</p>
              <p className="mt-2 text-xl font-bold text-gray-900">No more leaving your next career move to chance.</p>
              <div className="mt-8 pb-16">
              <a 
  href="/contact" 
  className="inline-block bg-green-600 text-white font-bold text-sm sm:text-lg py-3 px-6 sm:py-4 sm:px-10 rounded-full hover:bg-green-700 transition-transform hover:scale-105 whitespace-nowrap"
>
  Schedule A Breakthrough Session
</a>
             </div>
            </div>
           <div className="relative h-96 lg:h-[500px] flex items-end justify-center lg:justify-end">
  <img 
    src={images.arthur} 
    alt="Arthur Gluzman" 
    className="w-full max-w-lg lg:max-w-none object-contain object-bottom"
  />
</div>
     </div>
        </div>
      </section>

      {/* 6. "Imagine This" Section */}
      <section className="py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="font-bold tracking-widest text-gray-600">IMAGINE THIS</p>
            <div className="mt-8 inline-block text-left">
                <ul className="space-y-4">
                    {imagineThisItems.map(item => <li key={item} className="flex items-start gap-4 text-2xl font-semibold text-gray-800"><FaCheckSquare className="text-blue-600 w-8 h-8 mt-1 shrink-0"/>{item}</li>)}
                </ul>
            </div>
            <p className="mt-8 max-w-2xl mx-auto text-lg text-gray-700">This isn’t about flooding LinkedIn with resumes or playing a numbers game. It’s about working smarter with precision, clarity, and confidence.</p>
        </div>
      </section>

      {/* 7. Final Testimonials Section */}
      <section className="bg-gray-100 py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"><div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">{finalTestimonials.map((t) => (<div key={t.name}><img src={t.img} alt={t.name} className="w-28 h-28 mx-auto rounded-full object-cover shadow-lg" /><p className="mt-6 text-gray-600 italic">"{t.quote}"</p><p className="mt-4 font-bold text-gray-900 text-lg">{t.name}</p></div>))}</div></div>
      </section>

    </main>
  );
};

export default CareerCoachingPage;