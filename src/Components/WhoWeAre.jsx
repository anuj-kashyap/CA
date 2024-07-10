import React from 'react';
import smile from '../assets/smiling.png'

const WhoWeAre = () => {
  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-10">
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 rounded-lg overflow-hidden">
        <div className="w-full lg:w-16 flex items-center justify-center">
          <div className="lg:transform lg:-rotate-90 lg:origin-center lg:whitespace-nowrap">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black text-center lg:text-left">Who We Are</h2>
          </div>
        </div>
        <div className="flex-1 flex flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            <img
              src={smile}
              alt="Smiling woman"
              className="w-full h-64 md:h-full object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 p-4 sm:p-6">
            <p className="text-gray-700 text-sm sm:text-base">
              Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;