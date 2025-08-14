// src/pages/AboutPage.js
import React from 'react';
import { Play } from 'lucide-react';
import images from '../constants/images'; 

// --- Data Arrays ---
const featuredLogos = [
  { src: images.logos_white_06, alt: 'CNBC' },
  { src: images.logos_white_07, alt: 'Monster' },
  { src: images.logos_white_08, alt: 'The Detroit Jewish News' },
  { src: images.logos_white_09, alt: 'Fox News' },
  { src: images.logos_white_10, alt: 'Indeed' },
];

const stats = [
  { value: '500+', title: 'Companies', description: 'We have helped hundreds of companies find the perfect candidates.' },
  { value: '95%', title: 'Success Rate', description: 'Know our record of success. Our services will make a real difference in your life.' },
  { value: '25+', title: 'Years of Experience', description: 'With a deep understanding of the industry, we deliver the highest quality services.' },
  { value: '+30K', title: 'Avg. Salary Increase', description: 'Clients have seen base salary increases of over $30k.' },
];

const videos = [
  { id: 'z8Q_YaRntgc', title: 'Who Is This For? Arthur Gluzman Interview' },
  { id: 'QooGSMdJlPI', title: 'The Job Shop - Arthur Gluzman on Fox 2 Detroit' },
  { id: '42GTfnDMM78', title: 'Welcome to Global Career Advisors - 8 Steps' },
];

// --- Sub-components ---
const StatCard = ({ value, title, description }) => (
  <div className="bg-white rounded-2xl shadow-lg p-8 text-center transform hover:-translate-y-2 transition-transform duration-300">
    <p className="text-5xl font-extrabold text-blue-600">{value}</p>
    <p className="text-xl font-bold text-gray-800 mt-2">{title}</p>
    <div className="w-12 h-1 bg-yellow-400 mx-auto my-4"></div>
    <p className="text-gray-600">{description}</p>
  </div>
);

const VideoThumbnail = ({ videoId, title }) => (
  <a
    href={`https://www.youtube.com/watch?v=${videoId}`}
    target="_blank"
    rel="noopener noreferrer"
    className="relative block w-full aspect-video bg-black rounded-lg overflow-hidden group shadow-lg"
  >
    <img
      src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
      alt={title}
      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="w-16 h-16 bg-red-600/90 rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
        <Play className="w-8 h-8 text-white ml-1" />
      </div>
    </div>
    <p
      className="absolute bottom-0 left-0 p-4 text-white font-bold text-lg leading-tight"
      style={{ textShadow: '0 2px 4px rgba(0,0,0,0.7)' }}
    >
      {title}
    </p>
  </a>
);

// --- Main Component ---
const AboutPage = () => {
  return (
    <div className="font-sans bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-yellow-400 pt-16 lg:pt-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <p className="font-semibold text-gray-800 tracking-wider">
                Career Coach • International Recruiter • Author
              </p>
              <h1 className="mt-2 text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight">
                Arthur Gluzman
              </h1>
              <p className="mt-6 text-lg text-gray-800 max-w-xl mx-auto lg:mx-0">
                I'm <strong>Arthur Gluzman</strong>, founder and <strong>CEO of a million-dollar recruitment company</strong>, and a <strong>career coach</strong>. Using my <strong>25 years of recruiting experience</strong>, I have helped CEOs, CFOs, VPs, and Talent Acquisition Pros looking to hire and retain the best professionals and executives in the known Universe.
              </p>
              <div className="mt-8">
                <a
                  href="/contact"
                  className="inline-block bg-gray-900 text-white font-bold py-4 px-10 rounded-full hover:bg-gray-800 transition-transform hover:scale-105"
                >
                  Book A FREE career session
                </a>
              </div>
            </div>
            <div className="relative flex justify-center items-center">
              <img
                src={images.hero}
                alt="Arthur Gluzman"
                className="w-full max-w-lg lg:max-w-xl h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured In */}
      <section className="bg-gray-900 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center lg:justify-start gap-6 sm:gap-10 flex-wrap">
          <p className="text-white font-bold text-lg">Featured In</p>
          <div className="hidden sm:block w-px h-6 bg-gray-600"></div>
          {featuredLogos.map((logo) => (
            <img
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              className="h-10 sm:h-14 object-contain"
            />
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <StatCard key={stat.title} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="relative h-[600px] md:h-screen max-h-[800px] overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0">
          <iframe
            src="https://www.youtube.com/embed/z8Q_YaRntgc?autoplay=1&mute=1&loop=1&playlist=z8Q_YaRntgc&controls=0&showinfo=0&autohide=1&modestbranding=1"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="w-full h-full object-cover"
            style={{ width: '100vw', height: '100vh', transform: 'scale(1.5)' }}
            title="Background Video"
          ></iframe>
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {videos.map((video) => (
                <VideoThumbnail key={video.id} videoId={video.id} title={video.title} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Second Featured In */}
      <section className="bg-yellow-400 py-16 sm:py-24 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            FEATURED IN
          </h2>
          <div className="mt-8 flex justify-center items-center gap-10 sm:gap-14 flex-wrap">
           {featuredLogos.map((logo) => (
  <img
    key={logo.alt}
    src={logo.src}
    alt={logo.alt}
    className="h-20 sm:h-28 object-contain" // doubled size
  />
))}

          </div>
          <p className="mt-10 max-w-2xl mx-auto text-lg text-gray-800">
            For more than 20 years, I have coached and helped various individuals to get their dream jobs within 30 days. I have also helped top reputable companies recruit the best talent for their organizations.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative bg-gray-900 text-white py-20 sm:py-28">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={images.clients}
            alt=""
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            TAKE YOUR CAREER TO THE <span className="text-yellow-400">NEXT LEVEL</span>
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-300">
            Build your brand as an expert in your industry, just like any other leading expert.
            <strong className="block mt-2 text-white">
              You will never feel stuck, undervalued, unappreciated, unrecognized, or underpaid – Ever again in your lifetime.
            </strong>
          </p>
          <div className="mt-10">
            <a
              href="/contact"
              className="inline-block bg-yellow-400 text-gray-900 font-bold py-4 px-10 rounded-full hover:bg-yellow-500 transition-transform hover:scale-105"
            >
              BOOK A CALL
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
