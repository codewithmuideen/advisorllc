import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#061325] font-sans border-t border-slate-800">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        
        {/* Top Row - Links */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-slate-400 text-sm">
          <a href="/terms" className="hover:text-white transition-colors">
            Terms & Conditions
          </a>
          <span className="hidden md:inline">|</span>
          <a href="/sms-privacy" className="hover:text-white transition-colors">
            Sms Privacy
          </a>
        </div>

        {/* Divider */}
        <div className="my-4 border-t border-slate-700"></div>

        {/* Bottom Row - Company Info */}
        <div className="text-center space-y-2 text-slate-400">
          <p className="text-base text-slate-300">
            &copy; {currentYear}{' '}
            <a
              href="/"
              className="font-semibold hover:text-white transition-colors"
            >
              Global Career Advisor LLC
            </a>
          </p>
          <p className="text-sm">
            We are committed to providing the best coaching experience.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
