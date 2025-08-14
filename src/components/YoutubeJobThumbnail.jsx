import React from 'react';

const PlayIcon = ({ className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.647c1.295.742 1.295 2.545 0 3.286L7.279 20.99c-1.25.72-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
  </svg>
);

const LinkedInIcon = ({ className = '' }) => (
  <div className={`flex items-center justify-center bg-[#0A66C2] text-white font-extrabold shadow-lg ${className}`}>
    <span className="font-sans text-[55%] leading-none tracking-tighter">in</span>
  </div>
);

const YoutubeJobThumbnail = ({ videoUrl = 'https://www.youtube.com/watch?v=12yr-Y9Shhk&t=40s' }) => {
  return (
    <div className="font-sans antialiased bg-gray-100 p-6 sm:p-10">
      <a
        href={videoUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Watch the video: 8 steps to land your dream job"
        className="block w-full max-w-4xl mx-auto group"
      >
        <div className="relative aspect-[16/10] bg-gradient-to-br from-yellow-400 to-orange-500 overflow-hidden p-8 sm:p-12 flex flex-col justify-center items-center text-center shadow-2xl">
          
          {/* Floating LinkedIn Icons */}
          <LinkedInIcon className="absolute w-[13%] aspect-square top-[5%] left-[6%] opacity-95 -rotate-12" />
          <LinkedInIcon className="absolute w-[7%] aspect-square top-[12%] right-[8%] opacity-95 rotate-12" />
          <LinkedInIcon className="absolute w-[10%] aspect-square bottom-[28%] right-[10%] opacity-95 rotate-6" />
          <LinkedInIcon className="absolute w-[5%] aspect-square bottom-[8%] right-[28%] opacity-95 -rotate-6" />
          <LinkedInIcon className="absolute w-[9%] aspect-square bottom-[20%] left-[3%] opacity-95 rotate-6" />
          <LinkedInIcon className="absolute w-[4%] aspect-square bottom-[10%] left-[22%] opacity-95" />
          <LinkedInIcon className="absolute w-[4%] aspect-square top-[45%] left-[2%]" />
          <LinkedInIcon className="absolute w-[4%] aspect-square bottom-[5%] right-[5%]" />

          {/* Text Content */}
          <div className="relative z-10 flex flex-col items-center">
            <h1 className="text-white text-[12vw] sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter" style={{ textShadow: '0 4px 8px rgba(31, 41, 55, 0.3)' }}>
              8 STEPS
            </h1>
            <h2 className="text-gray-800 text-[6vw] sm:text-4xl md:text-4xl lg:text-5xl font-bold tracking-tight my-2 sm:my-3" style={{ textShadow: '0 2px 4px rgba(31, 41, 55, 0.2)' }}>
              TO LAND YOUR
            </h2>
            <h1 className="text-white text-[12vw] sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter" style={{ textShadow: '0 4px 8px rgba(31, 41, 55, 0.3)' }}>
              DREAM JOB
            </h1>

            {/* CTA Button */}
            <div className="mt-6 sm:mt-8">
              <div className="bg-yellow-400 py-2 px-5 sm:py-3 sm:px-7 flex items-center space-x-2 sm:space-x-3 shadow-lg transform transition-transform group-hover:scale-105">
                <div className="bg-gray-800 w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center">
                  <PlayIcon className="w-1/2 text-yellow-400 ml-0.5" />
                </div>
                <span className="text-gray-800 font-bold text-sm sm:text-base tracking-wide uppercase">
                  Watch The Video
                </span>
              </div>
            </div>
          </div>

          {/* Central Play Button */}
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="w-[15%] max-w-[80px] aspect-square bg-red-600/95 flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
              <PlayIcon className="w-1/2 text-white ml-[5%]" />
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default YoutubeJobThumbnail;
