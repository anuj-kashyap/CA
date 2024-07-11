import React from 'react';
import bg from '../assets/accountant.png';

const Banner = () => {
  return (
    <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px]">
      <img src={bg} alt="Background" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
        <h1 className="text-white text-center">
          <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            We Don't Just Seed Numbers,
          </span>
          <span className="font-bold block mt-2 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            We Cultivate Growth
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Banner;