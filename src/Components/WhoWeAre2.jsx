import React from 'react';
import vis from '../assets/VIS 1.png'
import targ from '../assets/mis.png'

const ServiceCard = ({ image, title, description }) => (
  <div className="bg-gray-300 rounded-2xl p-8 md:p-10 transition duration-500 ease-in-out transform hover:scale-105 hover:bg-[linear-gradient(102.13deg,#00AAFF_-24.21%,#000000_150.42%)] hover:shadow-lg group h-full flex flex-col items-center text-center">
    <div className="bg-black rounded-full p-3 mb-6 w-20 h-20 flex items-center justify-center group-hover:bg-white transition-colors duration-500">
      <img src={image} alt={title} className="w-12 h-12 object-contain group-hover:invert transition-all duration-500" />
    </div>
    <h3 className="text-xl font-bold mb-4 group-hover:text-white">{title}</h3>
    <p className="text-base group-hover:text-white">{description}</p>
  </div>
);

const Services = () => {
  const services = [
    {
      image: vis,
      title: 'OUR VISION',
      description: 'Our firm continuously strives to be the Premier Accounting and Consultancy firm that provides excellent service to our clients and an excellent quality of life for our associates.',
    },
    {
      image: targ,
      title: 'OUR MISSION',
      description: 'We will predominantly work with organisations in the charitable and voluntary sectors as partners to help them achieve their desired outcomes.',
    },
  ];

  return (
    <div className="bg-white py-12 md:py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-4">Who We Are?</h2>
        <p className="text-center text-gray-600 mb-12 text-base md:text-lg max-w-4xl mx-auto">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;