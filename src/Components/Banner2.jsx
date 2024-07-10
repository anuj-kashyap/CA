import React from 'react';
import bg from '../assets/accountant.png';

const Banner2 = () => {
  return (
    <div className="relative w-full h-[450px]">
      <img src={bg} alt="Background" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative flex items-center justify-center h-full">
        <h1 className="text-white text-4xl md:text-5xl lg:text-8xl ">
        From the Ground Up, We'll Nurture <br /> <span className="text-white font-bold block text-center">Your Financial Future</span>
        </h1>
      </div>
    </div>
  );
};

export default Banner2;
