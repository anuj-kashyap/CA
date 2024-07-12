import React from 'react';
import bg from '../assets/accountant.png';

const Banner = () => {
  return (
    <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px]">
      <img src={bg} alt="Background" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative flex items-center justify-center h-full">
        <h1 className="text-white text-4xl md:text-5xl lg:text-8xl ">
          Your Trusted Partner in <br /> <span className="text-white font-bold block text-center">Financial Growth</span>
        </h1>
      </div>
    </div>
  );
};

export default Banner;
