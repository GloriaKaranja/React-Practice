import React from 'react';

type Props = {
  title: string;
  subtitle: string;
  imageUrl: string;
  ctaText: string;
  ctaLink: string;
};

const About = ({ title, subtitle, imageUrl, ctaText, ctaLink }: Props) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-[600px] px-6 md:px-12 py-12 gap-8">
      
      {/* Image Section */}
      <div className="w-full md:w-1/2">
        <img 
          src={imageUrl} 
          alt="About section image" 
          className="w-full h-[250px] rounded-2xl shadow-lg object-cover"
        />
      </div>

      {/* Text Content Section */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          {title}
        </h1>
        <p className="text-lg md:text-xl mb-6">
          {subtitle}
        </p>
        <a 
          href={ctaLink}
          className="inline-block bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-80 transition duration-300"
        >
          {ctaText}
        </a>
      </div>
      
    </div>
  );
};

export default About;
