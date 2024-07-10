import React from 'react';

// Import your images
import auditingImage from '../assets/Component 26.png';
import transferpricing from '../assets/Component 27.png';
import CompanyFormation from '../assets/Component 28.png';
import BusinessTaxation from '../assets/Component 29.png';
import Taxation from '../assets/Component 30.png';
import Corporate from '../assets/Component 31.png';

const ServiceCard = ({ imageSrc, title }) => (
  <div className="relative rounded-lg overflow-hidden shadow-lg group">
    <div className="relative w-full h-full">
      <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-blue-800 bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
        <div className="bg-white text-blue-500 rounded-full w-10 h-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </div>
      </div>
    </div>
    <div className="absolute bottom-0 left-0 right-0 bg-blue-900 bg-opacity-70 text-white p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
  </div>
);

const OurServices = () => {
  const services = [
    { title: 'Auditing', image: auditingImage },
    { title: 'Transfer Pricing', image: transferpricing },
    { title: 'Company Formation In India', image: CompanyFormation },
    { title: 'Business Taxation', image: BusinessTaxation },
    { title: 'Taxation Of Expatriates', image: Taxation },
    { title: 'Corporate Compliance', image: Corporate },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-6xl font-bold text-blue-800 mb-6 text-center">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <ServiceCard key={index} title={service.title} imageSrc={service.image} />
        ))}
      </div>
    </div>
  );
};

export default OurServices;
