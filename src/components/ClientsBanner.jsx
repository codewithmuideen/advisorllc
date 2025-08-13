import React from 'react';
import images from '../constants/images'; // Ensure you have the combined logo image here

const ClientsBanner = () => {
  return (
    // We use an inline style here to get the exact dark navy color from the image.
    <section 
      className="text-white font-sans" 
      style={{ backgroundColor: '#060C1D' }}
    >
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-10">
          
          {/* Left Side: Text */}
          <div className="flex-shrink-0 text-center lg:text-left">
            {/* Added 'italic' to match the font style in the image */}
            <h2 className="text-xl md:text-2xl font-bold italic leading-tight text-gray-200">
              Our clients have secured<br />
              positions at industry leaders:
            </h2>
          </div>

          {/* Center: Vertical Divider (subtler color) */}
          <div className="hidden lg:block w-px h-24 bg-gray-600" aria-hidden="true"></div>

          {/* Right Side: Logos Image */}
          <div className="w-full max-w-lg lg:w-auto">
            {/* The logos are light gray/white, so they will show up well. */}
            <img
              src={images.clients}
              alt="Logos of companies including KPMG, Riot Games, Google, Tesla, Microsoft, and Amazon"
              className="w-full h-auto"
            />
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ClientsBanner;