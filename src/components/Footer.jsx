import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#061325] font-sans">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 text-slate-400">
          
          <p className="text-base text-slate-300">
            &copy; {currentYear} <a href="/" className="font-semibold underline hover:text-white transition-colors">
              Global Career Advisor LLC
            </a>
          </p>
          
          <p className="text-sm">
            We are committed to providing the best coaching experience.
          </p>
          
          <p className="text-sm">
            By accessing this website, we assume you accept these <a href="/terms" className="underline hover:text-white transition-colors">
              Terms and conditions
            </a>
          </p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;