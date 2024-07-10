import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useSwipeable } from 'react-swipeable';
import robo from '../assets/robo.png';

const testimonials = [
  {
    name: 'Vipin Kumar',
    title: 'Creative_hub_1',
    image: robo,
    quote: 'Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry\'s Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book. It Has Survived Not Only Five Centuries, But Also The Leap Into Electronic Typesetting, Remaining Essentially Unchanged.'
  },
  {
    name: 'John Doe',
    title: 'Example Corp',
    image: robo,
    quote: 'Another testimonial text goes here. It could be shorter or longer, depending on the client\'s feedback.'
  },
  {
    name: 'Jane Smith',
    title: 'Tech Solutions',
    image: robo,
    quote: 'Yet another testimonial. This one is very positive and highlights the great experience the client had.'
  }
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleNextClick(),
    onSwipedRight: () => handlePrevClick(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const { name, title, image, quote } = testimonials[currentIndex];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12" {...handlers}>
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">
        What Our <span className="bg-gradient-to-r from-[#00AAFF] to-black bg-clip-text text-transparent">Clients</span> Say
      </h2>
      
      <div className="relative bg-white shadow-lg rounded-lg p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row items-center">
          <img 
            src={image} 
            alt={name} 
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full mb-4 sm:mb-0 sm:mr-6"
          />
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-semibold">{name}</h3>
            <p className="text-gray-600 text-sm sm:text-base">{title}</p>
          </div>
        </div>
        
        <div className="mt-4 sm:mt-6">
          <p className="text-gray-700 italic text-sm sm:text-base">
            "{quote}"
          </p>
        </div>
        
        <button 
          className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 bg-blue-600 text-white rounded-full p-1 sm:p-2"
          onClick={handlePrevClick}
        >
          <FaChevronLeft size={16} className="sm:w-6 sm:h-6" />
        </button>
        <button 
          className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 bg-blue-600 text-white rounded-full p-1 sm:p-2"
          onClick={handleNextClick}
        >
          <FaChevronRight size={16} className="sm:w-6 sm:h-6" />
        </button>
      </div>
    </div>
  );
};

export default Testimonial;