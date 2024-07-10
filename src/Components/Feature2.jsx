import React from 'react';
import prof from '../assets/profession.png'
import expert from '../assets/Expertise.png'
import cca from '../assets/cca.png'
import reli from '../assets/Reliability.png'

const FeatureCard = ({ image, title, description }) => (
  <div className="bg-gradient-to-b from-black to-[#00AAFF] hover:bg-gradient-to-r p-4 sm:p-6 rounded-lg text-white text-center transition-all duration-800 ease-in-out transform hover:scale-105">
    <div className="bg-white rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4">
      <img src={image} alt={title} className="w-6 h-6 sm:w-8 sm:h-8" />
    </div>
    <h3 className="text-lg sm:text-xl font-bold mb-2">{title}</h3>
    <p className="text-xs sm:text-sm">{description}</p>
  </div>
);

const Feature2 = () => {
  const features = [
    {
      image: prof,
      title: "Professionalism",
      description: "To not just meet but exceed client expectation consistently by imbibing Teamwork, Professionalism, Personalised Service & Specialisation."
    },
    {
      image: expert,
      title: "Expertise",
      description: "To not just meet but exceed client expectation consistently by imbibing Teamwork, Professionalism, Personalised Service & Specialisation."
    },
    {
      image: cca,
      title: "Centric Approach",
      description: "To not just meet but exceed client expectation consistently by imbibing Teamwork, Professionalism, Personalised Service & Specialisation."
    },
    {
      image: reli,
      title: "Reliability",
      description: "To not just meet but exceed client expectation consistently by imbibing Teamwork, Professionalism, Personalised Service & Specialisation."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 sm:py-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#00517C] mb-6 sm:mb-10">Why Choose Us?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </div>
  );
};

export default Feature2;