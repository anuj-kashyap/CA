import React, { useState } from 'react';

const GSTServices = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    'GST Registration',
    'GST Return Filing',
    'GST LUT Filing',
    'GST Registration Cancellation',
    'GST Annual Return',
    'GST Invoicing',
    'GST EInvoicing',
    'EWay Bill',
    'Input Tax Credit'
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] py-8 sm:py-12 px-4">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-[#1e3a8a] text-center">
        GST Services
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full max-w-7xl">
        {services.map((service, index) => (
          <button
            key={index}
            className={`
              bg-gradient-to-b from-[#1e3a8a] to-[#2a4a9a] text-white 
              p-4 sm:p-6 text-base sm:text-lg md:text-xl 
              transition-all duration-300 ease-in-out
              ${hoveredIndex === index ? 'rounded-full' : 'rounded-lg'}
              hover:shadow-lg hover:shadow-[#2a5aa9]/50
              w-full
            `}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {service}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GSTServices;