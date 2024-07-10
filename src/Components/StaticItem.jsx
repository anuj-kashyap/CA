import React from 'react';
import happy from '../assets/in-love 1.png';
import career from '../assets/career.png';
import bag from '../assets/address-book.png';
import verify from '../assets/verified.png';

const StatisticItem = ({ imageSrc, number, text }) => (
  <div className="flex flex-col items-center mb-8 sm:mb-0">
    <div className="bg-white rounded-full transition duration-300 ease-in-out transform hover:scale-105 hover:bg-black hover:shadow-lg mb-2 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 flex items-center justify-center">
      <img src={imageSrc} alt={text} className="w-10 h-10 sm:w-12 sm:h-12 md:w-15 md:h-15 object-contain" />
    </div>
    <div className="text-white text-2xl sm:text-3xl font-bold">{number}</div>
    <div className="text-white text-lg sm:text-xl text-center">{text}</div>
  </div>
);

const Statistics = () => {
  return (
    <div className="bg-gradient-to-r from-[#00AAFF] to-black py-8 sm:py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-8 sm:gap-12 md:gap-16 lg:gap-24">
          <StatisticItem 
            imageSrc={happy}
            number="3,500+"
            text="Happy Clients"
          />
          <StatisticItem 
            imageSrc={career}
            number="25+"
            text="Years of Experience"
          />
          <StatisticItem 
            imageSrc={verify}
            number="5,000+"
            text="Projects Completed"
          />
          <StatisticItem 
            imageSrc={bag}
            number="12+"
            text="Team Members"
          />
        </div>
      </div>
    </div>
  );
};

export default Statistics;