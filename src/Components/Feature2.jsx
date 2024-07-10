import React from 'react';
import vis from '../assets/vision.png'
import targ from '../assets/target.png'
import obj from '../assets/objective.png'
import bad from '../assets/badge.png'
import rect from '../assets/rect.png'

const Feature2 = () => {
  const features = [
    {
      imageSrc: vis,
      title: "Professionalism",
      description: "To not just meet but exceed client expectation consistently by imbibing Teamwork, Professionalism, Personalised Service & Specialisation."
    },
    {
      imageSrc: targ,
      title: "Our Mission",
      description: "We will predominantly work with organizations in the charitable sector and selectively choose our clients to help them achieve their desired outcome."
    },
    {
      imageSrc: obj,
      title: "Our Objective",
      description: "We are committed to creating and sustaining long-term relationships by leveraging our experience and expertise to help our clients achieve real success."
    },
    {
      imageSrc: bad,
      title: "Excellence in Service",
      description: "To not just meet but exceed client expectations consistently by providing Quality, Professionalism, Personalised Service & Specialisation."
    }
  ];

  return (
    <div className="py-8 md:py-16 bg-cover bg-center bg-no-repeat">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="text-center p-4 md:p-6 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-black hover:shadow-lg shadow-slate-cyan-500 group"
              style={{backgroundImage: `url(${rect})`}}
            >
              <div className="bg-white rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mx-auto mb-4 transition-transform group-hover:scale-110">
                <img
                  src={feature.imageSrc}
                  alt={feature.title}
                  className="w-10 h-10 md:w-12 md:h-12 object-contain"
                />
              </div>
              <h3 className="text-white text-lg md:text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-300 text-xs md:text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feature2;