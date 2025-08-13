import React from 'react';
import images from '../constants/images';

const testimonialsData = [
  {
    image: images.team1,
    name: 'Fred Rubin',
    quote: 'I went from around 300 LinkedIn visits a week to 950, and maintained this heightened brand for a year, resulting in a 300% increase in interviews over 6 months.',
  },
  {
    image: images.team2,
    name: 'Grigoriy Opengeym',
    quote: 'Arthur will lead you to success, if you have the privilege of knowing him. I highly recommend consulting with him. Thank you for your wisdom and insights!',
  },
  {
    image: images.team3,
    name: 'Corey Zapin',
    quote: 'Arthur\'s expertise in career searching helped me discover my talents and learn what I truly desire out of a career. He has my highest recommendation.',
  },
];

const TestimonialCard = ({ image, name, quote }) => (
  <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6">
    <div className="flex-shrink-0">
      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 p-1 shadow-lg">
        <img
          src={image}
          alt={`Portrait of ${name}`}
          className="w-full h-full rounded-full object-cover"
        />
      </div>
      <p className="mt-3 font-bold text-gray-800">{name}</p>
    </div>
    <p className="text-gray-600">{quote}</p>
  </div>
);


const BookPromoSection = () => {
  return (
    <section className="bg-white font-sans py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Book Promotion Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left side: Book Image */}
          <div className="flex justify-center">
            <img 
              src={images.book} 
              alt="Book cover for 8 Steps to Land a Dream Job" 
              className="w-full max-w-sm drop-shadow-2xl"
            />
          </div>

          {/* Right side: Book Details */}
          <div className="text-center lg:text-left">
            <p className="text-3xl font-semibold text-gray-900">Book</p>
            <h2 className="mt-2 text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
              8 STEPS TO LAND A <span className="text-blue-600">DREAM JOB</span> IN ANY ECONOMY
            </h2>
            <p className="mt-4 text-lg text-gray-600">By Arthur Gluzman</p>
            
            <a
              href="#"
              className="mt-8 inline-block bg-yellow-400 text-gray-900 font-bold py-4 px-12 rounded-lg shadow-lg hover:bg-yellow-500 transform hover:scale-105 transition-all duration-300"
            >
              Buy Now
            </a>

            <div className="mt-6 flex justify-center lg:justify-start items-center gap-8">
              <img src={images.amazon} alt="Amazon Kindle logo" className="h-12 object-contain" />
              <img src={images.kindle} alt="Kindle Direct Publishing logo" className="h-12 object-contain" />
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mt-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {testimonialsData.map((testimonial) => (
              <TestimonialCard 
                key={testimonial.name}
                image={testimonial.image}
                name={testimonial.name}
                quote={testimonial.quote}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default BookPromoSection;